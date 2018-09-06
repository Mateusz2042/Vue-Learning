const products = [
  {
    id: 1,
    name: 'backpack',
    description: 'big backpack',
    price: 100,
    image: '@/assets/images/backpack.png'
  },
  {
    id: 2,
    name: 'bike',
    description: 'new bike',
    price: 1200,
    image: '../assets/images/bike.png'
  },
  {
    id: 3,
    name: 'guitar',
    description: 'new guitar',
    price: 2000,
    image: '../assets/images/guitar.png'
  },
  {
    id: 4,
    name: 'gun',
    description: 'fast gun',
    price: 3500,
    image: '../assets/images/gun.png'
  },
  {
    id: 5,
    name: 'microwave',
    description: 'new microwave',
    price: 350,
    image: '../assets/images/microwave-oven.png'
  },
  {
    id: 6,
    name: 'book',
    description: 'interesting book',
    price: 35,
    image: '../assets/images/open-book.png'
  },
  {
    id: 7,
    name: 'camera',
    description: 'high resolution',
    price: 600,
    image: '../assets/images/video-camera.png'
  },
  {
    id: 8,
    name: 'cutlery',
    description: 'new cutlery',
    price: 200,
    image: '../assets/images/restaurant-cutlery.png'
  },
  {
    id: 9,
    name: 'ball',
    description: 'new ball',
    price: 150,
    image: '../assets/images/soccer-ball-variant.png'
  },
  {
    id: 10,
    name: 'pendrive',
    description: '64 gb',
    price: 180,
    image: '../assets/images/usb.png'
  }
]

export default {
  getProducts (cba) {
    return cba(products)
  }
}
