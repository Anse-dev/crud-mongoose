

# MongoDB Mongoose Project

## Description

Ce projet utilise Mongoose pour gérer une base de données MongoDB. Il permet de créer, lire, mettre à jour et supprimer des documents dans une collection MongoDB. Le projet est configuré pour se connecter à une base de données MongoDB Atlas à l'aide d'un URI stocké dans un fichier `.env`.

## Prérequis

- Node.js installé
- MongoDB Atlas configuré et un URI de connexion disponible
- Un fichier `.env` configuré avec votre URI de connexion MongoDB

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/anse-dev/crud-mongoose.git
   cd crud-mongoose
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Créez un fichier `.env` à la racine du projet et ajoutez votre URI MongoDB :

   ```env
   MONGO_URI='votre_uri_mongodb_atlas'
   ```

## Utilisation

Pour exécuter le projet, utilisez la commande suivante :

```bash
node app.js
```

Cela connectera à la base de données et effectuera plusieurs opérations de gestion de documents.

## Fonctions

### `createAndSavePerson()`

Crée et enregistre un document de modèle `Person`.

### `createManyPeople()`

Crée plusieurs documents `Person` avec `model.create()`.

### `findPeopleByName(name)`

Trouve tous les documents `Person` ayant un nom donné.

### `findOneByFavoriteFood(food)`

Trouve un document `Person` ayant une nourriture favorite spécifique.

### `findPersonById(personId)`

Trouve un document `Person` par son `_id`.

### `findEditThenSave(personId)`

Trouve un document `Person` par son `_id`, ajoute "Hamburger" à sa liste de nourritures favorites, puis sauvegarde le document mis à jour.

### `findAndUpdate(personName)`

Trouve un document `Person` par son nom et met à jour son âge à 20 ans.

### `removeById(personId)`

Supprime un document `Person` par son `_id`.

### `removeManyPeople(name)`

Supprime tous les documents `Person` ayant un nom spécifique.

### `queryChain()`

Chaine les méthodes de requête pour affiner les résultats de la recherche. Trouve les personnes qui aiment les burritos, les trie par nom, limite les résultats à deux documents et cache leur âge.



## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter de ce que vous aimeriez changer.


