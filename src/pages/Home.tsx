import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Final Year Students",
      description:
        "Personalized guidance for final year students to explore career options and prepare for job opportunities.",
    },
    {
      icon: Users,
      title: "Passed-Out Students",
      description:
        "Support and mentorship for students who have graduated to help them transition into the workforce.",
    },
    {
      icon: Users,
      title: "Diploma Students",
      description:
        "Specialized guidance for diploma holders to align their skills with industry demands.",
    },
    {
      icon: Users,
      title: "Career Growth Support",
      description:
        "Continuous career advice and mentorship to ensure long-term professional success.",
    },
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
                FutureTrack guides students every step of the way – from
                learning the right skills to landing meaningful jobs. We provide
                personalized mentorship, helping you discover the career path
                that aligns with your strengths and passions. Our platform
                connects you with industry professionals and real-world
                opportunities, ensuring you gain practical experience. Start
                your journey towards a successful and fulfilling career today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
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

      {/* Career Guidance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Career Guidance for{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Every Student
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide tailored mentorship and support for students based on
              their educational stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-glass-border hover:shadow-card transition-all duration-500 hover:scale-105 group"
              >
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
    </div>
  );
};

export default Home;
