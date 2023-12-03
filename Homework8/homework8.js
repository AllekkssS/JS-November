// Табела за приказ на податоци од StarWars API
// https://swapi.dev/

window.onload = function() {


    function createList() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((info)=>{
            const list = document.createElement("ol")
            document.body.appendChild(list)
            info.forEach((person)=>{
                const listItem = document.createElement("li")
                listItem.textContent = person.name
                list.appendChild(listItem)
            })
        }).catch((error)=>console.log(error))
    }

    createList()

    async function createListAsync() {
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const info = await response.json()
            const list = document.createElement("ol")
            document.body.appendChild(list)
            info.forEach((person)=>{
                const listItem = document.createElement("li")
                listItem.textContent = person.name + " " + person.email
                list.appendChild(listItem)
            })
        }catch(error){console.log(error)}
    }

    createListAsync()

}
