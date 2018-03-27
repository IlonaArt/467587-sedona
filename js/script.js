var buttonSearch = document.querySelector(".button-search-hotels");
var searchForm = document.querySelector(".search");

buttonSearch.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchForm.classList.remove("visually-hidden");
});