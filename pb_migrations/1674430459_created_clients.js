migrate((db) => {
  const collection = new Collection({
    "id": "zf5p30nhwtf6dyx",
    "created": "2023-01-22 23:34:19.549Z",
    "updated": "2023-01-22 23:34:19.549Z",
    "name": "clients",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0sqkyvhr",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pryjyoum",
        "name": "email",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qmkci0z8",
        "name": "phoneNumber",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zf5p30nhwtf6dyx");

  return dao.deleteCollection(collection);
})
