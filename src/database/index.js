"use strict";
const _ = require("lodash");
const db = require("./db.js");

// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataAccessMethod());
    }, 500);
  });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
  const dataAccessMethod = () => _.map(db.usersById, (userInfo) => userInfo);
  return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
  const dataAccessMethod = () => {
    // fill me in :)
    try {
      //Array to store users with item
      let users = [];

      //Store the users who have given item in an array
      for (const user in db.itemsOfUserByUsername) {
        db.itemsOfUserByUsername[user].forEach((h) => {
          if (h === item) {
            users.push(user);
          }
        });
      }

      //Handling No users with item
      if (users.length === 0) {
        return [];
      }

      //Get age and count for each user retrieved
      let itemUserAgeCount = {};
      users.forEach((user) => {
        for (const id in db.usersById) {
          if (db.usersById[id].username === user) {
            if (db.usersById[id].age in itemUserAgeCount) {
              itemUserAgeCount[db.usersById[id].age]++;
            } else {
              itemUserAgeCount[db.usersById[id].age] = 1;
            }
          }
        }
      });

      //return array of objects with age and count
      let res = [];

      for (const userAge in itemUserAgeCount) {
        res.push({ age: parseInt(userAge), count: itemUserAgeCount[userAge] });
      }
      return res;
    } catch (error) {
      //Return False and error message instead of crashing server.
      return {
        success: false,
        message: error.message,
      };
    }
  };
  return mockDBCall(dataAccessMethod);
};

module.exports = {
  getUsers,
  getListOfAgesOfUsersWith,
};
