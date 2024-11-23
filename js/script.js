document.getElementById('add-to-cart').addEventListener('click', function() {
    // Lógica para adicionar o produto ao carrinho (não incluída aqui)

    // Mostrar o alerta
    const alertMessage = document.getElementById('alert-message');
    alertMessage.style.display = 'block';

    //  esconder o alerta após alguns segundos
    setTimeout(() => {
        alertMessage.style.display = 'none';
    }, 3000); // 3 segundos
});



