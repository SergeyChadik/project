var searchInput = document.getElementById('search');
var searchButton = document.getElementById('search-button');
searchButton.addEventListener("click", search);



function search() {
	alert('We want to find this:' + searchInput.value);
}