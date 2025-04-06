document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting the traditional way
  
    // You can add authentication logic here if needed
  
    // Redirect to home.html
    window.location.href = "home.html";
  });
  