import { CheckCircle, BookOpen, Settings, Zap } from 'lucide-react';

export function WelcomeScreen() {
  return (
    <div className="bg-gradient-to-br from-[#228b22] to-[#1a6b1a] rounded-2xl p-8 text-white mb-8">
      <h2 className="text-3xl mb-4">Welcome to Your CMS! 🎉</h2>
      <p className="text-white/90 mb-6 text-lg">
        You can now manage all your website content without touching any code. Here's what you can do:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle size={24} />
            <h3 className="text-xl">Edit Page Content</h3>
          </div>
          <p className="text-white/80">
            Update hero sections, text, images, and more on all pages instantly.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Zap size={24} />
            <h3 className="text-xl">Manage Services</h3>
          </div>
          <p className="text-white/80">
            Add, edit, or remove services with descriptions, features, and images.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <Settings size={24} />
            <h3 className="text-xl">Control Projects</h3>
          </div>
          <p className="text-white/80">
            Showcase your work by managing project cards with images and details.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen size={24} />
            <h3 className="text-xl">Handle Testimonials</h3>
          </div>
          <p className="text-white/80">
            Add client testimonials to build trust and credibility.
          </p>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
        <h3 className="text-xl mb-3">Quick Tips:</h3>
        <ul className="space-y-2 text-white/90">
          <li>• All changes are saved to the database instantly</li>
          <li>• You can preview changes on the live website anytime</li>
          <li>• Use the tabs above to navigate between different content types</li>
          <li>• For detailed instructions, check the CMS_GUIDE.md file</li>
        </ul>
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href="/CMS_GUIDE.md"
          target="_blank"
          className="bg-white text-[#228b22] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Read Full Guide
        </a>
        <a
          href="/"
          target="_blank"
          className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          View Website
        </a>
      </div>
    </div>
  );
}
