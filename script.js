function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("window").style.display = "flex";

  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("window").style.display = "none";

  } 

var pattern = ['n','y','a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		on();
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);

