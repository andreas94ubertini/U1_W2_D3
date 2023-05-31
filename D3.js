const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "277",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: "178",
    mass: "120",
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "75",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: "97",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: "183",
    mass: "84",
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/

const characters = []

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters". 
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "starWarsCharacters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name)
}

/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno
  tutti gli oggetto femminili, CON QUESTA STRUTTURA: 
  {name: Leia Organa, hair_color: "brown", eye_color: "brown"}
*/

const femaleCharacters = []
let obj = {}

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    obj[i] = {
      name: starWarsCharacters[i].name,
      hair_color: starWarsCharacters[i].hair_color,
      eye_color: starWarsCharacters[i].eye_color,
    }
    femaleCharacters.push(obj[i])
  }
}
console.log(femaleCharacters, "sono pushato")

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/

const eyeColor = { blue: [], yellow: [], brown: [], red: [], "blue-gray": [] }

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  switch (starWarsCharacters[i].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i])
      break
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i])
      break
    case "brown":
      eyeColor.brown.push(starWarsCharacters[i])
      break
    case "red":
      eyeColor.red.push(starWarsCharacters[i])
      break
    case "blue-gray":
      eyeColor["blue-gray"].push(starWarsCharacters[i])
      break
    default:
      console.log("Nessun colore rilevato")
  }
}
console.log(eyeColor)

/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
let crewMass = 0
let j = 0

while (j < starWarsCharacters.length) {
  crewMass += parseInt(starWarsCharacters[j].mass)
  j++
}

/* ESERCIZIO 7
  Crea uno switch statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'impotetica astronave contenente i personaggi dell'array "starWarsCharacters"
  (sei in difficoltà? cerca su un motore di ricerca switch case e conditionals)

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è uguale a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

switch (true) {
  case crewMass > 1000:
    console.log("DANGER! OVERLOAD ALERT: escape from ship now!")
    break
  case crewMass > 900:
    console.log("Critical Load: Over 900")
    break
  case crewMass > 700:
    console.log("Warning: Load is over 700")
    break
  case crewMass === 500:
    console.log("Ship is half loaded")
    break
  case crewMass < 500:
    console.log("Ship is under loaded")
    break

  default:
    console.log(crewMass)
    break
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot"
    console.log(starWarsCharacters[i])
  }
}

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Usa uno più for loop per raggiungere il risultato

  (tip: cerca un metodo degli array per rimuovere un elemento)

  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/
console.log(characters, "sono characters prima")
for (let i = 0; i < characters.length; i++) {
  for (let k = 0; k < femaleCharacters.length; k++) {
    if (femaleCharacters[k].name === characters[i]) {
      characters.splice(i, 1)
    }
  }
}
console.log(characters, "sono characters dopo")

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che prenda un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
let cusualElement =
  starWarsCharacters[Math.floor(Math.random() * starWarsCharacters.length)]
if (cusualElement.gender === "male" || cusualElement.gender === "robot") {
  console.log(
    "Ciao io sono",
    cusualElement.name,
    "sono nato il:",
    cusualElement.birth_year,
    "sono alto",
    cusualElement.height,
    "cm, e peso",
    cusualElement.mass,
    "kg"
  )
} else {
  console.log(
    "Ciao io sono",
    cusualElement.name,
    "sono nata il:",
    cusualElement.birth_year,
    "sono alta",
    cusualElement.height,
    "cm, e peso",
    cusualElement.mass,
    "kg"
  )
}
