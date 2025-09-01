import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every decision we make is focused on providing the best possible experience and outcomes for our students."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We measure our success by the career achievements and growth of our students in their chosen fields."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in our curriculum, mentorship, and placement programs."
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "We believe in empowering students with the confidence and skills they need to thrive in their careers."
    }
  ];

  const team = [
    {
      name: "Thiyagu Balu",
      role: "Founder & CEO",
      description: "Former tech executive with 7+ years of experience in career development and education."
    },
    {
      name: "Abdul Mosin",
      role: "Developer",
      description: "Educational technology expert who has designed programs for leading universities worldwide."
    },
    {
      name: "Tamilvendhan",
      role: "Career Services Director",
      description: "Career counselor with a track record of helping 5000+ students land their dream jobs."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                About{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  FutureTrack
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We provide personalized <strong>Career Guidance</strong> for students who have completed 10th, +2, or graduation, helping them explore career paths, develop skills, and access opportunities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2019</div>
                  <div className="text-muted-foreground">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Students Helped</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-muted-foreground">Partner Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl transform -rotate-6" />
              <img
                src={aboutImage}
                alt="Team collaboration and career development"
                className="relative rounded-3xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Guidance Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
           We believe that every student has unique potential waiting to be unlocked. Our mission is to provide personalized career guidance for students after 10th, +2, or graduation to help them build successful careers.
We focus on understanding each student’s strengths, interests, and aspirations to chart the best path forward.
With expert mentorship, practical resources, and real-world insights, we empower students to make informed career choices.
Our goal is to inspire confidence, ignite passion, and ensure every student achieves their full potential.
Together, we turn dreams into actionable plans and pave the way for a brighter future.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-gradient-card border-glass-border hover:shadow-card transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl group-hover:animate-float">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-glass-border hover:shadow-card transition-all duration-500 hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 w-20 h-20 bg-gradient-primary rounded-full mx-auto flex items-center justify-center group-hover:animate-glow-pulse">
                    <Users className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
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

export default About;
