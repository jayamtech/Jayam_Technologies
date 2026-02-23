import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Building,
  Target,
  Users,
} from "lucide-react";
import Button from "../components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hello! I'm interested in your services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919442823927?text=${encodedMessage}`, "_blank");

    setSubmitStatus("success");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us & About
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed">
              Get in touch with us for all your technology needs. We're here to
              help!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  <span className="font-bold text-blue-600">
                    JAYAM TECHNOLOGIES
                  </span>{" "}
                  is your trusted technology partner in Kulasekharam,
                  Kanniyakumari District. With over a decade of experience, we
                  have been serving the local community with dedication and
                  excellence.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  We specialize in providing comprehensive technology solutions
                  for both homes and businesses. From computer repairs to
                  advanced CCTV installations, solar power systems to custom PC
                  builds - we offer end-to-end services with professional
                  expertise.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our commitment to quality, customer satisfaction, and
                  after-sales support has made us a preferred choice in the
                  region. Every product we sell and every service we provide
                  comes with warranty support and our promise of reliability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Building className="mx-auto text-blue-600 mb-3" size={40} />
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600">
                    Provide reliable technology solutions with excellent service
                  </p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Target className="mx-auto text-blue-600 mb-3" size={40} />
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600">
                    Be the most trusted tech partner in the region
                  </p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <Users className="mx-auto text-blue-600 mb-3" size={40} />
                  <h3 className="font-bold text-gray-800 text-lg mb-2">
                    Our Values
                  </h3>
                  <p className="text-gray-600">
                    Quality, integrity, and customer satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Phone
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Phone Numbers
                    </h3>
                    <a
                      href="tel:+919442823927"
                      className="text-blue-600 hover:text-blue-800 block mb-1 font-semibold"
                    >
                      +91 9442823927
                    </a>
                    <a
                      href="tel:+919787623927"
                      className="text-blue-600 hover:text-blue-800 block font-semibold"
                    >
                      +91 9787623927
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Mail
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Email Address
                    </h3>
                    <a
                      href="mailto:jayamtech.kulasekharam@gmail.com"
                      className="text-blue-600 hover:text-blue-800 break-all font-semibold"
                    >
                      jayamtech.kulasekharam@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <MapPin
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Our Location
                    </h3>
                    <p className="text-gray-700 font-semibold">
                      Convent Junction, Kulasekharam
                      <br />
                      Kanniyakumari District
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <Clock
                    className="text-blue-600 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">
                      Business Hours
                    </h3>
                    <div className="text-gray-700 space-y-1">
                      <p>
                        <span className="font-semibold">
                          Monday - Saturday:
                        </span>{" "}
                        9:00 AM - 8:00 PM
                      </p>
                      <p>
                        <span className="font-semibold">Sunday:</span> 10:00 AM
                        - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="whatsapp"
                  href="https://wa.me/919442823927"
                  icon={<MessageCircle size={20} />}
                  className="flex-1"
                >
                  WhatsApp Us
                </Button>
                <Button
                  variant="success"
                  href="tel:+919442823927"
                  icon={<Phone size={20} />}
                  className="flex-1"
                >
                  Call Now
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Send Us a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                id="contact-form"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Computer/Laptop Sales">
                      Computer/Laptop Sales
                    </option>
                    <option value="Computer/Laptop Service">
                      Computer/Laptop Service
                    </option>
                    <option value="CCTV Installation">CCTV Installation</option>
                    <option value="Solar Panel System">
                      Solar Panel System
                    </option>
                    <option value="Solar Fencing">Solar Fencing</option>
                    <option value="Inverter System">Inverter System</option>
                    <option value="Mobile Phones">Mobile Phones</option>
                    <option value="LED TV">LED TV</option>
                    <option value="Running LED Board">Running LED Board</option>
                    <option value="Custom PC Build">Custom PC Build</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                    Message sent! We'll contact you via WhatsApp shortly.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  icon={<Send size={20} />}
                  className="w-full"
                >
                  Send Message via WhatsApp
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  This form will open WhatsApp with your message pre-filled
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Us on Map
            </h2>
            <p className="text-gray-600 text-lg">
              Located at Convent Junction, Kulasekharam
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.2605553658846!2d77.29305397477044!3d8.376011598868953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0456ac73c08fd9%3A0x6df5f39823d2068d!2sJayam%20Technologies%20%26%20CCTV%20Security%20Services%20%26%20TV!5e0!3m2!1sen!2sin!4v1771589907685!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JAYAM TECHNOLOGIES Location"
                ></iframe>
              </div>
              <div className="p-6 bg-blue-50">
                <p className="text-center text-gray-700">
                  <MapPin className="inline mr-2" size={20} />
                  <span className="font-semibold">
                    Convent Junction, Kulasekharam, Kanniyakumari District
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
