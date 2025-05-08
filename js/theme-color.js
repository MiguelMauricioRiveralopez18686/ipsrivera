// Cambio de tema
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
if (localStorage.getItem("tema") === "oscuro") {
  document.body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const esOscuro = document.body.classList.contains("dark-mode");
  themeIcon.classList.toggle("fa-moon", !esOscuro);
  themeIcon.classList.toggle("fa-sun", esOscuro);
  localStorage.setItem("tema", esOscuro ? "oscuro" : "claro");
});