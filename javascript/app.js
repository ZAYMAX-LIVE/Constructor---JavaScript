import {model} from './model'
//import {title, text, columns, image} from './function'
import {templates} from './function'

const _site = document.querySelector("#site");
model.forEach(block => {
 //1
 /*
  let html = ""; //выполнение за функцией приведет к ошибке
  if (block.type === "title") {
    //строгое сравнение, тип не изменяется
    html = title(block);
  } else if (block.type === "text") {
    html = text(block);
  }
  else if(block.type === 'columns'){
    html = columns(block)
  }
  else if(block.type === 'image'){
      html = image(block)
  }
*/

  //2
  //const html = templates[block.type]

    _site.insertAdjacentHTML('beforeend', block.toHTML()) //вставляет в html, работет быстрее innerHTML
})


