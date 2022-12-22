let ListaNombreUsuarios = [
{
  Nombre:"Lionel Messi",
  NúmeroDocumento: 10,
  contraseña: 1,
  TipoUsuario: 1  

} ,
{
  Nombre:"Carlos Sebastián",
  NúmeroDocumento: 20,
  contraseña: 1,
  TipoUsuario: 2   
},
{
  Nombre:"Julián Álvarez",
  NúmeroDocumento: 30,
  contraseña: 1,
  TipoUsuario: 1   
},


]




let ListaBilletes = [

  {
    CincoMil:0,
    DiezMil: 0,
    VeinteMil:0,
    CincuentaMil:0,
    CienMil: 0
  }
]


const LogIn = ()=>{
  
  const mensaje=alert("Bienvenido a su cajero virtual, por favor inicie sesión"); 
let Usuario = parseInt(prompt("Ingrese su número de documento"));
let Password= parseInt(prompt("Ingrese su contraseña"));

 for (let i = 0; i < ListaNombreUsuarios.length; i++) {
 let ID =ListaNombreUsuarios[i].NúmeroDocumento
  let NombreUser =ListaNombreUsuarios[i].Nombre
  let TipoUser =ListaNombreUsuarios[i].TipoUsuario
  let contraseña =ListaNombreUsuarios[i].contraseña
  
  if (ID===Usuario && contraseña=== Password){
    alert(`Login exitoso! Bienvenido a tu cajero virtual : ${NombreUser}. `);
  if (TipoUsuario ===2 ){
      alert("Bienvenido administrador")
    }else {
      "Bienvenido cliente"
    }
  }
  else if(ListaNombreUsuarios.length-1 == i) {
      alert("El usuario o contraseña no existen");
    LogIn() 
    return 
  }
    }
}


const CargarCajero = ()=>{

  alert(" se cargara el cajero ingrese el dinero")
 
 let BilletesCinco=0
  let BilletesCien = 0
  let BilletesCincuenta=0
  let BilletesVeinte=0
  let BilletesDiez=0
  
  
  for (let i = 0; i <1 ; i++) {
    
    let ValorBilleteCincoMil= parseInt(prompt("Ingrese el billete de cinco mil"))
    let CantidadBilleteCincoMil= parseInt(prompt("Ingrese la cantidad de billetes de cinco mil"))
    let ValorBilleteDiezMil= parseInt(prompt("Ingrese el billete de diez mil"))
    let CantidadBilleteDiezMil= parseInt(prompt("Ingrese la cantidad de billetes de diez mil"))
    let ValorBilleteVeinteMil= parseInt(prompt("Ingrese el billete de veinte mil"))
    let CantidadBilleteVeinteMil= parseInt(prompt("Ingrese la cantidad de billetes de veinte mil "))
    let ValorBilleteCincuentaMil= parseInt(prompt("Ingrese el billete de cincuenta mil"))
    let CantidadBilleteCincuentaMil= parseInt(prompt("Ingrese la cantidad de billetes de cincuenta mil"))
    let ValorBilleteCienMil= parseInt(prompt("Ingrese el  billete de cien mil"))
    let CantidadBilleteCienMil= parseInt(prompt("Ingrese la cantidad de billetes de cien mil"))
     
  
 
    let TipoBillete = { 
      CincoMil:0,
      DiezMil: 0,
      VeinteMil:0,
      CincuentaMil:0,
      CienMil: 0
    }
    let ValorTotalBilletes=(( ValorBilleteCincoMil*CantidadBilleteCincoMil)+(ValorBilleteDiezMil*CantidadBilleteDiezMil)+(ValorBilleteVeinteMil*CantidadBilleteVeinteMil)+(ValorBilleteCincuentaMil*CantidadBilleteCincuentaMil)+(ValorBilleteCienMil*CantidadBilleteCienMil))
    console.log(ValorTotalBilletes)

    TipoBillete.CincoMil=ValorTotalBilletes 
     ListaBilletes.push (TipoBillete)
  
    TipoBillete.DiezMil=ValorTotalBilletes 
     ListaBilletes.push (TipoBillete)
    
     TipoBillete.VeinteMil=ValorTotalBilletes
    ListaBilletes.push (TipoBillete)
  
    TipoBillete.CincuentaMil=ValorTotalBilletes
    ListaBilletes. push(TipoBillete)
  
    TipoBillete.CienMil=ValorTotalBilletes
    ListaBilletes.push (TipoBillete)
    
      let SumaPorDenominaciónCincomil = (5000*CantidadBilleteCincoMil)
      let SumaPorDenominaciónDiezmil = 10000*CantidadBilleteDiezMil
      let SumaPorDenominaciónVeintemil = (20000* CantidadBilleteVeinteMil)
      let SumaPorDenominaciónCincuentamil = (50000* CantidadBilleteCincuentaMil)
      let SumaPorDenominaciónCienmil = (100000* CantidadBilleteCienMil)
    
      console.log(SumaPorDenominaciónCincomil)
      console.log(SumaPorDenominaciónDiezmil)
      console.log(SumaPorDenominaciónVeintemil)
      console.log(SumaPorDenominaciónCincuentamil)
      console.log(SumaPorDenominaciónCienmil)
}

}

const saldo = ()=>{

  let valorActua=0
  let total=0


  for (let v of ListaBilletes) {
    valorActua=valorActua+v.CincoMil+v.DiezMil+v.VeinteMil+v.CincuentaMil+v.CienMil
    total += valorActua
  }

  console.log(total)
  return total
}
 

const ArrayRetiros=[
  { 
    CincoMil:0,
    DiezMil: 0,
    VeinteMil:0,
    CincuentaMil:0,
    CienMil: 0
  }


]

const retiro = () => {
  if (TotalCajero <= 0) {
    console.log("Cajero sin fondos");
    login();
    return;
  } else {
    const retiroReq = parseInt(
      prompt(
        "Digite la cantidad que desea retirar,  mínimo  $5000 COP "
      )
    );

    console.log("Retiro solicitado: " + retiroReq);
      }
    }

    let saldoCajero=  saldo()
    if(retiroReq<= saldoCajero && retiroReq >=5000 ){

      CantidadRetiro(retiroReq);

    }else{

      alert(" Transacción inválida. Intente de nuevo")
      console.log("Retiro Cancelado por el cajero ")
      login();
    }
    
    const CantidadRetiro = (valor) => {
      const val = [100000, 50000, 20000, 10000, 5000];
    
      let denominacion = 0;
    
      for (let i = 0; i < val.length; i++) {
        const element = val[i];
        denominacion = element;
    
        let saldo = CantidadRetiro();
        let valorInicial = valor - saldo;
    
        let cantidad = parseInt(
          valorInicial > 0 ? valorInicial : valor / denominacion
        );
        
        let valorActualCien = EfectivoCajero[0].Cien;
        let valorActualCincuenta = EfectivoCajero[0].Cincuenta;
        let valorActualVeinte = EfectivoCajero[0].Veinte;
        let valorActualDiez = EfectivoCajero[0].Diez;
        let valorActualCinco = EfectivoCajero[0].Cinco;
         switch (denominacion) {
    
  }
};  
      case 100000:
        if (cantidad <= valoraActualCien) {
          const nuevoValor = valorActualCien - cantidad;
          const totalBilLetes = cantidad * valor;

          if (cantidadRetirada[0].Cien === 0) {
            EfectivoCajero[0].Cien = nuevoValor;
            cantidadRetirada[0].Cien = 0 + cantidad;
          }
        } else if (valorActualCien > 0 && valorInicial >=denominacion) {
          const nuevoValor = 0;
          const totalBilLetes = valorCien * denominacion;
        
          if (cantidadRetirada[0].Cien === 0 ) {
            EfectivoCajero[0].Cien = nuevoValor;
            cantidadRetirada[0].Cien = valorCien;
          }
        }

        break;

      case 50000:
        if (cantidad <= valorActualCincuenta) {
          const nuevoValor = valorActualCincuenta - cantidad;
          const totalBilLetes = cantidad * valor;

          if (cantidadRetirada[0].Cincuenta === 0) {
            EfectivoCajero[0].Cincuenta = nuevoValor;
            CantidadesR
            break;

            case 20000:
              if (cantidad <= valorActualVeinte) {
                const nuevoValor = valorActualVeinte - cantidad;
                const totalBilLetes = cantidad * valor;
      
                if (cantidadRetirada[0].Veinte === 0) {
                  EfectivoCajero[0].Veinte = nuevoValor;
                  cantidadRetirada[0].Veinte = 0 + cantidad;
                }
              } else if (valorActualVeinte > 0) {
                const nuevoValor = 0;
                const totalBilLetes = valorActualVeinte * denominacion;
      
                if (cantidadRetirada[0].Veinte === 0  && valorInicial >=denominacion) {
                  EfectivoCajero[0].Veinte = nuevoValor;
                  cantidadRetirada[0].Veinte = valorActualVeinte;
                }
              }
      
              break;
      
            case 10000:
              if (cantidad <= valorActualDiez) {
                const nuevoValor = valorActualDiez - cantidad;
                const totalBilLetes = cantidad * valor;
      
                if (cantidadRetirada[0].Diez === 0) {
                  EfectivoCajero[0].Diez = nuevoValor;
                  cantidadRetirada[0].Diez
                  break;

      case 5000:
        if (cantidad <= valorActualCinco) {
          const nuevoValor = valorActualCinco - cantidad;
          const totalBilLetes = cantidad * valor;

          if (cantidadRetirada[0].Cinco === 0) {
            EfectivoCajero[0].Cinco = nuevoValor;
            cantidadRetirada[0].Cinco = 0 + cantidad;
          }
        } else if (valorActualCinco > 0 && valorInicial >=denominacion) {
          const nuevoValor = 0;
          const totalBilLetes = valorActualCinco * denominacion;

          if (cantidadRetirada[0].Cinco === 0) {
            EfectivoCajero[0].Cinco = nuevoValor;
            cantidadRetirada[0].Cinco = valorActualCinco;
          }
        }

      default:
        break;
    }
  }

  for( let u of cantidadRetirada){

    let cinco= u.Cinco;
    let diez= u.Diez;
    let veinte= u.Veinte;
    let cincuenta= u.Cincuenta;
    let cien= u.Cien;

    console.log(`Se entraga cantidad de Billetes de 100 COP : ${cien} por valor de : ${cien*100000} `  )

    for( let u of cantidadRetirada){

      let cinco= u.Cinco;
      let diez= u.Diez;
      let veinte= u.Veinte;
      let cincuenta= u.Cincuenta;
      let cien= u.Cien;
  
      console.log(`Cajero entrega los billetes de 100 COP : ${cien} por valor de : ${cien*100000} `  )
  
      console.log(`Cajero entrega los billetes de 50 COP : ${cincuenta}   por valor de $:  ${cincuenta*50000}` )
      console.log(`Cajero entrega los billetes de 20 COP : ${veinte} por valor de $: ${veinte*20000}` )
      console.log (`Cajero entrega los billetes de 10 COP : ${diez} por valor de $: ${diez*10000}` )
      console.log (`Cajero entrega los billetes de 5 COP : ${cinco} por valor de $: ${cinco*5000}` )
    }
  
  
   let totalRetirado=CantidadRetiro();
    console.log("Valor Retirado y entregado : " + totalRetirado )
  };

































  /* /Para la constante "mensaje", aparecerá una ventana emergente preguntando por la cantidad de productos (acá puedes usar cantidad de usuarios). "Confirm" generará un botón de confirmar y cancelar para seguir con la operación. Eso indíca que es un booling, que se ejecuta solo si es Verdadero   
  const mensaje = confirm("Digite la cantidad de productos a pagar");
//la variable "cantidad_producto" equivale a un "ParseInt" que permite comprender números reales como tipos, es decir, pasa el formato de texto a número.
//Ahora bien, la función "prompt" permite que se abra la caja de texto para insertar los valores. En este caso, la cantidad de productos. Recuerda que puedes cambiar productos por usuarios.
let cantidad_productos = parseInt(prompt());
//Con este arreglo, lo que se busca es almacenar la información del nombre del producto. Una variable que veremos adelante.(línea 14) 
//let lista_nombre = []

//Con el condicional "for("")"" lo que se busca es empezar a ejecutar la acción de almacenamiento y relación entre precio y producto.
//De este modo, la variable "i" equivale a 0 porque es el punto de partida, posteriormente, si "i" es menor o igual a la "cantidad_de producto"(ver linea 5), entoncs el valor de 0 aumentará. 
//for (let i = 0; i <= cantidad_productos; i++) {
  //De este modo, la constante "mensaje_nombre" aparecerá siempre con el mensaje "Digite el nombre del producto" y una casilla de confirmar(ver línea 1)
    const mensaje_nombre = confirm("Digite el nombre del producto");
    //Una vez confirmada la acción, se ejecuta un cuadro de texto "prompt" que equivale a la variable "nombre_producto"(poner el nombre del producto(puedes poner el del usuario))

    let nombre_producto = prompt();

    lista_nombre.push();

}
 */

 // if (dineroEnCajero) {
   // const retiroString = prompt(" Por favor, digite la cantidad que desea retirar")
    //const retiro = parseInt(retiroString);
    //console.log(retiro);






  ///  if (dineroEnCajero) {
  ///const IngresoDinero = prompt("Por favor ingrese la cantidad de dinero para recargar el cajero")
  ///const Ingreso = ParseInt (IngresoDinero)
///}
   /// const EntregaCliente = [
     /// ListaBilletes
    ///]
    
  
///    let dineroEnCajero = 0,
 /// ListaBilletes.forEach(dinero => {
    ///dineroEnCajero= ValorTotalBilletes
  ///})
  ///console.log(dineroEnCajero)

///} else {"Cajero en mantenimiento, vuelva pronto"}
//}
