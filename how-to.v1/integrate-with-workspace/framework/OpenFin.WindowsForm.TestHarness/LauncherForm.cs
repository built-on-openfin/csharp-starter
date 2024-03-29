﻿using System;
using System.Collections.Generic;
using System.Windows.Forms;

namespace OpenFin.WindowsForm.TestHarness
{
    public partial class LauncherForm : Form
    {
        WorkspaceManagement workspaceManagement;
        public LauncherForm()
        {
            InitializeComponent();

            workspaceManagement = new WorkspaceManagement(System.Windows.Threading.Dispatcher.CurrentDispatcher);
            this.FormClosing += LauncherForm_FormClosing;
        }

        private void LauncherForm_FormClosing(object sender, FormClosingEventArgs e)
        {
            workspaceManagement.Disconnect();
        }

        private void app1MenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("winformapp1");
        }

        private void app2MenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("winformapp2");
        }

        private void app3MenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("winformapp3");
        }

        private void showToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.ShowHomeAsync();
        }

        private void hideToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.HideHomeAsync();
        }

        private void showToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            workspaceManagement.ShowStoreAsync();
        }

        private void hideToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            workspaceManagement.HideStoreAsync();
        }

        private void showToolStripMenuItem2_Click(object sender, EventArgs e)
        {
            workspaceManagement.ShowDockAsync();
        }

        private void minimizeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.MinimizeDockAsync();
        }
    }
}
