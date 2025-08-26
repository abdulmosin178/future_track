import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@futuretrack.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91 7010726030",
      description: "Call us during business hours"
    },
    {
      icon: MapPin,
      title: "Address",
      detail: "21A, South Street,Erode",
      description: "Visit our main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "We're here to help"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Have questions about our programs? Want to learn more about how FutureTrack can help 
            your career? We're here to help you succeed.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-gradient-card border-glass-border hover:shadow-card transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl group-hover:animate-float">
                    <info.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <p className="font-medium text-foreground mb-1">{info.detail}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">
                Send Us a{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to take the next step in your career journey? Fill out the form and 
                we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Average response time: 4 hours</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Free consultation available</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-muted-foreground">Personalized career guidance</span>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-card border-glass-border shadow-card animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What can we help you with?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your goals and how we can help..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-glass-border focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                    size="lg"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our programs and services.
            </p>
          </div>
          
          <div className="grid gap-6">
            {[
              {
                question: "How long are your programs?",
                answer: "Our programs range from 3-12 months depending on your career goals and chosen track."
              },
              {
                question: "Do you guarantee job placement?",
                answer: "While we can't guarantee placement, we have a 95% success rate and provide ongoing support until you land your ideal role."
              },
              {
                question: "What industries do you cover?",
                answer: "We cover technology, healthcare, finance, marketing, and many other growing industries."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-background/50 border-glass-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;