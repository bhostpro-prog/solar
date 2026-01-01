import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, Download, Calculator, CheckCircle, Zap, Sun, Shield, Briefcase, MapPin } from 'lucide-react';
import { projectId } from '../utils/supabase/info';

// Icon mapping
const iconMap: { [key: string]: any } = {
  CheckCircle,
  Zap,
  Sun,
  Shield,
  Briefcase,
  MapPin
};

export function HomePageCMS() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPageContent();
  }, []);

  const loadPageContent = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-47a069bd/cms/pages/home`
      );
      const data = await response.json();
      
      if (data.success && data.page) {
        setPageData(data.page);
      }
    } catch (error) {
      console.error('Error loading page content:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Page content not found</div>
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
            backgroundImage: `url(${pageData.heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              {pageData.heroTitle}
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 md:mb-8">
              {pageData.heroSubtitle}
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
              <button className="border-2 border-white text-white px-6 sm:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base">
                <Download size={20} />
                Download ROI Guide
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
              {pageData.sectionTitle1}
            </h2>
            <h2 className="text-4xl lg:text-5xl text-[#fd7d01]">
              {pageData.sectionTitle2}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {(pageData.highlights || []).map((highlight: any, index: number) => {
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
                  <p className="text-gray-600">{highlight.description}</p>
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
          <h2 className="text-4xl text-center mb-12">{pageData.subsidyTitle}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl text-[#228b22] mb-4">
                {pageData.centralSubsidyTitle}
              </h3>
              <p className="text-gray-700 mb-4">
                {pageData.centralSubsidyDescription}
              </p>
              <ul className="space-y-2 mb-4">
                {(pageData.centralSubsidyBenefits || []).map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-[#228b22] mt-1 flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm">
                {pageData.centralSubsidyNote}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl text-[#fd7d01] mb-4">
                {pageData.stateSubsidyTitle}
              </h3>
              <p className="text-gray-700 mb-4">
                {pageData.stateSubsidyDescription}
              </p>
              <div className="bg-gradient-to-r from-[#228b22] to-[#fd7d01] text-white rounded-lg p-6">
                <p className="text-3xl mb-2">{pageData.stateSubsidyTotal}</p>
                <p className="text-lg">{pageData.stateSubsidyTotalNote}</p>
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
            <strong>Eligibility:</strong> {pageData.subsidyEligibility}
          </p>
        </div>
      </section>

      {/* Financing & ROI Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-center mb-12">{pageData.financingTitle}</h2>

          <div className="mb-12">
            <h3 className="text-2xl text-[#228b22] mb-6">Easy Financing Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(pageData.financingOptions || []).map((option: any, index: number) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-xl mb-3">{option.title}</h4>
                  <p className="text-gray-700">{option.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Residential ROI */}
            <div className="bg-gradient-to-br from-[#228b22] to-[#1a6b1a] text-white rounded-xl p-8">
              <h3 className="text-2xl mb-6">{pageData.residentialROITitle}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Gross Cost</span>
                  <span>{pageData.residentialROI?.grossCost}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Central Subsidy</span>
                  <span>{pageData.residentialROI?.centralSubsidy}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>TN State Incentive</span>
                  <span>{pageData.residentialROI?.stateIncentive}</span>
                </div>
                <div className="flex justify-between text-xl pt-2">
                  <span>Net Cost</span>
                  <span>{pageData.residentialROI?.netCost}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {(pageData.residentialROI?.benefits || []).map((benefit: string, index: number) => (
                  <li key={index}>• {benefit}</li>
                ))}
              </ul>
            </div>

            {/* Commercial ROI */}
            <div className="bg-gradient-to-br from-[#fd7d01] to-[#d66601] text-white rounded-xl p-8">
              <h3 className="text-2xl mb-6">{pageData.commercialROITitle}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Cost</span>
                  <span>{pageData.commercialROI?.cost}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span>Annual Savings (₹10-12/unit)</span>
                  <span>{pageData.commercialROI?.annualSavings}</span>
                </div>
                <div className="flex justify-between text-xl pt-2">
                  <span>Payback</span>
                  <span>{pageData.commercialROI?.payback}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {(pageData.commercialROI?.benefits || []).map((benefit: string, index: number) => (
                  <li key={index}>• {benefit}</li>
                ))}
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
          <h2 className="text-4xl text-center mb-4">{pageData.projectShowcaseTitle}</h2>
          <p className="text-center text-gray-600 text-xl mb-12">
            {pageData.projectShowcaseSubtitle}
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
          <h2 className="text-4xl mb-6">{pageData.ctaTitle}</h2>
          <p className="text-xl mb-8">
            {pageData.ctaSubtitle}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#228b22] px-12 py-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            {pageData.ctaButtonText}
          </Link>
        </div>
      </section>
    </div>
  );
}
