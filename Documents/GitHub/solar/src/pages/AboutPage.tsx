import { Target, Award, Users, Wrench } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl mb-6">About Us</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Leading EPC and service provider specializing in solar rooftop installations, advanced testing, and renewable energy solutions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl mb-6">Company Overview</h2>
              <p className="text-gray-700 mb-4">
                <strong>Bharat Renewable Energy</strong> is a leading EPC and service provider specializing in solar rooftop installations, advanced testing, high-voltage electrical diagnostics, and industrial electronics repair. We support utility-scale, commercial, residential, solar, and wind projects across India, with a strong focus on Tamil Nadu and Pondicherry.
              </p>
              <p className="text-gray-700 mb-4">
                Our integrated services ensure peak performance, safety, and ROI for renewable assets. From rooftop EPC to substation commissioning and card-level repairs, we deliver end-to-end solutions with certified engineers, NABL-traceable tools, and ESD-safe facilities.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGVuZ2luZWVyJTIwd29ya2VyfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team at work on solar site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#228b22] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To drive India's renewable transition through innovative EPC, precise diagnostics, and reliable O&M – maximizing efficiency and minimizing downtime.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-[#fd7d01] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-3xl mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#228b22] mt-1">•</span>
                  <span>Accuracy & Reliability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#228b22] mt-1">•</span>
                  <span>Safety-First Execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#228b22] mt-1">•</span>
                  <span>Transparency & Professional Reporting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#228b22] mt-1">•</span>
                  <span>Customer-Centric Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#228b22] mt-1">•</span>
                  <span>Renewable Energy Expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Expertise Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#228b22] to-[#1a6b1a] text-white rounded-xl p-6">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl mb-3">Solar EPC</h3>
              <p className="text-white/90">
                Rooftop installs with TOPCon/Mono PERC tech, subsidies navigation.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#fd7d01] to-[#d66601] text-white rounded-xl p-6">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Wrench size={24} />
              </div>
              <h3 className="text-xl mb-3">Testing & Diagnostics</h3>
              <p className="text-white/90">
                IV curves, thermography, HV equipment (11kV-220kV).
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#228b22] to-[#1a6b1a] text-white rounded-xl p-6">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl mb-3">Electronics Repair</h3>
              <p className="text-white/90">
                SMPS, IGBT drivers, inverter cards for inverters & controllers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#fd7d01] to-[#d66601] text-white rounded-xl p-6">
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl mb-3">PAN India Reach</h3>
              <p className="text-white/90">
                Fast mobilization for EPCs, IPPs, O&M contractors.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1660061537054-5119bb958eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHNvbGFyJTIwcGFuZWxzfGVufDF8fHx8MTc2NjQ4MzU1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Drone thermography"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700">Drone thermography for large-scale diagnostics</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMHJlcGFpciUyMGNpcmN1aXQlMjBib2FyZHxlbnwxfHx8fDE3NjY0ODM1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Electronics workbench"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700">Advanced electronics repair workbench</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl mb-2">100+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl mb-2">50MW+</div>
              <p className="text-white/80">Installed Capacity</p>
            </div>
            <div>
              <div className="text-5xl mb-2">500+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl mb-2">25+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
