export default class EredmenyMegjelenit{
    #db
    #szuloElem
    constructor(db, szuloElem){
        this.#db = db;
        this.#szuloElem = szuloElem
    }
    #megjelenit(){
        let txt = `<p>${this.#db}</p>`
        this.#szuloElem.append(txt)
    }
}