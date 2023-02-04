migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fb5c9wo3d7cmqns")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r906voft",
    "name": "details",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fb5c9wo3d7cmqns")

  // remove
  collection.schema.removeField("r906voft")

  return dao.saveCollection(collection)
})
