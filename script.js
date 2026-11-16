// Interaktiv SVG-side
const svgPlaceholder = document.querySelector(".svg-placeholder");

// Opsamlingsside
const opsamlingPlaceholder = document.querySelector(".opsamling-placeholder");

if (opsamlingPlaceholder) {
  const params = new URLSearchParams(window.location.search);
  // Eksempel: params.get("navn") henter værdien fra et formularfelt med name="navn".
}

// _______________________________________________________________________
// _______________________________________________________________________

// karrusel: //

const sponsorer = document.querySelector("#sponsorer");
// ^^ finder id'et 'sponsorer' i index.html

//~~~~~~~~~~~~ 

let igang = false;
// ^^ et flag.. husker om en animation kører lige nu..
// her bruges 'let' i stedet for 'const', for at værdien kan ændres senere (false/true)

//~~~~~~~~~~~~ 

// Funktionen 'naeste' herunder definerer selve skiftet, hvori rækken rykkes ét logo ad gangen til venstre og det første logo lægges bagerst, 
// så karrusellen kører uendeligt
function naeste() {
  if (igang) return;
  igang = true;
  // ^^ gør ikke umiddelbart noget, fordi der kun er den her ene function/animation

  const bredde = sponsorer.children[0].offsetWidth;
  sponsorer.style.transition = "transform 1.2s ease";
  sponsorer.style.transform = `translateX(-${bredde}px)`;
  // ^^ const bredde: en identifier kaldet 'bredde'. Finder den totale bredde på første logo
  // children[0] = det første logo (første child i rækken). Dog ikke det samme som first-child..
  // ^^ sponsorer, CSS: laver en transition-effekt og rykker rækken til venstre med den definerede bredde (identifieren)

  sponsorer.addEventListener(
    "transitionend",
    // ^^ holder øje med sponsorer-elementet. Lytter og venter på, at animationen (transition) slutter
    () => {
      sponsorer.style.transition = "none";
      // ^^ stopper animationen
      sponsorer.appendChild(sponsorer.children[0]);
      // ^^ appendChild flytter første logo bagerst i rækken
      sponsorer.style.transform = "translateX(0)";
      // nulstiller forskydelsen/rykket, dvs. rækken er tilbage i orginal position
      igang = false;
      // ^^ flaget frigives..
    },
    { once: true },
    // ^^ lytteren fjerner sig selv, for hvert skift..
  );
}
// Når animationen er sket, kommer der en "oprydning" og setInterval herunder er "motoren", som står for at genstarte
// basically: eventListener = nulstilling + muliggørelse af genstart/gentagelse. setInterval = selve genstarten/gentagelsen

//~~~~~~~~~~~~ 

setInterval(naeste, 5000);
// ^^ gør at funktionen 'naeste' kaldes hvert 5. sekund
// dvs. skiftet mellem sponsorer sker med 5 sekunders mellemrum

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Vælg tilstand: 'auto' eller 'hover'
// const tilstand = "auto";

// const karrusel = document.querySelector("#karrusel");

// if (tilstand === "auto") {
//   // Automatisk: skift hvert 5. sekund
//   setInterval(naeste, 5000);
// }

// if (tilstand === "hover") {
//   // Hover: skift hvert sekund, mens musen er over karrusellen
//   let timer;
//   karrusel.addEventListener("mouseenter", () => {
//     naeste();
//     timer = setInterval(naeste, 1000);
//   });
//   karrusel.addEventListener("mouseleave", () => {
//     clearInterval(timer);
//   });
// }

// ~~~~~~~~~~~~~~~~~~
