const form = document.getElementById('preorder');
const thankYou = document.getElementById('thankyou');

if (form && thankYou) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.reset();
        thankYou.style.display = 'block';
      } else {
        alert('Something went wrong. Please try again.');
      }
    });
  });
}
