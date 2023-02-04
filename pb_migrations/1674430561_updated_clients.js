migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf5p30nhwtf6dyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqn3ypym",
    "name": "company",
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
  collection.schema.removeField("iqn3ypym")

  return dao.saveCollection(collection)
})
