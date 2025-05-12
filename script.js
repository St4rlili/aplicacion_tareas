$(document).ready(function () {
    //Este if es para evitar que aparezca el input al cargar/recargar la página (flex ignora el hidden)
    if ($("#nueva-tarea").is(":visible")) {
        $("#nueva-tarea").hide()
    }

    $("#crear-tarea").click(function(){
    if ($("#nueva-tarea").is(":visible")) {
        $("#nueva-tarea").hide()
      } else {
        $("#nueva-tarea").show()
      }
    })
    $("#confirmar-tarea").click(function(){
      let texto = $("#texto").val();
      let nuevaTarea = $("<div></div>").addClass("tarea");
      let titulo = $("<h3></h3>").text(texto);
      let boton = $("<button>-</button>").addClass("btn-eliminar-tarea");
      boton.click(function(){
      nuevaTarea.remove();
      })
      nuevaTarea.append(titulo, boton);
      $("#tareas").prepend(nuevaTarea);
    })
})