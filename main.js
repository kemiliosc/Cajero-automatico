
var cuentas = [
    {nombre:'Mali', saldo:200, password:"123" },
    {nombre:'Gera', saldo:220, password:"123" },
    {nombre:'Maui', saldo:210, password:"123" },
]


document.querySelector("#ingresar").onclick = () => {

    /*Asignación de variables de validacion*/

    const campoUsuario = document.querySelector("#user").value;
    const campoPassword = document.querySelector("#password").value;
    buscador = cuentas.find((elemento) => elemento.nombre == campoUsuario )

    
    /*Condición para si el usuario y contraseña son correctas*/
    if ( buscador == undefined){
        alert("Por favor ingrese un valor correcto")
        return
    }
    if (campoUsuario == buscador.nombre && campoPassword == buscador.password){
        pantallaSaldos()
    }else{
        alert("Los datos no son correctos, favor de validar")
    }
}


/* Aqui la pantalla cambia */

function pantallaSaldos(){

    document.querySelector("#botones" && "#informacion").innerHTML =
    `
    <header>
    <h1>Bienvenido a su cajero automático </h1>
    <h2>Por favor, seleccione la opción deseada</h2>

    <div id="botones2">
     
    <button class="botones" id="csaldo" onclick="saldo()" >Consultar Saldo</button>
    <button class="botones" id="ingresarSaldo">Depositar</button>
    <button class="botones" id="retirarSaldo">Retirar</button>
    <button class="botones" id="regresar">Regresar</button>
    <button class="botones" id="salir">Salir</button></div>
    
    <section id="bienvenida2">
<div id="calculadora">
<div id="banca">
    <div class="bancadd">
      <h3>Banca digital</h3>
    </div>
    <div class="pantalla">
        <form name="calculator" id="calculator">
       <input type="number" name="ans" value="" autocomplete="off" placeholder='Ingrese la cantidad' class='inputDatos' id='cantidadDeposito'  >
      
    </div>
        <div class="numes">
            <div><input type="button" value="7" class="botonc" onclick="document.calculator.ans.value+='7'"></div>
            <div><input type="button" value="8" class="botonc" onclick="document.calculator.ans.value+='8'"></div>
            <div><input type="button" value="9" class="botonc" onclick="document.calculator.ans.value+='9'"></div>
        </div>
        <div class="numes">
            <div><input type="button" value="4" class="botonc" onclick="document.calculator.ans.value+='4'"></input></div>
            <div><input type="button" value="5" class="botonc" onclick="document.calculator.ans.value+='5'"></input></div>
            <div><input type="button" value="6" class="botonc" onclick="document.calculator.ans.value+='6'"></input></div> 
            </div>
        <div class="numes">
            <div><input type="button" value="1" class="botonc" onclick="document.calculator.ans.value+='1'"></input></div>
            <div><input type="button" value="2" class="botonc" onclick="document.calculator.ans.value+='2'"></input></div>
            <div><input type="button" value="3" class="botonc" onclick="document.calculator.ans.value+='3'"></input></div>
            <div><input type="button" value="0" class="botonc" onclick="document.calculator.ans.value+='0'"></input></div>  
        </div>
    </form>
</div>
</section>

    `
    document.querySelector("#ingresar").style.display= 'none'
    document.querySelector("#cantidadDeposito").style.display= 'none'
    

    /* Aqui digo que funcion van a ejecutar los botones cuando sean presionados */

    document.querySelector("#csaldo").onclick = () => {
        saldo()
    }

    document.querySelector("#ingresarSaldo").onclick = () => {
        deposito()
    }

    document.querySelector("#retirarSaldo").onclick = () => {
        retiro()
    }

    document.querySelector("#regresar").onclick = () => {
        atras()
    }

    document.querySelector("#salir").onclick = () => {
        window.location = "index.html"
    }
}

function saldo(){
    document.querySelector(".pantalla").innerHTML +=
    "<div id='cuenta'> <p> Hola " + buscador.nombre + ", tu saldo es de: $" + buscador.saldo + "</p> <p> Para depositar o retirar alguna cantidad, por favor capture el valor deseado y presione el botón correspondiente</div>"
    document.querySelector("#csaldo").style.display= 'none'
    document.querySelector("#cantidadDeposito").style.display= 'inline'
}


function deposito (){

    /* Creamos la condición para cunado presionemos el boton de ingresar saldo */
    saldo()
    document.querySelector("#ingresarSaldo").onclick = () => {
        const montoDeposito = document.querySelector("#cantidadDeposito").value
        let resultadoDeposito = parseFloat(buscador.saldo) + parseFloat(montoDeposito)

        if (resultadoDeposito > 990){
            alert("Las politicas del banco no permiten tener un saldo superior a $990.00")

            pantallaSaldos()
        }else{

            buscador.saldo = resultadoDeposito
            pantallaSaldos()
            saldo()
             }
    }

}


function retiro() {

    /*Muestra la instrucción para retirar*/
    saldo()

    /*Ejecuta según lo capturado*/
    document.querySelector("#retirarSaldo").onclick = ()=> {
        const montoRetiro = document.querySelector(".inputDatos").value
        let resultadoRetiro = parseFloat(buscador.saldo) - parseFloat(montoRetiro)

        if (resultadoRetiro < 10){

            alert("No es posible dejar menos de 10 pesos")
            pantallaSaldos()
            saldo()

        }else{
            buscador.saldo = resultadoRetiro
            pantallaSaldos()
            saldo()

        }

    }
}

function atras(){
    pantallaSaldos()
}