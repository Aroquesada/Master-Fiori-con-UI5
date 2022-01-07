sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], function (controller, History) {

    function _onObjectMatched(oEvent) {
        this.getView().bindElement({
            path: "/Orders(" + oEvent.getParameter("arguments").OrderID + ")",
            model: "odataNorthwind"
        });
    }

    return controller.extend("Antonio.employees.controller.OrderDetails", {

        onInit: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("RouteOrderDetails").attachPatternMatched(_onObjectMatched, this);
        },

        onBack: function (oEvent) {

            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteMain", true);
            }
        },

        onClearSignature: function () {
            var signature = this.byId("signature");
            signature.clear();
        }

    });
});