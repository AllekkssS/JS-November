class Books{
    constructor(author,title,genre){
        this.author = author
        this.title = title
        this.genre = genre
    }
        
    favoriteBook(){
        console.log(`I love ${this.title}. It's written by ${this.author}. It categorizes as ${this.genre}.`)
    }
}

var firstChoice = new Books ("Haruki Murakami", "Sputnik Sweetheart", "magical realism")
firstChoice.favoriteBook()
var secondChoice = new Books ("Arthur Golden", "Memoirs of a Geisha", "historical fiction")
secondChoice.favoriteBook()

class Movies extends Books{
    constructor(author, title, genre, director){
        super(author, title, genre)
        this.director = director
    }

    adaptation(){
        console.log(`I enjoy book adaptations. My favorite is ${this.title} by ${this.author}. It was directed by ${this.director}.`)
    }
}

var firstAdaptation = new Movies ("Arthur Golden", "Memoirs of a Geisha", "historical fiction", "Rob Marshall")
firstAdaptation.adaptation()

class TvShows extends Movies{
    constructor(author, title, genre, director, seasons){
        super(author, title, genre, director)
        this.seasons = seasons
    }

    showAdaptation(){
        console.log(`When it comes to TV shows inspired by books, I enjoyed ${this.title} by ${this.author}. The genre is ${this.genre} and it has ${this.seasons} seasons.`)
    }
}

firstTvShow = new TvShows ("Andrzej Sapkowski", "The Witcher", "fantasy", "Lauren Schmidt Hissrich", 4)
firstTvShow.showAdaptation()
