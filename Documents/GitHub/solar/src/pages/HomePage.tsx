import { Link } from 'react-router-dom';
import { Play, Download, Calculator, CheckCircle, Zap, Sun, Shield, Briefcase, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Icon mapping for highlights
const iconMap: { [key: string]: any } = {
  CheckCircle,
  Zap,
  Briefcase,
  Sun,
  MapPin,
  Shield,
};

export function HomePage() {
  const [pageContent, setPageContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageContent();
  }, []);

  const fetchPageContent = async () => {
    try {
      const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd`;
      const response = await fetch(`${baseUrl}/cms/pages/home`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });
      
      const data = await response.json();
      console.log('HomePage CMS data:', data);
      
      if (data.success && data.page) {
        setPageContent(data.page);
      }
    } catch (err) {
      console.error('Error fetching home page content:', err);
    } finally {
      setLoading(false);
    }
  };

  // Default content as fallback
  const content = pageContent || {
    heroTitle: 'Empower Your Home with Solar Rooftop – Clean, Affordable Energy for Tamil Nadu & Pondicherry',
    heroSubtitle: 'Transform your residential or commercial space into a sustainable powerhouse. Enjoy government subsidies, fast ROI, and zero upfront hassle with our expert EPC services.',
    heroImage: 'https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGVuZ2luZWVyJTIwd29ya2VyfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    sectionTitle1: 'Leading the Way in',
    sectionTitle2: 'Solar Energy Solutions',
    highlights: [
      {
        icon: 'CheckCircle',
        title: 'Government Subsidies',
        description: 'Up to ₹78,000 central + ₹20,000/kW state incentives for residential systems.',
        color: '#228b22'
      },
      {
        icon: 'Zap',
        title: 'Fast ROI',
        description: 'Payback in 3-5 years for homes; 2-3.5 years for commercial setups.',
        color: '#fd7d01'
      },
      {
        icon: 'Briefcase',
        title: 'End-to-End EPC',
        description: 'Design, installation, net metering, and O&M support.',
        color: '#228b22'
      },
      {
        icon: 'Sun',
        title: 'Proven Tech',
        description: 'TOPCon, Mono PERC, and half-cut panels for maximum efficiency.',
        color: '#fd7d01'
      },
      {
        icon: 'MapPin',
        title: 'PAN India Service',
        description: 'Special focus on Tamil Nadu & Pondicherry with DISCOM approvals.',
        color: '#228b22'
      },
      {
        icon: 'Shield',
        title: '25+ Year Warranty',
        description: 'Long-term performance guarantee with comprehensive support.',
        color: '#fd7d01'
      }
    ]
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#228b22] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${content.heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              {content.heroTitle}
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 md:mb-8">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                to="/contact"
                className="bg-[#228b22] text-white px-6 sm:px-8 py-3 md:py-4 rounded-full hover:bg-[#1a6b1a] transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Book Free Site Assessment
              </Link>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                <Calculator size={20} />
                Explore Subsidy Calculator
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#228b22] mb-4">
              {content.sectionTitle1}
            </h2>
            <h2 className="text-4xl lg:text-5xl text-[#fd7d01]">
              {content.sectionTitle2}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {content.highlights.map((highlight: any, index: number) => {
              const IconComponent = iconMap[highlight.icon] || CheckCircle;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: highlight.color }}
                  >
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl mb-3">{highlight.title}</h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1725781760697-0fd602114a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGNvbW1lcmNpYWwlMjBmYWN0b3J5JTIwcm9vZnxlbnwxfHx8fDE3NjY0ODM1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Commercial rooftop solar installation"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700">Commercial rooftop on factory</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1762958266774-95abba6e0685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elevated structure for apartments"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <p className="text-gray-700">Elevated structure for apartments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidy & Schemes Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Subsidy & Schemes Overview</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl text-[#228b22] mb-4">
                Pradhan Mantri Surya Ghar Muft Bijli Yojana (Central Subsidy)
              </h3>
              <p className="text-gray-700 mb-4">
                This flagship scheme offers direct financial aid for residential rooftop solar.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#228b22] mt-1 flex-shrink-0" size={20} />
                  <span>Up to ₹30,000/kW for 1-2 kW systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#228b22] mt-1 flex-shrink-0" size={20} />
                  <span>₹60,000 for 2-3 kW</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#228b22] mt-1 flex-shrink-0" size={20} />
                  <span>₹78,000 max for 3+ kW</span>
                </li>
              </ul>
              <p className="text-gray-600 text-sm">
                Apply via National Portal: Register, get DISCOM approval, install with empanelled vendors like us. Subsidy credited post-verification.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl text-[#fd7d01] mb-4">
                Chief Minister's Solar Rooftop Capital Incentive Scheme (Tamil Nadu State)
              </h3>
              <p className="text-gray-700 mb-4">
                Additional ₹20,000/kW over central subsidy for on-grid residential PV systems.
              </p>
              <div className="bg-gradient-to-r from-[#228b22] to-[#fd7d01] text-white rounded-lg p-6">
                <p className="text-3xl mb-2">Up to ₹98,000/kW</p>
                <p className="text-lg">Combined total savings</p>
              </div>
            </div>
          </div>

          {/* Subsidy Summary Table */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#228b22] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Component</th>
                    <th className="px-6 py-4 text-left">Subsidy/Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Central Subsidy (PM Surya Ghar)</td>
                    <td className="px-6 py-4">₹30,000–₹78,000 (by kW)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">State Incentive (TN Govt)</td>
                    <td className="px-6 py-4">Up to ₹20,000 per kW</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Total Potential Subsidy</td>
                    <td className="px-6 py-4 text-[#228b22]">Up to ₹98,000 per kW (approx.)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            <strong>Eligibility:</strong> Residential households, RWAs, grid-connected systems. Commercial benefits via net metering & depreciation.
          </p>
        </div>
      </section>

      {/* Financing & ROI Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">Financing & ROI Benefits</h2>

          <div className="mb-12">
            <h3 className="text-2xl text-[#228b22] mb-6">Easy Financing Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl mb-3">Banks</h4>
                <p className="text-gray-700">
                  SBI Green Home Loan (8-12% interest, 3-7 years tenure, 75-80% financing)
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl mb-3">NBFCs</h4>
                <p className="text-gray-700">
                  Tata Capital, Hero FinCorp – Zero EMI, quick approvals
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-xl mb-3">Business Models</h4>
                <p className="text-gray-700">
                  CapEx (own it), OPEX/PPA (zero upfront)
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Residential ROI */}
            <div className="bg-gradient-to-br from-[#228b22] to-[#1a6b1a] text-white rounded-xl p-8">
              <h3 className="text-2xl mb-6">Residential ROI Example (3 kW System)</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Gross Cost</span>
                  <span>₹1,50,000–₹1,70,000</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Central Subsidy</span>
                  <span>₹60,000</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>TN State Incentive</span>
                  <span>Up to ₹60,000</span>
                </div>
                <div className="flex justify-between text-xl pt-2">
                  <span>Net Cost</span>
                  <span>₹70,000–₹1,00,000</span>
                </div>
              </div>
              <ul className="space-y-2">
                <li>• Annual Generation: ~3,600 units</li>
                <li>• Savings (₹4.50-₹7/unit): ₹16,000–₹22,000/year</li>
                <li>• Payback: 3-4.5 years</li>
                <li>• 25-Year ROI: 6x-8x</li>
                <li>• Benefits: 70-90% bill reduction, property value boost</li>
              </ul>
            </div>

            {/* Commercial ROI */}
            <div className="bg-gradient-to-br from-[#fd7d01] to-[#d66601] text-white rounded-xl p-8">
              <h3 className="text-2xl mb-6">Commercial ROI Example (100 kW System)</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Cost</span>
                  <span>₹45-55 Lakhs</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Annual Savings (₹10-12/unit)</span>
                  <span>₹14-18 Lakhs</span>
                </div>
                <div className="flex justify-between text-xl pt-2">
                  <span>Payback</span>
                  <span>2.5-3.5 years</span>
                </div>
              </div>
              <ul className="space-y-2">
                <li>• ROI: 8x-10x</li>
                <li>• 40% accelerated depreciation</li>
                <li>• ESG compliance</li>
                <li>• Enhanced brand value</li>
                <li>• Protection from tariff hikes</li>
              </ul>
            </div>
          </div>

          {/* ROI Summary Table */}
          <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left">Residential</th>
                    <th className="px-6 py-4 text-left">Commercial/Industrial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Tariff Savings</td>
                    <td className="px-6 py-4">Moderate (₹4.50-7/unit)</td>
                    <td className="px-6 py-4">Very High (₹10-12/unit)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Payback Period</td>
                    <td className="px-6 py-4">3-5 years</td>
                    <td className="px-6 py-4">2-3.5 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">System Life</td>
                    <td className="px-6 py-4">25+ years</td>
                    <td className="px-6 py-4">25+ years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Government Subsidy</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">No (Net Metering/Deprec.)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Depreciation Benefit</td>
                    <td className="px-6 py-4">No</td>
                    <td className="px-6 py-4">Yes (40% Accelerated)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4">Net Metering</td>
                    <td className="px-6 py-4">Yes</td>
                    <td className="px-6 py-4">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-4">Project Showcase</h2>
          <p className="text-center text-gray-600 text-xl mb-12">
            Discover our work: From modern homes to factories – clean installs, zero downtime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1761158495585-eac721decf1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z0b3AlMjByZXNpZGVudGlhbCUyMGhvbWV8ZW58MXx8fHwxNzY2NDgzNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Residential solar installation"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl mb-2">Residential Installation</h4>
                <p className="text-gray-600">Modern home solar rooftop system</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1725781760697-0fd602114a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGNvbW1lcmNpYWwlMjBmYWN0b3J5JTIwcm9vZnxlbnwxfHx8fDE3NjY0ODM1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Commercial project"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl mb-2">Commercial Project</h4>
                <p className="text-gray-600">Large-scale factory rooftop installation</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1762958266774-95abba6e0685?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMGluc3RhbGxhdGlvbiUyMGFwYXJ0bWVudCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Apartment elevated structure"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl mb-2">Apartment Complex</h4>
                <p className="text-gray-600">Elevated structure installation</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-block bg-[#228b22] text-white px-12 py-4 rounded-full hover:bg-[#1a6b1a] transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">Ready to Go Solar?</h2>
          <p className="text-xl mb-8">
            Get your free quote today and start saving on energy costs while protecting the environment.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#228b22] px-12 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}