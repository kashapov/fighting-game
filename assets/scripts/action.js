import Task from "./task";

export default class Action {
    constructor() {
        this.actionModalWindow = document.getElementById('actionModalWindow');
    }

    actionRender() {
        this.actionModalWindow.style.display = "block";
    }

}