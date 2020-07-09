/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAP_Demo/SAP_Demo_CICD/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});