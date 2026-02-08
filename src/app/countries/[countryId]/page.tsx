import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountryById } from "@/data/countries";

interface CountryPageProps {
  params: {
    countryId: string;
  };
}

export default function CountryPage({ params }: CountryPageProps) {
  const country = getCountryById(params.countryId);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Назад к списку стран
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {country.name}
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 mb-1">Официальный язык</p>
              <p className="text-xl font-semibold text-gray-900">{country.language}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 mb-1">Площадь</p>
              <p className="text-xl font-semibold text-gray-900">{country.area.toLocaleString()} км²</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-600 mb-1">Население</p>
              <p className="text-xl font-semibold text-gray-900">{country.population.toLocaleString()} чел.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Города ({country.cities.length})
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {country.cities.map((city) => (
            <Link
              key={city.id}
              href={`/countries/${country.id}/cities/${city.id}`}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {city.name}
              </h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Площадь:</span> {city.area.toLocaleString()} км²
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Население:</span> {city.population.toLocaleString()} чел.
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Основан:</span> {city.foundedYear > 0 ? city.foundedYear : `${Math.abs(city.foundedYear)} г. до н.э.`}
              </p>
              <p className="text-blue-600 mt-3 hover:text-blue-800">
                Подробнее →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
