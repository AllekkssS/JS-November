for(let i = 0; i<=5; i++){
    console.log("#".repeat(i))       
}

function convertToWords(integer){
    let number = parseInt(integer)
    const numbers = ["nula", "eden", "dva", "tri", "cetiri", "pet", "sest", "sedum", "osum", "devet"]
    if (number>=10){
        let one = number % 10
        let ten = (number - one) / 10        
        console.log(`${numbers[ten]} ${numbers[one]}`)
    }else if(number<10){
        console.log(numbers[number])
    }else{
        alert("Error")
    }    
  }
  convertToWords(56)


 
  














