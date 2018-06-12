import Task from "./task";

export default class Spell {
    constructor() {
        this.spellModalWindow = document.getElementById('spellModalWindow');
    }

    spellRender() {
        this.spellModalWindow.style.display = "block";
    }

}