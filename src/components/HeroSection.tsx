import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-electric-900 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Профессиональный электрик в Колпино
          </h1>
          <p className="text-xl mb-8 text-electric-100">
            Электромонтажные работы любой сложности в Колпино и Колпинском районе Санкт-Петербурга.
            Оперативный выезд, доступные цены, гарантия на все работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-electric-600 hover:bg-electric-700">
              <a href="tel:+79500308830">Вызвать электрика</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-electric-500 text-white hover:bg-electric-800">
              <Link to="/services/power-outlets">Наши услуги</Link>
            </Button>
          </div>
          <p className="mt-6 text-electric-200 font-medium">
            Звоните прямо сейчас: <a href="tel:+79500308830" className="text-white hover:text-electric-300 transition-colors">8 950 030 88 30</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
