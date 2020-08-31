import { AMPonent } from "amponent";
import "./components/Header.js";
import "./components/Main.js";
import "./components/Footer.js";

AMPonent.make("my-app", {
  render: (box, props) =>
    '<my-header></my-header><my-main color="blue"></my-main><my-footer></my-footer>',
});

//Inject into body
const body = document.querySelector("body");
body.innerHTML = `<my-app></my-app>`;
