var buttonSearch = document.querySelector(".button-search-hotels");
var searchForm = document.querySelector(".search");
var arrival = document.querySelector("[name=arrival]");
var dates = document.querySelector(".dates-text");
var numbers = document.querySelector(".members");

buttonSearch.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchForm.classList.toggle("search");
	arrival.focus();
});

searchForm.addEventListener("submit", function (evt) {
	if (!dates.value || !numbers.value) {
	evt.preventDefault();
	console.log("Введите необходимые данные")	
	}
});

buttonSearch.addEventListener("click", function (evt) {
	evt.preventDefault();
	searchForm.classList.toggle("search-show");
});
