sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatterBook",
	'sap/m/MessageToast',
	"sap/m/MessageBox",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/odata/v2/ODataModel',
	'sap/ui/core/util/MockServer'
], function (Controller, JSONModel, formatter,MessageToast, MessageBox, Filter, FilterOperator, ODataModel, MockServer) {
	"use strict";
	return Controller.extend("Quickstart.controller.BookList", {
		formatter: formatter,

		handleDelete: function(oEvent){

			var oEntry = {};
			oEntry.ISBN = this.byId("ISBN").getValue();

			this.getView().getModel().remove("/BooksSet('"+oEntry.ISBN+"')",{
				success: function() {
					MessageToast.show("Book removed!");
				},
				error: function(){
					MessageToast.show("Book was not removed!");
				}
			});
		},
		handleUpdate: function(oEvent){
			
			var oEntry = {};
			oEntry.ISBN = this.byId("ISBN").getValue();
			oEntry.Title = this.byId("Title").getValue();
			oEntry.Author = this.byId("Author").getValue();
			oEntry.DatePublished = this.byId("Datepublished").getDateValue();
			oEntry.Language = this.byId("Language").getValue();
			oEntry.TotalNrBooks = parseInt(this.byId("TotalNrBooks").getValue());
			oEntry.NrAvailable = parseInt(this.byId("NrAvailable").getValue());
			oEntry.CreatedOn = "";
			oEntry.CreatedBy = "";
			oEntry.ChangedOn = "";
			oEntry.ChangedBy = "";

			this.getView().getModel().update("/BooksSet('"+oEntry.ISBN+"')",oEntry,{
				success: function() {
					MessageToast.show("Book updated!");
				},
				error: function(){
					MessageToast.show("Book was not updated!");
				}
			});


		},

		handleCreate: function(oEvent){

			var oEntry = {};
			oEntry.ISBN = this.byId("ISBN").getValue();
			oEntry.Title = this.byId("Title").getValue();
			oEntry.Author = this.byId("Author").getValue();
			oEntry.DatePublished = this.byId("Datepublished").getDateValue();
			oEntry.Language = this.byId("Language").getValue();
			oEntry.TotalNrBooks = parseInt(this.byId("TotalNrBooks").getValue());
			oEntry.NrAvailable = parseInt(this.byId("NrAvailable").getValue());
			oEntry.CreatedOn = "";
			oEntry.CreatedBy = "";
			oEntry.ChangedOn = "";
			oEntry.ChangedBy = "";

			this.getView().getModel().create("/BooksSet",oEntry,{
				success: function() {
					MessageToast.show("Book saved!");
				},
				error: function(){
					MessageToast.show("Book was not saved!");
				}
			});
		}
	});
});