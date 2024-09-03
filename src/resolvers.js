const { foodtrucks } =  require('./database');

const resolvers = {

    FoodTruck: {
      id: (parent) => parent.id || parent.locationId, // Ensure this returns a valid ID
      applicant: (parent) => parent.applicant,
      facilityType: (parent) => parent.facilityType,
      locationDescription: (parent) => parent.locationDescription,
    },

    Query: {
      foodtrucks: () => foodtrucks,
      foodtruck: (parent, args) => {
        return foodtrucks.find((foodtruck) => foodtruck.id === Number(args.id));
      },
    },


  }

  module.exports = {
    resolvers,
  }
