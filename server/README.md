# API Routes Documentation

**Show Games**
----
Accéder à toutes les parties

* **URL**

  /games

* **Method:**

  `GET`

**Show Game**
----
Accéder à une partie via son id

* **URL**

  /games/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[integer]`

**Show Teams**
----
Accéder à toutes les équipes

* **URL**

  /teams

* **Method:**

  `GET`

**Show Team**
----
Accéder à une équipe via son id

* **URL**

  /teams/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[integer]`

**Show Players**
----
Accéder à tout les joueurs

* **URL**

  /players

* **Method:**

  `GET`

**Show Player**
----
Accéder à un joueur via son id

* **URL**

  /players/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[integer]`

**Show Players of a team**
----
Accéder à tout les joueurs d'une équipe

* **URL**

  /players/team/:teamId

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `teamId=[integer]`

**Show Missions**
----
Accéder à toutes les missions

* **URL**

  /missions

* **Method:**

  `GET`

**Show Mission**
----
Accéder à une mission via son id

* **URL**

  /missions/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[integer]`

**Show Missions of a game**
----
Accéder à toutes les missions reliées à une partie

* **URL**

  /missions/game/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[integer]`

**Show Missions of a player**
----
Accéder à toutes les missions reliées à un joueur

* **URL**

  /missions/player/:id

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   `id=[integer]`

**Create a Mission Completion**
----
Ajouter une entrée correspondant à l'ajout d'une completion de mission

* **URL**

  /mission-completion

* **Method:**

  `POST`

*  **Data Params:**
  ```javascript
    {
        missionId
        completeBy
        completeDay
      }
  ```
