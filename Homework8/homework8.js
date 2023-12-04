// Табела за приказ на податоци од StarWars API
// https://swapi.dev/

window.onload = function() {


    // Test - access API

    fetch("https://swapi.dev/api/people")
    .then(response=>response.json())
    .then(json=>{
       console.log(json.results)
       let users = json.results
       for (user of users){
          console.log(user.name, user.mass)
       }
    })

    // Option 1 - ordered list

    function createList() {
        fetch("https://swapi.dev/api/people")
        .then((response)=>response.json())
        .then(data=>{
            const list = document.createElement("ol")
            document.body.appendChild(list)
            let characters = data.results
            characters.forEach((character)=>{
                const listItem = document.createElement("li")
                listItem.textContent = character.name
                list.appendChild(listItem)
            })
        }).catch((error)=>console.log(error))
    }

    createList()

    // Option 2 - ordered list
   

    async function createListAsync() {
        try{
            const response = await fetch("https://swapi.dev/api/people")
            const info = await response.json()
            const list = document.createElement("ol")
            document.body.appendChild(list)
            let characters = info.results
            characters.forEach((character)=>{
                const listItem = document.createElement("li")
                listItem.textContent = character.name + " " + character.birth_year
                list.appendChild(listItem)
            })
        }catch(error){console.log(error)}
    }

    createListAsync()

    // Option 2  - table

    async function createTableAsync() {
        try{
            const response = await fetch("https://swapi.dev/api/people")
            const infoFromApi = await response.json()
            const table = document.createElement("table")
            const caption = document.createElement("caption")
            caption.textContent = "Characters Star Wars"
            table.appendChild(caption)
            document.body.appendChild(table)
            table.setAttribute("border", "5px", "solid")

            let characters = infoFromApi.results

            let keysFromApi = characters[0]
            //console.log(keysFromApi)
            let mainRow = document.createElement("tr")
            for(key in keysFromApi) {
                let secondRow = document.createElement("th")
                secondRow.innerText = key
                mainRow.appendChild(secondRow)
            }

            table.appendChild(mainRow)

            for(character of characters) {
                let thirdRow = document.createElement("tr")
                for(key in character) {
                    let content = document.createElement("td")
                    content.innerText = character[key]
                    thirdRow.appendChild(content)
                }
                table.appendChild(thirdRow)
            }
            
        }catch(error){console.log(error)}
        
    }

    createTableAsync()
   

}

