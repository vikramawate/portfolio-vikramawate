import { motion } from "framer-motion";
import { Trophy, FileText } from "lucide-react";

const achievements = [
  "Certified Microsoft Innovative Educator",
  "Vaman Project – Venus Transit research contribution (acknowledged in Resonance journal)",
  "Multiple national workshops and training programs in physics education",
  "International Conference presentation (ICRTSE-2016)",
];

const publications = [
  "Eco-friendly nanophosphor research — Elsevier, Results in Physics (2014)",
  "Luminescence study — ICRTSE-2016 proceedings",
  "Rare earth activated Sr₂SiO₄ phosphor — Springer Nature (2017)",
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding bg-background">
    <div className="container mx-auto max-w-4xl">
      <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2 text-center">
        Achievements & Publications
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
        Recognition & Research
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-8 shadow-md border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-highlight" />
            </div>
            <h3 className="font-heading font-bold text-xl">Achievements</h3>
          </div>
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a} className="text-muted-foreground text-sm flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-highlight shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-lg p-8 shadow-md border border-border"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-cyan-light flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-xl">Major Publications</h3>
          </div>
          <ul className="space-y-4">
            {publications.map((p) => (
              <li key={p} className="text-muted-foreground text-sm flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
