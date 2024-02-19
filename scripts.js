const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  return "<p>" + pregunta.titulo + "</p>";
}

function imprimeTodasLasRespuestas(pregunta) {
  let TodasRespuestas = "";
  for (let respuesta = 0; respuesta < (pregunta.respuestas).length; respuesta++) {
    TodasRespuestas += imprimeUnaRespuesta(respuesta);
  }
  return TodasRespuestas;
}
 /* Otra opcion es pasarle a la funcion el objeto mas concreto */
 /*   TodasRespuestas += imprimeUnaRespuesta(pregunta.respuestas[i]) */
function imprimeUnaRespuesta(respuesta) {
  let unaRespuesta = "";
  unaRespuesta += imprimeLabel(respuesta);
  unaRespuesta += imprimeInput(respuesta);
  return unaRespuesta;
}
function imprimeLabel(respuesta) {
  let label = `<label for="${pregunta.respuestas[respuesta].id}">${pregunta.respuestas[respuesta].label}</label>`;
  return label;
}
/* Es la otra opcion de uso del objeto ya que se ha pasado distinto al invocar a la funcion */
  /*  let label = `<label for="${respuesta.id}">${respuesta.label}</label>`; */
function imprimeInput(respuesta) {
  let input = `<input id="${pregunta.respuestas[respuesta].id}" name="${pregunta.respuestas[respuesta].name}" type="radio" value="${pregunta.respuestas[respuesta].value}">`;
  return input
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);