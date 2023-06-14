// JavaScript para abrir e fechar o pop-up
document.querySelectorAll('.btn.reserva').forEach(botaoReserva => {
    botaoReserva.addEventListener('click', function() {
        document.getElementById('popupReserva').style.display = 'flex';
    });
});

document.getElementById('cancel-popup').addEventListener('click', function() {
    document.getElementById('popupReserva').style.display = 'none';
});
