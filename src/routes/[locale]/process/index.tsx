import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">
          {_`process.title`}
        </h1>
        <p class="text-lg text-gray-600">
          {_`process.desc`}
        </p>
        {/* Placeholder for detailed content */}
      </div>
    </div>
  );
});