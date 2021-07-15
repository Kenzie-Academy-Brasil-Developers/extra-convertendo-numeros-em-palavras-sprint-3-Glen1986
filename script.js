const buton = document.getElementById("button");
const body = document.getElementById("body");
const conteudo = document.createElement("div");
body.appendChild(conteudo);

const units = [
  "",
  "One ",
  "Two ",
  "Tree ",
  "For ",
  "Five ",
  "Six ",
  "Seven ",
  "Eigth ",
  "Nine ",
  "Ten ",
  "Eleven ",
  "Twelve ",
  "Thirteen ",
  "Forteen ",
  "Fivteen ",
  "Sixteen ",
  "Seventeen ",
  "Eighteen ",
  "Nineteen ",
  "Twenty ",
];
const decenas = [
  "",
  "ten ",
  "twenty ",
  "thirty ",
  "forty ",
  "fifty ",
  "sixty ",
  "seventy ",
  "eighty ",
  "ninety ",
];

const cents = [
  "",
  "oneHundred ",
  "twoHundred ",
  "threeHundred ",
  "forHundred ",
  "fiveHundred ",
  "sixHundred ",
  "sevenHundred ",
  "eightHundred ",
  "nineHunred ",
];
let inp = 0;
let input = 0;
let frase = [];

button.addEventListener("click", function () {
  const valores = document.getElementById("number").value;
  for (let i = 0; i < valores; i++) {
    inp = i + 1;
    input = inp.toString();
    let unidad = units.at(input);
    frase.push(unidad);
    conteudo.innerText = frase;

    if (input > 20 && input < 99) {
      let idex = input.toString().split("");
      let decena = decenas.at(idex[0]);
      let unidad = units.at(idex[1]);
      let totalUnidades = `${decena}` + `${unidad}`;
      frase.push(totalUnidades);
      conteudo.innerText = frase;
      console.log(totalUnidades);
    }
  }
  /*  if (input > 99 && input < 120) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    frase.push(totalCent);
    console.log(totaCent);
    conteudo.innerText = frase;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 120 && input < 199) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  /*if (input > 199 && input <= 220) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 220 && input < 299) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 299 && input <= 320) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 320 && input < 399) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 399 && input <= 420) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 420 && input < 499) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 499 && input <= 520) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 520 && input < 599) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 599 && input <= 620) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 620 && input < 699) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 699 && input <= 720) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 720 && input < 799) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 799 && input <= 820) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 820 && input < 899) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 899 && input <= 920) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let valorDecena = idex[1].concat(idex[2]);
    let decena = units.splice(valorDecena, 1);
    let totalCent = `${centena}` + `${decena}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }
  if (input > 920 && input < 999) {
    let idex = input.toString().split("");
    //   console.log(idex);
    let centena = cents.splice(idex[0], 1);
    let decena = decenas.splice(idex[1], 1);
    let unidad = units.splice(idex[2], 1);
    let totalCent = `${centena}` + `${decena}` + `${unidad}`;
    //console.log(totalCent);
    conteudo.innerText = totalCent;
    //conteudo.innerText = `${decena}` + `${unidad}`;
    //conteudo.innerText = total;
  }

  button.disabled = true;*/
});
//`${decens[i]}`
