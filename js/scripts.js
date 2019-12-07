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

  if (selectedLogo === 'snake') {
    python += 1;
  } else if (selectedLogo === 'letters') {
    javascript += 1;
  } else if (selectedLogo === 'gem') {
    ruby += 1;
  } else {
  }
  
  if (selectedGenre === 'horror') {
    python += 1;
  } else if (selectedGenre === 'comedy') {
    javascript += 1;
  } else if (selectedGenre === 'drama') {
    ruby += 1;
  } else {
  }
  
  if (selectedHoliday === 'halloween') {
    python += 1;
  } else if (selectedHoliday === 'thanksgiving') {
    javascript += 1;
  } else if (selectedHoliday === 'christmas') {
    ruby += 1;
  } else {
  }
  
  if (selectedFlavor === 'vanilla') {
    python += 1;
  } else if (selectedFlavor === 'strawberry') {
    javascript += 1;
  } else if (selectedFlavor === 'chocolate') {
    ruby += 1;
  } else {
  }
  
  if (selectedMovie === 'jaws') {
    python += 1;
  } else if (selectedMovie === 'jurassicpark') {
    javascript += 1;
  } else if (selectedMovie === 'shindlersList') {
    ruby += 1;
  } else {
  }
  
  if (selectedDrink === 'beer') {
    python += 1;
  } else if (selectedDrink === 'wine') {
    javascript += 1;
  } else if (selectedDrink === 'water') {
    ruby += 1;
  } else {
  }