const buton = document.getElementById("button");
const body = document.getElementById("body");
const conteudo = document.createElement("div");
body.appendChild(conteudo);

const units = [
  "",
  " One",
  " Two",
  " Three",
  " Four",
  " Five",
  " Six",
  " Seven",
  " Eight",
  " Nine",
  " Ten",
  " Eleven",
  " Twelve",
  " Thirteen",
  " Fourteen",
  " Fifteen",
  " Sixteen",
  " Seventeen",
  " Eighteen",
  " Nineteen",
  " Twenty",
];
const decenas = [
  "",
  " Ten",
  " Twenty",
  " Thirty",
  " Forty",
  " Fifty",
  " Sixty",
  " Seventy",
  " Eighty",
  " Ninety",
];

const cents = [
  "",
  " OneHundred",
  " TwoHundred",
  " ThreeHundred",
  " ForHundred",
  " FiveHundred",
  " SixHundred",
  " SevenHundred",
  " EightHundred",
  " NineHunred",
];
const miles = [
  "",
  " OneThousand",
];

let inp = 0;
let input = 0;
let frase = [];

button.addEventListener("click", function () {
  const valores = document.getElementById("number").value;
  for (let i = 0; i < valores; i++) {
    inp = i + 1;
    input = inp.toString();
    if(input <= 20){
    let unidad = units.at(input);
    frase.push(unidad);
    conteudo.innerText = frase;
    }
    if (input > 20 && input <= 99) {
      let idex = input.toString().split("");
      let decena = decenas.at(idex[0]);
      let unidad = units.at(idex[1]);
      let totalUnidades = `${decena}` + `${unidad}`;
      frase.push(totalUnidades);
      conteudo.innerText = frase;
    }
    if(input > 99 && input <= 110){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
    if(input > 110 && input <= 120){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    

     /* let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      */ let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
      }
   if(input > 120 && input <= 210){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
    if(input > 210 && input <= 220){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    
      let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
    ///////////////////////////////////////////////
   if(input > 220 && input <= 310){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
 if(input > 310 && input <= 320){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    
      let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
///////////////////////////////////////////////
   if(input > 320 && input <= 410){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
 if(input > 410 && input <= 420){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    
      let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
///////////////////////////////////////////////
   if(input > 420 && input <= 510){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
 if(input > 510 && input <= 520){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    
      let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
///////////////////////////////////////////////
   if(input > 520 && input <= 610){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
 if(input > 610 && input <= 620){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    
      let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
    ///////////////////////////////////////////////
   if(input > 620 && input <= 710){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
 if(input > 710 && input <= 720){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    
      let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
    ///////////////////////////////////////////////
   if(input > 720 && input <= 810){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
 if(input > 810 && input <= 820){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    
      let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
///////////////////////////////////////////////
   if(input > 720 && input <= 810){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
 if(input > 910 && input <= 920){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena =  idex[1].concat(idex[2])   
      let decenas = units.at(decena)    
      let totalCentenas = `${centena}` +`${decenas}` ;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
///////////////////////////////////////////////
   if(input > 920 && input < 1000){
      let idex = input.toString().split("");
      let centena = cents.at(idex[0]);
      let decena = decenas.at(idex[1]);
      let unidad = units.at(idex[2]);
      let totalCentenas = `${centena}` +`${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
       }
    if(input > 999 && input <= 1010){
      let idex = input.toString().split("");
      let mil = miles.at(idex[0]);
      let centena = cents.at(idex[1]);
      let decena = decenas.at(idex[2]);
      let unidad = units.at(idex[3]);
      let totalCentenas = `${mil}` + `${centena}` + `${decena}` + `${unidad}`;
      frase.push(totalCentenas);
      conteudo.innerText = frase;
    }
  }
});
//`${decens[i]}`
