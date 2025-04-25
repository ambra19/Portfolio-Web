
import { Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's connect!</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          I'm always open to work on exciting ideas. <br />
          <p className="text-gray-600 font-semibold mb-8 max-w-xl mx-auto">
          Let's connect on Linkedin or send me an email!
          </p>
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:mihuambra@gmail.com" target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </Button>
          </a>
          <a href="https://www.linkedin.com/in/ambra-m-b897bb23b/" target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            Linkedin
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
