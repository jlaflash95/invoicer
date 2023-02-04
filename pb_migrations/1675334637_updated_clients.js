migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf5p30nhwtf6dyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rvsqm921",
    "name": "lastName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0sqkyvhr",
    "name": "firstName",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf5p30nhwtf6dyx")

  // remove
  collection.schema.removeField("rvsqm921")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
