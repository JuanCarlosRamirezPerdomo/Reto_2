function traerInformacion(){
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }

    });
}

function pintarRespuesta(items){
    

    let myTable ="<table>";
    $("#resultado").empty();
    $("#resultado").append("<table>");
    $("#resultado").append("<caption>Tabla de Bicicletas</caption>");
    $("#resultado").append("<tr><th>codigo</th><th>Marca</th><th>Modelo</th><th>Categoria</th><th>Nombre</th></tr>");
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
   
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Bicicleta Guardada Satisfactoriamente")
        }
    });
}
function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Informacion Actualizada Satisfactoriamente")
        }
    });
}
function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/bike/bike",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("La Informacoin se ha Eliminado")
        }
    });
}


//******************************************************************************************************************************************
//******************************************************************************************************************************************* 
//******************************************************************************************************************************************
//******************************************************************************************************************************************* 
//******************************************************************************************************************************************
//******************************************************************************************************************************************* 

function traerInformacionCliente(){
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta1){
            console.log(respuesta1);
            pintarRespuestaCliente(respuesta1.items);
        }

    });
}

function pintarRespuestaCliente(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElementoCliente("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoCliente").append(myTable);

}
function guardarInformacionCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultadoCliente").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Cliente guardado satisfactoriamente")
        }
    });
}


function editarInformacionCliente(){
    let myData={
        id:$("#idCliente").val(),
        name:$("#nameCliente").val(),
        email:$("#email").val(),
        age:$("#age").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultadoCliente").empty();
            $("#idCliente").val("");
            $("#nameCliente").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacionCliente();
            alert("Informacion Actualizada Satisfactoriamente")
        }
    });
}

function borrarElementoCliente(idElementoCliente){
    let myData={
        id:idElementoCliente
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoCliente").empty();
            traerInformacionCliente();
            alert("Cliente Eliminado Satisfactoriamente")
        }
    });
}

//******************************************************************************************************************************************
//******************************************************************************************************************************************* 
//******************************************************************************************************************************************
//******************************************************************************************************************************************* 
//******************************************************************************************************************************************
//******************************************************************************************************************************************* 


function traerInformacionMensage(){
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta1){
            console.log(respuesta1);
            pintarRespuestaMensage(respuesta1.items);
        }

    });
}

function pintarRespuestaMensage(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElementoMensage("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensage").append(myTable);

}
function guardarInformacionMensage(){
    let myData={
        id:$("#idMensage").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultadoMensage").empty();
            $("#idMensage").val("");
            $("#messagetext").val("");
            traerInformacionMensage();
            alert("Mensage guardado satisfactoriamente")
        }
    });
}


function editarInformacionMensage(){
    let myData={
        id:$("#idMensage").val(),
        messagetext:$("#messagetext").val(),
        
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta1){
            $("#resultadoMensage").empty();
            $("#messagetext").val("");
            traerInformacionMensage();
            alert("Mensage Actualizado Satisfactoriamente")
        }
    });
}

function borrarElementoMensage(idElementoCliente){
    let myData={
        id:idElementoCliente
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gb3e6339e23e649-databasesretos.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultadoMensage").empty();
            traerInformacionMensage();
            alert("Mensage Eliminado Satisfactoriamente")
        }
    });
}