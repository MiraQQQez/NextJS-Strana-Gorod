import Link from "next/link";
import { countries } from "@/data/countries";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Страны и Города
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {countries.map((country) => (
            <Link
              key={country.id}
              href={`/countries/${country.id}`}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {country.name}
              </h2>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Язык:</span> {country.language}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Площадь:</span> {country.area.toLocaleString()} км²
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Население:</span> {country.population.toLocaleString()} чел.
              </p>
              <p className="text-blue-600 mt-3 hover:text-blue-800">
                Посмотреть города ({country.cities.length}) →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
