function Verificar() {
    if (document.getElementById('Nombre').value == 'Admin' && ('Contra').value == '1234') {
        location.href = "principal.html";
    }
    else {
        alert("Algo salio mal");
    }
}


