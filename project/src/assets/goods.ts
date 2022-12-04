export type Item = {
  id: string | number;
  title: string;
  image: string;
  description?: string;
  price: number;
  oldPrice?: number;
  status?: string;
  count: number;
};

export type Goods = Item[];

const goods: Goods = [
  {
    id: 1,
    title: 'garlic',
    image: '/images/garlic.png',
    price: 13.99,
    count: 0,
    status: 'new',
  },
  {
    id: 2,
    title: 'broccoli',
    image: '/images/broccoli.png',
    price: 11.35,
    count: 0,
  },
  {
    id: 3,
    title: 'eggplant',
    image: '/images/eggplant.png',
    price: 9.75,
    oldPrice: 11.75,
    count: 0,
    status: 'sale',
  },
  {
    id: 4,
    title: 'tomato',
    image: '/images/tomato.png',
    price: 10.29,
    oldPrice: 13.99,
    count: 0,
    status: 'sale',
  },
  {
    id: 5,
    title: 'beef',
    image: '/images/beef.png',
    price: 16.65,
    count: 0,
    status: 'new',
  },
  {
    id: 6,
    title: 'pepper',
    image: '/images/pepper.png',
    price: 9.35,
    oldPrice: 13.99,
    count: 0,
    status: 'sale',
  },
  {
    id: 7,
    title: 'strawberry',
    image: '/images/strawberry.png',
    price: 15.29,
    count: 0,
    status: 'new',
  },
  {
    id: 8,
    title: 'watermelon',
    image: '/images/watermelon.png',
    price: 8.49,
    oldPrice: 10.99,
    count: 0,
    status: 'sale',
  },
  {
    id: 9,
    title: 'cabbage',
    image: '/images/cabbage.png',
    price: 7.89,
    count: 0,
  },
];

export default goods;
