sap.ui.define([

], function() {
    'use strict';
    return{               
        onAfterRendering: function(oEvent){  
            var viewId = oEvent.getParameters().id + '--GridTable';                       
            var oView = this.getView().byId(viewId);
            var oTab  = oView.getColumns();
            for (let index = 0; index < oTab.length; index++) {     
                if(!oTab[index].mProperties.autoResizable){
                    oTab[index].mProperties.autoResizable = true;
                }                
                oView.autoResizeColumn(index);
            }
            oView.attachBusyStateChanged(this.onBusyStateChanged);
        },
        onBusyStateChanged: function(oEvent){            
            if(!oEvent.getParameters().busy){
                var viewId = oEvent.getParameters().id;
                var oView =  oEvent.getSource();
                var oTab  = oView.getColumns();
                for (let index = 0; index < oTab.length; index++) {
                    if(!oTab[index].mProperties.autoResizable){
                        oTab[index].mProperties.autoResizable = true;
                    } 
                    oView.autoResizeColumn(index); 
                } 
                oView.detachBusyStateChanged(this.onBusyStateChanged);
           }   
        }
    }  
});