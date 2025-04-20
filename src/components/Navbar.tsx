import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

const services = [
  {
    title: "Установка розеток и выключателей",
    href: "/services/power-outlets",
    description: "Профессиональная установка розеток и выключателей в Колпино"
  },
  {
    title: "Замена электропроводки",
    href: "/services/wiring-replacement",
    description: "Качественная замена старой проводки в квартирах и домах"
  },
  {
    title: "Монтаж освещения",
    href: "/services/lighting-installation",
    description: "Установка осветительных приборов любой сложности"
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 mx-auto px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-bold text-xl text-electric-700">
            <span className="text-electric-600">Электрик</span> Колпино
          </div>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Главная
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <li key={service.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{service.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacts">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Контакты
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/links">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Ссылки
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center">
          <a 
            href="tel:+79500308830" 
            className="flex items-center gap-2 text-electric-600 font-medium hover:text-electric-800 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden md:block">8 950 030 88 30</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
