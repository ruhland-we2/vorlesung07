'use strict';
class Page{
    constructor(id){
        this.id = id;
        this.page = null;
    }
    RemoveFromDOM(){
        let page = document.getElementById(this.id);
        if ( page !== null ){
            page.parentElement.removeChild(page);
            this.page = null;
        }
    }
    SetApp(app){
        this.app = app;
    }
}
