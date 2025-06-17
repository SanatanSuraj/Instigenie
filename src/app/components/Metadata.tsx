export default function Metadata() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['HealthcareService', 'EducationalOrganization'],
    name: 'School Health+',
    description: 'Premium digital experience for School Routine Health Check-ups combining modern AI intelligence with elite medical care',
    url: 'https://schoolhealth.plus',
    telephone: '+917050140340',
    email: 'info@instigenie.com',
    areaServed: 'India',
    availableService: [
      {
        '@type': 'MedicalService',
        name: 'Physical Examination',
        description: 'Comprehensive physical assessment including vital signs, growth monitoring, and overall wellness evaluation.'
      },
      {
        '@type': 'MedicalService',
        name: 'Vision & Hearing Assessment',
        description: 'Advanced screening using AI-powered technology for early detection of vision and hearing impairments.'
      },
      {
        '@type': 'MedicalService',
        name: 'Dental Evaluation',
        description: 'Comprehensive dental check-ups with state-of-the-art equipment and on-site dental specialists.'
      },
      {
        '@type': 'MedicalService',
        name: 'Mental Health Support',
        description: 'Holistic mental health assessment and support services for student wellbeing.'
      }
    ],
    serviceType: [
      'School Health Services',
      'Preventive Healthcare',
      'Mental Health Services',
      'Dental Services'
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Educational Institutions'
    },
    provider: {
      '@type': 'Organization',
      name: 'School Health+',
      sameAs: 'https://schoolhealth.plus'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}