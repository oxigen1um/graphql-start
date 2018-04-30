const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Query {
      todo: String
    }
  `);