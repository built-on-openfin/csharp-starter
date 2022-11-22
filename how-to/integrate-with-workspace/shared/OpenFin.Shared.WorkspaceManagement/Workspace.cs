﻿using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Openfin.Desktop;
using Openfin.Desktop.Messaging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace OpenFin.Shared.WorkspaceManagement
{
    public class Workspace
    {
        private readonly ConnectionOptions _connectionOptions;
        private readonly WorkspaceOptions _workspaceOptions;
        private readonly Func<List<App>> _onAppsRequested;
        private ChannelClient _connectionService;
        private Func<App, bool> _onAppSelected;
        
        private ApplicationSnapshot GetInitSnapshot()
        {

            if(_workspaceOptions.CommandLineSnapshotArg != null && _workspaceOptions.CommandLineSnapshotArg.Length > 0)
            {
                string[] arguments = Environment.GetCommandLineArgs();

                string snapshot = null;

                for (var i = 0; i < arguments.Length; i++)
                {
                    if (arguments[i].StartsWith(_workspaceOptions.CommandLineSnapshotArg)) 
                    {
                        string[] snapshotArg = arguments[i].Split('=');
                        snapshot = snapshotArg[1].Trim();
                    }
                }

                if (snapshot != null)
                {
                    return ApplicationSnapshotConverter.FromBase64JsonEncodedString(snapshot);
                }
            }

            return null;
        }
        public Workspace(Func<List<App>> onAppsRequested, Func<App, bool> onAppSelected, ISnapShotProvider<ApplicationSnapshot> snapShotProvider, ConnectionOptions connectionOptions, WorkspaceOptions workspaceOptions)
        {
            _onAppsRequested = onAppsRequested;
            _onAppSelected = onAppSelected;
            _workspaceOptions = workspaceOptions;
            _connectionOptions = connectionOptions;
            _connectionOptions.ConnectedRuntime.Error += (sender, e) =>
            {
                Console.Write(e);
            };

            _connectionOptions.ConnectedRuntime.Connect(async () =>
            {
                try
                {
                    if (_workspaceOptions.WorkspaceAutoConnect)
                    {
                        var platform = await _connectionOptions.ConnectedRuntime.System.LaunchManifestAsync<JObject>(_workspaceOptions.WorkspaceManifestUrl);
                    }
                }
                catch(Exception ex)
                {
                    Console.WriteLine("Error trying to launch manifest: " + _workspaceOptions.WorkspaceManifestUrl, ex);
                }

                try
                {
                    _connectionService = _connectionOptions.ConnectedRuntime.InterApplicationBus.Channel.CreateClient(_workspaceOptions.WorkspaceChannelId);
                    _connectionService.ConnectAsync().Wait();
                    _connectionService.RegisterTopic("getApps", () =>
                    {
                        var apps = _onAppsRequested();
                        return apps;

                    });

                    _connectionService.RegisterTopic("launchApp", (App app) =>
                    {
                        return _onAppSelected(app);
                    });

                    await _connectionOptions.ConnectedRuntime.SnapshotSource.InitSnapshotSourceProviderAsync<ApplicationSnapshot>(_connectionOptions.ConnectedRuntime.Options.UUID, snapShotProvider);

                    var initSnapshot = GetInitSnapshot();

                    if(initSnapshot != null)
                    {
                        snapShotProvider.ApplySnapshot(initSnapshot);
                    }
                }
                catch (Exception ex)
                {
                    Console.Write("Unable to connected to target workspace", ex);
                }
            });
        }

        public async void ShowHome()
        {
            await _connectionService.DispatchAsync("action", new ActionPayload { action = AvailableActions.ShowHome });
        }

        public async void ShowStore()
        {
            await _connectionService.DispatchAsync("action", new ActionPayload { action = AvailableActions.ShowStore });
        }

        public async void ShowDock()
        {
            await _connectionService.DispatchAsync("action", new ActionPayload { action = AvailableActions.ShowDock });
        }

        public async void HideHome()
        {
            await _connectionService.DispatchAsync("action", new ActionPayload { action = AvailableActions.HideHome });
        }

        public async void HideStore()
        {
            await _connectionService.DispatchAsync("action", new ActionPayload { action = AvailableActions.HideStore });
        }
        public async void MinimizeDock()
        {
            await _connectionService.DispatchAsync("action", new ActionPayload { action = AvailableActions.MinimizeDock });
        }

        public async Task<bool> CanExecuteAction(string action)
        {
            var response = await _connectionService.DispatchAsync<ActionCheck>("canAction", new ActionPayload { action = action });
            return response.result;
        }

        public async void Disconnect()
        {
            await _connectionService.DispatchAsync("disconnect");
            await _connectionService.DisconnectAsync();
        }
    }
}
