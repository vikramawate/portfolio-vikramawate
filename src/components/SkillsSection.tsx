import { motion } from "framer-motion";
import { Lightbulb, Handshake, Monitor, Languages } from "lucide-react";

const categories = [
  {
    icon: Lightbulb,
    title: "Teaching & Leadership",
    skills: ["Student-focused teaching", "Curriculum planning", "Classroom management", "Student motivation", "Policy implementation"],
  },
  {
    icon: Handshake,
    title: "Professional Traits",
    skills: ["Problem-solving mindset", "Team collaboration", "Adaptability", "Reflective teaching practice"],
  },
  {
    icon: Monitor,
    title: "Technical Skills",
    skills: ["Microsoft Teams", "MS Office", "Google Workspace", "Nearpod"],
  },
  {
    icon: Languages,
    title: "Languages",
    skills: ["Hindi (Native)", "English (Advanced)"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding bg-muted/40">
    <div className="container mx-auto max-w-5xl">
      <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2 text-center">Skills</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">Core Competencies</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="bg-card rounded-lg p-6 shadow-md border border-border hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-light flex items-center justify-center mb-4">
              <c.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-base mb-3">{c.title}</h3>
            <ul className="space-y-2">
              {c.skills.map((s) => (
                <li key={s} className="text-muted-foreground text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
