// 1. Déclarer un tableau de prénoms
const membres = ["Sara", "Ali", "aMehdi", "Nina"]; //ta3li9

console.log("List de membres: ", membres);
// 2. Afficher le nombre de membres
console.log("Nombre de membres :", membres.length);
// 3. Ajouter un nouveau membre
membres.push("Yacine");
console.log("Liste mise à jour :", membres);
// 4. Créer un tableau des scores (même ordre, même longueur)
let scores = [18, 18, 12, 17, 10]; // Ex : Sara 15, Ali 8, Mehdi 12, Nina 17, Yacine 10
console.log("Scores des membres :", scores);
// 5. Calculer et afficher la moyenne
let somme = 0;
for (let i = 0; i < scores.length; i++) {
  somme += scores[i]; //ta3li9
}
let moyenne = somme / scores.length;
console.log("Moyenne des scores :", moyenne);
// 6. Afficher le membre ayant le meilleur score
let max = scores[0];
let indexMax = 0;
for (let i = 1; i < scores.length; i++) {
  if (scores[i] > max) {
    max = scores[i];
    indexMax = i;
  }
}
console.log("Meilleur membre :", membres[indexMax], "avec un score de", max);
// 7. Fonction appréciation selon le score
function appreciation(score) {
  if (score >= 15) return "Excellent";
  if (score >= 10) return "Bien";
  return "Peut mieux faire"; //ta3li9-+
}

// 8. Afficher prénom, score et appréciation
for (let i = 0; i < membres.length; i++) {
  console.log(
    membres[i] + " : " + scores[i] + " pts – " + appreciation(scores[i])
  );
}
// 10. Trier les membres selon les scores décroissants
let membresScores = [];
for (let i = 0; i < membres.length; i++) {
  membresScores.push({ nom: membres[i], score: scores[i] });
}

membresScores.sort(function (a, b) {
  return b.score - a.score;
}); //ta3li9 billal
console.log("Classement (décroissant) :");
for (let i = 0; i < membresScores.length; i++) {
  console.log(membresScores[i].nom + " : " + membresScores[i].score);
}

// 11. Vérifier si un prénom existe
let recherche = "alia";
console.log(
  "Alia est-il membre ?",
  membres.includes(recherche) ? "Oui" : "Non"
);

// 12. Supprimer le membre avec le plus faible score (< 10)
let min = scores[0];
let indexMin = 0;
for (let i = 1; i < scores.length; i++) {
  if (scores[i] < min) {
    min = scores[i];
    indexMin = i;
  }
}
if (scores[indexMin] < 10) {
  console.log(
    "Suppression de",
    membres[indexMin],
    "pour score trop faible (",
    scores[indexMin],
    ")"
  );
  membres.splice(indexMin, 1);
  scores.splice(indexMin, 1);
}
console.log("Liste après suppression :", membres);
console.log("Scores après suppression :", scores);

// 13. Afficher tous les prénoms en MAJUSCULES
console.log("Prénoms en majuscules :");
for (let i = 0; i < membres.length; i++) {
  console.log(membres[i].toUpperCase());
}

// 14. Afficher les membres dont le prénom commence par “A”
console.log("Membres dont le prénom commence par 'A' :");
for (let i = 0; i < membres.length; i++) {
  if (membres[i][0] === "A") {
    console.log(membres[i]);
  }
}

let personne = {
  id: 20,
  nom: "bahmed",
  prenom: "kamel",
  age: 32,
  formations: ["md", "web", "mobile"],
  adrr: { cp: 16002, rue: "didouche mourad" },
};


let personnes = [
  {
    id: 20,
    nom: "bahmed",
    prenom: "kamel",
    age: 32,
    formations: ["md", "web", "mobile"],
    adrr: { cp: 16002, rue: "didouche mourad" },
  },
    {
    id: 20,
    nom: "bahmed",
    prenom: "adel",
    age: 32,
    formations: ["md", "web", "mobile"],
    adrr: { cp: 16002, rue: "didouche mourad" },
  },
    {
    id: 20,
    nom: "bahmed",
    prenom: "kamel",
    age: 32,
    formations: ["md", "web", "mobile"],
    adrr: { cp: 16002, rue: "didouche mourad" },
  },
];
console.log(personnes[0].formations[1]);


