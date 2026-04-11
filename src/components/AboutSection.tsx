import { motion } from "framer-motion";
import { BookOpen, Users, Award, Heart } from "lucide-react";

const highlights = [
  { icon: BookOpen, title: "Student-Centered", desc: "Tailoring lessons to individual student needs and learning styles." },
  { icon: Users, title: "Collaborative Leader", desc: "Fostering teamwork among educators, students, and parents." },
  { icon: Award, title: "Research-Driven", desc: "Integrating cutting-edge physics research into classroom teaching." },
  { icon: Heart, title: "Lifelong Learner", desc: "Continuously evolving through professional development and reflection." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
        <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2 text-center">About Me</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-6">
          Designing Solutions, Not Just Lessons
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          With over 18 years of dedicated service in physics education across India and the UAE, I bring a deep passion for making complex scientific concepts accessible and exciting. My approach centers on empowering students through interactive teaching, rigorous curriculum planning, and compassionate mentorship — bridging the gap between academic theory and real-world application.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i + 1}
            className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-border text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-cyan-light flex items-center justify-center group-hover:scale-110 transition-transform">
              <h.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{h.title}</h3>
            <p className="text-muted-foreground text-sm">{h.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
