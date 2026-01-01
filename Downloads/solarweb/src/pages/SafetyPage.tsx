import { Shield, CheckCircle, AlertTriangle, Award } from 'lucide-react';

export function SafetyPage() {
  const protocols = [
    {
      title: 'Lockout/Tag-out (LOTO)',
      description: 'Comprehensive energy isolation procedures to ensure worker safety during maintenance and repair operations.',
    },
    {
      title: 'Live DC/AC Handling',
      description: 'Specialized protocols for safely working with live electrical systems in solar installations.',
    },
    {
      title: 'Drone Safety SOP',
      description: 'Standard operating procedures for aerial inspection operations, including flight safety and equipment protocols.',
    },
    {
      title: 'Heat Stress Management',
      description: 'Programs to protect workers from heat-related illness during outdoor installations and inspections.',
    },
    {
      title: 'High-Voltage Mitigation',
      description: 'Advanced safety measures for working with high-voltage equipment from 11kV to 220kV.',
    },
    {
      title: 'Full PPE Compliance',
      description: 'Mandatory personal protective equipment requirements for all site operations.',
    },
  ];

  const certifications = [
    {
      title: 'IEC 62446',
      description: 'Photovoltaic (PV) systems - Requirements for testing, documentation and maintenance',
    },
    {
      title: 'IEC 61215',
      description: 'Terrestrial photovoltaic (PV) modules - Design qualification and type approval',
    },
    {
      title: 'IEEE Standards',
      description: 'Compliance with IEEE electrical safety and testing standards',
    },
    {
      title: 'ASTM References',
      description: 'Following ASTM international standards for materials and testing',
    },
    {
      title: 'NABL-Traceable',
      description: 'All testing equipment calibrated and traceable to NABL standards',
    },
    {
      title: 'Internal SOPs',
      description: 'Comprehensive standard operating procedures for solar, wind, and electronics work',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Shield size={64} />
            <h1 className="text-5xl lg:text-6xl">Safety First</h1>
          </div>
          <p className="text-xl text-white/90 max-w-3xl">
            Safety is paramount in all operations – from rooftops to HV substations. We protect teams, assets, and the environment.
          </p>
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl mb-6">Our Safety Commitment</h2>
              <p className="text-gray-700 text-lg mb-4">
                At Bharat Renewable Energy, safety is not just a priority—it's a fundamental value embedded in everything we do. From residential rooftop installations to high-voltage substation commissioning, we maintain the highest safety standards to protect our team, our clients, and the environment.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Our comprehensive safety program includes rigorous training, strict protocol adherence, and continuous improvement initiatives. Every project begins with a detailed safety assessment and risk mitigation plan.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-[#228b22] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl">0</span>
                </div>
                <div>
                  <p className="text-2xl">Zero Accidents</p>
                  <p className="text-gray-600">Target for every project</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1735494032948-14ef288fc9d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBlcXVpcG1lbnQlMjBjb25zdHJ1Y3Rpb24lMjBoZWxtZXR8ZW58MXx8fHwxNzY2NDgzNTUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Safety gear in use"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Safety Protocols */}
          <div className="mb-20">
            <h2 className="text-4xl text-center mb-12">Safety Protocols</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {protocols.map((protocol, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="text-[#fd7d01] flex-shrink-0 mt-1" size={24} />
                    <h3 className="text-xl">{protocol.title}</h3>
                  </div>
                  <p className="text-gray-600">{protocol.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Standards */}
          <div>
            <h2 className="text-4xl text-center mb-12">Certifications & Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#228b22] to-[#1a6b1a] text-white rounded-xl p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Award className="flex-shrink-0 mt-1" size={24} />
                    <h3 className="text-xl">{cert.title}</h3>
                  </div>
                  <p className="text-white/90">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PPE Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Personal Protective Equipment (PPE)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6 text-[#228b22]">Mandatory PPE</h3>
              <ul className="space-y-3">
                {[
                  'Safety helmets (hard hats) with chin straps',
                  'Safety glasses or goggles with side shields',
                  'High-visibility vests or clothing',
                  'Safety boots with steel toe caps',
                  'Cut-resistant gloves for handling panels',
                  'Fall protection harnesses for rooftop work',
                  'Insulated gloves for electrical work',
                  'Respirators when working in dusty environments',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#228b22] mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl mb-6 text-[#fd7d01]">Specialized Equipment</h3>
              <ul className="space-y-3">
                {[
                  'Arc flash protection suits for HV work',
                  'Insulating mats and blankets',
                  'Voltage detectors and testers',
                  'Grounding equipment and clamps',
                  'Fire extinguishers on all work sites',
                  'First aid kits with trained personnel',
                  'Emergency rescue equipment',
                  'Communication devices for remote work',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-[#fd7d01] mt-1 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Education */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Training & Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#228b22] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={40} />
              </div>
              <h3 className="text-xl mb-3">Regular Safety Training</h3>
              <p className="text-gray-600">
                All team members undergo comprehensive safety training before deployment and regular refresher courses.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#fd7d01] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={40} />
              </div>
              <h3 className="text-xl mb-3">Certification Programs</h3>
              <p className="text-gray-600">
                Team members hold industry-recognized certifications for electrical safety and specialized equipment operation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#228b22] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-white" size={40} />
              </div>
              <h3 className="text-xl mb-3">Emergency Response</h3>
              <p className="text-gray-600">
                Emergency response drills and protocols ensure quick, effective action in case of any incident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Safety Questions?</h2>
          <p className="text-xl mb-8">
            Our safety team is available to discuss our protocols and answer any questions about our commitment to safe operations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#228b22] px-12 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Contact Our Safety Team
          </a>
        </div>
      </section>
    </div>
  );
}
