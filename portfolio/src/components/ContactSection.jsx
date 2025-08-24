import { Github, Linkedin, Mail, MapPin, Send, Twitter, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [status, setStatus] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvgbpkww", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); 
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          “I’d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello — feel free to reach out.”
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between h-full space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:agnihotrinimisha296@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    agnihotrinimisha296@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Rajkot, Gujarat, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium">Availability</h4>
                  <p className="text-muted-foreground">
                    Mon – Fri: 1:30 PM – 9:00 PM | Sat – Sun: All Day
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 ">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="eg. Nimisha Agnihotri"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 ">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="eg. abc@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 ">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Type your Message here.."
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-50"
                )}
              >
                {status === "loading" ? "Sending..." : "Send"}
                <Send size={16} />
              </button>
            </form>
            {status === "success" && (
              <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">❌ Oops! Something went wrong.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
