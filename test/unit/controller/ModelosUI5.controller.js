/*global QUnit*/

sap.ui.define([
	"treinaui5/modelosui5/controller/ModelosUI5.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ModelosUI5 Controller");

	QUnit.test("I should test the ModelosUI5 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
