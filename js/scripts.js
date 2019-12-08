$(document).ready( function (){


var selectedLogo;
var selectedGenre;
var selectedHoliday;
var selectedDrink;
var selectedMovie;
var selectedFlavor;


$('.logo-select').click(function() {
    selectedLogo = this.value;
  });
  $('.genre-select').click(function() {
    selectedGenre = this.value;
  });
  $('.holiday-select').click(function() {
    selectedHoliday = this.value;
  });
  $('.movie-select').click(function() {
    selectedMovie = this.value;
  });
  $('.flavor-select').click(function() {
    selectedFlavor = this.value;
  });
  $('.drink-select').click(function() {
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

  if (python > javascript && python > ruby) {
    recommendedLanguage = 'Python.';
    bgColor = '#75a8d3';
    allowSubmit = true;
    console.log('python wins with ' + python + ' points.')
  } else if (javascript > python && javascript > ruby) {
    recommendedLanguage = 'Javascript.';
    bgColor = '#f8d410';
    allowSubmit = true;
    console.log('javascript wins with ' + javascript + ' points.')
  } else if (ruby > python && ruby > javascript) {
    recommendedLanguage = 'Ruby.';
    bgColor = '#CC342D';
    allowSubmit = true;
    console.log('ruby wins with ' + ruby + ' points.')    
  } else {
    allowSubmit = false;
    alert('A recommended language could not be determined from choices.')
  }
});