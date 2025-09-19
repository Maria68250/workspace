function verNombre() {
    let nombre = document.getElementById("nombre").innerHTML="Maria";
}

function verNumeros() {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listaNumeros = document.getElementById("numeros");

    for (let i = 0; i < numeros.length; i++) {
        let elemento = document.createElement("li");
        elemento.innerHTML = numeros[i];
        listaNumeros.appendChild(elemento);
    }
}

function cambiarColorFondo() {
    const colores = ["rgba(129, 163, 207, 1)", "#68507cff", "#dfd57eff", "#b67595ff", "#a4d9e9ff", "#af7adbff"];
    const colorAleatorio = Math.floor(Math.random() * colores.length);
    const color = colores[colorAleatorio];
    document.body.style.backgroundColor = color;
}

