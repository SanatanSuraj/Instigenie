import { Card, CardImage, CardBody } from './ui/Card';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  imageUrl?: string;
  href?: string;
}

export default function ServiceCard({ title, description, icon, features, imageUrl, href }: ServiceCardProps) {
  const CardWrapper = href ? Link : 'div';
  
  return (
    <CardWrapper href={href || '#'} className={`block w-full max-w-sm ${href ? 'group' : ''}`}>
      <Card className="h-full min-h-[480px] flex flex-col bg-clinic-white text-soft-charcoal rounded-2xl shadow-card border border-health-gold/10 hover:scale-[1.02] transition-all duration-300">
        {imageUrl && (
          <div className="w-full">
            <CardImage
              src={imageUrl}
              alt={title}
              className="aspect-video rounded-t-xl"
            />
          </div>
        )}
        <CardBody className="flex-grow flex flex-col p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-lg bg-healing-teal/10 flex items-center justify-center shrink-0">
              {icon}
            </div>
            <h3 className="flex-1 text-lg font-semibold text-soft-charcoal">{title}</h3>
          </div>
          
          <p className="text-soft-charcoal/80 text-sm mb-4 line-clamp-3">{description}</p>
          
          {features && (
            <ul className="space-y-2 mb-6 flex-grow">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-soft-charcoal/70">
                  <svg className="w-4 h-4 text-healing-teal shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="line-clamp-2">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          
          {href && (
            <div className="mt-auto pt-4 border-t border-health-gold/10">
              <div className="inline-flex items-center text-sm text-healing-teal group-hover:text-healing-teal-dark transition-colors">
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </CardWrapper>
  );
}