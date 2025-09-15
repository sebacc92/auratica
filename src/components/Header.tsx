import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { getLocale, _ } from "compiled-i18n";

export default component$(() => {
  const currentLocale = getLocale();
  const navigation = [
    { name: _`Home`, href: `/${currentLocale}` },
    { name: _`About us`, href: `/${currentLocale}/about-us` },
    { name: _`Projects`, href: `/${currentLocale}/projects` },
    { name: _`Process`, href: `/${currentLocale}/process` },
    { name: _`Contact`, href: `/${currentLocale}/contact` },
  ];

  return (
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <Link href={`/${currentLocale}`} class="text-xl font-bold text-gray-900">
              Aurática
            </Link>
          </div>
          <nav class="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                class="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
});