import { Button } from "@/components/ui/button";

const LightingInstallation = () => {
  return (
    <>
      <div className="hidden">
        <title>Монтаж освещения в Колпино - Электрик Колпино</title>
        <meta name="description" content="Профессиональная установка и монтаж освещения в Колпино. Вызов электрика: 8 950 030 88 30" />
        <meta name="keywords" content="монтаж освещения колпино, установка люстр колпино, электрик колпино, вызов электрика в колпино, электрик на дом колпино" />
      </div>
      
      <section className="relative bg-electric-800 text-white py-16">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Монтаж освещения в Колпино
            </h1>
            <p className="text-xl mb-8 text-electric-100">
              Профессиональная установка люстр, светильников, бра и других осветительных приборов
              в Колпино и Колпинском районе.
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
                  <span>Установка и подключение люстр любой сложности</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Монтаж точечных светильников в подвесной и натяжной потолок</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Установка бра и настенных светильников</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Монтаж светодиодной ленты и подсветки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Установка уличного и фасадного освещения</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-electric-600 font-bold">✓</span>
                  <span>Подключение и настройка умного освещения</span>
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
          <h2 className="text-3xl font-bold mb-12 text-center">Преимущества нашей услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Опыт работы</h3>
              <p className="text-muted-foreground">
                Более 10 лет опыта установки осветительных приборов различной сложности
                в жилых и коммерческих помещениях.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Профессиональный инструмент</h3>
              <p className="text-muted-foreground">
                Используем только качественный профессиональный инструмент,
                что гарантирует аккуратность и надежность монтажа.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Гарантия на работы</h3>
              <p className="text-muted-foreground">
                Предоставляем гарантию на все виды монтажных работ и даем
                рекомендации по эксплуатации.
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
              Примеры установленного освещения в Колпино и Колпинском районе
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
            <h2 className="text-3xl font-bold mb-4">Нужна установка светильников?</h2>
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
