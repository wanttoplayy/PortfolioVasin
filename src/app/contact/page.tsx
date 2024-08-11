import Header from '@/components/Header';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <ContactInfo
              email="bestwasin1617@gmail.com"
              phone="+66 837575999"
              linkedin="https://www.linkedin.com/in/vasin-suksuchit/"
              github="https://github.com/wanttoplayy"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}

const ContactInfo = ({ email, phone, linkedin, github }: any) => (
  <div className="space-y-4">
    <div className="flex items-center">
      <Mail className="mr-2" />
      <a href={`mailto:${email}`} className="hover:underline">{email}</a>
    </div>
    <div className="flex items-center">
      <Phone className="mr-2" />
      <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
    </div>
    <div className="flex items-center">
      <Linkedin className="mr-2" />
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
    </div>
    <div className="flex items-center">
      <Github className="mr-2" />
      <a href={github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>
    </div>
  </div>
);

const ContactForm = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block mb-2">Name</label>
      <Input id="name" placeholder="Your Name" />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2">Email</label>
      <Input id="email" type="email" placeholder="Your Email" />
    </div>
    <div>
      <label htmlFor="message" className="block mb-2">Message</label>
      <Textarea id="message" placeholder="Your Message" rows={4} />
    </div>
    <Button type="submit">Send Message</Button>
  </form>
);