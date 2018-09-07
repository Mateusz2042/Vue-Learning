const products = [
  {
    id: 1,
    name: 'backpack',
    description: 'big backpack',
    price: 100,
    image: '../static/images/backpack.png'
  },
  {
    id: 2,
    name: 'bike',
    description: 'new bike',
    price: 1200,
    image: '../static/images/bike.png'
  },
  {
    id: 3,
    name: 'guitar',
    description: 'new guitar',
    price: 2000,
    image: '../static/images/guitar.png'
  },
  {
    id: 4,
    name: 'gun',
    description: 'fast gun',
    price: 3500,
    image: '../static/images/gun.png'
  },
  {
    id: 5,
    name: 'microwave',
    description: 'new microwave',
    price: 350,
    image: '../static/images/microwave-oven.png'
  },
  {
    id: 6,
    name: 'book',
    description: 'interesting book',
    price: 35,
    image: '../static/images/open-book.png'
  },
  {
    id: 7,
    name: 'camera',
    description: 'high resolution',
    price: 600,
    image: '../static/images/video-camera.png'
  },
  {
    id: 8,
    name: 'cutlery',
    description: 'new cutlery',
    price: 200,
    image: '../static/images/restaurant-cutlery.png'
  },
  {
    id: 9,
    name: 'ball',
    description: 'new ball',
    price: 150,
    image: '../static/images/soccer-ball-variant.png'
  },
  {
    id: 10,
    name: 'pendrive',
    description: '64 gb',
    price: 180,
    image: '../static/images/usb.png'
  }
]

export default {
  getProducts (cba) {
    return cba(products)
  }
}
