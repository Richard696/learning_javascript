class Movie{
    constructor(movie, genre, director, releaseYear, rating){
        this.movie = movie;
        this.genre = genre;
        this.director = director;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }

    get Overview(){
        return this.getOverview();
    }
    getOverView(){
        return `${this.movie}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
    }
}

const DemonSlayer = new Movie("Demon Slayer: Kimetsu no Yaiba the Movie: Mugen Train", 
                            "anime dark fantasy",
                            "Haruo Sotozaki",
                            2020, 8.3);
console.log(DemonSlayer); 
// console.log(DemonSlayer.getOverView());                        