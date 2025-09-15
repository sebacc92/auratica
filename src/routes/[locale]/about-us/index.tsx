import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section class="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            {_`About Aurática`}
          </h1>
          <p class="text-xl md:text-2xl max-w-3xl mx-auto">
            {_`We craft unique digital experiences that elevate your brand.`}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">
                {_`Our Mission`}
              </h2>
              <p class="text-lg text-gray-600 leading-relaxed">
                {_`At Aurática, we are passionate about creating unique, high-quality digital presences for companies. We combine strong brand identity with modern, efficient technology to help your business stand out in the digital world.`}
              </p>
              <p class="text-lg text-gray-600 leading-relaxed mt-4">
                {_`Our team of creative designers and skilled developers works closely with you to bring your vision to life, ensuring every project is tailored to your specific needs and goals.`}
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
            {_`What Sets Us Apart`}
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">🎨</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {_`Creative Design`}
              </h3>
              <p class="text-gray-600">
                {_`Unique visuals that capture your brand's essence.`}
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">⚡</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {_`Efficient Technology`}
              </h3>
              <p class="text-gray-600">
                {_`Cutting-edge solutions for optimal performance.`}
              </p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">🤝</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {_`Client Partnership`}
              </h3>
              <p class="text-gray-600">
                {_`Collaborative approach from concept to launch.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});