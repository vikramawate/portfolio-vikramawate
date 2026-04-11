const Footer = () => (
  <footer className="bg-primary border-t border-primary-foreground/10 py-8">
    <div className="container mx-auto text-center">
      <p className="font-heading font-bold text-primary-foreground text-lg mb-1">Dr. Vikram R. Awate</p>
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
