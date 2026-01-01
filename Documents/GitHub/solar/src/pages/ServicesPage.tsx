import { CheckCircle, Zap, Camera, Thermometer, BarChart3, Shield, Wrench, HardHat } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'epc',
      title: 'Solar Rooftop EPC & Installation',
      icon: <Zap size={32} />,
      color: 'from-[#228b22] to-[#1a6b1a]',
      description: 'End-to-end design, installation, and commissioning for residential/commercial rooftops.',
      features: [
        'Underperforming modules identification',
        'Mismatch & degradation losses analysis',
        'Shading issues & faulty connections detection',
        'Thermal damage indicators',
        'Performance graphs & deviation analysis',
        'Ground-mount, trackers, floating, rooftops',
      ],
      image: 'https://images.unsplash.com/photo-1761158495585-eac721decf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z0b3AlMjByZXNpZGVudGlhbCUyMGhvbWV8ZW58MXx8fHwxNzY2NDgzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'iv-curve',
      title: 'IV Curve Testing (Module, String & Array Level)',
      icon: <BarChart3 size={32} />,
      color: 'from-[#fd7d01] to-[#d66601]',
      description: 'Identifies underperformance, shading, and faults through comprehensive testing.',
      features: [
        'Module-level performance analysis',
        'String and array diagnostics',
        'Performance graphs & comparisons',
        'Fault identification & recommendations',
        'Baseline establishment for monitoring',
        'Compliance verification',
      ],
      image: 'https://images.unsplash.com/photo-1664389061558-7c01ccf86daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGluZm9ncmFwaGljJTIwY2hhcnR8ZW58MXx8fHwxNzY2NDgzNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'drone-thermography',
      title: 'Aerial Drone Thermography (MW-Scale)',
      icon: <Camera size={32} />,
      color: 'from-[#228b22] to-[#1a6b1a]',
      description: 'High-resolution thermal imaging for large-scale solar installations.',
      features: [
        'Hotspot detection',
        'PID (Potential Induced Degradation) identification',
        'Crack detection in modules',
        'Junction box failure analysis',
        '10x faster than manual methods',
        'High-resolution thermal maps',
      ],
      image: 'https://images.unsplash.com/photo-1660061537054-5119bb958eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc2NjQ4MzU1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'manual-thermography',
      title: 'Manual Thermography (Detailed)',
      icon: <Thermometer size={32} />,
      color: 'from-[#fd7d01] to-[#d66601]',
      description: 'Detailed thermal scanning for rooftops, inverters, and electrical systems.',
      features: [
        'Rooftop installations analysis',
        'Inverter thermal scanning',
        'Cable connection testing',
        'Safety compliance checks',
        'Detailed reporting with images',
        'Preventive maintenance recommendations',
      ],
      image: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGVuZ2luZWVyJTIwd29ya2VyfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'pr-analysis',
      title: 'Solar Performance Ratio (PR) & Yield Analysis',
      icon: <BarChart3 size={32} />,
      color: 'from-[#228b22] to-[#1a6b1a]',
      description: 'Comprehensive performance monitoring and optimization.',
      features: [
        'PR calculation & benchmarking',
        'Loss assessment & categorization',
        'Yield optimization strategies',
        'Generation forecasting',
        'Performance trending',
        'ROI improvement recommendations',
      ],
      image: 'https://images.unsplash.com/photo-1664389061558-7c01ccf86daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGVuZXJneSUyMGluZm9ncmFwaGljJTIwY2hhcnR8ZW58MXx8fHwxNzY2NDgzNTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'hv-testing',
      title: 'High Voltage Electrical Testing (11kV–220kV)',
      icon: <Shield size={32} />,
      color: 'from-[#fd7d01] to-[#d66601]',
      description: 'Comprehensive testing for solar and wind substations.',
      features: [
        'Transformer: IR/PI, Tan Delta, Ratio testing',
        'CT/PT: Ratio, Polarity, Knee-point verification',
        'Circuit Breakers: Timing, Contact Resistance',
        'Relays: Distance, Differential, Numerical testing',
        'Insulation resistance testing',
        'Commissioning support',
      ],
      image: 'https://images.unsplash.com/photo-1565010640914-8d817b58d808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwdGVzdGluZyUyMGVxdWlwbWVudCUyMHN1YnN0YXRpb258ZW58MXx8fHwxNzY2NDgzNTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'electronics-repair',
      title: 'Industrial Electronics Repair',
      icon: <Wrench size={32} />,
      color: 'from-[#228b22] to-[#1a6b1a]',
      description: 'Component-level repairs for critical industrial systems.',
      features: [
        'SMPS/Buffer: PWM IC, MOSFET replacement',
        'Inverter Cards: Logic repair, calibration',
        'IGBT Drivers: Gate signal testing & repair',
        'Current Transducers: Calibration (up to 1000A)',
        'Reconditioned cards supply',
        'ESD-safe facilities',
      ],
      image: 'https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHJlcGFpciUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjY0ODM1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'om-safety',
      title: 'O&M, Repairs & Safety Compliance',
      icon: <HardHat size={32} />,
      color: 'from-[#fd7d01] to-[#d66601]',
      description: 'Ongoing maintenance and safety compliance services.',
      features: [
        'Inverter service & maintenance',
        'Net metering setup & support',
        'IEC/IEEE standards compliance',
        'Preventive maintenance programs',
        'Emergency repair services',
        '24/7 support availability',
      ],
      image: 'https://images.unsplash.com/photo-1735494032948-14ef288fc9d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBjb25zdHJ1Y3Rpb24lMjBoZWxtZXR8ZW58MXx8fHwxNzY2NDgzNTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive solar solutions tailored to your needs. Each service is designed with a focus on quality, efficiency, and sustainability.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl lg:text-4xl mb-4">{service.title}</h2>
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-[#228b22] mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8">
            Our team of experts is ready to design a tailored service package for your specific requirements.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#228b22] px-12 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
