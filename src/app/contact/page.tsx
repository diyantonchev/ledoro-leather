import type { Metadata } from "next"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Ledoro Leather",
  description: "Get in touch with our team for any questions, custom orders, or support",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light mb-8 text-center">Свържи се с нас</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <p className="text-muted-foreground">
              Ще се радваме да чуем от вас. Ако имате въпрос относно нашите продукти, поръчки, или нещо друго, нашият екип е готов да ви помогне.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Адрес</h3>
                  <p className="text-sm text-muted-foreground">
                    ул. Димитрова 123<br />
                    Димитровград, 6400<br />
                    България
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Телефон</h3>
                  <p className="text-sm text-muted-foreground">+359 88 888 8888</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">info@ledoroleather.com</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="font-medium mb-2">Работно време</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Понеделник - Петък: 9:00 - 18:00</p>
                <p>Събота: 10:00 - 16:00</p>
                <p>Неделя: Затворено</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Име
                </label>
                <Input id="name" placeholder="Вашето име" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Имейл
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Относно
                </label>
                <Input id="subject" placeholder="Как можем да ви помогнем?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Съобщение
                </label>
                <Textarea id="message" placeholder="Вашето съобщение..." rows={5} />
              </div>
              
              <Button type="submit" className="w-full">
                Изпратете
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center pt-4">
              Ще ви отговорим в рамките на 24-48 часа.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 