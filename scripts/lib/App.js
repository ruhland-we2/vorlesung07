class App{
    constructor(){
        this.tools = new Tools();
        this.pageMap = null;
        this.pageLogin = null;
    }
    Init(){
        this.tools.Init();
        this.ShowPageLogin();
    }
    ShowPageMap(){
        let instance = this;
        if ( this.pageMap === null ){
            this.pageMap = new(PageMap);
            this.pageMap.SetApp(instance);
            this.pageMap.Show();     
        }
        else {
            this.pageMap.Show();     
        }
    }
    ShowPageLogin(){
        let instance = this;
        if ( this.pageLogin === null ){
            this.pageLogin = new(PageLogin);
            this.pageLogin.SetApp(instance);
            this.pageLogin.Show();     
        }
        else {
            this.pageLogin.Show();     
        }
    }
}

let app = new App;
