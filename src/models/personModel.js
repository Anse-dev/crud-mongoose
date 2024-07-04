
const mongoose = require('mongoose');

// Définir le schéma de la personne avec les champs requis
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

// Créer le modèle Person à partir du schéma
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
