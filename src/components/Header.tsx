import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { _ } from "compiled-i18n";

export default component$(() => {
  const navigation = [
    { name: _`nav.home`, href: "#home" },
    { name: _`nav.about`, href: "#about" },
    { name: _`nav.projects`, href: "#projects" },
    { name: _`nav.process`, href: "#process" },
    { name: _`nav.contact`, href: "#contact" },
  ];

  return (
    <header class="fixed top-0 w-full z-50 bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <Link href="#home" class="text-xl font-bold text-gray-900">
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