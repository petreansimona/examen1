sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatterBook",
	'sap/m/MessageToast',
	"sap/m/MessageBox"
], function (Controller, JSONModel, formatter,MessageToast, MessageBox) {
	"use strict";
	return Controller.extend("Quickstart.controller.BookList", {
		formatter: formatter,

		handleDelete: function(oEvent){
			var sBookPath=oEvent.getParameter('listItem').getBindingContext().getPath();
			this.getView().getModel().remove(sBookPath,{
				success: function(){
					MessageToast.show("Book deleted!");
				}
			})
		},//////

		handleUpdate: function(oEvent){
			// var sBookPath=oEvent.getParameter('listItem').getBindingContext().getPath();
			// this.getView().getModel().update(sBookPath,{
			// 	success: function(){
			// 		MessageToast.show("Book updated!");
			// 	}
			// })
			
			var oEntry = {};
			oEntry.ISBN = $CreateTable1;
			oEntry.Title = $CreateTable2;
			oEntry.Author = $CreateTable3;
			oEntry.DatePublished = $CreateTable4;
			oEntry.Language = $CreateTable5;
			oEntry.TotalNrBooks = $CreateTable6;
			oEntry.NrAvailable = $CreateTable7;
			oEntry.CreatedOn = $CreateTable8;
			oEntry.CreatedBy = $CreateTable9;
			oEntry.ChangedOn = $CreateTable10;
			oEntry.ChangedBy = $CreateTable11;

			var oData = new Quickstart.ODataModel("/sap/opu/odata/sap/ZBOOKS_SIPE_SRV");

			this.oData.update("/BooksSet(ISBN='"+oEntry.ISBN+"')",oEntry,null,function(){
				MessageToast.show("Book updated!");
			},function(){
				alert("Error!");
			});

		},

		handleCreate: function(oEvent){
			// var sBookPath=oEvent.getParameter('listItem').getBindingContext().getPath();
			// this.getView().getModel().create(sBookPath,{
			// 	success: function(){
			// 		MessageToast.show("Book created!");
			// 	}
			// });

			var oEntry = {};
			oEntry.ISBN = $CreateTable1;
			oEntry.Title = $CreateTable2;
			oEntry.Author = $CreateTable3;
			oEntry.DatePublished = $CreateTable4;
			oEntry.Language = $CreateTable5;
			oEntry.TotalNrBooks = $CreateTable6;
			oEntry.NrAvailable = $CreateTable7;
			oEntry.CreatedOn = $CreateTable8;
			oEntry.CreatedBy = $CreateTable9;
			oEntry.ChangedOn = $CreateTable10;
			oEntry.ChangedBy = $CreateTable11;

			var oData = new Quickstart.ODataModel("/sap/opu/odata/sap/ZBOOKS_SIPE_SRV");

			this.oData.create('/BooksSet',oEntry,null,function(){
				MessageToast.show("Book created!");
			}, function(){
				alert("Error!");
			})
		},

		// onCreate : function () {
		// 	var oList = this.byId("listItem"),
		// 		oBinding = oList.getBinding("items"),
		// 		oContext = oBinding.create({
		// 		"ISBN" : "",
		// 		"Title" : "",
		// 		"Author" : "",
		// 		"Date Published" : "",
		// 		"Language" : "",
		// 		"Total Nr Books" : "",
		// 		"Nr Available" : "",
		// 		"Created On" : "",
		// 		"Created By" : "",
		// 		"Changed On" : "",
		// 		"Changed By" : ""
		// 		});

		// 	//this._setUIChanges();
		// 	this.getView().getModel("appView").setProperty("/usernameEmpty", true);

		// 	oList.getItems().some(function (oItem) {
		// 		if (oItem.getBindingContext() === oContext) {
		// 			oItem.focus();
		// 			oItem.setSelected(true);
		// 			return true;
		// 		}
		// 	});
		// },
	});
});