#!/usr/bin/env node
/*
 * Utility script to display the repository's README.md in the console.
 * Useful for CI or quick verification that the README exists and is readable.
 */

const fs = require('fs');
const path = require('path');

function printHeader() {
  console.log('\n📘 === LECTURE DU FICHIER README.md ===\n');
}

function printFooter() {
  console.log('\n✅ Lecture du README terminée avec succès.\n');
}

function main() {
  try {
    // Localisation du README à partir de la racine du projet
    const repoRoot = path.resolve(__dirname, '..');
    const readmePath = path.join(repoRoot, 'README.md');

    if (!fs.existsSync(readmePath)) {
      console.error(`❌ Fichier README.md introuvable à l’emplacement : ${readmePath}`);
      process.exit(1);
    }

    // Lecture du contenu du README
    const content = fs.readFileSync(readmePath, 'utf8');

    // Affichage dans la console avec entête et pied de page
    printHeader();
    console.log(content);
    printFooter();
  } catch (err) {
    console.error('❌ Erreur lors de la lecture du README.md :', err.message || err);
    process.exit(1);
  }
}

main();
