import { useCMSContent, useCMSPage } from '../hooks/useCMSContent';
import { Link } from 'react-router-dom';

export function CMSDemoPage() {
  // Example 1: Fetch a single content item
  const { content: heroContent, loading: heroLoading } = useCMSContent('cms:home:hero', {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    image: '',
  });

  // Example 2: Fetch all content for a page
  const { content: homeContent, loading: pageLoading } = useCMSPage('home', {});

  // Example 3: Fetch with different default values
  const { content: missionContent } = useCMSContent(
    'cms:about:mission',
    'Default mission statement'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            to="/admin"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#228b22] text-white rounded-lg hover:bg-[#1a6b1a] transition-colors"
          >
            Go to CMS Admin Dashboard
          </Link>
        </div>

        <h1 className="text-4xl mb-8">CMS Integration Demo</h1>

        {/* Example 1: Single Content Item */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl text-[#228b22] mb-4">Example 1: Single Content Item</h2>
          <p className="text-gray-600 mb-4">
            <code className="bg-gray-100 px-2 py-1 rounded">
              useCMSContent('cms:home:hero')
            </code>
          </p>
          
          {heroLoading ? (
            <div className="text-gray-500">Loading...</div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Title:</label>
                <div className="p-4 bg-gray-50 rounded-lg">{heroContent.title}</div>
              </div>
              <div>
                <label className="block text-sm mb-2">Subtitle:</label>
                <div className="p-4 bg-gray-50 rounded-lg">{heroContent.subtitle}</div>
              </div>
              {heroContent.image && (
                <div>
                  <label className="block text-sm mb-2">Image:</label>
                  <img
                    src={heroContent.image}
                    alt="Hero"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          )}
        </section>

        {/* Example 2: All Page Content */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl text-[#228b22] mb-4">Example 2: All Page Content</h2>
          <p className="text-gray-600 mb-4">
            <code className="bg-gray-100 px-2 py-1 rounded">useCMSPage('home')</code>
          </p>
          
          {pageLoading ? (
            <div className="text-gray-500">Loading...</div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4">
              <pre className="text-sm overflow-x-auto">
                {JSON.stringify(homeContent, null, 2)}
              </pre>
            </div>
          )}
        </section>

        {/* Example 3: Text Content */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl text-[#228b22] mb-4">Example 3: Text Content</h2>
          <p className="text-gray-600 mb-4">
            <code className="bg-gray-100 px-2 py-1 rounded">
              useCMSContent('cms:about:mission')
            </code>
          </p>
          
          <div className="p-4 bg-gray-50 rounded-lg">{missionContent}</div>
        </section>

        {/* Code Examples */}
        <section className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl text-[#228b22] mb-4">Usage Examples</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg mb-2">1. Import the hook:</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`import { useCMSContent, useCMSPage } from '../hooks/useCMSContent';`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg mb-2">2. Fetch single content:</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`const { content, loading, error } = useCMSContent('cms:home:hero', {
  title: 'Default Title',
  subtitle: 'Default Subtitle'
});`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg mb-2">3. Fetch all page content:</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`const { content, loading, error } = useCMSPage('home', {});

// Access nested content:
// content.hero.title
// content.stats.homes
// etc.`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg mb-2">4. Use in JSX:</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`{loading ? (
  <div>Loading...</div>
) : (
  <h1>{content.title}</h1>
)}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Content Structure Guide */}
        <section className="bg-white rounded-xl p-8 shadow-lg mt-8">
          <h2 className="text-2xl text-[#228b22] mb-4">Content Key Structure</h2>
          <p className="text-gray-600 mb-4">
            Use a consistent naming convention for your content keys:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm font-mono">
            <div>cms:home:hero - Home page hero section</div>
            <div>cms:home:stats - Home page statistics</div>
            <div>cms:about:mission - About page mission statement</div>
            <div>cms:about:values - About page values list</div>
            <div>cms:services:list - Services page service list</div>
            <div>cms:projects:featured - Projects page featured projects</div>
            <div>cms:contact:email - Contact page email</div>
            <div>cms:contact:phone - Contact page phone</div>
          </div>
        </section>
      </div>
    </div>
  );
}
