import { Lampa } from "./Lampa.js"
export class JatekTer{
    #db
    #allapotLista
    #meret
    #lepes
    constructor(){
        this.#allapotLista = []
        this.#meret = 3
        this.#setAllapotLista()
        this.#init()
        this.#ellenorzes()
    }
    #setAllapotLista(){
        for(let i = 0; i<this.#meret*this.#meret; i++){
            if(Math.random() < .2){
                this.#allapotLista[i] = true
            }else{
                this.#allapotLista[i] = false
            }
        }
    }
    #szomszedokKeresese(id){

    }
    #init(){
        
        const jatekter = $("#jatekter")
        let elem = new Lampa(0, false, jatekter)
        jatekter.empty();
        for(let i = 0; i<this.#allapotLista.length; i++ ){
            let elem = new Lampa(i, this.#allapotLista[i], jatekter)
            
        }
    }
    #ellenorzes(){
        for(let i = 0; i<this.#allapotLista.length; i++){
            if(this.#allapotLista[i] === true){
                this.#db++
            }
        }
        const divElem = $(".maradt")
        divElem.html(this.#db)
    }
    
}