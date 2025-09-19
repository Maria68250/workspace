const container = document.getElementById('numeros')


function pares(){
    for (let i = 1; i <= 100; i++)  {
        if (i % 2 === 0) {
            const elemento = document.createElement('hr');
            elemento.textContent = i + ' ';
            container.appendChild(elemento);
        }   
    }
}

