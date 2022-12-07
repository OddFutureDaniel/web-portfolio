// Get the container element
var linkContainer = document.getElementById("optionsID");

// Get all links with class="option" inside the container
var links = linkContainer.getElementsByClassName("option");

// Loop through the links and add the active class to the current/clicked link
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

     // If there's no active class
     if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}