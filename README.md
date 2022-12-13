# chickenRun
Chicken Run - Clac des Doigts

For this Api I used the Nestjs framework, its a framework based on expressjs that gives even more functionalities. I used as database postgresql with typeorm as orm.

Routes of the API

GET /chicken
  - Returns all of the chickens objects in the database, returns nothing if there are no objects in the db.

GET /chicken/:id
  - Returns a chicken corresponding to the id, if the id doesnt exist in the db throws a 404 Not Found error.

POST /chicken
  - Creates a chicken in the database and return it.

PATCH /chicken/:id
  - Patches (updates) the correspoding id to a chicken by receiving as body a json object that can be the same or partially the same to the chicken entity, if the id doesnt exist in the database throws a 404 Not Found error.

PUT /chicken/:id
  - Same as Patch but will only update the chicken if the received object in the json body is the same as the chicken entity, if it isnt the same it will create a new chicken object in the database.

GET /chicken/run/:id
  - increments by 1 the steps variable of the chicken received in the id (in the database).
