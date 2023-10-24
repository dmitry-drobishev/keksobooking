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

// создает адрес изображения avatar, строка
const createRandomAvatar = (num) => {
  const number = String(num).padStart(2,'0');
  const avatar = 'img/avatars/user' + number + '.png';
  return avatar;
};

createRandomAvatar (10);

// создает массив заголовков
const createRandomTitle = (titles) => {
  if (!(titles === undefined) & titles.length !== 0) {
    const newTitles = titles.slice();
    newTitles.sort(() => Math.random() - 0.5);
    return newTitles;
  }
  throw new Error('массив пуст');
};

createRandomTitle (TITLES);


const createRandomPlace = () => {
  const placesArray = [];

  for (let placesCounter = 0; placesCounter < PLACES_VALUE; placesCounter++) {
    placesArray.push({
      type: PLACE_TYPE[getRandomIntInclusive(0, PLACE_TYPE.length - 1)],
    });
  }
  return  placesArray;
};

createRandomPlace();

// создает рандомную координату  location, объект
// lat, от 35.65000 до 35.70000.
// lng, 139.70000 до 139.80000.

const createRandomLocation = () => {
  const location = {
    lat: getRandomNumInclusive (35.65000, 35.70000, 5),
    lng: getRandomNumInclusive (139.70000, 139.80000, 5),
  };
  return location;
};

createRandomLocation ();
