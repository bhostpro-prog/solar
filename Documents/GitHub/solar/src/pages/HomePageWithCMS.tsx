import { Link } from 'react-router-dom';
import { Download, Calculator, CheckCircle, Zap, Sun, Shield, Briefcase, MapPin } from 'lucide-react';
import { useCMSContent } from '../hooks/useCMSContent';

// Icon mapping
const iconMap: { [key: string]: any } = {
  CheckCircle,
  Zap,
  Briefcase,
  Sun,
  MapPin,
  Shield,
};

export function HomePageWithCMS() {
  // Fetch CMS content with fallbacks
  const { content: heroContent } = useCMSContent('home_hero', {
    title: 'Empower Your Home with Solar Rooftop – Clean, Affordable Energy for Tamil Nadu & Pondicherry',
    subtitle: 'Transform your residential or commercial space into a sustainable powerhouse.',
    ctaButtons: [
      { text: 'Book Free Site Assessment', link: '/contact', primary: true }
    ]
  });

  const { content: highlights } = useCMSContent('home_highlights', [
    {
      icon: 'CheckCircle',
      title: 'Government Subsidies',
      description: 'Up to ₹78,000 central + ₹20,000/kW state incentives for residential systems.',
      color: 'green'
    }
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section with CMS Content */}
      <section className="relative min-h-[500px] md:h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1599463698367-11cb72775b67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwdGVjaG5pY2lhbiUyMGVuZ2luZWVyJTIwd29ya2VyfGVufDF8fHx8MTc2NjQ4MzU0OXww&ixlib=rb-4.1.0&q=80&w=1080)',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              {heroContent.title}
            </h1>
            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 md:mb-8">
              {heroContent.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              {heroContent.ctaButtons?.map((button: any, index: number) => (
                button.primary ? (
                  <Link
                    key={index}
                    to={button.link}
                    className="bg-[#228b22] text-white px-6 sm:px-8 py-3 md:py-4 rounded-full hover:bg-[#1a6b1a] transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {button.text}
                  </Link>
                ) : (
                  <button
                    key={index}
                    className="border-2 border-white text-white px-6 sm:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    {button.text === 'Explore Subsidy Calculator' && <Calculator size={20} />}
                    {button.text === 'Download ROI Guide' && <Download size={20} />}
                    {button.text}
                  </button>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section with CMS Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl text-[#228b22] mb-4">
              Leading the Way in
            </h2>
            <h2 className="text-4xl lg:text-5xl text-[#fd7d01]">
              Solar Energy Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight: any, index: number) => {
              const Icon = iconMap[highlight.icon] || CheckCircle;
              const bgColor = highlight.color === 'green' ? 'bg-[#228b22]' : 'bg-[#fd7d01]';
              
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
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

      {/* Rest of the page remains the same as original HomePage */}
      {/* You can continue adding CMS integration for other sections */}
      
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
