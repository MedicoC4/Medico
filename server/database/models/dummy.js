const { User, Order, Pharmacy, Product, Review, Record } = require("../index.js");


const dummyOrders = [
    {
      quantityOrdered: 10,
      orderStatus: "Accepted",
      livraisonStatus: "Shipped",
      tracking_number: "XYZ98765",
      acceptedAt: new Date("2023-01-15"),
      dilevredAt: new Date("2023-01-20"),
    },
    {
      quantityOrdered: 3,
      orderStatus: "Rejected",
      livraisonStatus: "Out for Delivery",
      tracking_number: "DEF45678",
      acceptedAt: null,
      dilevredAt: null,
    },
    {
      quantityOrdered: 7,
      orderStatus: "Pending",
      livraisonStatus: "Processing",
      tracking_number: "MNO12345",
      acceptedAt: null,
      dilevredAt: null,
    },
    {
      quantityOrdered: 2,
      orderStatus: "Accepted",
      livraisonStatus: "Delivered",
      tracking_number: "JKL67890",
      acceptedAt: new Date("2023-02-10"),
      dilevredAt: new Date("2023-02-12"),
    },
    {
      quantityOrdered: 4,
      orderStatus: "Accepted",
      livraisonStatus: "Delivered",
      tracking_number: "PQR34567",
      acceptedAt: new Date("2023-03-05"),
      dilevredAt: new Date("2023-03-08"),
    },
  ];
  
  const dummyPharmacies = [
    {
      PHname: "Pharmacy A",
      type: "day",
      lang: 36.78,
      lat: 10.45,
      adress: "123 Main Street",
    },
    {
      PHname: "Pharmacy B",
      type: "night",
      lang: 34.56,
      lat: 11.23,
      adress: "456 Elm Street",
    },
    {
      PHname: "Pharmacy C",
      type: "day",
      lang: 35.67,
      lat: 9.87,
      adress: "789 Oak Avenue",
    },
    {
      PHname: "Pharmacy D",
      type: "night",
      lang: 33.98,
      lat: 12.34,
      adress: "567 Pine Road",
    },
    {
      PHname: "Pharmacy E",
      type: "day",
      lang: 37.12,
      lat: 10.89,
      adress: "101 Cedar Lane",
    },
  ];
  
  const dummyProducts = [
    {
      category: "Pain Relief",
      productName: "Aspirin",
      price: 5.99,
      stock: 100,
      description: "Relieves pain and reduces fever",
      manufacturer: "Bayer",
      activeIngredients: "Acetylsalicylic Acid",
      dosageForm: "Tablet",
      strength: "500 mg",
      packaging: "Bottle",
      expiryDate: new Date("2023-12-31"),
      imageURL: "https://example.com/aspirin.jpg",
      codebar: 123456789,
    },
    {
      category: "Antibiotics",
      productName: "Amoxicillin",
      price: 8.99,
      stock: 50,
      description: "Treats bacterial infections",
      manufacturer: "Generic",
      activeIngredients: "Amoxicillin",
      dosageForm: "Capsule",
      strength: "500 mg",
      packaging: "Blister pack",
      expiryDate: new Date("2023-10-15"),
      imageURL: "https://example.com/amoxicillin.jpg",
      codebar: 987654321,
    },
    {
      category: "Allergy and Sinus",
      productName: "Cetirizine",
      price: 6.49,
      stock: 75,
      description: "Relieves allergy symptoms",
      manufacturer: "Zyrtec",
      activeIngredients: "Cetirizine",
      dosageForm: "Tablet",
      strength: "10 mg",
      packaging: "Box",
      expiryDate: new Date("2023-09-30"),
      imageURL: "https://example.com/cetirizine.jpg",
      codebar: 543210987,
    },
    {
      category: "Digestive Health",
      productName: "Pepto-Bismol",
      price: 7.99,
      stock: 60,
      description: "Relieves upset stomach and indigestion",
      manufacturer: "Procter & Gamble",
      activeIngredients: "Bismuth subsalicylate",
      dosageForm: "Liquid",
      strength: "525 mg/15 mL",
      packaging: "Bottle",
      expiryDate: new Date("2023-11-15"),
      imageURL: "https://example.com/pepto-bismol.jpg",
      codebar: 135792468,
    },
    {
      category: "Vitamins and Supplements",
      productName: "Multivitamin",
      price: 9.99,
      stock: 80,
      description: "Supports overall health and well-being",
      manufacturer: "Nature's Way",
      activeIngredients: "Various vitamins and minerals",
      dosageForm: "Capsule",
      strength: "N/A",
      packaging: "Bottle",
      expiryDate: new Date("2023-12-31"),
      imageURL: "https://example.com/multivitamin.jpg",
      codebar: 246813579,
    },
  ];

  const dummyRecords = [
    {
      type: "Medical Report",
      file: "medical_report_1.pdf",
      yx: "ABC123",
      isverified: true,
      speciality: "Cardiologist",
    },
    {
      type: "Prescription",
      file: "prescription_1.jpg",
      yx: "DEF456",
      isverified: false,
      speciality: "Dermatologist",
    },
    {
      type: "Medical Report",
      file: "medical_report_2.pdf",
      yx: "GHI789",
      isverified: true,
      speciality: "Orthopedic Surgeon",
    },
    {
      type: "Prescription",
      file: "prescription_2.jpg",
      yx: "JKL012",
      isverified: false,
      speciality: "Gastroenterologist",
    },
    {
      type: "Medical Report",
      file: "medical_report_3.pdf",
      yx: "MNO345",
      isverified: true,
      speciality: "Ophthalmologist",
    },
  ];

  const dummyReviews = [
    {
      review: "Great product, I love it!",
      rating: 5,
    },
    {
      review: "Good quality, worth the price.",
      rating: 4,
    },
    {
      review: "Average product, could be better.",
      rating: 3,
    },
    {
      review: "Not satisfied with the purchase.",
      rating: 2,
    },
    {
      review: "Terrible product, a complete waste of money.",
      rating: 1,
    },
  ];

  const dummyUsers = [
    {
      username: "john_doe",
      email: "john.doe@example.com",
      password: "hashed_password_1",
      type: "user",
      imgUrl: "https://example.com/john_doe.jpg",
    },
    {
      username: "alice_jones",
      email: "alice.jones@example.com",
      password: "hashed_password_2",
      type: "user",
      imgUrl: "https://example.com/alice_jones.jpg",
    },
    {
      username: "susan_smith",
      email: "susan.smith@example.com",
      password: "hashed_password_3",
      type: "user",
      imgUrl: "https://example.com/susan_smith.jpg",
    },
    {
      username: "mark_wilson",
      email: "mark.wilson@example.com",
      password: "hashed_password_4",
      type: "user",
      imgUrl: "https://example.com/mark_wilson.jpg",
    },
  ];
  
  module.exports = {dummyPharmacies, dummyOrders, dummyProducts, dummyRecords, dummyReviews, dummyUsers, };

  
  User.bulkCreate(dummyUsers)
    .then(() => {
      console.log('Dummy data created successfully.');
    })
    .catch((error) => {
      console.error('Error creating dummy data:', error);
    });

    
  Order.bulkCreate(dummyOrders)
    .then(() => {
      console.log('Dummy data created successfully.');
    })
    .catch((error) => {
      console.error('Error creating dummy data:', error);
    });


  Pharmacy.bulkCreate(dummyPharmacies)
    .then(() => {
      console.log('Dummy data created successfully.');
    })
    .catch((error) => {
      console.error('Error creating dummy data:', error);
    });


  Product.bulkCreate(dummyProducts)
    .then(() => {
      console.log('Dummy data created successfully.');
    })
    .catch((error) => {
      console.error('Error creating dummy data:', error);
    });


    Record.bulkCreate(dummyRecords)
    .then(() => {
      console.log('Dummy data created successfully.');
    })
    .catch((error) => {
      console.error('Error creating dummy data:', error);
    });

    
  Review.bulkCreate(dummyReviews)
    .then(() => {
      console.log('Dummy data created successfully.');
    })
    .catch((error) => {
      console.error('Error creating dummy data:', error);
    });