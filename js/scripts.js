var selectedLogo;
var selectedGenre;
var selectedHoliday;



$('.logo-select').click(function() {
    console.log(this.value);
    selectedLogo = this.value;
  });