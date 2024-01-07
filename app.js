//Selecciono el contenedor padre donde están ubicados los botones
const buttons = document.querySelector(".buttons");
//Selecciono el contenedor padre donde están ubicadas las ciudades
const cities = document.querySelector(".cities");

//Al darle click encima de los botones
buttons.addEventListener("click", (e) => {
  //verifico si se le está dando click encima de los botones
  if (e.target.classList.contains("btn")) {
    /* Guardo en una variable el valor de lo que quiero mostrar, esta info la obtengo del
    nombre del boton */
    const selected = e.target.value.toLowerCase();
    const botones = document.querySelectorAll("button");
    botones.forEach((button) => {
      if (button.value === selected) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });

    cities.querySelectorAll("div").forEach((city) => {
      if (city.classList.contains(selected)) {
        city.classList.add("visible");
      } else {
        city.classList.remove("visible");
      }
    });
  }
});
