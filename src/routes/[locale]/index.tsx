import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";
import { LuCalculator, LuScale, LuHeadphones, LuCamera, LuApple, LuStethoscope, LuEye, LuZap, LuWind, LuSparkles, LuBuilding, LuSliders, LuShoppingBag, LuHome, LuBed, LuHeart, LuBuilding2, LuMapPin, LuGraduationCap, LuUtensils, LuBookOpen, LuPhone, LuCode2, LuSearch, LuDumbbell, LuGlobe } from "@qwikest/icons/lucide";

export default component$(() => {
  const activeTab = useSignal('business');
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
          <div class="flex justify-center mb-8 space-x-4">
            <button
              onClick$={() => activeTab.value = 'business'}
              class={activeTab.value === 'business' ? 'bg-orange-600 text-white px-6 py-2 rounded-t-md font-semibold border-b-2 border-orange-600' : 'bg-slate-200 text-slate-700 px-6 py-2 rounded-t-md font-semibold border-b-2 border-slate-200 hover:bg-slate-300 transition'}
            >
              {_`designs.tabs.business`}
            </button>
            <button
              onClick$={() => activeTab.value = 'professionals'}
              class={activeTab.value === 'professionals' ? 'bg-orange-600 text-white px-6 py-2 rounded-t-md font-semibold border-b-2 border-orange-600' : 'bg-slate-200 text-slate-700 px-6 py-2 rounded-t-md font-semibold border-b-2 border-slate-200 hover:bg-slate-300 transition'}
            >
              {_`designs.tabs.professionals`}
            </button>
          </div>
          {activeTab.value === 'business' && (
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuSparkles class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.emprendedores`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuBuilding class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.empresas`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuSliders class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.autogestionables`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuShoppingBag class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.tiendas`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHome class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.inmobiliarias`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuBed class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.hoteles`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHeart class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.prepagas`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuBuilding2 class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.pymes`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuMapPin class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.barriosCerrados`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuGraduationCap class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.escuelas`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuUtensils class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.restaurantes`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuBookOpen class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.cursos`}
                </h3>
              </div>
            </div>
          )}
          {activeTab.value === 'professionals' && (
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuCalculator class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.contadores`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuScale class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.abogados`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHeadphones class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.psicologos`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuCamera class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.fotografos`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuApple class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.nutricionistas`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuDumbbell class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.entrenadores`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuStethoscope class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.medicos`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuEye class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.oftamologicos`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHeart class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.odontologos`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuGlobe class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.traductores`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuZap class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.electricistas`}
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuWind class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  {_`designs.professionals.tecnicosAA`}
                </h3>
              </div>
            </div>
          )}
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
            <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuPhone class="text-3xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`services.stage1.title`}
              </h3>
              <p class="text-slate-500 leading-relaxed">
                {_`services.stage1.desc`}
              </p>
            </div>
            <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuCode2 class="text-3xl text-slate-700" />
              </div>
              <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                {_`services.stage2.title`}
              </h3>
              <p class="text-slate-500 leading-relaxed">
                {_`services.stage2.desc`}
              </p>
            </div>
            <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
              <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuSearch class="text-3xl text-slate-700" />
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
      <section id="about" class="py-20 bg-white">
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