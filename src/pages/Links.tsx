import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Links = () => {
  const websites = [
    {
      title: "ElektrikKolpino.bos.ru",
      description: "Услуги электрика в Колпино и окрестностях",
      url: "http://elektrikkolpino.bos.ru"
    },
    {
      title: "Elektrik-Kolpino.narod.ru",
      description: "Электромонтажные работы в Колпино",
      url: "https://elektrik-kolpino.narod.ru"
    }
  ];

  return (
    <>
      <div className="hidden">
        <title>Полезные ссылки - Электрик Колпино</title>
        <meta name="description" content="Полезные ссылки на ресурсы по услугам электрика в Колпино. Телефон для вызова: 8 950 030 88 30" />
        <meta name="keywords" content="электрик колпино, вызов электрика в колпино, электрик на дом колпино, электромонтажные работы колпино" />
      </div>
      
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Полезные ссылки</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ссылки на наши другие ресурсы с информацией об электромонтажных работах в Колпино
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {websites.map((site, index) => (
              <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>{site.title}</CardTitle>
                  <CardDescription>{site.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-electric-600 hover:bg-electric-700">
                    <a 
                      href={site.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Перейти на сайт
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Нужна консультация электрика?</h2>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg mb-4">
              Звоните для получения консультации или вызова электрика в Колпино
            </p>
            <p className="text-2xl font-bold text-electric-600 mb-6">
              8 950 030 88 30
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-electric-600 hover:bg-electric-700">
                <a href="tel:+79500308830">Позвонить</a>
              </Button>
              <Button asChild variant="outline" className="border-electric-600 text-electric-600 hover:bg-electric-50">
                <a href="https://wa.me/79500308830" target="_blank" rel="noopener noreferrer">
                  Написать в WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="border-electric-600 text-electric-600 hover:bg-electric-50">
                <a href="https://t.me/+79500308830" target="_blank" rel="noopener noreferrer">
                  Написать в Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Links;
