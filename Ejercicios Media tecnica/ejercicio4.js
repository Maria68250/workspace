
function nombre(){
    let miNombre = document.getElementById('miNombre')

    
    let primerNombre = document.createElement("span");
    let apellido = document.createElement ('i');

    primerNombre.innerHTML = "Maria ";
    apellido.innerHTML = "Martinez";
    miNombre.appendChild(primerNombre);
    primerNombre.appendChild(apellido);
    
    }

