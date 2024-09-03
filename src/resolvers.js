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

    // Mutation: {
    //   availableFoodTruck: (parent, args) => {
    //     const newFoodTruck = {
    //       id: foodtrucks.length + 1,
    //       applicant: args.applicant,
    //       facilityType: args.facilityType,
    //       locationDescription: args.locationDescription,
    //     };
    //     foodtrucks.push(newFoodTruck);
    //     return newFoodTruck;
    //   },
    //   enroll: (parent, args) => {
    //     const foodTruckToEnroll = foodtrucks.find((foodtruck) => foodtruck.id === Number(args.id));
    //     // Implement enrollment logic here
    //     return foodTruckToEnroll;
    //   },
    // },

  }

  module.exports = {
    resolvers,
  }
