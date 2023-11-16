/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vu4mwcpu06uut8w",
    "created": "2023-11-16 05:44:46.983Z",
    "updated": "2023-11-16 05:44:46.983Z",
    "name": "incident_reports",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fhap99fy",
        "name": "first_name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fhfjm4y8",
        "name": "last_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "wlvwykv0",
        "name": "pantherID",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 9,
          "max": 9,
          "pattern": "^P\\d{8}$"
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vu4mwcpu06uut8w");

  return dao.deleteCollection(collection);
})
