import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { getLocale, locales, _ } from "compiled-i18n";

export default component$(() => {
  const currentLocale = getLocale();
  const otherLocale = locales.find(l => l !== currentLocale) || currentLocale;

  return (
    <footer class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-between items-center">
          <div class="text-sm">
            &copy; 2024 Aurática. {_`All rights reserved.`}
          </div>
          <Link
            href={`/${otherLocale}`}
            class="text-sm hover:text-gray-300"
          >
            {_`Change language`}
          </Link>
        </div>
      </div>
    </footer>
  );
});