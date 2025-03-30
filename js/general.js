//! Loader Section
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".loader-container").classList.add("hidden");
  }, 1);
  //! TODO:  loader sekundni 2000 qilish
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
