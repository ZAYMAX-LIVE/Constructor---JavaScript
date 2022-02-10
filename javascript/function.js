function title(block){ //function - можем вызвать до ее реализации
    
    // #2 вариант - const {tag, style} = block.options 
    
    const tag = block.options.tag ?? 'h1' //если тег не прописан ставиться h1
    const styleH2 = block.options.styleH2
    const styleHeader = block.options.styleHeader
    return `
    <header style="${styleHeader}">
    <div class="col">
        <${tag} style="${styleH2}">${block.value}</${tag}>
    </header>
</div> 
    `
}
function text(block){
    const styleDiv = block.options.styleDiv
    return `
    <div class="textRow" style="${styleDiv}">
    <div class="col">
        <p>${block.value}</p>
    </div>
</div>
    `
}
function columns(block){
    //#1
    /*let html = ''
    block.value.forEach(item => {
        html += `
        <div class="col">
            ${item}
        </div>
        `
    })*/
    const styleItem = block.options.styleItem
    //2
    const html = block.value.map(item => `<div class="item" style="${styleItem}">${item}</div>`)
    return`
    <div class="row">
          ${html.join('') /*join обьединяет все элементы array в одну строку*/}   
    </div>
    `
}
function image(block){
    const styleBlock = block.options.styleBlock
    const styleImg = block.options.styleImg
    return`
        <div class="blockImg" style="${styleBlock}">
            <img src="${block.value}" style="${styleImg}"/>
        </div>
    `
}

export const templates = {
    title: title,
    text: text,
    image: image,
    columns: columns
}