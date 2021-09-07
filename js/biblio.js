//mi contenedor de todos los datos
var biblioteca = new Array();

function guardar_libro() {
  //creacion objeto
  var libro = new Object();
  //propiedades
  libro.isbn = document.getElementById('txtisbn').value;
  libro.titulo = document.getElementById('txttitulo').value;
  libro.autor = document.getElementById('txtautor').value;
  libro.apellido = document.getElementById('txtapellido').value;
  libro.categoria = document.getElementById('txtcategoria').value;
  libro.precio = document.getElementById("txtprecio").value;
  biblioteca.push(libro);//para agregarlo a mi arreglo   
  mostrardatos();

}

function mostrardatos() {

    fila = "";
  for (var dato in biblioteca) {
    fila += "<div class='row'>"
    fila += "<div class='col-sm-12 col-md-2 fs-6'>" + biblioteca[dato].isbn + "</div>";
    fila += "<div class='col-sm-12 col-md-2 fs-6'>" + biblioteca[dato].titulo + "</div>";
    fila += "<div class='col-sm-12 col-md-2 fs-6'>" + biblioteca[dato].autor + "</div>";
    fila += "<div class='col-sm-12 col-md-2 fs-6'>" + biblioteca[dato].apellido + "</div>";
    fila += "<div class='col-sm-12 col-md-2 fs-6'>" + biblioteca[dato].categoria + "</div>";
    fila += "<div class='col-sm-12 col-md-1 fs-6'>" + biblioteca[dato].precio + "</div>";
    fila += "<div class='col-sm-12 col-md-1 fs-6'></div>";

    fila += "</div>"

  }

  document.getElementById('datos').innerHTML = fila;

}
