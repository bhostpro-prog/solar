import { FileText, Briefcase, FolderOpen, MessageSquare, TrendingUp } from 'lucide-react';

interface DashboardStats {
  pages: number;
  services: number;
  projects: number;
  testimonials: number;
}

interface AdminDashboardProps {
  stats: DashboardStats;
  lastUpdated?: string;
}

export function AdminDashboard({ stats, lastUpdated }: AdminDashboardProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-[#228b22] to-[#1a6b1a] text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl mb-2">Welcome to Your CMS Dashboard</h1>
        <p className="text-white/90">
          Manage your website content with ease. All changes are saved automatically and appear live on your website.
        </p>
        {lastUpdated && (
          <p className="text-sm text-white/70 mt-4">
            Last update: {new Date(lastUpdated).toLocaleString()}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<FileText size={32} />}
          title="Pages"
          count={stats.pages}
          color="from-blue-500 to-blue-600"
          description="Active pages"
        />
        <StatCard
          icon={<Briefcase size={32} />}
          title="Services"
          count={stats.services}
          color="from-green-500 to-green-600"
          description="Service offerings"
        />
        <StatCard
          icon={<FolderOpen size={32} />}
          title="Projects"
          count={stats.projects}
          color="from-purple-500 to-purple-600"
          description="Portfolio items"
        />
        <StatCard
          icon={<MessageSquare size={32} />}
          title="Testimonials"
          count={stats.testimonials}
          color="from-orange-500 to-orange-600"
          description="Client reviews"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickTipCard
          title="Quick Tip: Editing Pages"
          tips={[
            'Click on any page to edit its content',
            'Changes are saved immediately',
            'Preview your changes by clicking "View Site"',
            'Use descriptive titles and clear descriptions'
          ]}
        />
        <QuickTipCard
          title="Best Practices"
          tips={[
            'Update projects regularly to showcase recent work',
            'Keep service descriptions current and accurate',
            'Use high-quality images (min 1200px wide)',
            'Always log out when done editing'
          ]}
        />
      </div>

      <ActivityFeed />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  count: number;
  color: string;
  description: string;
}

function StatCard({ icon, title, count, color, description }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className={`bg-gradient-to-r ${color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <div className="text-3xl mb-1">{count}</div>
      <div className="text-lg mb-1">{title}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
}

interface QuickTipCardProps {
  title: string;
  tips: string[];
}

function QuickTipCard({ title, tips }: QuickTipCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-xl mb-4 flex items-center gap-2">
        <TrendingUp className="text-[#228b22]" size={24} />
        {title}
      </h3>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="text-[#228b22] mt-1">•</span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-xl mb-4">Getting Started</h3>
      <div className="space-y-4">
        <ActivityItem
          title="Initialize Your CMS"
          description="Click the 'Initialize CMS' button to load your website content into the database"
          status="pending"
        />
        <ActivityItem
          title="Edit Your First Page"
          description="Navigate to Pages and edit the home page hero section"
          status="pending"
        />
        <ActivityItem
          title="Add a Service"
          description="Go to Services and add your first service offering"
          status="pending"
        />
        <ActivityItem
          title="Add a Project"
          description="Showcase your work by adding a project to your portfolio"
          status="pending"
        />
      </div>
    </div>
  );
}

interface ActivityItemProps {
  title: string;
  description: string;
  status: 'completed' | 'pending';
}

function ActivityItem({ title, description, status }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
        status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
      }`} />
      <div className="flex-1">
        <div className="text-gray-900 mb-1">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
    </div>
  );
}
