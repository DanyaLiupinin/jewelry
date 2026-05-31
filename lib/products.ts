export interface Product {
  id: string
  name: string
  material: string
  price: string
  priceNumber: number
  image: string
  aspect: 'portrait' | 'landscape'
  description: string
  details: string[]
}

export const products: Product[] = [
  {
    id: 'razlom',
    name: 'Кольцо «Разлом»',
    material: 'Серебро 925, оксидирование',
    price: '8 400 ₽',
    priceNumber: 8400,
    image: '/images/product-1.png',
    aspect: 'portrait',
    description: 'Асимметричная форма кольца напоминает тектонический разлом — момент, когда земля раскалывается под давлением внутренних сил. Поверхность обработана вручную методом холодной ковки.',
    details: [
      'Материал: серебро 925 пробы',
      'Покрытие: оксидирование',
      'Размеры: 16–21 (под заказ)',
      'Вес: ~12 г',
      'Ручная работа',
    ],
  },
  {
    id: 'oskolok',
    name: 'Кулон «Осколок»',
    material: 'Серебро 925, чернение',
    price: '6 200 ₽',
    priceNumber: 6200,
    image: '/images/product-2.png',
    aspect: 'landscape',
    description: 'Подвеска в форме обломка — как если бы часть чего-то большего откололась и стала самостоятельным объектом. Грубая текстура контрастирует с гладкой обратной стороной.',
    details: [
      'Материал: серебро 925 пробы',
      'Покрытие: частичное чернение',
      'Размер подвески: ~35×25 мм',
      'Цепь: 50 см (можно изменить)',
      'Ручная работа',
    ],
  },
  {
    id: 'kost',
    name: 'Серьги-кафф «Кость»',
    material: 'Серебро 925',
    price: '5 800 ₽',
    priceNumber: 5800,
    image: '/images/product-3.png',
    aspect: 'landscape',
    description: 'Каффы повторяют органическую форму костной ткани — будто выросли из самого уха. Не требуют прокола, удобно фиксируются на хряще.',
    details: [
      'Материал: серебро 925 пробы',
      'Тип: каффы (без прокола)',
      'Комплект: 2 шт.',
      'Вес пары: ~8 г',
      'Ручная работа',
    ],
  },
  {
    id: 'pozvonok',
    name: 'Браслет «Позвонок»',
    material: 'Серебро 925, оксидирование',
    price: '11 900 ₽',
    priceNumber: 11900,
    image: '/images/product-4.png',
    aspect: 'portrait',
    description: 'Сегментированный браслет из звеньев, напоминающих позвонки. Каждое звено подвижно — браслет облегает запястье, повторяя движения.',
    details: [
      'Материал: серебро 925 пробы',
      'Покрытие: оксидирование',
      'Длина: 17–20 см (под заказ)',
      'Вес: ~45 г',
      'Ручная работа',
    ],
  },
  {
    id: 'zemlya',
    name: 'Кольцо «Земля»',
    material: 'Серебро 925, текстура',
    price: '7 600 ₽',
    priceNumber: 7600,
    image: '/images/product-5.png',
    aspect: 'portrait',
    description: 'Поверхность кольца имитирует растрескавшуюся землю — паттерн, возникающий в засушливых регионах. Каждое кольцо уникально благодаря ручной обработке.',
    details: [
      'Материал: серебро 925 пробы',
      'Текстура: «сухая земля»',
      'Размеры: 16–21 (под заказ)',
      'Вес: ~10 г',
      'Ручная работа',
    ],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getAllProductIds(): string[] {
  return products.map((p) => p.id)
}
