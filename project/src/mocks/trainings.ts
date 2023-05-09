import { Training } from '../types/training.interface';

export const trainings: Training[] =
[
  {
    id: 7,
    title: 'Oriental Metal Shirt',
    backgroundImage: 'https://loremflickr.com/640/480/cats',
    trainingLevel: 'новичок',
    trainingType: 'йога',
    trainingTime: '50-80 мин',
    price: 2662,
    calories: 4613,
    description: 'Accusamus inventore deleniti. Minus nihil labore.',
    trainingForGender: 'для всех',
    video: '',
    rating: 2,
    coachId: '3b4fab4fc3af9bcddbc9b26d',
    isSpecialOffer: true,
    reviews: [],
    createdAt: '2023-05-03T17:38:28.436Z'
  },
  {
    id: 21,
    title: 'Тренировка1',
    backgroundImage: '1.png',
    trainingLevel: 'любитель',
    trainingType: 'бокс',
    trainingTime: '10-30 мин',
    price: 2000,
    calories: 2050,
    description: 'какое-то описание',
    trainingForGender: 'для женщин',
    video: '1.mov',
    rating: 3,
    coachId: '6434421323d0a1df18c0ecdf',
    isSpecialOffer: true,
    reviews: [],
    createdAt: '2023-05-03T14:37:11.290Z'
  },
  {
    id: 10,
    title: 'Ergonomic Rubber Hat',
    backgroundImage: 'https://loremflickr.com/640/480/business',
    trainingLevel: 'профессиональ',
    trainingType: 'аэробика',
    trainingTime: '10-30 мин',
    price: 1420,
    calories: 4270,
    description: 'Dolore eos accusantium. Quo cum esse reiciendis delectus quod tenetur voluptatibus dignissimos vel.',
    trainingForGender: 'для женщин',
    video: '',
    rating: 2,
    coachId: '629e8ebeffe44dcb3f26fc80',
    isSpecialOffer: false,
    reviews: [
      {
        id: 2,
        'userId': 'fc45fc6dc2ff2af021524ff5',
        'trainingId': 10,
        rating: 5,
        'text': 'Commodi sunt.',
        createdAt: '2023-05-03T19:29:39.860Z'
      }
    ],
    createdAt: '2023-05-03T11:40:44.057Z'
  },
  {
    id: 8,
    title: 'Recycled Wooden Gloves',
    backgroundImage: 'https://loremflickr.com/640/480/sports',
    trainingLevel: 'новичок',
    trainingType: 'стрейчинг',
    trainingTime: '50-80 мин',
    price: 477,
    calories: 3443,
    description: 'Voluptatem recusandae aut eligendi porro dolorem magni ipsum. Consectetur dolore placeat officiis.',
    trainingForGender: 'для женщин',
    video: '',
    rating: 3,
    coachId: 'f35e0d7b3d00dc48f0e5a2d5',
    isSpecialOffer: true,
    reviews: [],
    createdAt: '2023-05-03T07:56:08.245Z'
  },
  {
    id: 11,
    title: 'Recycled Wooden Computer',
    backgroundImage: 'https://loremflickr.com/640/480/cats',
    trainingLevel: 'новичок',
    trainingType: 'пилатес',
    trainingTime: '50-80 мин',
    price: 3947,
    calories: 1739,
    description: 'Temporibus fuga repellat facere. Quia enim omnis maxime consequuntur rem.',
    trainingForGender: 'для всех',
    video: '',
    rating: 4,
    coachId: 'd8bafc5af1a3e80dee6f8889',
    isSpecialOffer: false,
    reviews: [
      {
        id: 3,
        'userId': '9a9317e4e3c9d051d79b45a9',
        'trainingId': 11,
        rating: 4,
        'text': 'Unde pariatur.',
        createdAt: '2023-05-03T19:29:39.871Z'
      }
    ],
    createdAt: '2023-05-03T04:49:10.585Z'
  },
  {
    id: 6,
    title: 'Awesome Concrete Gloves',
    backgroundImage: 'https://loremflickr.com/640/480/nightlife',
    trainingLevel: 'новичок',
    trainingType: 'аэробика',
    trainingTime: '30-50 мин',
    price: 3434,
    calories: 1103,
    description: 'Hic eum magni tenetur necessitatibus at aut consequuntur atque. Omnis tenetur sint rerum veritatis odio dolor.',
    trainingForGender: 'для мужчин',
    video: '',
    rating: 4,
    coachId: '31d12ab5fbbeacbdacadbc9d',
    isSpecialOffer: true,
    reviews: [
      {
        id: 8,
        'userId': 'ad6fcce4b796c8b0ba1afbee',
        'trainingId': 6,
        rating: 4,
        'text': 'Voluptatem error.',
        createdAt: '2023-05-03T19:29:39.631Z'
      }
    ],
    createdAt: '2023-05-03T03:42:40.911Z'
  },
  {
    id: 12,
    title: 'Luxurious Steel Car',
    backgroundImage: 'https://loremflickr.com/640/480/people',
    trainingLevel: 'любитель',
    trainingType: 'бокс',
    trainingTime: 'больше 80 мин',
    price: 1026,
    calories: 4984,
    description: 'Doloribus ratione cumque eos beatae delectus quisquam ea eligendi. Placeat maiores vero velit occaecati iusto.',
    trainingForGender: 'для женщин',
    video: '',
    rating: 3,
    coachId: 'fbf3ba70a7a7f4b1d8eaadac',
    isSpecialOffer: true,
    reviews: [],
    createdAt: '2023-05-02T22:02:22.362Z'
  },
  {
    id: 5,
    title: 'Bespoke Granite Shoes',
    backgroundImage: 'https://loremflickr.com/640/480/abstract',
    trainingLevel: 'любитель',
    trainingType: 'кроссфит',
    trainingTime: '10-30 мин',
    price: 1809,
    calories: 2348,
    description: 'Nobis alias dicta laudantium mollitia perferendis saepe ad. Pariatur facilis dignissimos quisquam iusto similique amet.',
    trainingForGender: 'для женщин',
    video: '',
    rating: 4,
    coachId: '84d36ddf445bcbe08aedbfb6',
    isSpecialOffer: true,
    reviews: [
      {
        id: 5,
        'userId': 'bffdc97d6d85840facaa2ccf',
        'trainingId': 5,
        rating: 5,
        'text': 'Sapiente suscipit.',
        createdAt: '2023-05-03T19:29:39.842Z'
      }
    ],
    createdAt: '2023-05-02T20:23:16.464Z'
  },
  {
    id: 4,
    title: 'Первая тренировка',
    backgroundImage: '1.png',
    trainingLevel: 'для начинающих',
    trainingType: 'бокс',
    trainingTime: '10-30 мин',
    price: 2000,
    calories: 2050,
    description: 'какое-то описание',
    trainingForGender: '',
    video: '1.mov',
    rating: 3,
    coachId: '6416c69d7be04eac59a9987c',
    isSpecialOffer: true,
    reviews: [
      {
        id: 15,
        'userId': '7771ecea676aeefaf9aacc8d',
        'trainingId': 4,
        rating: 2,
        'text': 'Voluptatem saepe.',
        createdAt: '2023-05-02T15:24:43.018Z'
      },
      {
        id: 13,
        'userId': 'b1070fd53c68ca509223cc01',
        'trainingId': 4,
        rating: 1,
        'text': 'Ratione porro.',
        createdAt: '2023-05-02T15:30:45.944Z'
      },
      {
        id: 1,
        'userId': '22e2b45e8fa980e27d2d8c75',
        'trainingId': 4,
        rating: 4,
        'text': 'Quis veritatis.',
        createdAt: '2023-05-03T19:29:39.854Z'
      }
    ],
    createdAt: '2023-03-26T20:06:08.280Z'
  },
  {
    id: 3,
    title: 'Первая тренировка',
    backgroundImage: '1680724425314.png',
    trainingLevel: 'для начинающих',
    trainingType: 'бокс',
    trainingTime: '50-80 мин',
    price: 1700,
    calories: 2050,
    description: 'какое-то описание',
    trainingForGender: '',
    video: '1680534625236.mp4',
    rating: 3,
    coachId: '6428812aab218eeca1ff7ac9',
    isSpecialOffer: true,
    reviews: [
      {
        id: 4,
        'userId': '7a32231faed1e427eeb4ebdd',
        'trainingId': 3,
        rating: 1,
        'text': 'Omnis sapiente.',
        createdAt: '2023-05-02T15:28:36.886Z'
      }
    ],
    createdAt: '2023-03-26T20:06:06.942Z'
  },
  {
    id: 2,
    title: 'Первая тренировка',
    backgroundImage: '1.png',
    trainingLevel: 'для начинающих',
    trainingType: 'бокс',
    trainingTime: '30-50 мин',
    price: 1300,
    calories: 2050,
    description: 'какое-то описание',
    trainingForGender: '',
    video: '1.mov',
    rating: 3,
    coachId: '13435235',
    isSpecialOffer: true,
    reviews: [
      {
        id: 11,
        'userId': '86dafd19b11ca7f402a4fae8',
        'trainingId': 2,
        rating: 4,
        'text': 'In aut.',
        createdAt: '2023-05-02T15:28:36.897Z'
      }
    ],
    createdAt: '2023-03-26T20:04:43.658Z'
  },
  {
    id: 1,
    title: 'Вторая тренир',
    backgroundImage: '1.png',
    trainingLevel: 'любитель',
    trainingType: 'бокс',
    trainingTime: '10-30 мин',
    price: 2000,
    calories: 2050,
    description: 'какое-то описание',
    trainingForGender: 'для женщин',
    video: '1.mov',
    rating: 3,
    coachId: '13435235',
    isSpecialOffer: true,
    reviews: [
      {
        id: 7,
        'userId': 'bf547b94a50e584e77aff89e',
        'trainingId': 1,
        rating: 5,
        'text': 'Unde ea.',
        createdAt: '2023-05-03T19:29:39.848Z'
      }
    ],
    createdAt: '2023-03-26T20:00:53.007Z'
  }
];
