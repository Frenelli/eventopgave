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

  //det første bogstav i fornavnet definere farven på baggrund i opsamling
  if (firstChar <= "O") {
    eventPass.style.backgroundColor = "#7FB8D3";
  } else if (firstChar > "O") {
    eventPass.style.backgroundColor = "#99D1AA";
  }

  //Note til videreudvikling:
  // Hvis der er 1 eller flere børn (uden voksen), så skal der være et billede med et barn.
  // Hvis der kun er 1 eller flere voksne skal der være et billede med en voksen.
  // Hvis der er både børn og voksne skal der være et billede med begge.

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

  const valgtMosemission = document.querySelector("#op-mosemission");
  const mosemission = params.get("mosemission");
  valgtMosemission.textContent = mosemission;

  const valgtDato = document.querySelector("#op-dato");
  const dato = params.get("dato");
  valgtDato.textContent = dato;
}
