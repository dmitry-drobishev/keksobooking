// Структура каждого объекта должна быть следующей:

// author
  //  avatar
// offer
  //  title
  //  address
  //  price
  //  type
  // rooms
  // guests, 
  // checkin
  // checkout, 

  // features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.

  // description, строка — описание помещения. Придумайте самостоятельно.

  // photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.

  // location, объект
    // lat, от 35.65000 до 35.70000.
    // lng, 139.70000 до 139.80000.

const createRandomLocation = () => {
  return console.log({
    lat: getRandomNumInclusive (35.65000, 35.70000, 5),
    lng: getRandomNumInclusive (139.70000, 139.80000, 5),
  });
}

createRandomLocation ();





// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Учтите, что диапазон может быть только положительный, включая ноль.
// А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

function getRandomIntInclusive(min, max) {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  if (minValue >= 0 && maxValue > minValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  throw new Error('Некорректное значение аргумента');
}

getRandomIntInclusive(10, 100);


/* Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
Будет использоваться для генерации временных географических координат в следующем задании. */

function getRandomNumInclusive (min, max, order) {
  if (max > min && min > 0) {
    // return (Math.random() * (max - min + 1) + min).toFixed(order);
    return (Math.random() * (max - min) + min).toFixed(order);
  }

  throw new Error('Некорректное значение аргумента');
}

getRandomNumInclusive(1.1, 1.3, 3);

const PLACES_VALUE = 10;

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
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi', 
  'dishwasher', 
  'parking', 
  'washer', 
  'elevator', 
  'conditioner',
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

const createRandomPlace = () => {
  const placesArray = [];

  for (let placesCounter = 0; placesCounter < PLACES_VALUE; placesCounter++) {
    placesArray.push({
      type: PLACE_TYPE[getRandomIntInclusive(0, PLACE_TYPE.length - 1)],
    });
  }

  return  console.log(placesArray);
}

createRandomPlace();


