import {fetchJSON} from "./ApiDom.js";
import { createElement } from "./Dom.js";
import { TodoList } from "./compoments/Todolist.js";


try{

    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))


} catch (e) {

    const alertElement = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'

    })
    alertElement.innerText = 'impossible de charger les élements'
    document.body.prepend(alertElement)
    console.error(e)
}
