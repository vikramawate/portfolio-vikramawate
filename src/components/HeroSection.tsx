import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import scienceBg from "@/assets/science-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ backgroundImage: `url(${scienceBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/60" />

    <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center py-32">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-accent-foreground/80 font-body text-lg mb-2 tracking-widest uppercase">
          Welcome
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
          Hello, I'm <br />
          <span className="text-highlight">Dr. Vikram R. Awate</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 font-body mb-2">
          Physics Educator &amp; Academic Leader
        </p>
        <p className="text-primary-foreground/70 font-body mb-1">
          Science Department Lead &nbsp;|&nbsp; Ph.D. in Physics
        </p>
        <p className="text-primary-foreground/60 font-body max-w-lg mb-8">
          18+ years of passionate teaching, curriculum innovation, and academic leadership across India and the UAE — committed to making physics accessible and inspiring for every student.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#experience">
              <ArrowDown className="w-4 h-4 mr-2" /> View Experience
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a href="#contact">
              <Mail className="w-4 h-4 mr-2" /> Contact
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex gap-10 mt-10">
          {[
            { num: "18+", label: "Years Experience" },
            { num: "Ph.D.", label: "in Physics" },
            { num: "3", label: "Countries" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-heading font-bold text-highlight">{s.num}</p>
              <p className="text-primary-foreground/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-highlight/50 shadow-2xl">
            <img src={profilePhoto} alt="Dr. Vikram R. Awate" className="w-full h-full object-cover" width={512} height={640} />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-5 py-2 rounded-full font-body font-semibold shadow-lg">
            Science Leader
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
