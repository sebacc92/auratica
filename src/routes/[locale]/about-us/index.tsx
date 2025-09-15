import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            {_`about.title`}
          </h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto">
            {_`about.heroDesc`}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">
                {_`about.missionTitle`}
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed">
                {_`about.missionDesc1`}
              </p>
              <p class="text-lg text-gray-600 leading-relaxed mt-4">
                {_`about.missionDesc2`}
              </p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
              <img
                src="/placeholder-about.jpg" // Replace with actual image
                alt="Aurática Team"
                class="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">
            {_`about.valuesTitle`}
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">🎨</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {_`about.creativeDesign`}
              </h3>
              <p class="text-gray-600">
                {_`about.creativeDesc`}
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">⚡</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {_`about.efficientTech`}
              </h3>
              <p class="text-gray-600">
                {_`about.efficientDesc`}
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">🤝</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {_`about.clientPartnership`}
              </h3>
              <p class="text-gray-600">
                {_`about.clientDesc`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});