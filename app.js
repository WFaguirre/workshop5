window.alert('Hola, Hildebrando');


let presupuestoInicial = Number(prompt('Por favor ingresa cuanto te pagaron: '));

let almojabanaGaseosa = 15000;
let subwayGaseosa = 23000;
let nada = 0;

let menuEcconomic = presupuestoInicial - almojabanaGaseosa;

let menuExpenssive = presupuestoInicial - subwayGaseosa;

let cheapskate = presupuestoInicial - nada;


let option = prompt ('Este es el menú para comer  antes del viaje:\n 1.almojábana con gaseosa son 15.000 \n 2.un subway con gaseosa 23.000 \n 3. no compraras nada.');


if(option === "1"){
    window.alert('Te va caer mal, llevas mucho en el stand, ahora tienes un saldo de: ' + menuEcconomic);
    let costWifi = Number(prompt('Ingresa el costo del wifi: '));
    let balanceWifiEcco = menuEcconomic - costWifi;
    window.alert('Tienes un saldo de: ' + balanceWifiEcco);
}if(option === "2"){
    window.alert('Va llenito mi pa, ahora tienes un saldo de: ' + menuExpenssive);
    let costWifi = Number(prompt('Ingresa el costo del wifi: '));
    let balanceWifiExpend = menuExpenssive - costWifi;
    window.alert('Tienes un saldo de: ' + balanceWifiExpend);
}if(option === "3"){
    window.alert('Tocara comprar algo en Medellín, ahora tienes un saldo de: ' + cheapskate);
    let costWifi = Number(prompt('Ingresa el costo del wifi: '));
    let balanceWifiCheapskate = cheapskate - costWifi;
    window.alert('Tienes un saldo de: ' + balanceWifiCheapskate);
}

let myHeight = 60;
let myLong = 40;
let myWidth = 20;

let rulesHeight = 55;
let rulesLong = 40;
let rulesWidth = 20;

let height = Math.min(rulesHeight/myHeight);
let long = Math.min(rulesLong/myLong);
let width = Math.min(rulesWidth/myWidth);

let newHeight = myHeight*height;
let newLong = myLong*long;
let newWidth = myWidth*width;

window.alert('La nueva dimensión de alto de maleta es: ' + newHeight + ' cm');
window.alert('La nueva dimensión de largo de maleta es: ' + newLong + ' cm');
window.alert('La nueva dimensión de ancho de maleta es: ' + newWidth + ' cm');




let saveRed = [];

let nameWifi = prompt('Digita el nombre del wifi: ');

saveRed.push(nameWifi);

let passwordWifi = prompt('Digita la contraseña binaria del wifi: ');

function converterBinary(binary) {
    var groups = binary.match(/.{1,8}/g);

    var letters = "";

    for(var i = 0; i < groups.length; i++){
        letters += String.fromCharCode(parseInt(groups[i], 2));
    }

    return letters;
}

let newWifi = converterBinary(passwordWifi);

window.alert('La contraseña del wifi es: ' + newWifi);

let word = "Taxi me puede llevar al hotel mariposas amarillas";


function newWordTotal (){
    let newWorda = word.replace(/a/g,"i");

    let newWorde = newWorda.replace(/e/g,"i");

    let newWordo = newWorde.replace(/o/g,"i");

    let newWordu = newWordo .replace(/u/g,"i");

    return newWordu;
}

window.alert(newWordTotal());


function randomGame(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numberRandomDriver = randomGame(1, 3);
let numberRandomHilde = Number(prompt('Hildebrando, elige qué deseas sacar:\n 1. Piedra\n 2. Papel\n 3. Tijeras'));

let messageResult;

let costWifi = 50000;

let balanceWifiEcco = menuEcconomic - costWifi;

let balanceWifiExpend = menuExpenssive - costWifi;

let balanceWifiCheapskate = cheapskate - costWifi;

if (numberRandomDriver === numberRandomHilde) {
    messageResult = 'Hay empate';
    if (option == "1"){
        window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
    } if(option == "2") {
        window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend);
    } if(option == "3") {
        window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
    }
} else if ((numberRandomDriver === 1 && numberRandomHilde === 3) || 
           (numberRandomDriver === 2 && numberRandomHilde === 1) ||
           (numberRandomDriver === 3 && numberRandomHilde === 2)){
            messageResult = 'Hildebrando ha perdido';
            if (option == "1"){
                let costTaxi = menuEcconomic - 300000; 
                window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
            } if(option == "2") {
                let costTaxi = menuExpenssive - 300000; 
                window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
            } if(option == "3") {
                let costTaxi = cheapskate - 300000; 
                window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
            }
} else {
    messageResult = 'Hildebrando ha ganado';
    if (option == "1"){
        window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
    } if(option == "2") {
        window.alert('Hildebrando tiene un saldo de: '+ balanceWifiExpend);
    } if(option == "3") {
        window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
    }
}

switch (numberRandomDriver) {
    case 1:
        window.alert(`El taxista ha sacado piedra. ${messageResult}`);
        break;
    case 2:
        window.alert(`El taxista ha sacado papel. ${messageResult}`);
        break;
    case 3:
        window.alert(`El taxista ha sacado tijeras. ${messageResult}`);
        break;
    default:
        window.alert('Ocurrió un error.');
}

let dressCode = prompt("¿Que color de vestimenta llevara hoy?: \n1.amarillo \n2.verde \n3.roja \n4.azul");


switch(dressCode) {

    case "1":
        window.alert('Has elegido el código de vestimenta amarillo,la piscina huele algo raro...');
        let yellowDesition = confirm('¿Quieres ingresar a la piscina?: "Aceptar(si)/Cancelar(no)"');
        if(yellowDesition == true){
            window.alert('Hildebrando se siente ahogado, demasiado cloro, Hildebrando ha muerto...');
            if(messageResult == 'Hay empate'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }if(messageResult == 'Hildebrando ha perdido'){
                if (option == "1"){
                    let costTaxi = menuEcconomic - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "2") {
                    let costTaxi = menuExpenssive - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "3") {
                    let costTaxi = cheapskate - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                }
 
            } if(messageResult == 'Hildebrando ha ganado'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }
        } else {
            if(messageResult == 'Hay empate'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            } if(messageResult == 'Hildebrando ha perdido'){
                if (option == "1"){
                    let costTaxi = menuEcconomic - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "2") {
                    let costTaxi = menuExpenssive - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "3") {
                    let costTaxi = cheapskate - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                }
 
            } if(messageResult == 'Hildebrando ha ganado'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend);
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }
            window.alert('Enhorabuena, no ha pasado nada, Hildebrando sigue disfrutando');
        }
        break;

    case "2":
        window.alert('Caminata y agua en el camino: ');
        let greenDesition = confirm('¿Eliges hacer la caminata?: "Aceptar(si)/Cancelar(no)"');
        if(greenDesition == true){
            if(messageResult == 'Hay empate'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }if(messageResult == 'Hildebrando ha perdido'){
                if (option == "1"){
                    let costTaxi = menuEcconomic - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "2") {
                    let costTaxi = menuExpenssive - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "3") {
                    let costTaxi = cheapskate - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                }
 
            } if(messageResult == 'Hildebrando ha ganado'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend);
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }
            window.alert('Una caminata espectacular, Hildebrando ha conocido una cascada hermosa y se tomo fotos');
        } else {
            if(messageResult == 'Hay empate'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend);
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }if(messageResult == 'Hildebrando ha perdido'){
                if (option == "1"){
                    let costTaxi = menuEcconomic - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "2") {
                    let costTaxi = menuExpenssive - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "3") {
                    let costTaxi = cheapskate - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                }
 
            } if(messageResult == 'Hildebrando ha ganado'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }
            window.alert('Hildebrando llego hasta cierto punto...se devolvio solo... y se perdió en la noche...');
        }
        break;
    
    case "3":
        window.alert('Actividades en la playa: ');
        let redDesition = prompt('¿Eliges jugar en la playa, actividad en el mar o tomar unos cocteles en la playa?:\n 1.Jugar voleibol \n2.Nadar en el mar \n 3.Tomar cocteles');
        if(redDesition == "1"){
            if(messageResult == 'Hay empate'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }if(messageResult == 'Hildebrando ha perdido'){
                if (option == "1"){
                    let costTaxi = menuEcconomic - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "2") {
                    let costTaxi = menuExpenssive - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "3") {
                    let costTaxi = cheapskate - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                }
 
            } if(messageResult == 'Hildebrando ha ganado'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }
            window.alert('Juega voleibol en la playa  y la pasa genial');
        }if(redDesition == "2") {
            if(messageResult == 'Hay empate'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend);
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }if(messageResult == 'Hildebrando ha perdido'){
                if (option == "1"){
                    let costTaxi = menuEcconomic - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "2") {
                    let costTaxi = menuExpenssive - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "3") {
                    let costTaxi = cheapskate - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                }
 
            } if(messageResult == 'Hildebrando ha ganado'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }
            window.alert('Hidelbrando nada en el mar y monta moto');
        }if(redDesition == "3"){
            if(messageResult == 'Hay empate'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend );
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }if(messageResult == 'Hildebrando ha perdido'){
                if (option == "1"){
                    let costTaxi = menuEcconomic - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "2") {
                    let costTaxi = menuExpenssive - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                } if(option == "3") {
                    let costTaxi = cheapskate - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ costTaxi);
                }
 
            } if(messageResult == 'Hildebrando ha ganado'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiEcco);
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  balanceWifiExpend);
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ balanceWifiCheapskate);
                }
            }
            window.alert('se pone a tomar cocteles mientras descansa, de pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia. (terminan las vacaciones)');
        }
        break;
    
    case "4":
        window.alert('Actividades dentro del hotel: ');
        let  blueDesition = prompt('¿Que actividad dentro el hotel desea hacer Hildebrando:\n 1.Jugar bingo\n 2.Bailar\n 3.Casino y apuestas ?');
        if(blueDesition == "1"){
            window.alert('Hildebrando ha jugado bingo y ha ganado '+ 250000);
            if(messageResult == 'Hay empate'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ (balanceWifiEcco + 250000));
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  (balanceWifiExpend +250000));
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ (balanceWifiCheapskate+ 250000));
                }
            }if(messageResult == 'Hildebrando ha perdido'){
                if (option == "1"){
                    let costTaxi = menuEcconomic - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ (costTaxi + 250000 ));
                } if(option == "2") {
                    let costTaxi = menuExpenssive - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ (costTaxi + 250000));
                } if(option == "3") {
                    let costTaxi = cheapskate - 300000; 
                    window.alert('Hildebrando tiene un saldo de: '+ (costTaxi + 250000));
                }
 
            } if(messageResult == 'Hildebrando ha ganado'){
                if (option == "1"){
                    window.alert('Hildebrando tiene un saldo de: '+ (balanceWifiEcco + 250000));
                } if(option == "2") {
                    window.alert('Hildebrando tiene un saldo de: '+  (balanceWifiExpend + 250000));
                } if(option == "3") {
                    window.alert('Hildebrando tiene un saldo de: '+ (balanceWifiCheapskate + 250000));
                }
            }
            }if(blueDesition == "2"){
                window.alert("Hildebrando baila, y la pasa muy bien")
                if(messageResult == 'Hay empate'){
                    if (option == "1"){
                        window.alert('Hildebrando tiene un saldo de: '+ (balanceWifiEcco + 250000));
                    } if(option == "2") {
                        window.alert('Hildebrando tiene un saldo de: '+  (balanceWifiExpend +250000));
                    } if(option == "3") {
                        window.alert('Hildebrando tiene un saldo de: '+ (balanceWifiCheapskate+ 250000));
                    }
                }if(messageResult == 'Hildebrando ha perdido'){
                    if (option == "1"){
                        let costTaxi = menuEcconomic - 300000; 
                        window.alert('Hildebrando tiene un saldo de: '+ (costTaxi + 250000 ));
                    } if(option == "2") {
                        let costTaxi = menuExpenssive - 300000; 
                        window.alert('Hildebrando tiene un saldo de: '+ (costTaxi + 250000));
                    } if(option == "3") {
                        let costTaxi = cheapskate - 300000; 
                        window.alert('Hildebrando tiene un saldo de: '+ (costTaxi + 250000));
                    }
     
                } if(messageResult == 'Hildebrando ha ganado'){
                    if (option == "1"){
                        window.alert('Hildebrando tiene un saldo de: '+ (balanceWifiEcco + 250000));
                    } if(option == "2") {
                        window.alert('Hildebrando tiene un saldo de: '+  (balanceWifiExpend + 250000));
                    } if(option == "3") {
                        window.alert('Hildebrando tiene un saldo de: '+ (balanceWifiCheapskate + 250000));
                    }
                }

            }if(blueDesition == "3") {
                window.alert('Hildebrando aposto todo en este momento no tiene saldo y solo le queda sus pasajes...');
            }
        }
