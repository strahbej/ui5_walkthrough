sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.js.controller.App", {

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},
		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
	});

});