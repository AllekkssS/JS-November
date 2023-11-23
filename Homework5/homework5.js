const houses = [{name: "Slytherin", points: 195},
            {name: "Ravenclaw", points: 201},
            {name: "Hufflepuff", points: 199},
            {name: "Gryffindor", points: 190}]
// function winnerCup() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{        
//         var winnerHouse = houses.filter(house => {if(house.points>=200)return(house)})
//         const isHouseNotDiscfalified = true
        
//         if(isHouseNotDiscfalified){
//             resolve(winnerHouse)
//         }else{
//             reject("You didn't win the cup this year")
//         }
//         },2000)
//     })
// }

// async function fetchWinner(){
//     try{
//         const winner = await winnerCup()
//         console.log(winner)
//     }catch(loser){
//         console.log(loser)
//     }finally{
//         console.log(`To everyone: Best of luck next year!`)
//     }
// }
// fetchWinner()

function secondTry(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var sortedPoints = houses.sort((a,b) => b.points-a.points)
            for(i=0;i<=sortedPoints.length;i++)
            if(isHouseNotDiscfalified = true){
                resolve(sortedPoints[0])
            }else{
                reject("You didn't win the cup this year")
            }
        },2000)
    })
}

async function fetchWinnerAgain(){
    try{
        const winner = await secondTry()
        console.log(winner)
    }catch(loser){
        console.log(loser)
    }finally{
        console.log(`To everyone: Best of luck next year!`)
    }
}
fetchWinnerAgain()
