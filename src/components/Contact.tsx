
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <Button className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Contact Me
        </Button>
      </div>
    </section>
  );
};

export default Contact;
