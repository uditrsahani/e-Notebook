import express from 'express'
const router = express.Router();

router.get('/', (req, res)=>{
  let obj = {
    
      1: {
          "patient_id": "P001",
          "name": "John Doe",
          "age": 45,
          "gender": "Male",
          "address": {
              "street": "123 Maple Street",
              "city": "Springfield",
              "state": "IL",
              "zip": "62701"
          },
          "contact": {
              "phone": "555-123-4567",
              "email": "johndoe@example.com"
          },
          "medical_history": [
              {
                  "condition": "Hypertension",
                  "diagnosed_date": "2018-06-20",
                  "medications": ["Lisinopril"]
              },
              {
                  "condition": "Type 2 Diabetes",
                  "diagnosed_date": "2015-04-12",
                  "medications": ["Metformin"]
              }
          ]
      },
      2: {
          "patient_id": "P002",
          "name": "Jane Smith",
          "age": 30,
          "gender": "Female",
          "address": {
              "street": "456 Oak Avenue",
              "city": "Lincoln",
              "state": "NE",
              "zip": "68508"
          },
          "contact": {
              "phone": "555-234-5678",
              "email": "janesmith@example.com"
          },
          "medical_history": [
              {
                  "condition": "Asthma",
                  "diagnosed_date": "2000-11-03",
                  "medications": ["Albuterol"]
              }
          ]
      },
     3: {
          "patient_id": "P003",
          "name": "Robert Brown",
          "age": 65,
          "gender": "Male",
          "address": {
              "street": "789 Pine Road",
              "city": "Madison",
              "state": "WI",
              "zip": "53703"
          },
          "contact": {
              "phone": "555-345-6789",
              "email": "robertbrown@example.com"
          },
          "medical_history": [
              {
                  "condition": "Chronic Obstructive Pulmonary Disease (COPD)",
                  "diagnosed_date": "2010-05-14",
                  "medications": ["Tiotropium"]
              }
          ]
      },
   4:   {
          "patient_id": "P004",
          "name": "Emily Davis",
          "age": 50,
          "gender": "Female",
          "address": {
              "street": "321 Birch Boulevard",
              "city": "Denver",
              "state": "CO",
              "zip": "80203"
          },
          "contact": {
              "phone": "555-456-7890",
              "email": "emilydavis@example.com"
          },
          "medical_history": [
              {
                  "condition": "Breast Cancer",
                  "diagnosed_date": "2019-09-23",
                  "medications": ["Tamoxifen"]
              }
          ]
      },
   5:   {
          "patient_id": "P005",
          "name": "Michael Johnson",
          "age": 55,
          "gender": "Male",
          "address": {
              "street": "654 Elm Street",
              "city": "Columbus",
              "state": "OH",
              "zip": "43215"
          },
          "contact": {
              "phone": "555-567-8901",
              "email": "michaeljohnson@example.com"
          },
          "medical_history": [
              {
                  "condition": "Arthritis",
                  "diagnosed_date": "2012-07-19",
                  "medications": ["Ibuprofen"]
              },
              {
                  "condition": "High Cholesterol",
                  "diagnosed_date": "2016-02-25",
                  "medications": ["Atorvastatin"]
              }
          ]
      }
  
  
  }
  res.send(obj)
})

export default router;