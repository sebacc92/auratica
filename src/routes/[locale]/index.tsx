import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { getLocale, _ } from "compiled-i18n";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            {_`home.title`}
          </h1>
          <p class="text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            {_`home.description`}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${getLocale()}/projects`}
              class="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              {_`home.seeProcess`}
            </Link>
            <Link
              href={`/${getLocale()}/contact`}
              class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              {_`home.getStarted`}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            {_`home.offerTitle`}
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">🎨</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                {_`home.brandIdentity`}
              </h3>
              <p class="text-gray-600">
                {_`home.brandDesc`}
              </p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">💻</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                {_`home.webDev`}
              </h3>
              <p class="text-gray-600">
                {_`home.webDesc`}
              </p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">📊</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                {_`home.digitalStrategy`}
              </h3>
              <p class="text-gray-600">
                {_`home.strategyDesc`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="bg-white py-16">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">
            {_`home.ctaTitle`}
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            {_`home.ctaDesc`}
          </p>
          <Link
            href={`/${getLocale()}/contact`}
            class="bg-purple-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            {_`home.bookCall`}
          </Link>
        </div>
      </section>
    </div>
  );
});