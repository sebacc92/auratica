import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            {_`projects.title`}
          </h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto">
            {_`projects.heroDesc`}
          </p>
        </div>
      </section>

      {/* Stages Section */}
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-3 gap-8">
            {/* Stage 1 */}
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">1</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                {_`projects.stage1Title`}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {_`projects.stage1Desc`}
              </p>
            </div>

            {/* Stage 2 */}
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">2</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                {_`projects.stage2Title`}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {_`projects.stage2Desc`}
              </p>
            </div>

            {/* Stage 3 */}
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">3</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                {_`projects.stage3Title`}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {_`projects.stage3Desc`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});