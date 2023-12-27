let nome = "Héroi"
let Xp = 1000
let nivel = "" 

if (Xp < 1000){
    nivel = "Ferro"
} else if (Xp >= 1001) {
    nivel = "Bronze"
} else if (Xp >= 2001) {
    nivel = "Prata"
} else if (xp >= 5000) {
    nivel = "Ouro"
} else if (xp >= 5000) {
    nivel = "Platina"
} else if (xp >= 7000){
    nivel = "Ascendente"
} else if (xp >= 9000) {
    nivel = "Imortal"
} else if (xp >=10000){
    nivel = "Radiante"
}
console.log ("O Herói de nome " + nome + " está no nível " + nivel)