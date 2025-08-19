import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Activities = () => {
  const titleRef = useScrollAnimation('animate-scroll-fade-up');
  const activitiesRef = useScrollAnimation('animate-scroll-slide-right');
  const activities = [
    {
      title: "Weekly Coding Sessions",
      description: "Join our collaborative coding sessions where we work on real projects, solve challenges, and learn from each other.",
      time: "Every Wednesday 6:00 PM",
      location: "Computer Lab 201",
      tags: ["Coding", "Collaboration", "Learning"],
      color: "primary"
    },
    {
      title: "Tech Talks & Workshops",
      description: "Expert-led sessions on cutting-edge technologies, industry trends, and best practices in software development.",
      time: "Bi-weekly Fridays 5:00 PM",
      location: "Auditorium A",
      tags: ["Education", "Industry", "Networking"],
      color: "secondary"
    },
    {
      title: "Hackathons",
      description: "24-48 hour intense coding competitions where teams build innovative solutions to real-world problems.",
      time: "Monthly Weekends",
      location: "Innovation Hub",
      tags: ["Competition", "Innovation", "Prizes"],
      color: "accent"
    },
    {
      title: "Project Showcases",
      description: "Present your projects, get feedback from peers and mentors, and celebrate the amazing work of our community.",
      time: "Last Friday of Month",
      location: "Main Hall",
      tags: ["Presentation", "Feedback", "Recognition"],
      color: "warning"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary': return 'border-primary/20 hover:border-primary/40';
      case 'secondary': return 'border-secondary/20 hover:border-secondary/40';
      case 'accent': return 'border-accent/20 hover:border-accent/40';
      case 'warning': return 'border-warning/20 hover:border-warning/40';
      default: return 'border-primary/20 hover:border-primary/40';
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-accent bg-clip-text text-transparent">Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From weekly coding sessions to competitive hackathons, we offer diverse opportunities for every level of developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" ref={activitiesRef}>
          {activities.map((activity, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${getColorClasses(activity.color)}`}>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{activity.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {activity.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{activity.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{activity.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Can't find what you're looking for? <span className="text-primary font-semibold">Suggest a new activity!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Activities;