# Toodoo Home Adventures

Un projet de fin d'année en BDDI3 à l'école @Gobelins.

## Informations sur le projet

- [Server API documentation](server/README.md)

- [Wiki: wiki.toodoo.games](https://wiki.toodoo.games)

## Développer

### Pré-requis

Pour faire tourner le projet en local, il vous faut:

- [Node.js](https://nodejs.org/) >=14

- [Yarn](https://classic.yarnpkg.com/en/docs/install)

- [Docker](https://www.docker.com/get-started) avec Docker compose

### Installation du projet

- Cloner le dépôt

```bash
# SSH
git clone git@github.com:leoboyerbx/toodoo.git
# HTTPS
git clone https://github.com/leoboyerbx/toodoo.git
```

Ce projet est divisé en 3 parties: app mobile, jeu sur chromecast et serveur. Pour installer les dépendances des 3 dossiers à la fois, placez-vous dans le dossier racine et lancez le script `setup`:

```bash
cd toodoo
yarn setup
```

### Exécution en local

#### App mobile

```bash
cd mobile-app
```

Lancer le serveur de développement

```bash
yarn dev 
```

Lancer le serveur de développement avec accessiblité depuis le réseau local (MacOS uniquement)

```bash
yarn dev:lan-mac
```

#### Cast

```bash
cd cast-app
```

Lancer le serveur de développement

```bash
yarn dev
```

#### Serveur

```bash
cd server
```

##### Serveur de développement

Démarrer les conteneurs Docker

```bash
yarn dk:start
```

Lancer le serveur de développement

```bash
yarn dev
```

> ℹ  Pour pouvoir fonctionner, le serveur de dv a besoin que les conteneurs tournent, donc `yarn dk:start` est indispensable avant `yarn dev`

> Sinon, on peut démarrer les conteneurs puis directement lancer le serveur de dev:
> 
> ```bash
> yarn dk:dev
> ```



Arrêter les conteneurs (recommandé avant de terminer une session de travail)

```bash
yarn dk:stop
```

> ⚠️  L'arrêt des conteneurs efface la base de données si elle n'a pas été sauvegardée. La commande propose de sauvegarder avant l'arrêt des conteneurs.

##### Base de données

Un utilitaire permet de sauvegarder et restaurer l'état de la base de données.

Sauvegarde:

```bash
yarn db:save
```

Restaurer une sauvegarde:

```bash
yarn db:load
```

Pour plus d'infos sur la structure, l'organisation ou le déploiement, voir [le wiki](https://wiki.toodoo.games).



## Emoji commit reference table

| Emoji | Description                           |
| ----- | ------------------------------------- |
| 🔧    | Add or update configuration files     |
| ✨     | Introduce new features                |
| 🐞    | Fix Bug                               |
| 📚    | Documentation (add or remove)         |
| 🚨    | Test                                  |
| ✅     | Adding test                           |
| 🔨    | Code refactoring                      |
| 🎨    | Improve format & structure            |
| 🗑    | Removing code / file                  |
| 🔒    | Security                              |
| 🖌    | Lint                                  |
| ⏪     | Reverting change                      |
| 💩    | Bad code / need to improve            |
| 👌    | Code review changes                   |
| 📄    | Readme update or correction           |
| ⬆️    | Upgrade dependencies                  |
| ⬇️    | Downgrade dependencies                |
| 🧩    | Add Component                         |
| 🚧    | Work in progress                      |
| 🥞    | Database change                       |
| 🛣    | Adding a API Route                    |
| 🏗    | Changes to the CI construction system |
| 🚀    | Deployment stuff                      |
| 🤹    | Animation                             |
| 🏄    | Front end add or update               |
| 🥷    | Back end add or update                |
| 🍱    | Add or update assets                  |
| 💡    | Add or update comments in code        |

## Auteurs

* **Léo Boyer** _alias_ [@leoboyerbx](https://www.linkedin.com/in/leoboyerbx/)
* **JohannDumoulin Minguet**
* **Vincent Creton** _alias_ [@cretonv](https://fr.linkedin.com/in/vincent-creton-776816187)

Retrouver les [comptes github](https://github.com/leoboyerbx/toodoo/contributors) des contributeurs du projet.
