import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const contactInfo = [
    { icon: Mail, title: "Email", detail: "hello@futuretrack.com", description: "Send us an email anytime" },
    { icon: Phone, title: "Phone", detail: "+91 7010726030", description: "Call us during business hours" },
    { icon: MapPin, title: "Address", detail: "21A, South Street, Erode", description: "Visit our main office" },
    { icon: Clock, title: "Business Hours", detail: "Mon - Fri: 9:00 AM - 6:00 PM", description: "We're here to help" }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await response.json();

    if (data.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon."
      });
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again."
      });
    }
  } catch (err) {
    console.error(err);
    toast({
      title: "Error",
      description: "Cannot connect to server. Please try again later."
    });
  }
};


  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero */}
      <section className="py-16 text-center">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Have questions about our programs? Want to learn more about how FutureTrack can help your career? We're here to help you succeed.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, i) => (
            <Card key={i} className="bg-gradient-card border-glass-border hover:shadow-card transition-all duration-500 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl group-hover:animate-float">
                  <info.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{info.title}</h3>
                <p className="font-medium text-foreground mb-1">{info.detail}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-card border-glass-border shadow-card animate-slide-up">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Contact Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name */}
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

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 7010726030"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-glass-border focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
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

                {/* Subject Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-glass-border focus:border-primary transition-colors w-full p-3 rounded-md"
                  >
                    <option value="">Select a topic...</option>
                    <option value="career-guidance">Career Guidance for 10th, +2, Graduation</option>
                    <option value="admission-enquiry">Admission Enquiry</option>
                    <option value="program-details">Program Details</option>
                    <option value="collaboration">Collaboration / Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
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
      </section>
    </div>
  );
};

export default Contact;
