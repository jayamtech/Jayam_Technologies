import {
  Monitor,
  Cog,
  Zap,
  Sun,
  Fence,
  Smartphone,
  Tv,
  MonitorDot,
  HardDrive,
  Wrench,
  Shield,
  Package,
  Cctv,
} from "lucide-react";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const salesServices = [
    {
      icon: <Monitor size={40} />,
      title: "Computer & Laptop Sales",
      description:
        "Latest desktops, laptops, and notebooks from top brands. Expert guidance to help you choose the perfect system for your needs.",
      features: [
        "All major brands",
        "Latest models",
        "Best prices",
        "Expert advice",
      ],
    },
    {
      icon: <Cctv size={40} />,
      title: "CCTV Cameras",
      description:
        "High-quality CCTV systems for home and business security. HD, Night vision, and remote monitoring capabilities.",
      features: [
        "HD cameras",
        "Night vision",
        "Remote access",
        "Recording systems",
      ],
    },
    {
      icon: <Zap size={40} />,
      title: "Inverter Systems",
      description:
        "Reliable power backup solutions. Pure sine wave inverters with battery systems for uninterrupted power supply.",
      features: [
        "Pure sine wave",
        "All capacities",
        "Battery included",
        "Energy efficient",
      ],
    },
    {
      icon: <Sun size={40} />,
      title: "Solar Panel Systems",
      description:
        "Complete solar power solutions. Reduce electricity bills with eco-friendly solar energy systems.",
      features: [
        "Residential systems",
        "Commercial systems",
        "Grid-tie options",
        "Off-grid solutions",
      ],
    },
    {
      icon: <Fence size={40} />,
      title: "Solar Fencing",
      description:
        "Advanced security fencing with solar power. Protect your property with modern electric fencing systems.",
      features: [
        "Energizer units",
        "Alarm systems",
        "Solar powered",
        "Low maintenance",
      ],
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Phones",
      description:
        "Latest smartphones from all leading brands. Get the best deals on new mobile phones with warranty.",
      features: [
        "All brands",
        "Latest models",
        "Accessories",
        "Warranty support",
      ],
    },
    {
      icon: <Tv size={40} />,
      title: "LED TVs",
      description:
        "Smart TVs and LED displays in all sizes. Experience crystal-clear picture quality and smart features.",
      features: [
        "Smart TVs",
        "All screen sizes",
        "4K options",
        "Installation included",
      ],
    },
    {
      icon: <MonitorDot size={40} />,
      title: "Running LED Boards",
      description:
        "Digital display boards for businesses. Attract customers with eye-catching LED advertising boards.",
      features: [
        "Custom sizes",
        "Programmable",
        "Energy efficient",
        "Indoor/outdoor",
      ],
    },
    {
      icon: <HardDrive size={40} />,
      title: "Computer Accessories",
      description:
        "Complete range of computer peripherals and accessories. Everything you need for your computer setup.",
      features: [
        "Keyboards & mice",
        "Monitors",
        "Storage devices",
        "Networking gear",
      ],
    },
  ];

  const serviceSupport = [
    {
      icon: <Wrench size={40} />,
      title: "Repair & Service",
      description:
        "Expert repair services for computers, laptops, and all electronic equipment. Quick turnaround time.",
      features: [
        "Hardware repair",
        "Software troubleshooting",
        "Data recovery",
        "Virus removal",
      ],
    },
    {
      icon: <Cog size={40} />,
      title: "Installation Services",
      description:
        "Professional installation of CCTV systems, solar panels, inverters, and all equipment we sell.",
      features: [
        "Professional setup",
        "Testing included",
        "Training provided",
        "Documentation",
      ],
    },
    {
      icon: <Package size={40} />,
      title: "Custom PC Building",
      description:
        "Build your dream PC with our expert guidance. Gaming PCs, workstations, and specialized systems.",
      features: [
        "Custom configs",
        "Quality components",
        "Cable management",
        "Performance tuning",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed">
              Comprehensive technology solutions for all your needs. Quality
              products and professional services with warranty support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Sales & Products
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Wide range of technology products from trusted brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {salesServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Installation & Service Support
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional installation and maintenance services with warranty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {serviceSupport.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-blue-100"
              >
                <div className="p-8">
                  <div className="text-blue-600 mb-6 flex justify-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-md">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-gray-700 font-medium"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Why Choose Our Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <div className="flex gap-4">
                  <div className="text-green-400 text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Expert Technicians
                    </h3>
                    <p className="text-blue-50">
                      Trained and experienced professionals for all services
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-green-400 text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Warranty Support</h3>
                    <p className="text-blue-50">
                      Comprehensive warranty on all products and services
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-green-400 text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick Service</h3>
                    <p className="text-blue-50">
                      Fast turnaround time for repairs and installations
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-green-400 text-3xl flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Competitive Pricing
                    </h3>
                    <p className="text-blue-50">
                      Best prices in Kulasekharam with no hidden charges
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center text-center">
                <Button variant="success" onClick={() => onNavigate("contact")}>
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
