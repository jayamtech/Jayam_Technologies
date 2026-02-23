import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">JAYAM TECHNOLOGIES</h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for all technology solutions. Quality products, professional service, and customer satisfaction guaranteed.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:+919442823927" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>+91 9442823927</p>
                  <p>+91 9787623927</p>
                </div>
              </a>
              <a href="mailto:jayamtech.kulasekharam@gmail.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <p className="break-all">jayamtech.kulasekharam@gmail.com</p>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>Convent Junction, Kulasekharam<br />Kanniyakumari District</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Monday - Saturday</p>
                  <p>9:00 AM - 8:00 PM</p>
                  <p className="font-semibold text-white mt-2">Sunday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} JAYAM TECHNOLOGIES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
