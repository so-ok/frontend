const pills = [
  {
    id: 1,
    name: "종근당 바이오",
    nutrient: {
      프로바이오틱스: "10억 CFU",
      루테인: "존나많이",
    },
    imge: "",
  },
  {
    id: 2,
    name: "종근당 바이오",
    nutrient: {
      프로바이오틱스: "10억 CFU",
      루테인: "존나많이",
    },
    imge: "",
  },
  {
    id: 3,
    name: "종근당 바이오",
    nutrient: {
      프로바이오틱스: "10억 CFU",
      루테인: "존나많이",
    },
    imge: "",
  },
  {
    id: 4,
    name: "종근당 바이오",
    nutrient: {
      프로바이오틱스: "10억 CFU",
      루테인: "존나많이",
    },
    imge: "",
  },
  {
    id: 5,
    name: "종근당 바이오",
    nutrient: {
      프로바이오틱스: "10억 CFU",
      루테인: "존나많이",
    },
    imge: "",
  },
];

export const list = () =>
  new Promise((resolve, reject) => {
    try {
      const data = pills;
      process.nextTick(() => {
        resolve({
          data,
        });
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
