window.alert('Hola, Hildebrando');

const presupuestoInicial = Number(prompt('Por favor ingresa cuanto te pagaron: '));

const almojabanaGaseosa = 15000;
const subwayGaseosa = 23000;
const nada = 0;



window.alert('Este es el menú para comer  antes del viaje:\n 1.almojábana con gaseosa son 15.000 \n 2.un subway con gaseosa 23.000 \n 3. no compraras nada.');

let pedido = confirm('¿Quieres hacer el pedido?: Aceptar/cancelar')

while(pedido == true){

    const option = prompt ('Ingresa la opción que quieres del menú: ');

    if(option === "1"){
        const menuEcconomico = presupuestoInicial - almojabanaGaseosa;
        window.alert('Te va caer mal, llevas mucho en el stand, ahora tienes un saldo de: ' + menuEcconomico);
    }if(option === "2"){
        const menuCarito = presupuestoInicial - subwayGaseosa;
        window.alert('Va llenito mi pa, ahora tienes un saldo de: ' + menuCarito);
    }if(option === "3"){
        const tacano = presupuestoInicial - nada;
        window.alert('Tocara comprar algo en Medellín, ahora tienes un saldo de: ' + tacano);
    }

    pedido = confirm('¿Quieres hacer otro pedido?: Aceptar/Cancelar ');

}













