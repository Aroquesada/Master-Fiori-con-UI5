// @ts-nocheck
/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require([
        "Antonio/Invoices/test/integration/NavigationJourney"
    ], function () {
        QUnit.start();
    })
});