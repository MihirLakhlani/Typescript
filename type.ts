export{}
let v:number 
v = 30
class App{
    
    
    name = "mihir"
    constructor ()
    {
        console.log(v);
    }
    getname()
    {
        console.log(this.name)
    }
}
let a1 = new App();
a1.getname();