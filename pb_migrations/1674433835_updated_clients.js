migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf5p30nhwtf6dyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qhb2b0an",
    "name": "invoices",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "fb5c9wo3d7cmqns",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf5p30nhwtf6dyx")

  // remove
  collection.schema.removeField("qhb2b0an")

  return dao.saveCollection(collection)
})
