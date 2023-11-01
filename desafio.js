let nome = "Capitão América"
let experiencia = 8.270
let nivel = ""

if (experiencia < 1.000) {
    nivel = "Ferro"
}
else if (experiencia > 1.001 && experiencia <= 2.000) {
    nivel = "Bronze"
}
else if (experiencia > 2.001 && experiencia <= 5.000) {
    nivel = "Prata"
}
else if (experiencia > 5.001 && experiencia <= 6.000) {
    nivel = "Ouro"
}
else if (experiencia > 6.001 && experiencia <= 7.000) {
    nivel = "Platina"
}
else if (experiencia > 7.001 && experiencia <= 9.000) {
    nivel = "Ascendente"
}
else if (experiencia > 9.001 && experiencia <= 10.000) {
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}
console.log("O Herói de nome", nome, "está no nível", nivel)