migrate((db) => {
  const collection = new Collection({
    "id": "fb5c9wo3d7cmqns",
    "created": "2023-01-22 23:34:24.764Z",
    "updated": "2023-01-22 23:34:24.764Z",
    "name": "invoices",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jlmplenk",
        "name": "client",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "collectionId": "zf5p30nhwtf6dyx",
          "cascadeDelete": false
        }
      },
      {
        "system": false,
        "id": "lqbw0dfm",
        "name": "description",
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
        "id": "lehwkj4b",
        "name": "hours",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ra7cgqas",
        "name": "rate",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "u4aqwvp1",
        "name": "dueDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "vn72bkrg",
        "name": "dateSent",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "61npauyk",
        "name": "email",
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
  const collection = dao.findCollectionByNameOrId("fb5c9wo3d7cmqns");

  return dao.deleteCollection(collection);
})
