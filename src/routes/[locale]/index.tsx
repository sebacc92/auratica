import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50">
      {/* Hero Section - Home */}
      <section id="home" class="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            {_`home.title`}
          </h1>
          <p class="text-xl md:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed">
            {_`home.description`}
          </p>
          <blockquote class="text-lg italic text-white/90 max-w-4xl mx-auto mb-8 font-light">
            "{_`home.motto`}"
          </blockquote>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              class="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              {_`home.wantMyWebsite`}
            </Link>
            <Link
              href="#contact"
              class="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              {_`home.getStarted`}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" class="py-16">
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

      {/* About Section */}
      <section id="about" class="bg-gray-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              {_`about.title`}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              {_`about.heroDesc`}
            </p>
          </div>

          {/* Mission Section */}
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-3xl font-bold text-gray-900 mb-6">
                {_`about.missionTitle`}
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed mb-4">
                {_`about.missionDesc1`}
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                {_`about.missionDesc2`}
              </p>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
              <img
                src="/placeholder-about.jpg"
                alt="Aurática Team"
                class="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Values Section */}
          <div class="text-center">
            <h3 class="text-3xl font-bold text-gray-900 mb-12">
              {_`about.valuesTitle`}
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl text-white">🎨</span>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">
                  {_`about.creativeDesign`}
                </h4>
                <p class="text-gray-600">
                  {_`about.creativeDesc`}
                </p>
              </div>
              <div>
                <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl text-white">⚡</span>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">
                  {_`about.efficientTech`}
                </h4>
                <p class="text-gray-600">
                  {_`about.efficientDesc`}
                </p>
              </div>
              <div>
                <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl text-white">🤝</span>
                </div>
                <h4 class="text-xl font-semibold text-gray-900 mb-2">
                  {_`about.clientPartnership`}
                </h4>
                <p class="text-gray-600">
                  {_`about.clientDesc`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              {_`projects.title`}
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              {_`projects.heroDesc`}
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">1</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {_`projects.stage1Title`}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {_`projects.stage1Desc`}
              </p>
            </div>
            <div class="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">2</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {_`projects.stage2Title`}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {_`projects.stage2Desc`}
              </p>
            </div>
            <div class="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">3</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {_`projects.stage3Title`}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {_`projects.stage3Desc`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold text-gray-900 mb-8">
            {_`process.title`}
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            {_`process.desc`}
          </p>
          {/* Detailed process content can be added here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              {_`contact.title`}
            </h2>
            <p class="text-lg text-gray-600">
              {_`contact.desc`}
            </p>
          </div>
          <div class="bg-gray-50 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">
                  {_`contact.name`}
                </label>
                <input type="text" id="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  {_`contact.email`}
                </label>
                <input type="email" id="email" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700">
                  {_`contact.message`}
                </label>
                <textarea id="message" rows={4} class="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
              <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                {_`contact.send`}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
});