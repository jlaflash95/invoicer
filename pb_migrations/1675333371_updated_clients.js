migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf5p30nhwtf6dyx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vtimbcn6",
    "name": "photo",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zf5p30nhwtf6dyx")

  // remove
  collection.schema.removeField("vtimbcn6")

  return dao.saveCollection(collection)
})
