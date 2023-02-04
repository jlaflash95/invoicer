migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fb5c9wo3d7cmqns")

  // remove
  collection.schema.removeField("lfbdenrh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0escsvzi",
    "name": "quote",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "shimo87b6yaa37p",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fb5c9wo3d7cmqns")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lfbdenrh",
    "name": "commissioned",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("0escsvzi")

  return dao.saveCollection(collection)
})
