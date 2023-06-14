// JavaScript para abrir e fechar o pop-up
  document.querySelectorAll('.btn.delete').forEach(botaoDelete => {
      botaoDelete.addEventListener('click', function() {
          document.getElementById('popupDelete').style.display = 'flex';
      });
  });

  document.getElementById('cancel-popupDelete').addEventListener('click', function() {
      document.getElementById('popupDelete').style.display = 'none';
  });

  document.querySelectorAll('.btn.edit').forEach(botaoEdit => {
      botaoEdit.addEventListener('click', function() {
          document.getElementById('popupEdit').style.display = 'flex';
      });
  });

  document.getElementById('cancel-popupEdit').addEventListener('click', function() {
      document.getElementById('popupEdit').style.display = 'none';
  });

  // JavaScript para abrir e fechar o pop-up de confirmação para edição
  document.getElementById('confirm-buttonEdit').addEventListener('click', function() {
    document.getElementById('popupEdit').style.display = 'none';
    document.getElementById('confirm-popupEdit').style.display = 'flex';
});

document.getElementById('close-confirm-buttonEdit').addEventListener('click', function() {
    document.getElementById('confirm-popupEdit').style.display = 'none';
});

// JavaScript para abrir e fechar o pop-up de confirmação de cancelamento
document.getElementById('confirm-buttonDelete').addEventListener('click', function() {
    document.getElementById('popupDelete').style.display = 'none';
    document.getElementById('confirm-popupDelete').style.display = 'flex';
});

document.getElementById('close-confirm-button').addEventListener('click', function() {
    document.getElementById('confirm-popupDelete').style.display = 'none';
});



