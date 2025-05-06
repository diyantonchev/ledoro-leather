"use client"

import { useState } from "react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import { Label } from "~/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "~/components/social-icons/SocialIcons"
import { toast } from "sonner"
import { sendContactEmail } from "./actions"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const result = await sendContactEmail(formState)
      
      if (result.success) {
        toast.success("Съобщението е изпратено успешно!")
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        toast.error(result.error ?? "Неуспешно изпращане на съобщение. Моля, опитайте отново.")
      }
    } catch (error) {
      toast.error("Възникна грешка. Моля, опитайте отново.")
      console.error("Contact form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-light mb-12 text-center">Свържи се с нас</h1>
        
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
                  <p className="text-sm text-muted-foreground"> <a href="tel:+359898988875" className="hover:text-blue-800 hover:underline transition-colors duration-200">+359 89 8988875</a></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground"><a href="mailto:sistems1001@gmail.com" className="hover:text-blue-800 hover:underline transition-colors duration-200">sistems1001@gmail.com</a></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mt-5">
                <div className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div className="flex items-center space-x-4">
                  <Link 
                    href="https://www.instagram.com/ledoroleather" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#E1306C] transition-colors"
                  >
                    <InstagramIcon className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link 
                    href="https://www.facebook.com/profile.php?id=100091527393698" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                  >
                    <FacebookIcon className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link 
                    href="https://youtube.com/@ledoroleather" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-[#FF0000] transition-colors"
                  >
                    <YoutubeIcon className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Link>
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
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="name">Име</Label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Вашето име"
                  value={formState.name} 
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Имейл</Label>
                <Input 
                  id="email"
                  name="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Относно</Label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="Как можем да ви помогнем?"
                  value={formState.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Съобщение</Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Вашето съобщение..." 
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full cursor-pointer" disabled={isSubmitting}>
                {isSubmitting ? "Изпращане..." : "Изпрати"}
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center">
              Ще ви отговорим в рамките на 24-48 часа.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 