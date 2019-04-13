$(document).ready(function () {
    $("#btnregistrar").click(function (e) { 
        e.preventDefault();
        registrar();
    });

});

function registrar()
 {
     var nombre =$("#txtnombre").val();
     var correo =$("#txtcorreo").val();
     var fecha =$("#fecha").val();
     var pais =$("#cbopais").val();
     var sexo =$("input:radio[name=rbsexo]:checked").val();
     
    //Creacion de fila
    var fila = "";
    fila+="<tr>";
    fila+="<td>"+nombre+"</td>";
    fila+="<td>"+correo+"</td>";
    fila+="<td>"+fecha+"</td>";
    fila+="<td>"+pais+"</td>";
    fila+="<td>"+sexo+"</td>";
    fila+="<tr>";

    //Agregar fila a tbody

    $("#tbldatos").append(fila);


     console.log("Nombre:  "+nombre);
     console.log("Correo:  "+correo);
     console.log("Fecha Nacimiento:  "+fecha);
     console.log("País:  "+pais);
     console.log("Sexo:  "+sexo);
   }