import Image from 'next/image';

interface PricingPlan {
  name: string;
  price: number;
  features: Array<{
    text: string;
    icon: string;
  }>;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Basic',
    price: 499,
    features: [
      {
        text: 'Up to 500 Students',
        icon: '/images/icons/Education-Medical Icon.png'
      },
      {
        text: 'Basic Health Tracking',
        icon: '/images/icons/Heartbeat Data Visualization.png'
      },
      {
        text: 'Emergency Alerts',
        icon: '/images/icons/Emergency Alert Icon.png'
      },
      {
        text: 'Parent Portal Access',
        icon: '/images/icons/Medical Folder Icon.png'
      }
    ]
  },
  {
    name: 'Professional',
    price: 999,
    isPopular: true,
    features: [
      {
        text: 'Up to 2000 Students',
        icon: '/images/icons/Education-Medical Icon.png'
      },
      {
        text: 'Advanced Health Analytics',
        icon: '/images/icons/Clipboard Bar Graph.png'
      },
      {
        text: 'Real-time Monitoring',
        icon: '/images/icons/Heartbeat Data Visualization.png'
      },
      {
        text: 'Custom Health Reports',
        icon: '/images/icons/Medical Folder Icon.png'
      },
      {
        text: 'Priority Support',
        icon: '/images/icons/Medical Gear Icon.png'
      }
    ]
  },
  {
    name: 'Enterprise',
    price: 1499,
    features: [
      {
        text: 'Unlimited Students',
        icon: '/images/icons/Education-Medical Icon.png'
      },
      {
        text: 'Specialist Referrals',
        icon: '/images/icons/Silhouette with Cross Badge.png'
      },
      {
        text: 'Family Health History',
        icon: '/images/icons/Medical Folder Icon.png'
      },
      {
        text: 'Personalized Health Plans',
        icon: '/images/icons/Clipboard Bar Graph.png'
      },
      {
        text: 'Annual Health Summary',
        icon: '/images/icons/Document Submission Icon.png'
      }
    ]
  }
];

export default function PricingTable() {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative p-8 bg-white dark:bg-soft-charcoal/30 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border ${
            plan.isPopular
              ? 'border-accent-500 dark:border-accent-400'
              : 'border-base-200 dark:border-base-700'
          }`}
        >
          {plan.isPopular && (
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </span>
            </div>
          )}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display mb-2 text-base-900 dark:text-base-50">
              {plan.name}
            </h3>
            <div className="flex items-center justify-center gap-1">
              <span className="text-4xl font-bold text-base-900 dark:text-base-50">₹{plan.price}</span>
              <span className="text-base-700 dark:text-base-200">/month</span>
            </div>
          </div>
          <ul className="space-y-4">
            {plan.features.map((feature) => (
              <li key={feature.text} className="flex items-center gap-3 text-base-700 dark:text-base-200">
                <div className="w-6 h-6 flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                {feature.text}
              </li>
            ))}
          </ul>
          <button className={`w-full py-3 px-4 rounded-lg mt-8 text-base font-medium transition-colors ${
            plan.isPopular
              ? 'bg-accent-500 hover:bg-accent-600 text-white'
              : 'bg-base-100 dark:bg-base-800 hover:bg-base-200 dark:hover:bg-base-700 text-base-900 dark:text-base-50'
          }`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
}