window.onload = function() {
    // Динамично пополнување на табела со книги 
    // со можност за бришење на секоја книга одделно

    let books = [
        {title: "1Q84", author:"Haruki Murakami"},
        {title: "Master and Margarita", author:"Mihail Bulgakov"},
        {title: "Love in Lowercase", author:"Francesc Miralles"},
        {title: "1Q84", author:"Haruki Murakami"},
        {title: "Demons", author:"Fyodor Dostoevsky"}
    ]

    function createTable(objectBooks, caption) {
        let table = document.createElement("table")
        table.setAttribute("id", "tableBooks")
        let tableCaption = document.createElement("caption")
        tableCaption.innerHTML = caption
        table.appendChild(tableCaption)
        tableCaption.setAttribute("id", "captionStyle")
        //document.getElementById("captionStyle").style.marginBottom = "10px"

        let keysFromObject = objectBooks[0]
        let mainRow = document.createElement("tr")
        for(key in keysFromObject){
            let secondRow = document.createElement("th")
            secondRow.innerText = key
            mainRow.appendChild(secondRow)
        }

        table.appendChild(mainRow)

        for(element of objectBooks){
            //console.log(element)
            let thirdRow = document.createElement("tr")
            for(key in element){
                //console.log(key)
                let content = document.createElement("td")
                content.innerText = element[key]
                //console.log(element[key])
                thirdRow.appendChild(content)
            }
            table.appendChild(thirdRow)
        }

        table.setAttribute("border", "5px", "solid")
        document.body.appendChild(table)        
    }

    createTable(books,"List of Books")
}

function addToWishList() {
    var newTitle = document.getElementById("title")
    var newAuthor = document.getElementById("author")
    var enteredTitle = newTitle.value.trim()
    var enteredAuthor = newAuthor.value.trim()    

    if (enteredTitle, enteredAuthor) {
        var tableBooks = document.getElementById("tableBooks")
        var newInfo = document.createElement("tr")
        tableBooks.appendChild(newInfo) 
        addedTitle = document.createElement("td")
        addedTitle.innerText = enteredTitle
        addedAuthor = document.createElement("td")
        addedAuthor.innerText = enteredAuthor
        newInfo.appendChild(addedTitle)
        newInfo.appendChild(addedAuthor)
        newTitle.value = ""
        newAuthor.value = ""     
    }    
}

function removeFromWishList() {
    var tableBooks = document.getElementById("tableBooks")
    var lastInput = tableBooks.lastElementChild
    if(lastInput){
        tableBooks.removeChild(lastInput)
    }
}
