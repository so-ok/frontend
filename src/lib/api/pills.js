const pills = [
  {
    id: 1,
    name: '대웅제약 에너씨슬 유산균 밀크씨슬 유산균 30캡슐',
    ingredient: [
      {
        name: '실리마린',
        amount: '130',
        unit: 'mg',
      },
      {
        name: '프로바이오틱스',
        amount: '3000000000',
        unit: 'CFU',
      },
    ],
    attentions: [
      {
        name: '간 건강',
      },
    ],
  },
  {
    id: 2,
    name: '대웅제약 에너씨슬 유산균 밀크씨슬 유산균 30캡슐',
    ingredient: [
      {
        name: '실리마린',
        amount: '130',
        unit: 'mg',
      },
      {
        name: '프로바이오틱스',
        amount: '3000000000',
        unit: 'CFU',
      },
    ],
    attentions: [
      {
        name: '간 건강',
      },
    ],
  },
  {
    id: 3,
    name: '대웅제약 에너씨슬 유산균 밀크씨슬 유산균 30캡슐',
    ingredient: [
      {
        name: '실리마린',
        amount: '130',
        unit: 'mg',
      },
      {
        name: '프로바이오틱스',
        amount: '3000000000',
        unit: 'CFU',
      },
    ],
    attentions: [
      {
        name: '간 건강',
      },
    ],
  },
  {
    id: 4,
    name: '대웅제약 에너씨슬 유산균 밀크씨슬 유산균 30캡슐',
    ingredient: [
      {
        name: '실리마린',
        amount: '130',
        unit: 'mg',
      },
      {
        name: '프로바이오틱스',
        amount: '3000000000',
        unit: 'CFU',
      },
    ],
    attentions: [
      {
        name: '간 건강',
      },
    ],
  },
  {
    id: 5,
    name: '대웅제약 에너씨슬 유산균 밀크씨슬 유산균 30캡슐',
    ingredient: [
      {
        name: '실리마린',
        amount: '130',
        unit: 'mg',
      },
      {
        name: '프로바이오틱스',
        amount: '3000000000',
        unit: 'CFU',
      },
    ],
    attentions: [
      {
        name: '간 건강',
      },
    ],
  },
  {
    id: 6,
    name: '대웅제약 에너씨슬 유산균 밀크씨슬 유산균 30캡슐',
    ingredient: [
      {
        name: '실리마린',
        amount: '130',
        unit: 'mg',
      },
      {
        name: '프로바이오틱스',
        amount: '3000000000',
        unit: 'CFU',
      },
    ],
    attentions: [
      {
        name: '간 건강',
      },
    ],
  },
];

export const list = () =>
  new Promise((resolve, reject) => {
    try {
      const data = pills;
      setTimeout(() => {
        resolve({
          data,
        });
      }, 1000);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
