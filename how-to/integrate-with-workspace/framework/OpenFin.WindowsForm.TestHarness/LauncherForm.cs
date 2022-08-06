using System;
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

        private void clientsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskclients");
        }

        private void exchangesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskexchanges");
        }

        private void brokersToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskbrokers");
        }

        private void usersToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskusers");
        }

        private void counterpartiesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskcounterparties");
        }

        private void instrumentLookupToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskinstrumentlookup");
        }

        private void instrumentGroupsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskinstrumentgroups");
        }

        private void fXRatesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskfxrates");
        }

        private void countriesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskcountries");
        }

        private void calendarsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("uldeskcalendars");
        }

        private void instrumentWatchToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderinstrumentwatch");
        }

        private void marketDepthToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradermarketdepth");
        }

        private void chartsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradercharts");
        }

        private void vWAPCalculatorToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradervwapcalculator");
        }

        private void intradayTradesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderintradaytrades");
        }

        private void tradeTickerToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradertradeticker");
        }

        private void strategyCreationToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderstrategycreation");
        }

        private void tradeHistorySearchToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradertradehistorysearch");
        }

        private void derivativeWatchToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderderivativewatch");
        }

        private void quoteTickerToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderquoteticker");
        }

        private void strategyCreationNewToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderstrategycreationnew");
        }

        private void instrumentDetailsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderinstrumentdetails");
        }

        private void orderBookToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderorderbook");
        }

        private void marketOrdersToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradermarketorders");
        }

        private void internalOrderBookToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderinternalorderbook");
        }

        private void externalOrderBookToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderexternalorderbook");
        }

        private void requestViewToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderrequestview");
        }

        private void offExchangeTradesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderoffexchangetrades");
        }

        private void listMultipleOrdersCreationToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderlistmultipleorderscreation");
        }

        private void crossOrderViewToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradercrossorderview");
        }

        private void errorTradesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradererrortrades");
        }

        private void benchmarksToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderbenchmarks");
        }

        private void aggregationViewToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderaggregationview");
        }

        private void executionsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderexecutions");
        }

        private void ackViewToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderackview");
        }

        private void orderHistoryToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderorderhistory");
        }

        private void profitAndLossToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderprofitandloss");
        }

        private void instrumentExecutionsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderinstrumentexecutions");
        }

        private void searchOrdersToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradersearchorders");
        }

        private void searchTradesToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultradersearchtrades");
        }

        private void orderDetailsToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderorderdetails");
        }

        private void allocationRequestViewToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.LaunchView("ultraderallocationrequestview");
        }

        private void showToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.ShowHome();
        }

        private void hideToolStripMenuItem_Click(object sender, EventArgs e)
        {
            workspaceManagement.HideHome();
        }

        private void showToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            workspaceManagement.ShowStore();
        }

        private void hideToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            workspaceManagement.HideStore();
        }
    }
}
