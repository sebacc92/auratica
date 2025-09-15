import { component$ } from "@builder.io/qwik";
import { _ } from "compiled-i18n";

export default component$(() => {
  return (
    <div class="min-h-screen bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">
            {_`contact.title`}
          </h1>
          <p class="text-lg text-gray-600">
            {_`contact.desc`}
          </p>
        </div>
        {/* Placeholder for contact form */}
        <div class="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
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
    </div>
  );
});