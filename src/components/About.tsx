import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code2, Users2, Lightbulb, Trophy } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const titleRef = useScrollAnimation('animate-scroll-fade-up');
  const cardsRef = useScrollAnimation('animate-scroll-slide-left');
  const features = [
    {
      icon: Code2,
      title: "Learn & Code",
      description: "Master new programming languages and frameworks through hands-on workshops and coding sessions.",
      color: "text-primary"
    },
    {
      icon: Users2,
      title: "Network & Connect",
      description: "Build lasting connections with fellow developers, mentors, and industry professionals.",
      color: "text-secondary"
    },
    {
      icon: Lightbulb,
      title: "Innovate & Create",
      description: "Turn your ideas into reality through hackathons, project collaborations, and innovation challenges.",
      color: "text-warning"
    },
    {
      icon: Trophy,
      title: "Compete & Win",
      description: "Participate in coding competitions, showcase your skills, and earn recognition for your achievements.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What is <span className="gradient-primary bg-clip-text text-transparent">DevStuB?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DevStuB is more than just a student club—it's a thriving ecosystem where passionate developers come together to learn, create, and shape the future of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" ref={cardsRef}>
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
              To empower student developers with the knowledge, skills, and connections they need to excel in the tech industry. 
              We believe in learning by doing, growing through collaboration, and making technology accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;