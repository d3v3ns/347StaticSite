function menuBar() {
    var x = document.getElementById("myMainnav");
    if (x.className === "mainnav") {
      x.className += " responsive";
    } else {
      x.className = "mainnav";
    }
  }