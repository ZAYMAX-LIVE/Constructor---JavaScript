const _site = document.querySelector("#site");
model.forEach((block)=>{
    let html = ""; //выполнение за функцией приведет к ошибке
    if (block.type === "title") //строгое сравнение, тип не изменяется
    html = title(block);
    else if (block.type === "text") html = text(block);
    else if (block.type === 'columns') html = columns(block);
    else if (block.type === 'image') html = image(block);
    _site.insertAdjacentHTML('beforeend', html) //вставляет в html, работет быстрее innerHTML
    ;
});
function title(block) {
    return `
    <div class="row">
    <div class="col">
        <h1>${block.value}</h1>
    </div>
</div> 
    `;
}
function text(block) {
    return `
    <div class="row">
    <div class="col">
        <p>${block.value}</p>
    </div>
</div>
    `;
}
function columns(block) {
    //#1
    /*let html = ''
    block.value.forEach(item => {
        html += `
        <div class="col">
            ${item}
        </div>
        `
    })*/ //2
    const html = block.value.map((item)=>`<div class="col">${item}</div>`
    );
    return `
    <div class="row">
          ${html.join('')}   
    </div>
    `;
}
function image(block) {
    return `
        <div class="row">
            <img src="${block.value}"/>
        </div>
    `;
}

//# sourceMappingURL=index.6df5ec7d.js.map
