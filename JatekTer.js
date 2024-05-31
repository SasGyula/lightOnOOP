import EredmenyMegjelenit from "./EredmenyMegjelenit.js"
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
        $(window).on("kapcsolas",(event) =>{
            console.log(event.detail)
            let id = event.detail
            this.#szomszedokKeresese(id)
        })
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
        if(id%3 !== 2){
            this.#allapotLista[id+1] = !this.#allapotLista[id+1]
        }
        if(id%3 !== 0){
            this.#allapotLista[id-1] = !this.#allapotLista[id-1]
        }
        if(id <6){
            this.#allapotLista[id+3] = !this.#allapotLista[id+3]
        }
        if(id>3){
            this.#allapotLista[id-3] = !this.#allapotLista[id-3]
        }
        
        // szomszédok id-1 id+1 id+3 id-3
        this.#init()
    }
    #init(){
        const jatekter = $("#jatekter")
        jatekter.empty();
        this.#ellenorzes()
        for(let i = 0; i<this.#allapotLista.length; i++ ){
            let elem = new Lampa(i, this.#allapotLista[i], jatekter)
            
        }
        const divElem = $(".pontok")
        new EredmenyMegjelenit(this.#db,divElem)
    }
    #ellenorzes(){
        for(let i = 0; i<this.#allapotLista.length; i++){
            if(this.#allapotLista[i] === true){
                this.#db++
            }
        }
    }
    
}