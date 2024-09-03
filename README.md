# Creating the Node.js Project

Pull Down main branch of code and run the following commands 
`npm install`

Then run `npm start`

After that navigate to `http://localhost:9090`.
The page will load and click the "Query Server" button which will take you to 
`https://studio.apollographql.com/sandbox/explorer`

Run the following example query 
{
  foodtrucks {
    id
    applicant
    facilityType
    locationDescription
    foodItems
  }
}

The return response should display with the data returned from csv
{
  "data": { 
    "foodtrucks": [
        {
        "id": 
        "applicant": 
        "facilityType":
        "locationDescription":
        "foodItems": 

        }
    ]

  }
}