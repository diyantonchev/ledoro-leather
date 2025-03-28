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
        <h1 className="text-3xl font-light mb-8 text-center">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <p className="text-muted-foreground">
              We&apos;d love to hear from you. Whether you have a question about our products, custom orders, or anything else, our team is ready to assist you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Leather Lane<br />
                    Dimitrovgrad, 6400<br />
                    Bulgaria
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
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
              <h3 className="font-medium mb-2">Business Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday - Friday: 9:00am - 6:00pm</p>
                <p>Saturday: 10:00am - 4:00pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="space-y-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center pt-4">
              We&apos;ll get back to you within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 