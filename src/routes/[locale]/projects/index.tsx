import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            {_`Our Projects Process`}
          </h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto">
            {_`From idea to launch in just two weeks. We build strategic websites that drive results.`}
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
                {_`Book a Call`}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {_`Tell us about your business and we analyze it together to see if it's suitable for development. This free consultation helps us understand your goals and ensure we're the right fit.`}
              </p>
            </div>

            {/* Stage 2 */}
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">2</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                {_`Implementation`}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {_`We implement the system, design, and launch your new strategic website in just two weeks. It's fully ready to generate customers with modern technology and compelling design.`}
              </p>
            </div>

            {/* Stage 3 */}
            <div class="bg-white rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">3</span>
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">
                {_`Results & Support`}
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {_`The website starts working for you, attracting, convincing, and converting visitors. We provide monthly visitor reports to track performance and ongoing support.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});