const HOTELS_VALUE = 10;

const TITLES = [
  'Горбатая гора',
  'у Мадины',
  'Сосисочный викенд',
  'У товарища',
  'Анжела',
  'Лазурный берег',
  'Сансара',
  'Cириус',
  'Бархатные сезоны',
  'Товарищ майор',
];

const PLACE_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '11:00',
  '11:30',
  '12:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const IMAGES = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const DESCRIPTIONS = [
  'Цитата Джейсона Стейтема #1',
  'Цитата Джейсона Стейтема #2',
  'Цитата Джейсона Стейтема #3',
  'Цитата Джейсона Стейтема #4',
  'Цитата Джейсона Стейтема #5',
  'Цитата Джейсона Стейтема #6',
  'Цитата Джейсона Стейтема #7',
  'Цитата Джейсона Стейтема #8',
  'Цитата Джейсона Стейтема #9',
  'Цитата Джейсона Стейтема #10',
];

/* возвращающает случайное целое число из переданного диапазона включительно.
Учтите, что диапазон может быть только положительный, включая ноль.
А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.*/

function getRandomIntInclusive(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  if (minValue >= 0 || maxValue > minValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  throw new Error('Некорректное значение аргумента');
}
// getRandomIntInclusive(10, 100);


/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
Будет использоваться для генерации временных географических координат в следующем задании. */

function getRandomNumInclusive (min, max, order) {
  if (max > min && min > 0) {
    return (Math.random() * (max - min) + min).toFixed(order);
  }

  throw new Error('Некорректное значение аргумента');
}
// getRandomNumInclusive(1.1, 1.3, 3);

// *** возвращаетмассив строк — массив случайной длины из значений из переданного массива
const createRandomLengthArray = (array) => {
  const arr = Array.from(array);
  const arrayNew = new Array(getRandomIntInclusive(1, arr.length));

  for (let id=0; id<arrayNew.length; id++ ){
    arrayNew[id]=arr.splice(getRandomIntInclusive(0, arr.length-1), 1).join();
  }
  return arrayNew;
};

// *** возвращает адрес изображения avatar, строка
const createAvatarAdress = (num) => {
  const number = String(num).padStart(2,'0');
  const avatar = `img/avatars/user${number} .png`;
  return avatar;
};

// *** возвращает массив заголовков перемешивая переданный массив
const createRandomTitle = (titles) => {
  if (!(titles === undefined) & titles.length !== 0) {
    const newTitles = titles.slice();
    newTitles.sort(() => Math.random() - 0.5);
    return newTitles;
  }
  throw new Error('массив пуст');
};
// console.log(createRandomTitle (TITLES));


// *** Функция возвращает массив объектов отелей
const createHotelsList = (count) => {
  const hotelsArr = [];
  const avatarIndexArr = _.shuffle(_.range(1,100)).slice(0,10);
  const titlesArr = createRandomTitle(TITLES);


  for (let index = 0; index < count; index++) {
    const newHotel = {
      autor : {
        avatar: createAvatarAdress(avatarIndexArr[index]),
      },

      location : {
        lat: getRandomNumInclusive (35.65000, 35.70000, 5),
        lng: getRandomNumInclusive (139.70000, 139.80000, 5),
      },

      offer : {
        title: titlesArr[index],
        price: Math.round(getRandomIntInclusive(1500, 10000) / 100) * 100,
        type: PLACE_TYPE[getRandomIntInclusive(0, PLACE_TYPE.length - 1)],
        rooms: getRandomIntInclusive(1,3),
        guests: getRandomIntInclusive(2,6),
        checkin: CHECKIN[getRandomIntInclusive(0, CHECKIN.length-1)],
        checkout: CHECKOUT[getRandomIntInclusive(0, CHECKOUT.length-1)],
        features: createRandomLengthArray(FEATURES),
        description: DESCRIPTIONS[getRandomIntInclusive(0, DESCRIPTIONS.length - 1)],
        photos: createRandomLengthArray(IMAGES),
      },
    };

    hotelsArr[index] = newHotel;
  }
  return hotelsArr;
};

createHotelsList(HOTELS_VALUE);

// console.log(createHotelsList(HOTELS_VALUE));

// округление до 10
// Math.round(val / 10) * 10;
// `img/avatars/user ${number} .png`;
// address: [location.lat, location.lng],


/*В файле main.js на основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

Структура каждого объекта должна быть следующей:

author, объект — описывает автора. Содержит одно поле:

avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
offer, объект — содержит информацию об объявлении. Состоит из полей:

title, строка — заголовок предложения. Придумайте самостоятельно.

address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.

price, число — стоимость. Случайное целое положительное число.

type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.

rooms, число — количество комнат. Случайное целое положительное число.

guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.

checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.

features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

description, строка — описание помещения. Придумайте самостоятельно.

photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

location, объект — местоположение в виде географических координат. Состоит из двух полей:

lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.

lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000. */
