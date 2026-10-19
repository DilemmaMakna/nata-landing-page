import { faqs } from '@/lib/faq';
import { COMPANY, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: COMPANY.brand,
      legalName: COMPANY.name,
      url: COMPANY.url,
      email: COMPANY.email,
      telephone: COMPANY.phone,
      address: { '@type': 'PostalAddress', ...COMPANY.address },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: 'id-ID',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#app`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'Android',
      inLanguage: 'id-ID',
      publisher: { '@id': `${SITE_URL}/#organization` },
      featureList: [
        "Today's Focus: maksimal 3 prioritas setiap hari",
        'Kalender terintegrasi dengan hitung mundur deadline',
        'WhatsApp Daily Digest setiap pagi jam 7',
        'Balas chat WhatsApp untuk coret dan tambah tugas',
        'Skor Produktivitas harian dan mingguan',
      ],
      offers: {
        '@type': 'Offer',
        name: 'Paket Mulai Dulu',
        price: '15000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/PreOrder',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // `<` is escaped so no string in the payload can close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\u003c') }}
    />
  );
}
