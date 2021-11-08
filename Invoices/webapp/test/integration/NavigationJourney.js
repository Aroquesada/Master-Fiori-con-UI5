// @ts-nocheck
sap.ui.define([
    "Antonio/Invoices/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
],
    /**
     * @param {typeof sap.ui.test.opaQunit} opaQunit
     */
    function (mockserver, opaQunit) {

        QUnit.module("Navigation"),

            opaQunit("Should open the Hello Dialog", function (Given, When, Then) {

                //Initialize the mock server
                mockserver.init();

                //Arrangements
                Given.iStartMyUIComponent({
                    componentConfig: {
                        name: "Antonio.Invoices"
                    }
                });

                //Actions
                When.onTheAppPage.iSayHelloDialogButton();

                //Assertions
                Then.onTheAppPage.iSeeTheHelloDialog();

                //Cleanup
                Then.iTeardownMyApp();
            });
    });