export class Lampa{
    #allapot // false azt jelenti hogy le van kapcsolva a true hogy fel
    #id
    #divElem
    #szuloElem

    constructor(id, allapot, szuloElem){
        this.#id = id
        this.#allapot = allapot
        this.#szuloElem = szuloElem
        this.#megjelenit();
        this.#divElem = this.#szuloElem.children("div:last-child")
        this.#szinBeallit()
        this.#divElem.on("click", ()=>{
            this.#kattintasTrigger("kapcsolas")
            this.setAllapot()
        })
    }
    #megjelenit(){
        let txt = "<div> </div>"
        this.#szuloElem.append(txt)
    }
    setAllapot(){
        this.#allapot = !this.#allapot
        this.#szinBeallit()
    }
    #szinBeallit(){
        if(this.#allapot){
            this.#divElem.addClass("felkapcs")
        }else{
            this.#divElem.removeClass("felkapcs")
        }
    }
    #kattintasTrigger(esemenynev){
        const e = new CustomEvent(esemenynev,{detail:this.#id})
        window.dispatchEvent(e)
    }

}