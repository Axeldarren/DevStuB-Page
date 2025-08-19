import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowRight, Github, Mail, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const JoinSection = () => {
  const sectionRef = useScrollAnimation('animate-scroll-fade-up');
  return (
    <section className="py-20 gradient-hero" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join DevStuB?
          </h2>
          <p className="text-xl opacity-90 mb-12">
            Become part of our amazing developer community and start your journey towards becoming a better programmer.
          </p>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/90">
                      <Mail className="w-5 h-5" />
                      <span>devstub@university.edu</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <MessageCircle className="w-5 h-5" />
                      <span>Join our Discord community</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/90">
                      <Github className="w-5 h-5" />
                      <span>Follow us on GitHub</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold text-white mb-2">Meeting Location</h4>
                    <p className="text-white/80">Computer Science Building, Room 201<br />Every Wednesday at 6:00 PM</p>
                  </div>
                </div>

                {/* Join Form */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Join Our Community</h3>
                  
                  <div className="space-y-4">
                    <Input 
                      placeholder="Your Name" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                    <Input 
                      placeholder="Your Email" 
                      type="email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                    <Input 
                      placeholder="Your University/School" 
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    />
                  </div>

                  <Button className="w-full bg-white text-primary hover:bg-white/90 font-semibold">
                    Join DevStuB
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-sm text-white/70">
                    By joining, you'll get access to our Discord, GitHub organization, and all upcoming events.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <MessageCircle className="w-5 h-5 mr-2" />
              Discord
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <Mail className="w-5 h-5 mr-2" />
              Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;