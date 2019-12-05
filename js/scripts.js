var selectedLogo;
var selectedGenre;
var selectedHoliday;
var selectedDrink;
var selectedMovie;
var selectedFlavor;


$('.logo-select').click(function() {
    console.log(this.value);
    selectedLogo = this.value;
  });
  $('.genre-select').click(function() {
    console.log(this.value);
    selectedGenre = this.value;
  });
  $('.holiday-select').click(function() {
    console.log(this.value);
    selectedHoliday = this.value;
  });
  $('.movie-select').click(function() {
    console.log(this.value);
    selectedMovie = this.value;
  });
  $('.flavor-select').click(function() {
    console.log(this.value);
    selectedFlavor = this.value;
  });
  $('.drink-select').click(function() {
    console.log(this.value);
    selectedDrink = this.value;
  });