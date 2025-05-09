$(document).ready(function () {
    //Cargamos JSON para poder añadir y leer tareas
    const fs=require("fs"); 
    const ruta='./datos.json';
    let datos= fs.readFileSync(ruta);
    let datosJSON= JSON.parse(datos);
    //Este if es para evitar que aparezca al cargar la página (flex ignora el hidden)
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
    $("confirmar-tarea").click(function(){
        
    })
})