import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Zap } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Установка розеток и выключателей",
    description: "Профессиональная установка и замена розеток и выключателей любых типов",
    imageUrl: "/placeholder.svg",
    href: "/services/power-outlets"
  },
  {
    id: 2,
    title: "Замена электропроводки",
    description: "Полная или частичная замена проводки в квартирах, домах и офисах",
    imageUrl: "/placeholder.svg",
    href: "/services/wiring-replacement"
  },
  {
    id: 3,
    title: "Монтаж освещения",
    description: "Установка светильников, люстр, бра и систем освещения",
    imageUrl: "/placeholder.svg",
    href: "/services/lighting-installation"
  }
];

const benefits = [
  {
    icon: <CheckCircle className="h-10 w-10 text-electric-600" />,
    title: "Качество работ",
    description: "Все электромонтажные работы выполняются с соблюдением всех норм и правил ПУЭ"
  },
  {
    icon: <Clock className="h-10 w-10 text-electric-600" />,
    title: "Оперативность",
    description: "Быстрый выезд на дом в течение 1-2 часов после вашего звонка"
  },
  {
    icon: <Shield className="h-10 w-10 text-electric-600" />,
    title: "Гарантия",
    description: "Предоставляем гарантию на все виды выполненных работ"
  }
];

const Index = () => {
  return (
    <>
      <div className="hidden">
        <title>Электрик Колпино - Профессиональные электромонтажные работы</title>
        <meta name="description" content="Услуги электрика в Колпино и Колпинском районе СПб. Вызов электрика на дом, установка розеток, замена проводки. Телефон: 8 950 030 88 30" />
        <meta name="keywords" content="электрик колпино, вызов электрика в колпино, электрик на дом колпино, электрик колпино 8 950 030 88 30, вызов электрика 89500308830 колпинский район спб" />
      </div>
      
      <HeroSection />
      
      {/* Основные услуги */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессиональное выполнение электромонтажных работ любой сложности 
              в Колпино и Колпинском районе Санкт-Петербурга
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                href={service.href}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-electric-600 hover:bg-electric-700">
              <a href="tel:+79500308830">Вызвать электрика 8 950 030 88 30</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Преимущества */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Качественные электромонтажные работы с гарантией от профессионального электрика в Колпино
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Вызов к действию */}
      <section className="py-16 bg-electric-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Zap className="h-16 w-16 mx-auto mb-6 text-electric-400" />
            <h2 className="text-3xl font-bold mb-4">Нужен электрик в Колпино?</h2>
            <p className="text-xl mb-8">
              Звоните прямо сейчас! Быстрый выезд на дом, доступные цены, гарантия качества.
            </p>
            <Button asChild size="lg" className="bg-white text-electric-800 hover:bg-electric-100">
              <a href="tel:+79500308830" className="text-lg">8 950 030 88 30</a>
            </Button>
            <p className="mt-4 text-electric-300">Электрик Колпино - всегда на связи!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
