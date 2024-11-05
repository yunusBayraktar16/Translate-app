const sourceInput = document.getElementById("sourceInput");
const targetInput = document.getElementById("targetInput");
const btn = document.getElementById("btn");

btn.addEventListener("click", translate);

function translate() {
  var myHeaders = new Headers();
  myHeaders.append("apikey", "sahf1tZEGb0HkqfP699b7iMC9hnOFxrU");
  var raw = `${sourceInput.value}`;
  var postText = {
    method: "POST",
    redirect: "follow",
    headers: myHeaders,
    body: raw,
  };
  fetch(
    "https://api.apilayer.com/language_translation/translate?source=en&target=tr",
    postText
  )
    .then((response) => response.json())
    .then((result) => {
      targetInput.value = result.translations[0].translation;
    })
    .catch((error) => console.log("error", error));
}
