export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'Apakah Nataku gratis digunakan?',
    answer:
      "Fitur dasar di aplikasi Android seperti Today's Focus dan hitung mundur tugas bisa kamu pakai secara gratis. Namun, asisten harian WhatsApp dan pencatatan via chat adalah fitur unggulan di tier On Track yang berbayar. Pengguna awal akan mendapatkan kuota uji coba gratis untuk fitur WhatsApp ini.",
  },
  {
    question: 'Apakah WhatsApp aman dan tidak akan spam?',
    answer:
      'Nomor kamu 100% aman. Nataku hanya mengirimkan pesan sesuai jadwal yang kamu tentukan sendiri. Kami tidak pernah membagikan data nomor pribadimu, dan kamu bisa menghentikan pesan kapan saja cukup dengan mengetik kata "stop".',
  },
  {
    question: 'Kapan aplikasinya bisa mulai saya unduh?',
    answer:
      'Pengujian awal untuk pengguna Android dimulai beberapa minggu ke depan. Hubungi kami lewat WhatsApp resmi untuk menerima tautan instalasi privat pertama kali.',
  },
  {
    question: 'Bagaimana kalau saya pengguna iPhone (iOS)?',
    answer:
      'Fokus peluncuran perdana kami adalah pengguna Android. Hubungi kami lewat WhatsApp agar menjadi orang pertama yang kami kabari saat versi iOS siap dirilis.',
  },
];

export const faqsEn: FaqItem[] = [
  {
    question: 'Is Nataku free to use?',
    answer:
      "The basic features in the Android app, such as Today's Focus and task countdowns, are free to use. The WhatsApp daily assistant and chat-based logging are premium features in the paid On Track tier. Early users get a free trial quota for the WhatsApp features.",
  },
  {
    question: 'Is WhatsApp safe, and will it spam me?',
    answer:
      'Your number is 100% safe. Nataku only sends messages on the schedule you set yourself. We never share your personal number, and you can stop the messages at any time by simply typing "stop".',
  },
  {
    question: 'When can I download the app?',
    answer:
      'Early testing for Android users starts in a few weeks. Contact us through our official WhatsApp to receive the private install link first.',
  },
  {
    question: 'What if I use an iPhone (iOS)?',
    answer:
      'Our initial launch focuses on Android users. Contact us on WhatsApp to be the first to hear when the iOS version is ready.',
  },
];

export const faqsFor = (locale: 'id' | 'en') => (locale === 'en' ? faqsEn : faqs);
