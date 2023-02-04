migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fb5c9wo3d7cmqns")

  // remove
  collection.schema.removeField("jlmplenk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fb5c9wo3d7cmqns")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jlmplenk",
    "name": "client",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "zf5p30nhwtf6dyx",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
