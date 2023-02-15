sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	JSONModel,
    ) {
        "use strict";

        return Controller.extend("treinaui5.modelosui5.controller.ModelosUI5", {
            
            onSave: (_oEvent)=>{
                var oModelo = this.getView().getModel();
                var bOcupado = oModelo.getProperty("/ocupado");
                oModelo.setProperty("/ocupado", !bOcupado);
            },

            onInit: function () {
                //Fonte de dados
                var oPessoa = {
                    pessoa:{
                        firstName: "Fulano ",
                        lastName:  "de Tal",
                        age:       "45",
                        gender:[
                            "Masculino", 
                            "Feminino",
                            "Prefiro Não Informar"
                        ],
                        cpf:       "543.229.930-52",
                        rg:        "27.563.662-8",
                    },
                    endereco: {
                        street:  "Sé",
                        number:  "111",
                        cep:     "01001000",
                        city:    "São Paulo",
                        estado:  "SP",
                        country: "Brazil",
                    },
                    internet: {
                        web:     "https://github.com/NeyBrito",
                        twitter: "neybrito94"
                    },
                    skills: [
                        "ABAP",
                        "CPI",
                        "PI",
                        "UI5",
                        "Fiori"                    
                    ],
                    skills2:[
                        {nome:"ABAP"},
                        {nome:"CPI"},
                        {nome:"PI"},
                    ],
                    nota: 3,
                    ocupado: false
                };
                

                //Ecapsular a fonte de dados em um modelo
                var oModelPessoa = new JSONModel(oPessoa);
                this.getView().setModel(oModelPessoa);
                
                // var oImputNome = this.byId("nome"); //sap.m.Input
                // oImputNome.setModel(oModelPessoa);  //setModel herança
                // var oView = this.Controller.getView();

            },

            caixaAlta: function(texto){
                if (texto){
                    return texto.toUpperCase();
                }               
            },       
		    onPress: function(oEvent) {
			
            }
        });
    });
