import { games } from "./games.js";

let template = document.getElementsByTagName("template")[0].content;

let elements = games.map(([name, title_screen]) => {
  let ret = template.cloneNode(true);

  ret.querySelector("h1").textContent = name;
  ret.querySelector("img").src = `./assets/${title_screen}`;

  let radios = Array.from(ret.querySelectorAll("input[type=radio]"));
  radios.forEach((x) => {
    x.name = name;
  });
  if (Math.random() > 0.5) {
    radios = radios.filter((x) => x.name);
    radios[Math.floor(Math.random() * radios.length)].checked = true;
  }

  return ret;
});

document.forms.item(0).append(...elements);
