import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  DollarSign, 
  Clock, 
  Users, 
  Shield, 
  Zap,
  TrendingUp,
  Package,
  Settings,
  Award,
  AlertCircle
} from "lucide-react";

// Types
interface Section {
  id: string;
  title: string;
  icon?: React.ReactNode;
}



// Components
const PageHeader = () => (
  <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-950 to-black py-20 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(244,63,94,0.1),transparent)]" />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto relative z-10"
    >
      <div className="inline-block px-4 py-1 mb-4 rounded-full bg-rose-500/10 border border-rose-500/20">
        <span className="text-rose-500 text-sm font-medium">Project Proposal</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
        Accomora
        <span className="text-rose-500">.</span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl">
        A comprehensive hotel booking platform engineered to deliver seamless experiences for guests, property managers, and administrators.
      </p>
      <div className="flex flex-wrap gap-6 text-zinc-300">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-rose-500" />
          <span className="text-sm">120 Days</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-rose-500" />
          <span className="text-sm">₹12,00,000</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-rose-500" />
          <span className="text-sm">9 Milestones</span>
        </div>
      </div>
    </motion.div>
  </div>
);

const NavBar = ({ sections, activeSection, setActiveSection }: {
  sections: Section[];
  activeSection: string;
  setActiveSection: (id: string) => void;
}) => {
  return (
    <div className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300
                  ${activeSection === section.id 
                    ? 'bg-rose-500 text-white' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                  }
                `}
              >
                {section.title}
              </button>
            ))}
          </div>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 border border-rose-500/50 text-rose-500 hover:bg-rose-500 hover:text-white flex-shrink-0"
          >
            View my portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

const ExecutiveSummary = () => (
  <section id="summary" className="py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-black text-white mb-8">
          Executive Summary<span className="text-rose-500">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-zinc-400 leading-relaxed">
              Create a modern, user-friendly hotel booking platform that provides extensive hotel inventory with real-time availability, 
              competitive pricing, flexible cancellation policies, and personalized recommendations while maintaining high performance and reliability.
            </p>
          </div>
          <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-4">Key Deliverables</h3>
            <ul className="space-y-3">
              {[
                'Guest-facing responsive application',
                'Property manager dashboard',
                'Admin operations panel',
                'Secure payment integration',
                'Advanced search & filtering',
                'Review & rating system'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const KeyMetrics = () => {
  const metrics = [
    { label: 'Page Load Time', value: '< 3s', icon: <Zap className="w-6 h-6" /> },
    { label: 'Concurrent Users', value: '10,000+', icon: <Users className="w-6 h-6" /> },
    { label: 'Uptime', value: '99.5%', icon: <TrendingUp className="w-6 h-6" /> },
    { label: 'Security', value: 'PCI-DSS', icon: <Shield className="w-6 h-6" /> },
  ];

  return (
    <section className="py-16 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12 text-center">
          Performance Targets<span className="text-rose-500">.</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-6 border border-zinc-800 text-center"
            >
              <div className="flex justify-center mb-4 text-rose-500">
                {metric.icon}
              </div>
              <div className="text-3xl font-black text-white mb-2">{metric.value}</div>
              <div className="text-sm text-zinc-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollapsibleSection = ({ title, children, defaultOpen = false }: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-rose-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-rose-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('guest');

  const featureTabs = {
    guest: {
      title: 'Guest Experience',
      icon: <Users className="w-5 h-5" />,
      categories: [
        {
          title: 'Registration & Authentication',
          features: [
            'Email/phone registration with OTP verification',
            'Social login (Google, Facebook)',
            'Password reset functionality',
            'Profile management with preferences'
          ]
        },
        {
          title: 'Search & Discovery',
          features: [
            'Multi-parameter search (destination, dates, guests, rooms)',
            'Advanced filters (price, rating, amenities, distance)',
            'Location-based search with map integration',
            'Autocomplete for destination search'
          ]
        },
        {
          title: 'Booking Process',
          features: [
            'Real-time availability checking',
            'Room selection with pricing breakdown',
            'Secure payment gateway integration',
            'Instant booking confirmation via email/SMS'
          ]
        }
      ]
    },
    hotel: {
      title: 'Hotel Manager',
      icon: <Package className="w-5 h-5" />,
      categories: [
        {
          title: 'Property Management',
          features: [
            'Add/edit property information and images',
            'Room type and amenities management',
            'Set property policies and house rules',
            'Document verification workflow'
          ]
        },
        {
          title: 'Inventory & Pricing',
          features: [
            'Room inventory control',
            'Dynamic pricing by date ranges',
            'Seasonal and weekend pricing',
            'Bulk rate updates via calendar'
          ]
        },
        {
          title: 'Performance Analytics',
          features: [
            'Booking statistics dashboard',
            'Revenue reports (daily, weekly, monthly)',
            'Occupancy rate tracking',
            'Review score monitoring'
          ]
        }
      ]
    },
    admin: {
      title: 'Admin Panel',
      icon: <Settings className="w-5 h-5" />,
      categories: [
        {
          title: 'Operations Management',
          features: [
            'Approve/reject property listings',
            'User and booking management',
            'Review moderation system',
            'Handle disputes and cancellations'
          ]
        },
        {
          title: 'Analytics & Reports',
          features: [
            'Real-time platform statistics',
            'Revenue and commission tracking',
            'User acquisition metrics',
            'Geographic distribution analytics'
          ]
        },
        {
          title: 'System Configuration',
          features: [
            'Platform settings (currency, timezone)',
            'Commission rate setup',
            'Payment gateway configuration',
            'Tax rate configuration'
          ]
        }
      ]
    }
  };

  return (
    <section id="features" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12">
          Feature Breakdown<span className="text-rose-500">.</span>
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {Object.entries(featureTabs).map(([key, tab]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300
                ${activeTab === key
                  ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-white border border-zinc-800'
                }
              `}
            >
              {tab.icon}
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {featureTabs[activeTab as keyof typeof featureTabs].categories.map((category, index) => (
              <CollapsibleSection key={index} title={category.title} defaultOpen={index === 0}>
                <ul className="space-y-3 mt-4">
                  {category.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-zinc-300">
                      <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleSection>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const TechnologyStack = () => {
  const techStack = {
    Frontend: ['React.js 18+', 'Next.js', 'Tailwind CSS', 'Redux', 'Axios'],
    Backend: ['Node.js', 'Express.js', 'RESTful API', 'JWT Auth', 'Socket.io'],
    Database: ['PostgreSQL', 'Redis', 'Elasticsearch'],
    'Third-Party': ['Razorpay/Stripe', 'Google Maps', 'AWS S3', 'SendGrid', 'Twilio'],
    DevOps: ['AWS/DigitalOcean', 'Docker', 'GitHub', 'CI/CD']
  };

  return (
    <section id="technology" className="py-16 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12">
          Technology Stack<span className="text-rose-500">.</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800"
            >
              <h3 className="text-lg font-bold text-rose-500 mb-4">{category}</h3>
              <ul className="space-y-2">
                {technologies.map((tech, index) => (
                  <li key={index} className="text-zinc-300 text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineAndPricing = () => {
  const phases = [
    {
      month: 'Day 0',
      phase: 'Advance Payment',
      title: 'Project Kickoff',
      deliverables: [
        'Contract signing',
        'Project kickoff meeting',
        'Access and credentials setup'
      ],
      payment: {
        amount: '₹1,00,000',
        percentage: '8.33%'
      }
    },
    {
      month: 'Day 15',
      weeks: 'Days 1-15',
      phase: 'Milestone 1',
      title: 'Planning & Architecture',
      deliverables: [
        'Requirements finalization',
        'Database design and architecture',
        'UI/UX wireframes',
        'Technical documentation'
      ],
      payment: {
        amount: '₹1,50,000',
        percentage: '12.5%'
      }
    },
    {
      month: 'Day 30',
      weeks: 'Days 16-30',
      phase: 'Milestone 2',
      title: 'Foundation Development',
      deliverables: [
        'Development environment setup',
        'Database schema implementation',
        'User authentication module',
        'Admin panel basic structure'
      ],
      payment: {
        amount: '₹1,50,000',
        percentage: '12.5%'
      }
    },
    {
      month: 'Day 45',
      weeks: 'Days 31-45',
      phase: 'Milestone 3',
      title: 'Guest Portal - Search & Listing',
      deliverables: [
        'Search functionality with filters',
        'Hotel listing page',
        'Hotel detail page with images',
        'Maps integration'
      ],
      payment: {
        amount: '₹1,50,000',
        percentage: '12.5%'
      }
    },
    {
      month: 'Day 60',
      weeks: 'Days 46-60',
      phase: 'Milestone 4',
      title: 'Guest Portal - Booking Flow',
      deliverables: [
        'Room selection interface',
        'Booking form and validation',
        'Payment gateway integration',
        'Email/SMS notifications'
      ],
      payment: {
        amount: '₹1,50,000',
        percentage: '12.5%'
      }
    },
    {
      month: 'Day 75',
      weeks: 'Days 61-75',
      phase: 'Milestone 5',
      title: 'Property Manager Dashboard',
      deliverables: [
        'Property registration and onboarding',
        'Property and room management',
        'Rate and inventory management',
        'Booking management for hosts'
      ],
      payment: {
        amount: '₹1,50,000',
        percentage: '12.5%'
      }
    },
    {
      month: 'Day 90',
      weeks: 'Days 76-90',
      phase: 'Milestone 6',
      title: 'Admin Panel & Analytics',
      deliverables: [
        'Complete admin dashboard',
        'User and property management',
        'Booking and financial reports',
        'Review moderation system'
      ],
      payment: {
        amount: '₹1,50,000',
        percentage: '12.5%'
      }
    },
    {
      month: 'Day 105',
      weeks: 'Days 91-105',
      phase: 'Milestone 7',
      title: 'Testing & Optimization',
      deliverables: [
        'End-to-end integration testing',
        'Cross-browser and device testing',
        'Performance optimization',
        'Security audit'
      ],
      payment: {
        amount: '₹1,00,000',
        percentage: '8.33%'
      }
    },
    {
      month: 'Day 120',
      weeks: 'Days 106-120',
      phase: 'Final Payment',
      title: 'Deployment & Launch',
      deliverables: [
        'Production server deployment',
        'UAT completion and bug fixes',
        'Training sessions and documentation',
        'Live launch with 30-day support'
      ],
      payment: {
        amount: '₹1,00,000',
        percentage: '8.33%'
      }
    }
  ];

  return (
    <section id="timeline" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-4">
          Timeline & Payments<span className="text-rose-500">.</span>
        </h2>
        <div className="text-center mb-12">
          <div className="text-5xl md:text-6xl font-black text-white mb-2">₹12,00,000</div>
          <div className="text-zinc-400">Total Project Cost • 120 Days (9 Milestones)</div>
        </div>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-rose-500"
            >
              <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-rose-500 border-4 border-zinc-950" />
              <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden">
                {/* Header with Timeline and Payment */}
                <div className="bg-zinc-900/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800">
                  <div className="flex flex-wrap items-center gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{phase.month}</h3>
                    {phase.weeks && (
                      <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm">
                        {phase.weeks}
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm font-medium">
                      {phase.phase}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-rose-500">{phase.payment.amount}</div>
                      <div className="text-sm text-zinc-400">{phase.payment.percentage}</div>
                    </div>
                  </div>
                </div>

                {/* Content with Title and Deliverables */}
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-zinc-200 mb-4">{phase.title}</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.deliverables.map((deliverable, dIndex) => (
                      <div key={dIndex} className="flex items-start gap-3 text-zinc-300">
                        <CheckCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 w-full bg-zinc-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: phase.payment.percentage }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Terms Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-zinc-900/30 rounded-2xl p-6 border border-zinc-800"
        >
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-rose-500" />
            Payment Terms
          </h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>• Milestone payments occur every 15 days throughout the 120-day project</li>
            <li>• Payments are due within 5 business days of milestone completion and approval</li>
            <li>• Final payment due at project handover before source code transfer</li>
            <li>• GST: 18% additional (if applicable)</li>
            <li>• Payment Methods: Bank transfer / NEFT / RTGS</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

const CostBreakdown = () => {
  const costBreakdown = [
    { category: 'Frontend Development', amount: '₹2,40,000', percentage: 20 },
    { category: 'Backend Development', amount: '₹3,00,000', percentage: 25 },
    { category: 'Property Manager Panel', amount: '₹1,50,000', percentage: 12.5 },
    { category: 'Admin Panel', amount: '₹1,50,000', percentage: 12.5 },
    { category: 'Testing & QA', amount: '₹1,00,000', percentage: 8.33 },
    { category: 'DevOps & Deployment', amount: '₹80,000', percentage: 6.67 },
    { category: 'Payment Integration', amount: '₹50,000', percentage: 4.17 },
    { category: 'Third-Party Integrations', amount: '₹60,000', percentage: 5 },
    { category: 'Other', amount: '₹70,000', percentage: 5.83 }
  ];

  return (
    <section id="pricing" className="py-16 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-4">
          Cost Breakdown<span className="text-rose-500">.</span>
        </h2>
        <p className="text-zinc-400 mb-8">Detailed breakdown of costs by development category</p>
        
        <div className="space-y-4">
          {costBreakdown.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-zinc-900/50 rounded-xl p-5 border border-zinc-800"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-white">{item.category}</span>
                <div className="text-right">
                  <span className="font-bold text-rose-500 text-lg">{item.amount}</span>
                  <span className="text-zinc-400 text-sm ml-2">({item.percentage}%)</span>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IncludedExcluded = () => {
  const included = [
    'Fully functional booking platform (guest + host + admin)',
    'Responsive design (mobile, tablet, desktop)',
    'Payment gateway integration with multi-currency',
    'Email and SMS notifications',
    'Maps integration',
    'SEO optimization',
    'Cloud hosting setup on AWS/DigitalOcean',
    'SSL certificate and security setup',
    'Source code (full ownership)',
    'Technical and user documentation',
    'Admin and host training (2 sessions)',
    '30 days post-launch support'
  ];

  const excluded = [
    'Flights or car rental modules',
    'Mobile apps (iOS/Android native)',
    'Advanced AI/ML features',
    'Multi-language support beyond English',
    'Ongoing maintenance after 30 days',
    'Hotel content creation',
    'Domain and hosting charges',
    'Third-party API charges'
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12">
          What's Included<span className="text-rose-500">.</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Included */}
          <div className="bg-gradient-to-br from-green-900/20 to-zinc-900/50 rounded-2xl p-8 border border-green-900/30">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <h3 className="text-2xl font-bold text-white">Included</h3>
            </div>
            <ul className="space-y-3">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-300">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="bg-gradient-to-br from-orange-900/20 to-zinc-900/50 rounded-2xl p-8 border border-orange-900/30">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-orange-500" />
              <h3 className="text-2xl font-bold text-white">Not Included</h3>
            </div>
            <ul className="space-y-3">
              {excluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-300">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-0.5 bg-orange-500" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const SecurityCompliance = () => {
  return (
    <section id="security" className="py-16 px-6 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white mb-12">
          Security & Compliance<span className="text-rose-500">.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800">
            <Shield className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Security Measures</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• SSL/TLS encryption</li>
              <li>• Password hashing (bcrypt)</li>
              <li>• Two-factor authentication</li>
              <li>• SQL injection prevention</li>
              <li>• Rate limiting on APIs</li>
              <li>• Regular security audits</li>
            </ul>
          </div>
          <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800">
            <Award className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Compliance</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• GDPR-ready data protection</li>
              <li>• PCI-DSS payment processing</li>
              <li>• Data encryption at rest</li>
              <li>• Privacy policy compliance</li>
              <li>• Cookie consent management</li>
            </ul>
          </div>
          <div className="bg-zinc-900/50 rounded-2xl p-6 border border-zinc-800">
            <Shield className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">Fraud Prevention</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li>• Email/phone verification</li>
              <li>• Review authenticity checks</li>
              <li>• Suspicious activity monitoring</li>
              <li>• Admin flagging system</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


// Main Component
export default function AccomoraProposal() {
  const [activeSection, setActiveSection] = useState('summary');

  const sections: Section[] = [
    { id: 'summary', title: 'Overview' },
    { id: 'features', title: 'Features' },
    { id: 'technology', title: 'Technology' },
    { id: 'timeline', title: 'Timeline & Pricing' },
    { id: 'pricing', title: 'Cost Breakdown' },
    { id: 'security', title: 'Security' }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <PageHeader />
      <NavBar 
        sections={sections} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ExecutiveSummary />
      <KeyMetrics />
      <FeaturesSection />
      <TechnologyStack />
      <TimelineAndPricing />
      <CostBreakdown />
      <IncludedExcluded />
      <SecurityCompliance />
      
      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-zinc-400 text-sm">
          <p>This proposal is confidential and prepared exclusively for the client.</p>
          <p className="mt-2">All information contained herein is proprietary.</p>
        </div>
      </footer>
    </div>
  );
}

