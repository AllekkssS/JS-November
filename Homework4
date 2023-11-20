// - Анализа на низа градови

const cities = [{name: "Hamburg", population: 1841000}, 
{name: "Prague", population: 1309000}, 
{name: "Madrid", population: 3223000}, 
{name: "Athens", population: 3154000},
{name: "Aleppo", population: 2100000},
{name: "Amalfi", population: 80000},
{name: "Ankara", population: 5663000},
{name: "Ljubljana", population: 279663},
{name: "Dubrovnik", population: 42615}]

// Подреди по популација

var sortByPopulation = cities.sort((a,b) => {return a.population - b.population})
console.log(sortByPopulation)

// Кои се трите најнаселени градови

var sortReversed = cities.sort((a,b) => {return b.population - a.population})
console.log(sortReversed)
for (i=0; i<=2; i++){
    console.log(sortReversed[i])
} // Check to optimize

// Сите градови што почнуваат на А и имаат над милион жители

var filteredCities = cities.filter(
    city => {if(city.population>1000000 && city.name.startsWith("A"))
    return{city}}
)
console.log(filteredCities)

// Просек од вкупен број на жители од сите градови

var eachPopulation = cities.map(value=>value.population)
console.log(eachPopulation)

var averagePopulation = eachPopulation.reduce((acc,curr)=>acc+curr)/eachPopulation.length
console.log(averagePopulation)
