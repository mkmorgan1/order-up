export const foodItems = {
  sides: [
    {
      name: 'Fries',
      price: 4.99,
      image: require('./jungleLines.webp'),
    },
    {
      name: 'Chips and Salsa',
      price: 5.99,
      image: require('./jungleLines.webp'),
    },
  ],
  entrees: [
    {
      name: 'Burger',
      price: 10.99,
      image: require('./jungleLines.webp'),
    },
    {
      name: 'Hot Dog',
      price: 5.99,
      image: require('./jungleLines.webp'),
    },
    {
      name: 'Salad',
      price: 5.99,
      image: require('./jungleLines.webp'),
      options: [
        {
          dressings: ['Ranch', 'Thousand Island', 'Blue Cheese'],
        },
      ],
    },
  ],
};
