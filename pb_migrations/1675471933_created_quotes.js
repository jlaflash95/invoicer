migrate((db) => {
  const collection = new Collection({
    "id": "shimo87b6yaa37p",
    "created": "2023-02-04 00:52:13.197Z",
    "updated": "2023-02-04 00:52:13.197Z",
    "name": "quotes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "afqqgbek",
        "name": "number",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("shimo87b6yaa37p");

  return dao.deleteCollection(collection);
})
