export interface City {
  id: string;
  name: string;
  area: number; // в км²
  population: number;
  foundedYear: number;
}

export interface Country {
  id: string;
  name: string;
  language: string;
  area: number; // в км²
  population: number;
  cities: City[];
}

export const countries: Country[] = [
  {
    id: 'russia',
    name: 'Россия',
    language: 'Русский',
    area: 17098242,
    population: 146171015,
    cities: [
      {
        id: 'moscow',
        name: 'Москва',
        area: 2511,
        population: 13010112,
        foundedYear: 1147
      },
      {
        id: 'saint-petersburg',
        name: 'Санкт-Петербург',
        area: 1439,
        population: 5601911,
        foundedYear: 1703
      },
      {
        id: 'novosibirsk',
        name: 'Новосибирск',
        area: 506,
        population: 1635438,
        foundedYear: 1893
      }
    ]
  },
  {
    id: 'usa',
    name: 'США',
    language: 'Английский',
    area: 9833517,
    population: 334805268,
    cities: [
      {
        id: 'new-york',
        name: 'Нью-Йорк',
        area: 1214,
        population: 8336817,
        foundedYear: 1624
      },
      {
        id: 'los-angeles',
        name: 'Лос-Анджелес',
        area: 1302,
        population: 3849297,
        foundedYear: 1781
      },
      {
        id: 'chicago',
        name: 'Чикаго',
        area: 606,
        population: 2665039,
        foundedYear: 1833
      }
    ]
  },
  {
    id: 'france',
    name: 'Франция',
    language: 'Французский',
    area: 643801,
    population: 67749632,
    cities: [
      {
        id: 'paris',
        name: 'Париж',
        area: 105,
        population: 2141000,
        foundedYear: -52
      },
      {
        id: 'marseille',
        name: 'Марсель',
        area: 241,
        population: 870018,
        foundedYear: -600
      },
      {
        id: 'lyon',
        name: 'Лион',
        area: 48,
        population: 516092,
        foundedYear: -43
      }
    ]
  },
  {
    id: 'japan',
    name: 'Япония',
    language: 'Японский',
    area: 377975,
    population: 125440000,
    cities: [
      {
        id: 'tokyo',
        name: 'Токио',
        area: 2194,
        population: 37435191,
        foundedYear: 1457
      },
      {
        id: 'osaka',
        name: 'Осака',
        area: 225,
        population: 2691185,
        foundedYear: 645
      },
      {
        id: 'kyoto',
        name: 'Киото',
        area: 828,
        population: 1457466,
        foundedYear: 794
      }
    ]
  }
];

export function getCountryById(id: string): Country | undefined {
  return countries.find(country => country.id === id);
}

export function getCityById(countryId: string, cityId: string): City | undefined {
  const country = getCountryById(countryId);
  return country?.cities.find(city => city.id === cityId);
}
