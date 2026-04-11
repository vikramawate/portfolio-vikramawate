import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_27lphyp",
        "template_61wntne",
        { from_name: form.name, from_email: form.email, message: form.message },
        "Fj-cmC731gcd_23d-"
      );
      toast.success("Message sent! I'll respond soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-5xl">
        <p className="text-highlight font-semibold uppercase tracking-widest text-sm mb-2 text-center">Contact</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14">
          Reach Out for Academic Opportunities
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              Whether you're looking for an experienced physics educator, a science department leader, or a collaborator for research — I'd love to hear from you.
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50">Phone</p>
                  <a href="tel:+971506071924" className="hover:text-accent transition-colors">+971 50 607 1924</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/50">Email</p>
                  <a href="mailto:vikramawate82@gmail.com" className="hover:text-accent transition-colors">vikramawate82@gmail.com</a>
                  <br />
                  <a href="mailto:awatevikram@gmail.com" className="hover:text-accent transition-colors text-sm text-primary-foreground/70">awatevikram@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40"
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 resize-none"
            />
            <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full gap-2">
              <Send className="w-4 h-4" /> Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
