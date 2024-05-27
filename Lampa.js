
export class Lampa{
    #allapot
    #id
    #divElem
    constuctor(id, allapot, divElem){
        this.#id = id
        this.#allapot = allapot
        this.#divElem = divElem

        this.#megjelenit();
        
    }
    #megjelenit(){
        let txt = ""
        if(this.#allapot === true){
            txt += `<div id="${this.#id}", class=""gombok0></div>`
        }else if(this.#allapot === false){
            txt += `<div id="${this.#id}", class=""gombok1></div>`
        }
        this.#divElem.append(txt)
    }
    #setAllapot(){

    }
    #szomszedokKeresese(id){

    }
    #szinBeallit(){
        
    }
    #kattintasTrigger(){
        
    }

}