const form = document.getElementById("preorder-form");
const thankYouMessage = document.getElementById("thankyou-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      form.style.display = "none";
      thankYouMessage.style.display = "block";

      // Hide the thank-you message after 5 seconds
      setTimeout(() => {
        thankYouMessage.style.display = "none";
      }, 5000);
    } else {
      alert("Something went wrong. Please try again.");
    }
  });
});
