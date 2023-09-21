import {fetchJSON} from "./ApiDom.js";
try{

    const todos = await fetchJSON('https://jsaonplaceholder.typicode.com/todos?_limit=5')
console.log(todos)
} catch (e) {
    createElement('div')
}
