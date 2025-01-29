var copyIcon = document.querySelectorAll(".icon");
var copyText = document.querySelectorAll(".txt");

copyIcon.forEach((item, i) => {
    item.addEventListener('click', function() {
        // Seleciona a URL do campo
        copyText[i].select();
        copyText[i].setSelectionRange(0, 99999); // Para dispositivos móveis

        // Copia a URL dentro do input
        item = navigator.clipboard.writeText(copyText[i].value);

        // Mostra uma alerta da URL copiada
        alert("Url copiada: " + copyText[i].value);
    })
});