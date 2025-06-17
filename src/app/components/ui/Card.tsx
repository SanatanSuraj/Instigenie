import { ReactNode } from 'react';
import Image from 'next/image';

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`relative flex flex-col w-full sm:w-[312px] md:w-[288px] lg:w-[312px] h-[480px] rounded-2xl shadow-card border border-health-gold/10 overflow-hidden bg-clinic-white dark:bg-soft-charcoal ${className}`}>
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className = '' }: CardImageProps) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden ${className}`}>
      <Image 
        src={src} 
        alt={alt} 
        fill
        className="object-cover rounded-xl" 
      />
    </div>
  );
}

export function CardBody({ children, className = '' }: CardProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}