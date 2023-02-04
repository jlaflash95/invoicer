migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shimo87b6yaa37p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pecsddky",
    "name": "hours",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rwaz38hs",
    "name": "rate",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zuab9gw2",
    "name": "dueDate",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "162sga1d",
    "name": "dateSent",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nkiwazpi",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "idsvghes",
    "name": "paid",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k8pp4di0",
    "name": "complete",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u1uiwlfm",
    "name": "details",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "siazq0ro",
    "name": "subtotal",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgoz1no4",
    "name": "taxRate",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "anhyslss",
    "name": "total",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nk8wtq8o",
    "name": "invoice",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "fb5c9wo3d7cmqns",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shimo87b6yaa37p")

  // remove
  collection.schema.removeField("pecsddky")

  // remove
  collection.schema.removeField("rwaz38hs")

  // remove
  collection.schema.removeField("zuab9gw2")

  // remove
  collection.schema.removeField("162sga1d")

  // remove
  collection.schema.removeField("nkiwazpi")

  // remove
  collection.schema.removeField("idsvghes")

  // remove
  collection.schema.removeField("k8pp4di0")

  // remove
  collection.schema.removeField("u1uiwlfm")

  // remove
  collection.schema.removeField("siazq0ro")

  // remove
  collection.schema.removeField("rgoz1no4")

  // remove
  collection.schema.removeField("anhyslss")

  // remove
  collection.schema.removeField("nk8wtq8o")

  return dao.saveCollection(collection)
})
