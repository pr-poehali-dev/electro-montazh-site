import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const ServiceCard = ({ title, description, imageUrl, href }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-electric-600 hover:bg-electric-700">
          <Link to={href}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
