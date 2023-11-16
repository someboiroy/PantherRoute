/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vu4mwcpu06uut8w")

  collection.createRule = "@request.auth.id != '' && \n@request.data.email = @request.auth.email && \n@request.data.id = @request.auth.id && \n@request.data.pantherID = @request.auth.pantherID && \n@request.data.first_name = @request.auth.first_name && \n@request.data.last_name = @request.auth.last_name"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vu4mwcpu06uut8w")

  collection.createRule = "user_id = @request.auth.id"

  return dao.saveCollection(collection)
})
