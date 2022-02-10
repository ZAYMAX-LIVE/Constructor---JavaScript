import image from '../img/1.jpg'
import {TitleBlog, TextBlog, ColumnsBlog, ImageBlog} from './classes/block'

export const model = [
  new TitleBlog("Hello My Lord!...", { tag:"h2", styleH2: "color: #fff;", styleHeader: "display: flex;justify-content: center;align-items: center;height: 60px;background: #3f495c;"}),
    /*{ type: "title", value: "Hello My Lord!...", 
      options: {
        tag:"h2", 
        styleH2: "color: #fff;",
        styleHeader: "display: flex;justify-content: center;align-items: center;height: 60px;background: #3f495c;"
      } },*/
  new TextBlog("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, error.", {tag: "h2",styleText: "",styleDiv: "height: 30vh;display: flex;align-items: center;justify-content: center;"}),
    /*{ type: "text", value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, error.",
      options: {
        tag: "h2",
        styleText: "",
        styleDiv: "height: 30vh;display: flex;align-items: center;justify-content: center;"
      } },*/
  new ColumnsBlog(["Text1", "Text2", "Text3", "Text4"], {tag: "",styleItem: "width: 100%;height: 30vh;background-color: #3f495c;display: flex;align-items: center;justify-content: center;"}),
    /*{ type: "columns", value: ["Text1", "Text2", "Text3", "Text4"],
      options: {
        tag: "",
        styleItem: "width: 100%;height: 30vh;background-color: #3f495c;display: flex;align-items: center;justify-content: center;"
      } },*/
  new ImageBlog(image, {styleBlock: "width: 100%;height: 50vh;",styleImg: "width: 100%;height: 100%;object-fit: cover;"})
    /*{ type: "image", value: image,
      options: {
        styleBlock: "width: 100%;height: 50vh;",
        styleImg: "width: 100%;height: 100%;object-fit: cover;"
      }}*/
  ];