// Your eCommerce business needs to keep track of products and their prices.
// The products each belong to a department. The business needs to keep track of
// revenue as product prices change over time. The business also needs to keep track
// of receipts of transactions and the number of units each product has in stock.

{
  products: [
    {
      name: 'Product 1',
      price: 1.00,
      department: 'sports',
      availableStock: 100
    },
    {
      name: 'Product 2',
      price: 100.00,
      department: 'kitchen',
      availableStock: 30
    }
  ]
}

{
  transactions: [
    {
      transactionId: Integer,
      purchaseProducts: [
        {
          productName: 'Product 1',
          price: 1.00
          department: 'sports',
          amount: 2
        }
      ]
    }
  ]
}



// You're building an activity feed for a social media site. The feed must display a
// chronological list of activities for the current user's friends. These activities
// could potentially be any action performed on the site including uploading a photo,
// changing their profile, friending another user, commenting, liking etc... Further,
// you only want to display activities for users that the current user interacts with
// frequently.

{
  id: Integer
  username: String,
  password: String,
  profile: {
    bio: String,
    gender: String,
    age: Integer,
    location: {
      city: String,
      state: String,
      country: String
    }
  },
  recentFriends: [id1, id2, id3],
  feed: [
    {
      id: id1,
      activity: String,
      date: Date
    }
  ]
}
