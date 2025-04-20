import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Contacts = () => {
  return (
    <>
      <div className="hidden">
        <title>Контакты электрика в Колпино - Вызов электрика на дом</title>
        <meta name="description" content="Контакты электрика в Колпино. Телефон для вызова: 8 950 030 88 30. WhatsApp и Telegram для связи." />
        <meta name="keywords" content="электрик колпино контакты, вызов электрика в колпино, электрик на дом колпино, электрик колпино 8 950 030 88 30, вызов электрика 89500308830 колпинский район спб" />
      </div>
      
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Контакты</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с профессиональным электриком в Колпино и Колпинском районе СПб
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Phone className="h-10 w-10 text-electric-600" />
                </div>
                <CardTitle className="text-center">Телефон</CardTitle>
                <CardDescription className="text-center">Для вызова электрика</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a href="tel:+79500308830" className="text-xl font-medium text-electric-600 hover:text-electric-800 transition-colors">
                  8 950 030 88 30
                </a>
                <Button asChild className="w-full mt-4 bg-electric-600 hover:bg-electric-700">
                  <a href="tel:+79500308830">Позвонить</a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <MessageSquare className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-center">WhatsApp</CardTitle>
                <CardDescription className="text-center">Для сообщений и консультаций</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-medium mb-4">8 950 030 88 30</p>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href="https://wa.me/79500308830" target="_blank" rel="noopener noreferrer">
                    Написать в WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <MessageSquare className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-center">Telegram</CardTitle>
                <CardDescription className="text-center">Для быстрой связи</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xl font-medium mb-4">8 950 030 88 30</p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href="https://t.me/+79500308830" target="_blank" rel="noopener noreferrer">
                    Написать в Telegram
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Электрик в Колпино и Колпинском районе</h2>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg mb-4">
              Профессиональные электромонтажные работы в Колпино, Металлострое, Понтонном, Саперном и окрестностях.
            </p>
            <p className="text-lg mb-4">
              Для вызова электрика или консультации звоните:
            </p>
            <p className="text-2xl font-bold text-electric-600">
              8 950 030 88 30
            </p>
          </div>
          <Button asChild size="lg" className="bg-electric-600 hover:bg-electric-700">
            <a href="tel:+79500308830">Вызвать электрика</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contacts;
