import { MapPin, Zap, TrendingUp } from 'lucide-react';

export function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: '5 MW Ground-Mount Performance Testing',
      client: 'IPP',
      location: 'Tamil Nadu',
      scope: 'IV Curve & Thermography',
      findings: '5% shading loss',
      result: '12% yield boost',
      image: 'https://images.unsplash.com/photo-1713544123590-d5b03390bbd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGZhcm0lMjBncm91bmQlMjBtb3VudCUyMHBhbmVsc3xlbnwxfHx8fDE3NjY0ODM1NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: '12 MW Tracker Plant Testing',
      client: 'EPC',
      location: 'Pondicherry',
      scope: 'Drone Scan & HV Relay',
      findings: 'Tracker faults',
      result: 'Optimized tracking',
      image: 'https://images.unsplash.com/photo-1598262369876-bb3e31ad093d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHRyYWNrZXIlMjBzeXN0ZW18ZW58MXx8fHwxNzY2NDgzNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Floating Solar PR Analysis',
      client: 'Utility',
      location: 'Reservoir, TN',
      scope: 'Yield Assessment',
      findings: 'Biofouling issues',
      result: 'Enhanced cleaning SOP',
      image: 'https://images.unsplash.com/photo-1595755062235-f280dc1ec6f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9hdGluZyUyMHNvbGFyJTIwcGFuZWxzJTIwd2F0ZXJ8ZW58MXx8fHwxNzY2NDgzNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Commercial Roof Thermography (Shopping Mall)',
      client: 'Retail',
      location: 'Chennai',
      scope: 'Manual Thermo & PR',
      findings: 'Hotspots detected',
      result: '15% efficiency gain',
      image: 'https://images.unsplash.com/photo-1725781760697-0fd602114a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGNvbW1lcmNpYWwlMjBmYWN0b3J5JTIwcm9vZnxlbnwxfHx8fDE3NjY0ODM1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Residential Optimization (3 kW Install)',
      client: 'Homeowner',
      location: 'Coimbatore',
      scope: 'EPC & Subsidy',
      findings: 'N/A',
      result: '80% bill cut, 3-year payback',
      image: 'https://images.unsplash.com/photo-1761158495585-eac721decf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z0b3AlMjByZXNpZGVudGlhbCUyMGhvbWV8ZW58MXx8fHwxNzY2NDgzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Wind Substation Commissioning',
      client: 'Wind Farm',
      location: 'TN',
      scope: 'Transformer & Breaker',
      findings: 'Insulation faults',
      result: 'Safe grid tie-in',
      image: 'https://images.unsplash.com/photo-1760270129343-6190b2f340e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kJTIwdHVyYmluZSUyMHN1YnN0YXRpb258ZW58MXx8fHwxNzY2NDgzNTUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Inverter Card Repair (100 kW System)',
      client: 'Factory',
      location: 'Pondicherry',
      scope: 'IGBT Driver Fix',
      findings: 'Gate failure',
      result: 'Zero downtime recovery',
      image: 'https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHJlcGFpciUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjY0ODM1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl mb-6">Our Projects</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Showcasing excellence in solar installations, testing, and maintenance across India. Each project demonstrates our commitment to quality and innovation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {project.client}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl mb-4">{project.title}</h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="text-[#228b22] mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="text-gray-900">{project.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Zap className="text-[#fd7d01] mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-sm text-gray-600">Scope</p>
                        <p className="text-gray-900">{project.scope}</p>
                      </div>
                    </div>

                    {project.findings !== 'N/A' && (
                      <div className="flex items-start gap-2">
                        <TrendingUp className="text-[#228b22] mt-1 flex-shrink-0" size={18} />
                        <div>
                          <p className="text-sm text-gray-600">Findings</p>
                          <p className="text-gray-900">{project.findings}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-1">Result</p>
                    <p className="text-[#228b22]">{project.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Project Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl text-[#228b22] mb-2">150+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl text-[#fd7d01] mb-2">50 MW+</div>
              <p className="text-gray-600">Total Capacity</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl text-[#228b22] mb-2">500+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-4xl text-[#fd7d01] mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "EcoRay transformed our home with their solar panels. Our energy bills have dropped significantly, and we feel great knowing we're contributing to a greener planet."
              </p>
              <p className="text-sm">John M., Homeowner in Springfield</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "Their expertise and quality products have not only reduced our operational costs but also strengthened our commitment to sustainability. Highly recommend!"
              </p>
              <p className="text-sm">Lisa T., CEO of SunTech Innovations Inc.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                "The system they installed is efficient and reliable, helping us save on energy costs while supporting our eco-friendly initiatives. Their customer service is top-notch!"
              </p>
              <p className="text-sm">Michael R., Owner of Green Acres Farm</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Start Your Solar Journey</h2>
          <p className="text-xl mb-8">
            Join our growing list of satisfied clients and make the switch to clean, renewable energy today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#228b22] px-12 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}
