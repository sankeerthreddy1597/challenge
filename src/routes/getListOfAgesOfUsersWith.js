"use strict";
const mockDBCalls = require("../database/index.js");

const getListOfAgesOfUsersWithHandler = async (request, response) => {
  const itemToLookup = request.params.item;
  const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);

  //Error handling - status change for failure.
  if (!data.success) {
    return response.status(500).send(JSON.stringify(data));
  }
  return response.status(200).send(JSON.stringify(data.payload));
};

module.exports = (app) => {
  app.get("/users/age/:item", getListOfAgesOfUsersWithHandler);
};
