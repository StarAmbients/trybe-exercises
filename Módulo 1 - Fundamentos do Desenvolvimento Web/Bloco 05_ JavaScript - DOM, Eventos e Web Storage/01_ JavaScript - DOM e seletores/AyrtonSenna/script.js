document.getElementsByClassName("lenda");
document.getElementsByClassName("lenda")[0];

document.getElementsByClassName("piloto-f1-atual")[2].innerText = "Stroll";

let pilotosDeF1 = document.getElementsByClassName("piloto-f1-atual");

for (let i = 1; i < pilotosDeF1.length; i += 1) {
  // traz todos os paragrafos:
  console.log(pilotosDeF1[i]);
  // muda o texto (nome) de cada um dos pilotos:
  pilotosDeF1[i].innerText = "Lewis Hamilton";
}

document.getElementsByTagName("p");
document.getElementsByTagName("div");
document.getElementsByTagName("span");

document.getElementsByTagName("span")[0].innerText = "Carlos Sainz";

document.getElementById("Dona");
document.querySelector("#Dona");
// ambos retornam o mesmo valor

document.querySelector("p");
// retorna o primeiro tag paragrafo que encontra

document.querySelector(".pilotos-sem-titulo p");
// retorna o primeiro paragrafo que encontra como filho da classe especificada

document.querySelector(".piloto-f1-atual");
// retorna a primeira ocorrencia de piloto-f1-atual

document.querySelector(".pilotos-sem-titulo .piloto-f1-atual");
// retorna a primeira ocorrencia de piloto-f1-atual dentro da classe pilotos-sem-titulo
