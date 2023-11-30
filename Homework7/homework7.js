window.onload = function() {
    // Динамично пополнување на табела со книги 
    // со можност за бришење на секоја книга одделно

    let books = [
        {title: "1Q84", author:"Haruki Murakami"},
        {title: "Master and Margarita", author:"Mihail Bulgakov"},
        {title: "Love in Lowercase", author:"Francesc Miralles"},
        {title: "1Q84", author:"Haruki Murakami"},
        {title: "Demons", author:"Fyodor Dostoevsky"},
        //{title: "The Da Vinci Code", author:"Dan Brown"}
    ]

    function createTable(objectBooks, caption) {
        let table = document.createElement("table")
        let tableCaption = document.createElement("caption")
        tableCaption.innerHTML = caption
        table.appendChild(tableCaption)

        let keysFromObject = objectBooks[0]
        let mainRow = document.createElement("tr")
        for(key in keysFromObject){
            let secondRow = document.createElement("th")
            secondRow.innerText = key
            mainRow.appendChild(secondRow)
        }

        table.appendChild(mainRow)

        for(element of objectBooks){
            let thirdRow = document.createElement("tr")
            for(key in element){
                let content = document.createElement("td")
                content.innerText = element[key]
                thirdRow.appendChild(content)
            }
            table.appendChild(thirdRow)
        }

        table.setAttribute("border", "5px", "solid")
        document.body.appendChild(table)
        
    }

    createTable(books,"List of Books")

}
