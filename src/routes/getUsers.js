"use strict";
const mockDBCalls = require("../database/index.js");

const getUsersHandler = async (request, response) => {
  const data = await mockDBCalls.getUsers();
  if (!data.success) {
    return response.status(500).send(JSON.stringify(data));
  }
  return response.status(200).send(JSON.stringify(data.payload));
};

module.exports = (app) => {
  app.get("/users", getUsersHandler);
};
