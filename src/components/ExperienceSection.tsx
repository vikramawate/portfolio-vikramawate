import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Science Department Lead",
    org: "Ain Al Khaleej School, UAE",
    period: "2023 – Present",
    points: [
      "Leading science department curriculum planning and policy implementation",
      "Mentoring teachers and driving student academic excellence",
      "Coordinating cross-curricular STEM initiatives",
    ],
  },
  {
    role: "Science Lead Teacher",
    org: "Al Bayraq Charter School, UAE",
    period: "2022 – 2023",
    points: [
      "Led science instruction and assessment strategy",
      "Implemented data-driven student intervention programs",
    ],
  },
  {
    role: "Physics Lead Teacher",
    org: "Al Daher School, UAE",
    period: "2019 – 2022",
    points: [
      "Designed and delivered engaging physics curricula aligned with MOE standards",
      "Integrated technology tools like Nearpod and Google Workspace",
    ],
  },
  {
    role: "Academic Coordinator",
    org: "Allons Public School, India",
    period: "2018",
    points: ["Coordinated academic planning across departments", "Facilitated teacher training workshops"],
  },
  {
    role: "Lecturer",
    org: "S.B. Jain Institute of Technology, India",
    period: "2009 – 2018",
    points: [
      "Delivered physics lectures to undergraduate engineering students",
      "Published research in international journals (Elsevier, Springer Nature)",
    ],
  },
  {
    role: "Lecturer",
    org: "TGP College of Engineering, India",
    period: "2007 – 2009",
    points: ["Taught applied physics and supervised lab sessions"],
  },
  {
    role: "Lecturer",
    org: "G.H. Raisoni College of Engineering, India",
    period: "2006 – 2007",
    points: ["Instructed first-year engineering physics coursework"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-background">
    <div className="container mx-auto max-w-4xl">
      <p className="text-accent font-semibold uppercase tracking-widest text-sm mb-2 text-center">Experience</p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">Career Journey</h2>

      <div className="relative border-l-2 border-accent/30 ml-4">
        {jobs.map((j, i) => (
          <motion.div
            key={j.role + j.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-10 pb-14 last:pb-0"
          >
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-accent-foreground" />
            </div>
            <span className="text-sm text-accent font-semibold">{j.period}</span>
            <h3 className="font-heading text-lg font-bold mt-1">{j.role}</h3>
            <p className="text-muted-foreground text-sm mb-3">{j.org}</p>
            <ul className="space-y-1">
              {j.points.map((p) => (
                <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
