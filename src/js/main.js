// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}


AOS.init({
  easing: 'ease-out-back',
  duration: 1000
});


window.addEventListener('load', () =>{
  const contenedor1_loader = document.querySelector ('.contenedor1_loader');
  contenedor1_loader.style.opacity = 0;
  contenedor1_loader.style.visibility = 'hidden';
});
