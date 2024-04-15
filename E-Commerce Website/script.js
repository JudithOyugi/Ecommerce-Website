document.addEventListener("DOMContentLoaded", function () {
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const navbar = document.getElementById("navbar");
  
    // Hide navbar by default
    // navbar.style.display = "none";
  
    // Toggle navbar on bar click
    if (bar) {
      bar.addEventListener("click", () => {
        console.log("Bar clicked");
        navbar.classList.add("active");
        close.style.display = "block"; // Show the close button
        navbar.style.display = "block"; // Show the navbar
      });
    }
  
    // Close navbar on close button click
    if (close) {
      close.addEventListener("click", () => {
        console.log("Close clicked");
        navbar.classList.remove("active");
        close.style.display = "none"; // Hide the close button
        navbar.style.display = "none"; // Hide the navbar
      });
    }
  
    // Close navbar when clicking outside of it
    // document.addEventListener('click', function(event) {
    //     if (!navbar.contains(event.target) && !bar.contains(event.target)) {
    //         console.log('Clicked outside navbar');
    //         navbar.classList.remove('active');
    //         close.style.display = 'none'; // Hide the close button
    //         navbar.style.display = 'none'; // Hide the navbar
    //     }
    // });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var MainImg = document.getElementById("MainImg");
    var smallimg = document.querySelectorAll(".small-img"); // Query all images within .small-img
  
    // Loop through each small image and add click event listener
    smallimg.forEach(function (img) {
      img.onclick = function () {
        MainImg.src = img.src;
      };
    });
  });
  