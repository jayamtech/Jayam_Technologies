import {
  Phone,
  MessageCircle,
  FileText,
  Shield,
  Wrench,
  Award,
  Users,
  ThumbsUp,
  Sun,
  Cctv,
  Smartphone,
} from "lucide-react";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import logo from "../components/logo.png";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919442823927", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919442823927";
  };

  const handleGetQuote = () => {
    onNavigate("contact");
    setTimeout(() => {
      const form = document.getElementById("contact-form");
      form?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const keyServices = [
    {
      icon: <Wrench size={32} />,
      title: "Computer & Laptop Service",
      description:
        "Expert repair and maintenance services for all brands of computers and laptops",
    },
    {
      icon: <Cctv size={32} />,
      title: "CCTV Installation",
      description:
        "Professional CCTV camera installation with warranty and after-sales support",
    },
    {
      icon: <Sun size={32} />,
      title: "Solar Solutions",
      description:
        "Complete solar panel systems, inverters, and solar fencing installations",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile & Electronics",
      description:
        "Latest mobile phones, LED TVs, and all computer accessories available",
    },
  ];

  const trustFactors = [
    {
      icon: <Users size={40} />,
      title: "25+ Years Experience",
      description: "Serving Kulasekharam community",
    },
    {
      icon: <Award size={40} />,
      title: "Quality Products",
      description: "Authorized dealer of top brands",
    },
    {
      icon: <Shield size={40} />,
      title: "Warranty Support",
      description: "Comprehensive warranty on all services",
    },
    {
      icon: <ThumbsUp size={40} />,
      title: "Customer Satisfaction",
      description: "10,000+ happy customers",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={logo}
                  alt="JT logo"
                  className="w-full h-full object-contain drop-shadow"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              JAYAM TECHNOLOGIES
            </h1>

            <p className="text-xl md:text-2xl mb-4 text-blue-100 font-semibold">
              Your Trusted Tech Partner in Kulasekharam
            </p>

            <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed max-w-2xl mx-auto">
              Complete technology solutions for homes and businesses. From
              computer repairs to CCTV installations, solar systems to custom PC
              builds - we've got you covered!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="whatsapp"
                onClick={handleWhatsApp}
                icon={<MessageCircle size={20} />}
              >
                WhatsApp Now
              </Button>
              <Button
                variant="success"
                onClick={handleCall}
                icon={<Phone size={20} />}
              >
                Call Now
              </Button>
              <Button
                variant="secondary"
                onClick={handleGetQuote}
                icon={<FileText size={20} />}
              >
                Get Free Quote
              </Button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 9442823927</span>
              </div>
              <div className="hidden sm:block text-blue-300">|</div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 9787623927</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Key Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to meet your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {keyServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="flex flex-col items-center text-center mt-12">
            <Button variant="primary" onClick={() => onNavigate("services")}>
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your satisfaction and trust are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {trustFactors.map((factor, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {factor.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {factor.title}
                </h3>
                <p className="text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Contact us today for a free consultation and quote. Our expert
              team is ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="whatsapp"
                onClick={handleWhatsApp}
                icon={<MessageCircle size={20} />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                variant="secondary"
                onClick={handleGetQuote}
                icon={<FileText size={20} />}
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
