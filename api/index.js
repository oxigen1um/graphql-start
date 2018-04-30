const express = require('express');
const graphqlMiddleware = require('express-graphql');

const schema = require('./schema')

const api = express();

api.all('/graphql', graphqlMiddleware({
  schema: schema,
  graphiq: true
}));

module.exports = api;