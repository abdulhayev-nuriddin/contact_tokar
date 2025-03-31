//! Loader Section
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".loader-container").classList.add("hidden");
  }, 1500);
  //! Dark Theme Section
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    //! Dark Theme Icon Section
    if (document.body.classList.contains("dark-theme")) {
      themeIcon.src = "./images/sun.png";
    } else {
      themeIcon.src = "./images/moon.png";
    }
  });
});

//! scroll animation section

// document.addEventListener("DOMContentLoaded", function () {
//   let elements = document.querySelectorAll(
//     "*:not(html):not(body):not(meta):not(title):not(head):not(style):not(script):not(main)"
//   );
//   let directions = ["from-left", "from-right", "from-top", "from-bottom"];

//   elements.forEach((el) => {
//     let randomDirection =
//       directions[Math.floor(Math.random() * directions.length)];
//     el.classList.add(randomDirection);
//   });

//   function checkScroll() {
//     elements.forEach((el) => {
//       if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
//         el.classList.add("show");
//       }
//     });
//   }

//   window.addEventListener("scroll", checkScroll);
//   checkScroll();
// });
