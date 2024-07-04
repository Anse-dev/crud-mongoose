const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Person = require('./src/models');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Se connecter à la base de données MongoDB en utilisant l'URI stocké dans .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database connected successfully');

  // Appeler les fonctions de gestion de la base de données après la connexion
  createAndSavePerson();
  createManyPeople();
  findPeopleByName('John Doe');
  findOneByFavoriteFood('Pizza');
  findPersonById('some_person_id');
  findEditThenSave('some_person_id');
  findAndUpdate('Alice');
  removeById('some_person_id');
  removeManyPeople('Mary');
  queryChain();
}).catch(err => {
  console.error('Database connection error:', err);
});

// Créer et enregistrer un document de modèle
function createAndSavePerson() {
  const person = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger']
  });

  person.save()
    .then(data => {
      console.log('Person saved successfully:', data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Créer plusieurs enregistrements avec model.create()
function createManyPeople() {
  const arrayOfPeople = [
    { name: 'Alice', age: 25, favoriteFoods: ['Salad', 'Pasta'] },
    { name: 'Bob', age: 32, favoriteFoods: ['Steak', 'Fries'] },
    { name: 'John Doe', age: 40, favoriteFoods: ['Ice Cream', 'Chocolate'] }
  ];

  Person.create(arrayOfPeople)
    .then(data => {
      console.log('People created successfully:', data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Utiliser model.find() pour rechercher dans la base de données
function findPeopleByName(name) {
  Person.find({ name })
    .then(data => {
      console.log('People found:', data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Utiliser model.findOne() pour retourner un seul document correspondant
function findOneByFavoriteFood(food) {
  Person.findOne({ favoriteFoods: food })
    .then(data => {
      console.log('Person found:', data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Utiliser model.findById() pour rechercher par _id
function findPersonById(personId) {
  Person.findById(personId)
    .then(data => {
      console.log('Person found by ID:', data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Mettre à jour un document en utilisant Find, Edit, then Save
function findEditThenSave(personId) {
  Person.findById(personId)
    .then(person => {
      person.favoriteFoods.push('Hamburger');
      return person.save();
    })
    .then(updatedPerson => {
      console.log('Person updated successfully:', updatedPerson);
    })
    .catch(err => {
      console.error(err);
    });
}

// Mettre à jour un document en utilisant model.findOneAndUpdate()
function findAndUpdate(personName) {
  Person.findOneAndUpdate(
    { name: personName },
    { age: 20 },
    { new: true }
  )
    .then(updatedPerson => {
      console.log('Person updated successfully:', updatedPerson);
    })
    .catch(err => {
      console.error(err);
    });
}

// Supprimer un document en utilisant model.findByIdAndRemove
function removeById(personId) {
  Person.findByIdAndRemove(personId)
    .then(data => {
      console.log('Person deleted successfully:', data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Supprimer plusieurs documents avec model.remove
function removeManyPeople(name) {
  Person.remove({ name })
    .then(data => {
      console.log('People named Mary deleted successfully:', data);
    })
    .catch(err => {
      console.error(err);
    });
}

// Chainer les méthodes de requête pour affiner les résultats de la recherche
function queryChain() {
  Person.find({ favoriteFoods: 'Burritos' })
    .sort('name')
    .limit(2)
    .select('-age')
    .exec()
    .then(data => {
      console.log('People who like burritos:', data);
    })
    .catch(err => {
      console.error(err);
    });
}
