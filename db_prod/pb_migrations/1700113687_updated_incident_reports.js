/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vu4mwcpu06uut8w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9qqu9i4u",
    "name": "report",
    "type": "text",
    "required": false,
    "presentable": false,
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
    "id": "a49co3ye",
    "name": "email",
    "type": "email",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vu4mwcpu06uut8w")

  // remove
  collection.schema.removeField("9qqu9i4u")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a49co3ye",
    "name": "field",
    "type": "email",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
})
