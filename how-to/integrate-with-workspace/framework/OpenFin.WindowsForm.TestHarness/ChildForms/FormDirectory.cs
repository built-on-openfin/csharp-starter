using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace OpenFin.WindowsForm.TestHarness.ChildForms
{
    public class FormDirectory
    {
        List<OpenFinApp> apps = new List<OpenFinApp>();

        public FormDirectory()
        {
            GenerateApps();
        }

        public List<OpenFinApp> GetAllForms()
        {
            return apps.ToList();
        }

        public Form GetFormInstance(string id)
        {
            var app = apps.Find(x => x.appId == id);
            
            if(app == null)
            {
                return null;
            }

            return app.GetAppInstance();
        }

        private void GenerateApps()
        {
            apps.Add(new OpenFinApp("Brokers", "uldeskbrokers", () => new OFDeskBrokers(), "uldesk"));
            apps.Add(new OpenFinApp("Calendars", "uldeskcalendars", () => new OFDeskCalendars(), "uldesk"));
            apps.Add(new OpenFinApp("Clients", "uldeskclients", ()=> new OFDeskClients(), "uldesk"));
            apps.Add(new OpenFinApp("Counterparties", "uldeskcounterparties", () => new OFDeskCounterparties(), "uldesk"));
            apps.Add(new OpenFinApp("Countries", "uldeskcountries", () => new OFDeskCountries(), "uldesk"));
            apps.Add(new OpenFinApp("Exchanges", "uldeskexchanges", () => new OFDeskExchanges(), "uldesk"));
            apps.Add(new OpenFinApp("FX Rates", "uldeskfxrates", () => new OFDeskFXRates(), "uldesk"));
            apps.Add(new OpenFinApp("Instrument Groups", "uldeskinstrumentgroups", () => new OFDeskInstrumentGroups(), "uldesk"));
            apps.Add(new OpenFinApp("Instrument Lookup", "uldeskinstrumentlookup", () => new OFDeskInstrumentLookup(), "uldesk"));
            apps.Add(new OpenFinApp("Users", "uldeskusers", () => new OFDeskUsers(), "uldesk"));

            apps.Add(new OpenFinApp("Instrument Watch", "ultraderinstrumentwatch", () => new OFTraderInstrumentWatch(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Market Depth", "ultradermarketdepth", () => new OFTraderMarketDepth(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Charts", "ultradercharts", () => new OFTraderCharts(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("VWAP Calculator", "ultradervwapcalculator", () => new OFTraderVWAPCalculator(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Intraday Trades", "ultraderintradaytrades", () => new OFTraderIntradayTrades(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Trade Ticker", "ultradertradeticker", () => new OFTraderTradeTicker(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Strategy Creation", "ultraderstrategycreation", () => new OFTraderStrategyCreation(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Trade History Search", "ultradertradehistorysearch", () => new OFTraderTradeHistorySearch(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("DerivativeWatch", "ultraderderivativewatch", () => new OFTraderDerivativeWatch(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Quote Ticker", "ultraderquoteticker", () => new OFTraderQuoteTicker(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Strategy Creation (New)", "ultraderstrategycreationnew", () => new OFTraderStrategyCreationNew(), "ultrader", "market-data"));
            apps.Add(new OpenFinApp("Instrument Details", "ultraderinstrumentdetails", () => new OFTraderInstrumentDetails(), "ultrader", "market-data"));

            apps.Add(new OpenFinApp("Order Book", "ultraderorderbook", () => new OFTraderOrderBook(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("Market Orders", "ultradermarketorders", () => new OFTraderMarketOrders(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("Internal Order Book", "ultraderinternalorderbook", () => new OFTraderInternalOrderBook(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("External Order Book", "ultraderexternalorderbook", () => new OFTraderExternalOrderBook(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("Request View", "ultraderrequestview", () => new OFTraderRequestView(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("Off Exchange Trades", "ultraderoffexchangetrades", () => new OFTraderOffExchangeTrades(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("List/Multiple Orders Creation", "ultraderlistmultipleorderscreation", () => new OFTraderListMultipleOrdersCreation(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("Cross Order View", "ultradercrossorderview", () => new OFTraderCrossOrderView(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("Error Trades", "ultradererrortrades", () => new OFTraderErrorTrades(), "ultrader", "order-management"));
            apps.Add(new OpenFinApp("Benchmarks", "ultraderbenchmarks", () => new OFTraderBenchmarks(), "ultrader", "order-management"));
           
            apps.Add(new OpenFinApp("Aggregation View", "ultraderaggregationview", () => new OFTraderAggregationView(), "ultrader", "reporting"));
            apps.Add(new OpenFinApp("Executions", "ultraderexecutions", () => new OFTraderExecutions(), "ultrader", "reporting"));
            apps.Add(new OpenFinApp("Ack View", "ultraderackview", () => new OFTraderAckView(), "ultrader", "reporting"));
            apps.Add(new OpenFinApp("Order History", "ultraderorderhistory", () => new OFTraderOrderHistory(), "ultrader", "reporting"));
            apps.Add(new OpenFinApp("Profit And Loss", "ultraderprofitandloss", () => new OFTraderProfitAndLoss(), "ultrader", "reporting"));
            apps.Add(new OpenFinApp("Instrument Executions", "ultraderinstrumentexecutions", () => new OFTraderInstrumentExecutions(), "ultrader", "reporting"));
            apps.Add(new OpenFinApp("Search Orders", "ultradersearchorders", () => new OFTraderSearchOrders(), "ultrader", "reporting"));
            apps.Add(new OpenFinApp("Search Trades", "ultradersearchtrades", () => new OFTraderSearchTrades(), "ultrader", "reporting"));
            apps.Add(new OpenFinApp("Order Details", "ultraderorderdetails", () => new OFTraderOrderDetails(), "ultrader", "reporting"));

            apps.Add(new OpenFinApp("Allocation Request View", "ultraderallocationrequestview", () => new OFTraderAllocationRequestView(), "ultrader", "allocation"));
        }
    }
}
