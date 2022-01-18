const moviesSection = document.querySelector("section");
const createForm = document.querySelector("form");

const movies = [];

// Accedemos al momento donde se envia el formulario
createForm.onsubmit = (event) => {
	event.preventDefault();
	// Accedemos a los inputs para crear nuestra nueva pelicula
	const nameInput = document.querySelector("#name");
	const imgInput = document.querySelector("#img");

	movies.push({
		name: nameInput.value,
		img: imgInput.value,
		likes: 0,
	});
	nameInput.value = "";
	imgInput.value = "";

	// pintar todas las peliculas
	printMovies();
};

function printMovies() {
	moviesSection.innerHTML = "";
	movies.forEach((movie, index) => {
		moviesSection.innerHTML += `
            <div>
            <h4>${movie.name}</h4>
            <img width="30" height="60" src="${movie.img}"/>
            <p>Likes: ${movie.likes}</p>
            <button onclick="handleLike(${index})">Like</button>
            </div>
        `;
	});
}

function handleLike(movieIndex) {
	movies[movieIndex].likes++;
	printMovies();
}
