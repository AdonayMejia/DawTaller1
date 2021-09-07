function crear() {
  var fila = document.getElementById("fila").value;
  var columna = document.getElementById("columna").value;
  let fila1 = 0;
  fila1 = parseFloat(fila);
  let columna1 = 0;
  columna1 = parseFloat(columna);

  let miarray = [];
  for (let i = 0; i < fila1; i++) {
    for (let j = 0; j < columna1; j++) {
      miarray[i] = [];
    }
  }

  for (let i = 0; i < fila1; i++) {
    for (let j = 0; j < columna1; j++) {
      miarray[i][j] = Math.floor(500 * Math.random());
    }
  }
  const maxPerRow = miarray.map((row) => Math.max.apply(Math, row));
  const max = Math.max.apply(null, maxPerRow);
  const minPerRow = miarray.map((row) => Math.min.apply(Math, row));
  const min = Math.min.apply(null, minPerRow);

  function makeTableHTML(miarray) {
    var result = "<table border=1>";
    for (let i = 0; i < miarray.length; i++) {
      result += "<tr>";
      for (let j = 0; j < miarray[i].length; j++) {
        if(miarray[i][j]==max) {
          result += `<td class="maximo"> ${miarray[i][j]}</td>`;
        }else if(miarray[i][j]==min){
          result += `<td class="minimo"> ${miarray[i][j]}</td>`;
        }
        else{
          result += "<td>" + miarray[i][j] + "</td>";
        }
      }
      result += "</tr>";
    }
    result += "</table>";
    return result;
  }

  var resultado1 = makeTableHTML(miarray);

  var contenedor = document.getElementById("miarray");
  
  contenedor.innerHTML = resultado1;
  contenedor.innerHTML += "<b>Número Mayor: " + max;
  contenedor.innerHTML += "<b>Número Menor: " + min;
}
