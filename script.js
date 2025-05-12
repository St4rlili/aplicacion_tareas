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
      let titulo = $("<h3></h3>").text(texto).addClass("posicionamiento");
      let botonCompletada = $("<button>X</button>").addClass("btn-tarea");
      botonCompletada.click(function(){
        if(botonCompletada.html()=="✓"){
        botonCompletada.html("X");
        }
        else{
          botonCompletada.html("✓");
        }
      })
      let botonEliminar = $("<button>-</button>").addClass("btn-tarea");
      let botones = $("<div></div>").append(botonCompletada,botonEliminar);
      botonEliminar.click(function(){
      nuevaTarea.remove();
      })
      nuevaTarea.append(titulo, botones);
      $("#tareas").prepend(nuevaTarea);
    })
})