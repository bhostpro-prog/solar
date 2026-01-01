import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Upload } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    serviceType: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        location: '',
        serviceType: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            For EPC, testing, repairs, or consultations – our team responds within 24 hours. PAN India service.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl mb-8">Get in Touch</h2>
              <p className="text-gray-700 text-lg mb-8">
                Whether you need a solar installation, testing services, or have questions about our solutions, our expert team is here to help.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#228b22] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Email</h3>
                    <p className="text-gray-600">info@bharatrenewable.com</p>
                    <p className="text-gray-600">support@bharatrenewable.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#fd7d01] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Phone</h3>
                    <p className="text-gray-600">+91-XXXX-XXXXXX</p>
                    <p className="text-gray-600">+91-XXXX-YYYYYY</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#228b22] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1">Service Areas</h3>
                    <p className="text-gray-600">PAN India Coverage</p>
                    <p className="text-gray-600">Focus: Tamil Nadu & Pondicherry</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1544588440-fc7551331160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1hcCUyMHRhbWlsJTIwbmFkdXxlbnwxfHx8fDE3NjY0ODM1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Service area map"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-3xl mb-6">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-[#228b22] text-white p-6 rounded-lg text-center">
                  <h3 className="text-2xl mb-2">Thank You!</h3>
                  <p>Your message has been received. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                    >
                      <option value="">Select a service</option>
                      <option value="rooftop-epc">Rooftop EPC</option>
                      <option value="iv-testing">IV Curve Testing</option>
                      <option value="thermography">Thermography</option>
                      <option value="hv-electrical">HV Electrical Testing</option>
                      <option value="electronics-repair">Electronics Repair</option>
                      <option value="om-services">O&M Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">
                      Message/Description *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#228b22]"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">
                      Upload Image (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#228b22] transition-colors cursor-pointer">
                      <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                      <p className="text-gray-600">Click to upload or drag and drop</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#228b22] text-white px-8 py-4 rounded-full hover:bg-[#1a6b1a] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Fast Response Banner */}
      <section className="py-12 bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Book Your Solar Testing or Repair Today</h2>
          <p className="text-xl text-white/90">
            Fast Response Across India – We respond to all inquiries within 24 hours
          </p>
        </div>
      </section>

      {/* Business Hours & Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-xl mb-4">Business Hours</h3>
              <p className="text-gray-600 mb-2">Monday - Friday</p>
              <p className="text-gray-900">9:00 AM - 6:00 PM IST</p>
              <p className="text-gray-600 mt-4 mb-2">Saturday</p>
              <p className="text-gray-900">9:00 AM - 2:00 PM IST</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-xl mb-4">Emergency Support</h3>
              <p className="text-gray-600 mb-2">24/7 Emergency Line</p>
              <p className="text-gray-900">+91-XXXX-ZZZZZZ</p>
              <p className="text-sm text-gray-500 mt-4">
                For urgent repairs and critical system failures
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center">
              <h3 className="text-xl mb-4">Response Time</h3>
              <p className="text-gray-600 mb-2">Email & Form Inquiries</p>
              <p className="text-gray-900">Within 24 hours</p>
              <p className="text-gray-600 mt-4 mb-2">Phone Calls</p>
              <p className="text-gray-900">Immediate during business hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
