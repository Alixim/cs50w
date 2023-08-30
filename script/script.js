/* 
+++++++++++++++++++++++++++++
|  CS50W: Project_0_Search  |
+++++++++++++++++++++++++++++
*/

document.addEventListener("DOMContentLoaded", function() {
  // Code to be executed when the DOM is fully loaded
  var searchButton = document.getElementById("goSearch");
  var searchBar = document.getElementById("searchBar");
  var goSearch = document.getElementById("goSearch");
  var lucky = document.getElementById("lucky");

  lucky.addEventListener("click", function() {
    window.open("https://cs50.harvard.edu/web/2020/faqs/", "_blank");
  });

  searchButton.addEventListener("click", function() {
    var query = searchBar.value;
    if (query.trim() !== "") {
        performGoogleSearch(query);
    }
  });


  searchBar.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        var query = searchBar.value;
        if (query.trim() !== "") {
            performGoogleSearch(query);
        }
    }
  });


  function performGoogleSearch(query) {
    var searchURL = "https://www.google.com/search?q=" + encodeURIComponent(query);
    window.open(searchURL, "_blank");
  }

});
