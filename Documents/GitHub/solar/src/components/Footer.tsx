import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#228b22] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="md:col-span-1">
            <img 
              src="/logo.png" 
              alt="Bharat Renewable Energy" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-white/80">
              Advanced solar EPC, testing, HV electrical diagnostics, and electronics repair for utility, commercial, and residential projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-white/80 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/safety" className="text-white/80 hover:text-white transition-colors">Safety</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Solar Rooftop EPC</li>
              <li>IV Curve Testing</li>
              <li>Aerial Thermography</li>
              <li>Manual Thermography</li>
              <li>PR Analysis</li>
              <li>HV Transformer/Relay Testing</li>
              <li>Electronics Card Repair</li>
              <li>Safety Compliance</li>
            </ul>
          </div>

          {/* Service Locations */}
          <div>
            <h3 className="text-lg mb-4">Service Locations</h3>
            <p className="text-sm text-white/80 mb-4">
              PAN India<br />
              (Focus: Tamil Nadu & Pondicherry)
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/80">
          <p>© 2025 Bharat Renewable Energy. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/admin/login" className="text-white/60 hover:text-white text-xs">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}