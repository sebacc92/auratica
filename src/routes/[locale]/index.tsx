import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import { LuDumbbell, LuSparkles, LuBuilding, LuSliders, LuShoppingBag, LuHome, LuBed, LuHeart, LuBuilding2, LuMapPin, LuGraduationCap, LuUtensils, LuBookOpen, LuPhone, LuCode2, LuSearch } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <div class="min-h-screen bg-slate-50">
      {/* Hero Section - Home */}
      <section id="home" class="bg-gradient-to-r from-blue-800 via-emerald-600 to-orange-600 text-white py-20 relative overflow-hidden">
        <div class="absolute inset-0 bg-black opacity-20"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div class="text-left">
              <h1 class="text-4xl md:text-6xl font-bold mb-6">
                {_`home.title`}
              </h1>
              <LuDumbbell class="w-12 h-12 text-white mb-4" />
              <p class="text-xl md:text-2xl max-w-3xl mb-6 leading-relaxed">
                {_`home.description`}
              </p>
              <blockquote class="text-lg italic text-white/90 max-w-3xl mb-8 font-light">
                "{_`home.motto`}"
              </blockquote>
              <div class="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#projects"
                  class="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
                >
                  {_`home.wantMyWebsite`}
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/conectividad-digital-global.webp"
                alt="Conectividad digital global"
                class="w-full h-auto max-h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Designs Section */}
      <section id="designs" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-700 mb-4">
              {_`designs.title`}
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
              {_`designs.description`}
            </p>
          </div>
          <div class="grid md:grid-cols-4 gap-6 mb-12">
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuSparkles class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.emprendedores`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuBuilding class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.empresas`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuSliders class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.autogestionables`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuShoppingBag class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.tiendas`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuHome class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.inmobiliarias`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuBed class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.hoteles`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuHeart class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.prepagas`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuBuilding2 class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.pymes`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuMapPin class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.barriosCerrados`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuGraduationCap class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.escuelas`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuUtensils class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.restaurantes`}
              </h3>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuBookOpen class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`designs.cursos`}
              </h3>
            </div>
          </div>
          <div class="text-center">
            <Link
              href="#contact"
              class="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
            >
              {_`designs.button`}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-slate-700 text-center mb-12">
            {_`services.process.title`}
          </h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuPhone class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`services.stage1.title`}
              </h3>
              <p class="text-slate-500 leading-relaxed">
                {_`services.stage1.desc`}
              </p>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuCode2 class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`services.stage2.title`}
              </h3>
              <p class="text-slate-500 leading-relaxed">
                {_`services.stage2.desc`}
              </p>
            </div>
            <div class="bg-slate-50 rounded-lg p-8 text-center border border-slate-200 cursor-pointer shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)]">
              <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <LuSearch class="text-5xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`services.stage3.title`}
              </h3>
              <p class="text-slate-500 leading-relaxed">
                {_`services.stage3.desc`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" class="bg-slate-50 py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-slate-700 mb-4">
              {_`about.title`}
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
              {_`about.heroDesc`}
            </p>
          </div>

          {/* Mission Section */}
          <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 class="text-3xl font-bold text-slate-700 mb-6">
                {_`about.missionTitle`}
              </h3>
              <p class="text-lg text-slate-500 leading-relaxed mb-4">
                {_`about.missionDesc1`}
              </p>
              <p class="text-lg text-slate-500 leading-relaxed">
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
            <h3 class="text-3xl font-bold text-slate-700 mb-12">
              {_`about.valuesTitle`}
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <div class="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl text-white">🎨</span>
                </div>
                <h4 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`about.creativeDesign`}
                </h4>
                <p class="text-slate-500">
                  {_`about.creativeDesc`}
                </p>
              </div>
              <div>
                <div class="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl text-white">⚡</span>
                </div>
                <h4 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`about.efficientTech`}
                </h4>
                <p class="text-slate-500">
                  {_`about.efficientDesc`}
                </p>
              </div>
              <div>
                <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl text-white">🤝</span>
                </div>
                <h4 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`about.clientPartnership`}
                </h4>
                <p class="text-slate-500">
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
            <h2 class="text-4xl font-bold text-slate-700 mb-4">
              {_`projects.title`}
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
              {_`projects.heroDesc`}
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-slate-50 rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">1</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-700 mb-4">
                {_`projects.stage1Title`}
              </h3>
              <p class="text-slate-500 leading-relaxed">
                {_`projects.stage1Desc`}
              </p>
            </div>
            <div class="bg-slate-50 rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">2</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-700 mb-4">
                {_`projects.stage2Title`}
              </h3>
              <p class="text-slate-500 leading-relaxed">
                {_`projects.stage2Desc`}
              </p>
            </div>
            <div class="bg-slate-50 rounded-lg shadow-lg p-6 text-center">
              <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl text-white">3</span>
              </div>
              <h3 class="text-2xl font-bold text-slate-700 mb-4">
                {_`projects.stage3Title`}
              </h3>
              <p class="text-slate-500 leading-relaxed">
                {_`projects.stage3Desc`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-4xl font-bold text-slate-700 mb-8">
            {_`process.title`}
          </h2>
          <p class="text-xl text-slate-500 max-w-3xl mx-auto">
            {_`process.desc`}
          </p>
          {/* Detailed process content can be added here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-slate-700 mb-4">
              {_`contact.title`}
            </h2>
            <p class="text-lg text-slate-500">
              {_`contact.desc`}
            </p>
          </div>
          <div class="bg-slate-50 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <form class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-slate-700">
                  {_`contact.name`}
                </label>
                <input type="text" id="name" class="mt-1 block w-full border-slate-200 rounded-md shadow-sm focus:border-orange-600 focus:ring-orange-500" />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-slate-700">
                  {_`contact.email`}
                </label>
                <input type="email" id="email" class="mt-1 block w-full border-slate-200 rounded-md shadow-sm focus:border-orange-600 focus:ring-orange-500" />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-slate-700">
                  {_`contact.message`}
                </label>
                <textarea id="message" rows={4} class="mt-1 block w-full border-slate-200 rounded-md shadow-sm focus:border-orange-600 focus:ring-orange-500"></textarea>
              </div>
              <button type="submit" class="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                {_`contact.send`}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
});