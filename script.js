const myOldLibrary = []
const myLibrary = []

let displayedMovies = '';
let movieTitle;
let movieDirector;
let movieYear;
function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year
}
let movie1 = new Movie('Fight Club', 'David Fincher', '1999');

let movie2 = new Movie('Memento', 'Christopher Nolan', '2000');

myOldLibrary.push(movie1);
myOldLibrary.push(movie2);

for (let i = 0; i < myOldLibrary.length; i++) {
    let title = myOldLibrary[i].title;
    let director = myOldLibrary[i].director;
    let year = myOldLibrary[i].year;

    displayedMovies += title + ', ' + director + ', ' + year + '\n'
}
oldLibrary.innerText = displayedMovies;

function addBookToLibrary() {
    let newMovie = new Movie(movieTitle, movieDirector, movieYear);
    myLibrary.push(newMovie);
    updateLibrary()
}

function updateLibrary() {
    let allMovies = '';
    for (let i = 0; i < myLibrary.length; i++) {
        movieTitle = myLibrary[i].title;
        movieDirector = myLibrary[i].director;
        movieYear = myLibrary[i].year;
    
        allMovies = movieTitle + ', ' + movieDirector + ', ' + movieYear + '\n';
    }
    libraryContainer.innerText += allMovies;
}

function submitForm(event) {
    event.preventDefault();
    movieTitle = document.getElementById('title').value;
    movieDirector = document.getElementById('director').value;
    movieYear = document.getElementById('year').value;
    addBookToLibrary(movieTitle, movieDirector, movieYear);
    document.getElementById('movieForm').reset();
}

document.getElementById('movieForm').addEventListener('submit', submitForm);

