const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Reset values
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  const location = search.value;

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = `${data.error}`;
        } else {
          messageOne.textContent = `${data.location}`;
          messageTwo.textContent = `${data.forecast}`;
        }
      });
    }
  );

  weatherForm.reset();
});
