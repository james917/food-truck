const { gql } = require('apollo-server')

const typeDefs = gql`
  type FoodTruck {
    id: ID!
    locationId: Int,
    applicant: String!,
    facilityType: String!,
    cnn: Int,
    locationDescription: String,
    address: String,
    blocklot: String,
    block: String,
    lot: String,
    permit: String,
    status: String,
    foodItems: String,
    x: Float,
    y: Float,
    latitude: Float,
    longitude: Float,
    schedule: String,
    dayshours: String,
    noiSent: String,
    approved: String,
    received: Int,
    priorPermit: Int,
    expirationDate: String,
    location: String,
    firePreventionDistricts: Int,
    policeDistricts: Int,
    supervisorDistricts: Int,
    zipCodes: Int,
    neighborhoodsOld: Int
  }

  type Query {
    vendor: [FoodTruck!]
    foodtrucks: [FoodTruck!]!
    foodtruck(id: ID!): FoodTruck
    enrollment: [FoodTruck!]  # Correct comment syntax
  }

  type Mutation {
    availableFoodTruck(applicant: String!, facilityType: String!, locationDescription: String): FoodTruck!
    enroll(id: ID!): FoodTruck
  }
`
module.exports = {
    typeDefs,
  };