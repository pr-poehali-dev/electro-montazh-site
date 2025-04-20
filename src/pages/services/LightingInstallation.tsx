import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";

const LightingInstallation = () => {
  return (
    <>
      <Helmet>
        <title>Монтаж освещения в Колпино - Электрик Колпино</title>
        <meta name="description" content="Профессиональная установка и монтаж освещения в квартирах и домах в Колпино. Вызов электрика: 8 950 030 88 30" />
        <meta name="keywords" content="монтаж освещения колпино, установка светильников колпино, электрик колпино, вызов электрика в колпино, электрик на дом колпино" />
      </Helmet>
      
      <section className="relative bg-electric-800 text-white py-16">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Монтаж освещения в Колпино
            </h1>
            <p className="text-xl mb-8 text-electric-100">
              Профессиональная установка люстр, светильников, бра и систем 
              освещения любой сложности в Колпино и Колпинском районе.
            </p>
            <Button asChild size="lg" className="bg-white text-electric-800 hover:bg-electric-100">
              <a href="tel:+79500308830">Вызвать электрика 8 950 030 88 30</a>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Что входит в услугу</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Монтаж люстр любой сложности и веса</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Установка точечных светильников и LED-панелей</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Монтаж бра, настенных и напольных светильников</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Установка подсветки и светодиодных лент</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Монтаж уличного и садового освещения</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Установка диммеров и систем "умного" освещения</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-electric-600 hover:bg-electric-700">
                  <a href="tel:+79500308830">Вызвать электрика</a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Монтаж освещения в Колпино" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Виды устанавливаемых светильников</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Потолочные светильники</h3>
              <p className="text-muted-foreground">
                Люстры, подвесные светильники, точечные светильники, LED-панели, 
                встраиваемые и накладные светильники.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Настенные светильники</h3>
              <p className="text-muted-foreground">
                Бра, настенные светильники, подсветка картин и зеркал, декоративное
                освещение стен.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Специальное освещение</h3>
              <p className="text-muted-foreground">
                Светодиодные ленты, трековые системы, споты, уличные и садовые 
                светильники, ландшафтное освещение.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Фотогалерея наших работ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Примеры монтажа освещения в Колпино и Колпинском районе
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt={`Пример ${item} монтажа освещения в Колпино`} 
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-electric-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Нужен монтаж освещения?</h2>
            <p className="text-xl mb-8">
              Звоните прямо сейчас! Работаем в Колпино, Металлострое, Понтонном, Саперном и окрестностях.
            </p>
            <Button asChild size="lg" className="bg-white text-electric-800 hover:bg-electric-100">
              <a href="tel:+79500308830">8 950 030 88 30</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LightingInstallation;
