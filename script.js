// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const eventPass = document.querySelector(".event-pass");

if (eventPass) {
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
  const params = new URLSearchParams(window.location.search);
  const fuldeNavnInput = document.querySelector("#op-fulde-navn");
  const fuldeNavn = params.get("fulde-navn");
  fuldeNavnInput.textContent = fuldeNavn;

  const firstChar = fuldeNavn.charAt(0);

  if (firstChar <= "G") {
    eventPass.style.backgroundColor = "#cf0303";
  } else if (firstChar > "G") {
    eventPass.style.backgroundColor = "#0783ff";
  }

  const emailInput = document.querySelector("#op-email");
  const email = params.get("email");
  emailInput.textContent = email;

  const phoneInput = document.querySelector("#op-phone");
  const phone = params.get("phone");
  phoneInput.textContent = phone;

  const antalVoksneSelect = document.querySelector("#op-antal-voksne");
  const antalVoksne = params.get("antal-voksne");
  antalVoksneSelect.textContent = antalVoksne;

  const antalBørnSelect = document.querySelector("#op-antal-børn");
  const antalBørn = params.get("antal-børn");
  antalBørnSelect.textContent = antalBørn;

  //det første bogstav i fornavnet definere farven på baggrund i opsamling
  /*const tekst = document.getElementById("fulde-navn").value;
  const firstChar = tekst.charAt(0);

  if (firstChar <= "g") {
    document.body.style.backgroundColor = "#cf0303";
  } else if (firstChar > "g") {
    document.body.style.backgroundColor = "#0783ff";
  }*/
}
