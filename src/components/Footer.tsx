import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { getLocale, locales, _ } from "compiled-i18n";

export default component$(() => {
  const currentLocale = getLocale();
  const otherLocale = locales.find(l => l !== currentLocale) || currentLocale;

  return (
    <footer class="bg-blue-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex justify-between items-center">
          <div class="text-sm">
            &copy; 2024 Aurática. {_`footer.copyright`}
          </div>
          <Link
            href={`/${otherLocale}`}
            class="text-sm text-emerald-400 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            {_`footer.changeLanguage`}
          </Link>
        </div>
      </div>
    </footer>
  );
});