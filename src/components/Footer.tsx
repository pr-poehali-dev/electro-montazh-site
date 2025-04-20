import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-electric-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Электрик Колпино</h3>
            <p className="text-electric-100">
              Профессиональные электромонтажные работы в Колпино и Колпинском районе.
              Качество, надежность, доступные цены.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/power-outlets" className="text-electric-100 hover:text-white transition-colors">
                  Установка розеток и выключателей
                </Link>
              </li>
              <li>
                <Link to="/services/wiring-replacement" className="text-electric-100 hover:text-white transition-colors">
                  Замена электропроводки
                </Link>
              </li>
              <li>
                <Link to="/services/lighting-installation" className="text-electric-100 hover:text-white transition-colors">
                  Монтаж освещения
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <p className="text-electric-100">Вызов электрика в Колпино и Колпинском районе СПб</p>
            <a href="tel:+79500308830" className="text-white font-medium text-lg block mt-2 hover:text-electric-300 transition-colors">
              8 950 030 88 30
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-electric-800 text-center text-electric-300">
          <p>© {new Date().getFullYear()} Электрик Колпино. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
