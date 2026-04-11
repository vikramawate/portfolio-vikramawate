import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Ph.D. in Physics",
    year: "2021",
    institution: "India",
    details: "Thermoluminescence of Sr₂SiO₄ Phosphor doped with rare earth ions",
  },
  { degree: "B.Ed. – Physics & Mathematics", year: "2006", institution: "RTM Nagpur University", details: "" },
  { degree: "M.Sc. Physics", year: "2005", institution: "RTM Nagpur University", details: "" },
  {
    degree: "B.Sc. – Physics, Mathematics & Electronics",
    year: "2003",
    institution: "RTM Nagpur University",
    details: "",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding bg-muted/40">
    <div className="container mx-auto max-w-3xl">
      <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2 text-center">Education</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">Academic Background</h2>

      <div className="relative border-l-2 border-accent/30 ml-4 md:ml-0 md:mx-auto">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative pl-10 pb-12 last:pb-0"
          >
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
              <GraduationCap className="w-3 h-3 text-accent-foreground" />
            </div>
            <span className="text-sm text-accent font-semibold">{e.year}</span>
            <h3 className="font-heading text-lg font-bold mt-1">{e.degree}</h3>
            <p className="text-muted-foreground text-sm">{e.institution}</p>
            {e.details && <p className="text-muted-foreground text-sm mt-1 italic">{e.details}</p>}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
