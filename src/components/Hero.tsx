import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import { ArrowRight, Code, Users, Zap, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-secondary/20 rotate-45 animate-float"></div>
      <div
        className="absolute bottom-32 left-16 w-20 h-20 bg-accent/20 rounded-lg animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-20 w-14 h-14 bg-warning/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Logo size="lg" animate={true} />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Developer Student
            <span className="block gradient-primary bg-clip-text text-transparent">
              Community
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Join a vibrant community of student developers. Learn, build, and
            grow together through coding, collaboration, and innovation.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-8 items-center">
            <div className="flex items-center gap-2 text-lg">
              <Users className="w-6 h-6 text-primary" />
              <span className="font-semibold">50+ Members</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Code className="w-6 h-6 text-secondary" />
              <span className="font-semibold">10+ Projects</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Zap className="w-6 h-6 text-accent" />
              <span className="font-semibold">Bi-Weekly Events</span>
              <a
                href="https://www.instagram.com/devstub.su/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3"
                aria-label="DevStuB Instagram"
              >
                <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700 transition-colors" />
              </a>
              <a
                className="font-semibold"
                href="https://www.instagram.com/devstub.su/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @devstub.su
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Join DevStuB
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" });
                  aboutSection.classList.add("animate-section-highlight");
                  setTimeout(() => {
                    aboutSection.classList.remove("animate-section-highlight");
                  }, 1200);
                }
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
