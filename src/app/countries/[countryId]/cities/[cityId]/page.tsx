import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountryById, getCityById } from "@/data/countries";

interface CityPageProps {
  params: {
    countryId: string;
    cityId: string;
  };
}

export default function CityPage({ params }: CityPageProps) {
  const country = getCountryById(params.countryId);
  const city = getCityById(params.countryId, params.cityId);

  if (!country || !city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href={`/countries/${country.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Назад к стране {country.name}
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {city.name}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 mb-1">Площадь</p>
              <p className="text-xl font-semibold text-gray-900">{city.area.toLocaleString()} км²</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 mb-1">Население</p>
              <p className="text-xl font-semibold text-gray-900">{city.population.toLocaleString()} чел.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 mb-1">Год основания</p>
              <p className="text-xl font-semibold text-gray-900">
                {city.foundedYear > 0 ? city.foundedYear : `${Math.abs(city.foundedYear)} г. до н.э.`}
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Страна:</span>{" "}
              <Link 
                href={`/countries/${country.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {country.name}
              </Link>
            </p>
            
            <div className="bg-blue-50 p-4 rounded">
              <h3 className="font-semibold text-gray-900 mb-2">Информация о стране</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Язык:</span> {country.language}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Площадь страны:</span> {country.area.toLocaleString()} км²
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Население страны:</span> {country.population.toLocaleString()} чел.
              </p>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href={`/countries/${country.id}`}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Все города {country.name}
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
            >
              На главную
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
