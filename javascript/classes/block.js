export class Block{
    constructor(type, value, options){ //создание и инициализация обьекта
        this.type = type
        this.value = value
        this.options = options
    }
    toHTML(){
        throw new Error("Ha-ha-ha")
    }
}

export class TitleBlog extends Block{
    constructor(value, options){
        super('title', value, options)
    }
    toHTML(){
        const tag = this.options.tag ?? 'h1' //если тег не прописан ставиться h1
        const styleH2 = this.options.styleH2
        const styleHeader = this.options.styleHeader
        return `
        <header style="${styleHeader}">
        <div class="col">
            <${tag} style="${styleH2}">${this.value}</${tag}>
        </header>
        </div> 
        `
    }
}
export class TextBlog extends Block{
    constructor(value, options){
        super('text', value, options)
    }
    toHTML(){
        const styleDiv = this.options.styleDiv
        return `
        <div class="textRow" style="${styleDiv}">
        <div class="col">
            <p>${this.value}</p>
        </div>
        </div>
        `
    }
}
export class ColumnsBlog extends Block{
    constructor(value, options){
        super('columns', value, options)
    }
    toHTML(){
        const styleItem = this.options.styleItem
        const html = this.value.map(item => `<div class="item" style="${styleItem}">${item}</div>`)
        return`
        <div class="row">
            ${html.join('') /*join обьединяет все элементы array в одну строку*/}   
        </div>
        `
    }
}
export class ImageBlog extends Block{
    constructor(value, options){
        super('image', value, options)
    }
    toHTML(){
        const styleBlock = this.options.styleBlock
        const styleImg = this.options.styleImg
        return`
        <div class="blockImg" style="${styleBlock}">
            <img src="${this.value}" style="${styleImg}"/>
        </div>
        `
    }
}