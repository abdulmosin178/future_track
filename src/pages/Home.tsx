import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Trophy, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: Target,
      title: "Skill Development",
      description: "Learn industry-relevant skills through our comprehensive curriculum and hands-on projects."
    },
    {
      icon: Users,
      title: "Career Guidance",
      description: "Get personalized mentorship and career advice from industry professionals."
    },
    {
      icon: Trophy,
      title: "Job Placement",
      description: "Access exclusive job opportunities and placement assistance programs."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Stay updated with the latest industry trends and emerging technologies."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Guided" },
    { number: "95%", label: "Placement Rate" },
    { number: "500+", label: "Partner Companies" },
    { number: "4.8/5", label: "Student Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Turn Your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Potential
                </span>{" "}
                Into Success
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                FutureTrack guides students every step of the way – from learning the right skills 
                to landing meaningful jobs. Start your journey towards a successful career today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl transform rotate-6" />
              <img
                src={heroImage}
                alt="Students learning and collaborating"
                className="relative rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 group-hover:animate-glow-pulse">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and guidance you need 
              to build a successful career in your chosen field.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-glass-border hover:shadow-card transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl group-hover:animate-float">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-background/90" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Career Journey?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully launched their careers with FutureTrack. 
            Your future starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Get Started Today
            </Button>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;