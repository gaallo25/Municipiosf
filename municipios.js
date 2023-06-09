let programas = document.getElementById("programas");
let ulProgramas = document.querySelector("#programas ul");
programas.addEventListener("mouseover", () => {
  ulProgramas.classList.toggle("ocultar");
});
programas.addEventListener("mouseout", () => {
  ulProgramas.classList.toggle("ocultar");
});
let nosotros = document.getElementById("nosotros");
let ulNosotros = document.querySelector("#nosotros ul");
nosotros.addEventListener("mouseover", () => {
  ulNosotros.classList.toggle("ocultar");
});
nosotros.addEventListener("mouseout", () => {
  ulNosotros.classList.toggle("ocultar");
});
//---------------------------------------------------------------
//--------------------------------------------------------------
if (screen.width < 1024) {
  let menuMobil = document.getElementById("hamburgerMenu");
  let navbarMenuMovil = document.getElementById("navbarMenuMovil");
  menuMobil.addEventListener("click", () => {
    navbarMenuMovil.classList.toggle("ocultar-movil");
  });
  //---------------------------------------------------------------------
  let programas = document.getElementById("programas-mobil");
  let ulProgramas = document.querySelector("#programas-mobil ul");
  programas.addEventListener("click", () => {
    ulProgramas.classList.toggle("ocultar");
  });
  //---------------------------------------------------------------------
  let nosotros = document.getElementById("nosotros-mobil");
  let ulNosotros = document.querySelector("#nosotros-mobil ul");
  nosotros.addEventListener("click", () => {
    ulNosotros.classList.toggle("ocultar");
  });
  //----------------------------------------------------------------------
  var gridaprendemos = document.getElementById("container-cards-aprendemos");

  var circulosAprendemos = document.querySelectorAll(
    ".modalidad .circulos-carrusel .circulos"
  );
  var deltaX4;
  var counterAprendemos = 0;
  for (let index = 0; index < circulosAprendemos.length; index++) {
    const element = circulosAprendemos[index];
    element.addEventListener("click", () => {
      counterAprendemos = (index + 1) * 100;
      deltaX4 = 1;
      moverAprendemos(deltaX4);
    });
  }

  var containeraprendemos = document.querySelectorAll(".card-aprendemos");
  var containeraprendemosMath = containeraprendemos.length * 100;

  circulosAprendemos[0].style.border = "2px solid #50b37e";

  gridaprendemos.style.width = containeraprendemosMath + "%";

  var startX4; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart4(event) {
    startX4 = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd4(event) {
    var endX4 = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX4 = endX4 - startX4; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX4) > 80) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverAprendemos(deltaX4);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverAprendemos(deltaX4) {
    for (let index = 0; index < circulosAprendemos.length; index++) {
      const element = circulosAprendemos[index];
      circulosAprendemos[index].style.border = "none";
    }
    if (deltaX4 > 0) {
      if (counterAprendemos == 0) {
        counterAprendemos = containeraprendemosMath - 100;
        circulosAprendemos[circulosAprendemos.length - 1].style.border =
          "2px solid #50b37e";
        circulosAprendemos[0].style.border = "none";
        gridaprendemos.style.marginLeft = "-" + counterAprendemos + "%";
      } else {
        counterAprendemos = counterAprendemos -= 100;
        gridaprendemos.style.marginLeft = "-" + counterAprendemos + "%";

        circulosAprendemos[counterAprendemos / 100].style.border = "none";
        circulosAprendemos[counterAprendemos / 100].style.border =
          "2px solid #50b37e";
      }
    } else {
      if (counterAprendemos == containeraprendemosMath - 100) {
        counterAprendemos = 0;
        circulosAprendemos[counterAprendemos / 100].style.border =
          "2px solid #50b37e";
        circulosAprendemos[circulosAprendemos.length - 1].style.border = "none";
        gridaprendemos.style.marginLeft = "-" + counterAprendemos + "%";
      } else {
        counterAprendemos = counterAprendemos += 100;
        gridaprendemos.style.marginLeft = "-" + counterAprendemos + "%";
        circulosAprendemos[counterAprendemos / 100 - 1].style.border = "none";
        circulosAprendemos[counterAprendemos / 100].style.border =
          "2px solid #50b37e";
      }
    }
  }

  // Agregar controladores de eventos táctiles al elemento
  gridaprendemos.addEventListener("touchstart", handleTouchStart4, false);
  gridaprendemos.addEventListener("touchend", handleTouchEnd4, false);

  //------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------
  var gridImpacto = document.getElementById("flex-tarjetas");

  var circulosImpacto = document.querySelectorAll(
    ".impacto .circulos-carrusel .circulos"
  );
  console.log(circulosImpacto);
  var deltaX1;
  var counterImpacto = 0;
  for (let index = 0; index < circulosImpacto.length; index++) {
    //const element = circulosImpacto[index];
    console.log("hola");
    circulosImpacto[index].addEventListener("click", () => {
      counterImpacto = (index + 1) * 100;
      deltaX1 = 1;

      moverImpacto(deltaX1);
    });
  }

  var containerimpacto = document.querySelectorAll(".container-tajeta");
  var containerimpactoMath = containerimpacto.length * 100;

  circulosImpacto[0].style.border = "2px solid #50b37e";

  gridImpacto.style.width = containerimpactoMath + "%";

  var startX1; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart1(event) {
    startX1 = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd1(event) {
    var endX1 = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX1 = endX1 - startX1; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX1) > 80) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverImpacto(deltaX1);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverImpacto(deltaX4) {
    for (let index = 0; index < circulosImpacto.length; index++) {
      const element = circulosImpacto[index];
      circulosImpacto[index].style.border = "none";
    }
    if (deltaX4 > 0) {
      if (counterImpacto == 0) {
        counterImpacto = containerimpactoMath - 100;
        circulosImpacto[circulosImpacto.length - 1].style.border =
          "2px solid #50b37e";
        circulosImpacto[0].style.border = "none";
        gridImpacto.style.marginLeft = "-" + counterImpacto + "%";
      } else {
        counterImpacto = counterImpacto -= 100;
        gridImpacto.style.marginLeft = "-" + counterImpacto + "%";

        circulosImpacto[counterImpacto / 100].style.border = "none";
        circulosImpacto[counterImpacto / 100].style.border =
          "2px solid #50b37e";
      }
    } else {
      if (counterImpacto == containerimpactoMath - 100) {
        counterImpacto = 0;
        circulosImpacto[counterImpacto / 100].style.border =
          "2px solid #50b37e";
        circulosImpacto[circulosImpacto.length - 1].style.border = "none";
        gridImpacto.style.marginLeft = "-" + counterImpacto + "%";
      } else {
        counterImpacto = counterImpacto += 100;
        gridImpacto.style.marginLeft = "-" + counterImpacto + "%";
        circulosImpacto[counterImpacto / 100 - 1].style.border = "none";
        circulosImpacto[counterImpacto / 100].style.border =
          "2px solid #50b37e";
      }
    }
  }

  // Agregar controladores de eventos táctiles al elemento
  gridImpacto.addEventListener("touchstart", handleTouchStart1, false);
  gridImpacto.addEventListener("touchend", handleTouchEnd1, false);
  //------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------
  var gridEquipo = document.getElementById("container-cards-equipo");

  var circulosEquipo = document.querySelectorAll(
    ".equipo .circulos-carrusel .circulos"
  );
  console.log(circulosEquipo);
  var deltaX2;
  var counterEquipo = 0;
  for (let index = 0; index < circulosEquipo.length; index++) {
    //const element = circulosEquipo[index];
    console.log("hola");
    circulosEquipo[index].addEventListener("click", () => {
      counterEquipo = (index + 1) * 100;
      deltaX2 = 1;

      moverEquipo(deltaX2);
    });
  }

  var containerEquipo = document.querySelectorAll(".card-equipo");
  var containerEquipoMath = containerEquipo.length * 100;

  circulosEquipo[0].style.border = "2px solid #50b37e";

  gridEquipo.style.width = containerEquipoMath + "%";

  var startX2; // Posición inicial en X al inicio del deslizamiento

  // Función de controlador de evento para el inicio del deslizamiento
  function handleTouchStart2(event) {
    startX2 = event.touches[0].clientX; // Guardar la posición inicial en X
  }
  // Función de controlador de evento para el final del deslizamiento
  function handleTouchEnd2(event) {
    var endX2 = event.changedTouches[0].clientX; // Obtener la posición final en X
    deltaX2 = endX2 - startX2; // Calcular la distancia deslizada

    // Verificar si la distancia deslizada es pequeña (simulando un clic)
    if (Math.abs(deltaX2) > 80) {
      // Acción a realizar en el evento de deslizamiento similar a un clic
      moverEquipo(deltaX2);
      // Aquí puedes agregar la lógica para realizar la acción deseada
    }
  }
  function moverEquipo(deltaX4) {
    for (let index = 0; index < circulosEquipo.length; index++) {
      const element = circulosEquipo[index];
      circulosEquipo[index].style.border = "none";
    }
    if (deltaX4 > 0) {
      if (counterEquipo == 0) {
        counterEquipo = containerEquipoMath - 100;
        circulosEquipo[circulosEquipo.length - 1].style.border =
          "2px solid #50b37e";
        circulosEquipo[0].style.border = "none";
        gridEquipo.style.marginLeft = "-" + counterEquipo + "%";
      } else {
        counterEquipo = counterEquipo -= 100;
        gridEquipo.style.marginLeft = "-" + counterEquipo + "%";

        circulosEquipo[counterEquipo / 100].style.border = "none";
        circulosEquipo[counterEquipo / 100].style.border = "2px solid #50b37e";
      }
    } else {
      if (counterEquipo == containerEquipoMath - 100) {
        counterEquipo = 0;
        circulosEquipo[counterEquipo / 100].style.border = "2px solid #50b37e";
        circulosEquipo[circulosEquipo.length - 1].style.border = "none";
        gridEquipo.style.marginLeft = "-" + counterEquipo + "%";
      } else {
        counterEquipo = counterEquipo += 100;
        gridEquipo.style.marginLeft = "-" + counterEquipo + "%";
        circulosEquipo[counterEquipo / 100 - 1].style.border = "none";
        circulosEquipo[counterEquipo / 100].style.border = "2px solid #50b37e";
      }
    }
  }

  // Agregar controladores de eventos táctiles al elemento
  gridEquipo.addEventListener("touchstart", handleTouchStart2, false);
  gridEquipo.addEventListener("touchend", handleTouchEnd2, false);
}
