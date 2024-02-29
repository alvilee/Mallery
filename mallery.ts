const parser = new DOMParser();
const resp = await fetch("./mallery.html");
const html = await resp.text();
const template = parser.parseFromString(html, "text/html").querySelector("template");

export class Mallery extends HTMLElement {

    constructor() {
        super();
        console.log("Mallery instance being created");
        console.log("typescript is being compiled automatically");

        if (template == null) {
            console.log("template is null");
            return;
        }

        this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    }

}
