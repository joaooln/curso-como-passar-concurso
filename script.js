document.getElementById('formInscricao').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(this);
  fetch('https://formspree.io/f/SEU_FORM_ID', {
    method: 'POST',
    headers: { 'Accept': 'application/json' },
    body: data
  })
  .then(res => {
    if (res.ok) {
      alert('Inscrição enviada com sucesso!');
      this.reset();
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  })
  .catch(() => alert('Erro de rede. Tente novamente.'));
});
