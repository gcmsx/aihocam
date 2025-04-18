// Get subject-specific video description
export const getSubjectDescription = (subject: string) => {
  const descriptions = {
    'Fizik': "Bu videoda, fiziğin temel prensiplerini ve günlük hayatta nasıl uygulandığını detaylı olarak inceleyeceğiz. Newton'un hareket kanunları, enerji korunumu, momentum ve elektromanyetizma gibi temel kavramları örnekler ve deneylerle açıklayacağız. Konunun daha iyi anlaşılması için günlük hayattan örnekler ve problem çözme teknikleri sunulacaktır.",
    'Matematik': "Bu matematik dersinde, konuyu temel kavramlardan başlayarak adım adım ilerleyeceğiz. Teorik bilgilerin yanı sıra, pratik uygulamalar ve soru çözüm teknikleri üzerinde duracağız. Konu ile ilgili özel formüller ve çözüm stratejileri detaylı olarak açıklanacak, sık yapılan hatalar ve bunlardan kaçınma yöntemleri üzerinde durulacaktır.",
    'Kimya': "Bu kimya dersinde, konuyu moleküler düzeyden başlayarak makroskopik ölçeğe kadar inceleyeceğiz. Teorik bilgilerin yanında, laboratuvar uygulamaları ve deneysel süreçler hakkında bilgi verilecek. Günlük hayatta karşılaştığımız kimyasal olaylar üzerinden örneklerle konu pekiştirilecektir.",
    'Biyoloji': "Bu biyoloji dersinde, canlı sistemleri moleküler, hücresel ve organizma düzeyinde inceleyeceğiz. Görsel materyaller ve animasyonlarla desteklenen derste, teorik bilgilerin yanı sıra pratik uygulamalar ve güncel biyolojik araştırmalardan örnekler paylaşılacaktır.",
    'Tarih': "Bu tarih dersinde, olayları kronolojik sırayla ve neden-sonuç ilişkileri içinde ele alacağız. Dönemin sosyal, ekonomik ve kültürel yapısını analiz ederek, tarihsel olayların günümüze olan etkilerini inceleyeceğiz. Önemli tarihsel belgeler ve kaynaklar üzerinden konu detaylandırılacaktır.",
    'Coğrafya': "Bu coğrafya dersinde, fiziki ve beşeri coğrafya konularını güncel veriler ve haritalar eşliğinde inceleyeceğiz. Küresel ve yerel ölçekte coğrafi olayları analiz ederek, insan-çevre etkileşimini ve güncel çevre sorunlarını ele alacağız.",
    'Felsefe': "Bu felsefe dersinde, düşünce tarihinin önemli akımlarını ve filozofların görüşlerini karşılaştırmalı olarak inceleyeceğiz. Felsefi problemlere yaklaşım yöntemlerini tartışarak, eleştirel düşünme becerilerini geliştirmeye odaklanacağız.",
    'İngilizce': "Bu İngilizce dersinde, dil becerilerini geliştirmeye yönelik pratik uygulamalar yapacağız. Günlük konuşma kalıpları, akademik dil kullanımı ve iş İngilizcesi örnekleriyle desteklenen derste, telaffuz ve dilbilgisi konularına da değineceğiz.",
    'Edebiyat': "Bu edebiyat dersinde, edebi metinleri dönemin sosyal ve kültürel bağlamı içinde inceleyeceğiz. Metin analizi teknikleri, edebi sanatlar ve yazım teknikleri üzerinde durarak, öğrencilerin eleştirel okuma ve yazma becerilerini geliştirmeye odaklanacağız."
  };
  
  return descriptions[subject] || "Bu derste konu anlatımı ve örnekler bulacaksınız.";
};

import { mockVideos } from '@/services/video/mockData';
import { Video } from '@/types/video';
import { GradeLevel } from '@/data/gradeData';
import { gradeTopics } from '@/data/gradeData';

// Initialize mock videos with course data
const initializeMockVideos = () => {
  // Clear any existing videos
  mockVideos.length = 0;
  
  // Define subjects
  const subjects = [
    'Tarih', 'Coğrafya', 'Felsefe', 'Matematik', 
    'Fizik', 'Kimya', 'Biyoloji', 'İngilizce', 'Edebiyat'
  ];
  
  // Available grade levels
  const grades: GradeLevel[] = [9, 10, 11, 12];
  
  // Create videos for each subject and grade
  let videoId = 1;
  subjects.forEach(subject => {
    grades.forEach(grade => {
      // Get topics for this subject and grade
      const topics = gradeTopics[subject][grade] || [];
      
      // Create videos for each topic
      topics.forEach((topic, index) => {
        const video: Video = {
          id: videoId++,
          title: `${subject} ${grade}. Sınıf: ${topic}`,
          thumbnailUrl: `/placeholder.svg`,
          duration: `${Math.floor(Math.random() * 10) + 10}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
          saved: false,
          subject: subject,
          grade: grade,
          description: getSubjectDescription(subject),
        };
        
        mockVideos.push(video);
      });
    });
  });
};

// Generate video titles based on subject
const getVideoTitle = (subject: string, index: number) => {
  const titlesBySubject = {
    'Tarih': [
      'Osmanlı İmparatorluğu\'nun Kuruluşu',
      'Kurtuluş Savaşı ve Cumhuriyet',
      'İlk Uygarlıklar',
      'Orta Çağ Tarihi',
      'Fransız Devrimi',
      'Sanayi Devrimi'
    ],
    'Coğrafya': [
      'Türkiye\'nin İklimi',
      'Dünya\'nın Yapısı',
      'Nüfus ve Yerleşme',
      'Ekonomik Coğrafya',
      'Doğal Afetler',
      'Enerji Kaynakları'
    ],
    'Felsefe': [
      'Felsefeye Giriş',
      'Bilgi Felsefesi',
      'Ahlak Felsefesi',
      'Varlık Felsefesi',
      'Siyaset Felsefesi',
      'Din Felsefesi'
    ],
    'Matematik': [
      'Sayılar ve Cebir',
      'Fonksiyonlar',
      'Türev Uygulamaları',
      'İntegral',
      'Olasılık',
      'Geometri'
    ],
    'Fizik': [
      'Mekanik',
      'Elektrik ve Manyetizma',
      'Termodinamik',
      'Optik',
      'Modern Fizik',
      'Dalgalar'
    ],
    'Kimya': [
      'Maddenin Yapısı',
      'Periyodik Tablo',
      'Kimyasal Tepkimeler',
      'Asitler ve Bazlar',
      'Organik Kimya',
      'Kimya ve Enerji'
    ],
    'Biyoloji': [
      'Hücre Yapısı',
      'Genetik',
      'Evrim',
      'Ekosistemler',
      'İnsan Anatomisi',
      'Bitki Biyolojisi'
    ],
    'İngilizce': [
      'Temel Gramer',
      'Zamanlar ve Kullanımları',
      'Speaking Practice',
      'Günlük Konuşmalar',
      'Akademik Yazma',
      'İş İngilizcesi'
    ],
    'Edebiyat': [
      'Divan Edebiyatı',
      'Tanzimat Edebiyatı',
      'Cumhuriyet Dönemi',
      'Şiir Analizi',
      'Roman İncelemesi',
      'Modern Türk Edebiyatı'
    ]
  };
  
  return titlesBySubject[subject][index - 1] || `${subject} Konusu ${index}`;
};

// Initialize mock videos on module load
initializeMockVideos();

// Get all videos for a specific subject
export const getSubjectVideos = (subject: string): Video[] => {
  return mockVideos.filter(video => video.subject === subject);
};

// Get subject videos for a specific grade
export const getSubjectGradeVideos = (subject: string, grade: GradeLevel): Video[] => {
  return mockVideos.filter(
    video => video.subject === subject && video.grade === grade
  );
};

// Update mockVideos array and grade topic data
export const getGradeTopics = (subject: string, grade: number) => {
  const topicsByGrade = {
    'Coğrafya': {
      9: [
        'Doğal Sistemler ve Oluşum Süreçleri',
        'İklim Sistemleri ve İklim Değişikliği',
        'Ekosistemler ve Biyoçeşitlilik',
        'Yerleşim Sistemleri ve Şehirleşme',
        'Doğal Kaynaklar ve Sürdürülebilirlik',
        'Afetler ve Risk Yönetimi'
      ],
      10: [
        'Dünya\'nın Tektonik Yapısı',
        'Küresel İklim Sistemleri',
        'Nüfus Politikaları ve Göç',
        'Ekonomik Faaliyetler ve Küreselleşme',
        'Enerji Kaynakları ve Politikalar',
        'Çevre Sorunları ve Çözümleri'
      ],
      11: [
        'Bölgesel Kalkınma ve Planlama',
        'Uluslararası Ulaşım Sistemleri',
        'Küresel Ticaret ve Ekonomi',
        'Doğal Kaynak Yönetimi',
        'Sürdürülebilir Şehirler',
        'Küresel Çevre Sorunları'
      ],
      12: [
        'Türkiye\'nin Fiziki Coğrafyası',
        'Türkiye\'nin İklim Özellikleri',
        'Türkiye\'nin Nüfus Yapısı',
        'Türkiye\'nin Ekonomik Coğrafyası',
        'Türkiye\'de Turizm',
        'Türkiye\'nin Çevre Politikaları'
      ]
    },
    'Tarih': {
      9: [
        'İlk Çağ Medeniyetleri',
        'Orta Çağ Avrupa Tarihi',
        'Türklerin İslamiyet\'i Kabulü',
        'Osmanlı Devleti Kuruluş Dönemi',
        'Coğrafi Keşifler ve Rönesans',
        'Reform ve Aydınlanma Çağı'
      ],
      10: [
        'Osmanlı Devleti Yükselme Dönemi',
        'Avrupa\'da Devletlerarası İlişkiler',
        'Osmanlı Devleti Duraklama Dönemi',
        'Yeni Çağ Avrupa Tarihi',
        'Osmanlı Devleti Gerileme Dönemi',
        'Yakın Çağ Avrupa Tarihi'
      ],
      11: [
        'Osmanlı Devleti Dağılma Dönemi',
        'XX. Yüzyıl Başlarında Dünya',
        'I. Dünya Savaşı',
        'Kurtuluş Savaşı Hazırlık Dönemi',
        'Kurtuluş Savaşı Muharebeler Dönemi',
        'Türkiye Cumhuriyeti Kuruluş Dönemi'
      ],
      12: [
        'Atatürk İlke ve İnkılapları',
        'II. Dünya Savaşı',
        'Soğuk Savaş Dönemi',
        'Küreselleşme ve Türkiye',
        'Uluslararası Kuruluşlar',
        'XXI. Yüzyılda Türkiye ve Dünya'
      ]
    },
    'Felsefe': {
      9: [
        'Felsefenin Anlamı ve Kapsamı',
        'Bilgi Felsefesi (Epistemoloji)',
        'Varlık Felsefesi (Ontoloji)',
        'Ahlak Felsefesi (Etik)',
        'Siyaset Felsefesi',
        'Sanat Felsefesi (Estetik)'
      ],
      10: [
        'İlk Çağ Felsefesi',
        'Orta Çağ Felsefesi',
        'Rönesans Felsefesi',
        'Aydınlanma Felsefesi',
        '18.-19. Yüzyıl Felsefesi',
        '20. Yüzyıl Felsefesi'
      ],
      11: [
        'Bilim Felsefesi',
        'Din Felsefesi',
        'Hukuk Felsefesi',
        'Eğitim Felsefesi',
        'Teknoloji Felsefesi',
        'Çevre Felsefesi'
      ],
      12: [
        'Varoluşçuluk',
        'Pozitivizm',
        'Marksizm',
        'Pragmatizm',
        'Feminist Felsefe',
        'Postmodernizm'
      ]
    },
    'Matematik': {
      9: [
        'Sayılar ve Cebir',
        'Kümeler',
        'Denklemler ve Eşitsizlikler',
        'Oran ve Orantı',
        'Yüzdeler',
        'Geometriye Giriş'
      ],
      10: [
        'Fonksiyonlar',
        'Polinomlar',
        'Çarpanlara Ayırma',
        'Rasyonel İfadeler',
        'Köklü İfadeler',
        'Trigonometriye Giriş'
      ],
      11: [
        'Trigonometri',
        'Logaritma',
        'Diziler',
        'Seriler',
        'Limit ve Süreklilik',
        'Türevin Temel Kavramları'
      ],
      12: [
        'Türev Uygulamaları',
        'İntegral',
        'Olasılık',
        'İstatistik',
        'Analitik Geometri',
        'Karmaşık Sayılar'
      ]
    },
    'Fizik': {
      9: [
        'Fizik Bilimine Giriş',
        'Madde ve Özellikleri',
        'Kuvvet ve Hareket',
        'Enerji',
        'Isı ve Sıcaklık',
        'Optik'
      ],
      10: [
        'Elektrik',
        'Manyetizma',
        'Dalgalar',
        'Ses',
        'Basınç',
        'Kaldırma Kuvveti'
      ],
      11: [
        'Dinamik',
        'İş, Güç ve Enerji',
        'Momentum',
        'Tork',
        'Denge',
        'Basit Makineler'
      ],
      12: [
        'Atom Fiziği',
        'Nükleer Fizik',
        'Modern Fizik',
        'Görecelilik',
        'Kuantum Fiziği',
        'Astrofizik'
      ]
    },
    'Kimya': {
      9: [
        'Kimya Bilimine Giriş',
        'Maddenin Halleri',
        'Atom ve Periyodik Sistem',
        'Kimyasal Türler Arası Etkileşimler',
        'Kimyasal Hesaplamalar',
        'Asitler ve Bazlar'
      ],
      10: [
        'Kimyasal Tepkimeler',
        'Çözeltiler',
        'Kimyasal Kinetik',
        'Kimyasal Denge',
        'Termokimya',
        'Elektrokimya'
      ],
      11: [
        'Organik Kimyaya Giriş',
        'Alkanlar',
        'Alkenler',
        'Alkinler',
        'Alkoller',
        'Eterler'
      ],
      12: [
        'Aldehitler ve Ketonlar',
        'Karboksilik Asitler',
        'Esterler',
        'Aminler',
        'Amidler',
        'Polimerler'
      ]
    },
    'Biyoloji': {
      9: [
        'Biyoloji Bilimine Giriş',
        'Hücre',
        'Canlıların Sınıflandırılması',
        'Ekoloji',
        'Genetik',
        'Evrim'
      ],
      10: [
        'Canlıların Yapısı',
        'Enzimler',
        'Fotosentez',
        'Solunum',
        'Boşaltım',
        'Sinir Sistemi'
      ],
      11: [
        'Endokrin Sistem',
        'Duyu Organları',
        'Destek ve Hareket Sistemi',
        'Sindirim Sistemi',
        'Dolaşım Sistemi',
        'Bağışıklık Sistemi'
      ],
      12: [
        'Üreme Sistemi',
        'Embriyonik Gelişim',
        'Genetik Mühendisliği',
        'Biyoteknoloji',
        'Nörobiyoloji',
        'Davranış Biyolojisi'
      ]
    },
    'İngilizce': {
      9: [
        'Greetings and Introductions',
        'Daily Routines',
        'Family and Friends',
        'Describing People',
        'Likes and Dislikes',
        'Hobbies and Interests'
      ],
      10: [
        'Past Simple Tense',
        'Past Continuous Tense',
        'Used To',
        'Present Perfect Tense',
        'Present Perfect Continuous Tense',
        'Future Tenses'
      ],
      11: [
        'Conditional Sentences',
        'Relative Clauses',
        'Passive Voice',
        'Reported Speech',
        'Modal Verbs',
        'Phrasal Verbs'
      ],
      12: [
        'Advanced Grammar Structures',
        'Essay Writing',
        'Reading Comprehension',
        'Listening Comprehension',
        'Speaking Practice',
        'Vocabulary Building'
      ]
    },
    'Edebiyat': {
      9: [
        'Edebiyatın Tanımı ve Kapsamı',
        'Söz Sanatları',
        'Şiir Bilgisi',
        'Düz Yazı Türleri',
        'Tiyatro',
        'Halk Edebiyatı'
      ],
      10: [
        'Divan Edebiyatı',
        'Tanzimat Edebiyatı',
        'Servet-i Fünun Edebiyatı',
        'Milli Edebiyat',
        'Cumhuriyet Dönemi Edebiyatı',
        'Dünya Edebiyatı'
      ],
      11: [
        'Şiir İncelemesi',
        'Roman İncelemesi',
        'Hikaye İncelemesi',
        'Tiyatro İncelemesi',
        'Deneme İncelemesi',
        'Makale İncelemesi'
      ],
      12: [
        'Edebi Akımlar',
        'Postmodern Edebiyat',
        'Çağdaş Türk Edebiyatı',
        'Edebiyat ve Toplum',
        'Edebiyat ve Psikoloji',
        'Edebiyat ve Felsefe'
      ]
    }
  };
  
  return topicsByGrade[subject]?.[grade] || [];
};

// Generate examples for each subject and topic
export const getSubjectExamples = (subject: string) => {
  const examplesBySubject = {
    'Coğrafya': [
      {
        question: "Türkiye'nin iklim özelliklerini etkileyen faktörlerden hangisi en belirleyicidir?",
        options: ["Yükselti", "Denizlere göre konum", "Enlem", "Bitki örtüsü"],
        answer: "Denizlere göre konum",
        explanation: "Türkiye'nin üç tarafının denizlerle çevrili olması, kıyı kesimlerde ılıman iklim özelliklerinin görülmesine neden olur. Bu durum özellikle sıcaklık ve yağış rejimini etkiler."
      },
      {
        question: "Aşağıdakilerden hangisi Akdeniz ikliminin özelliklerinden değildir?",
        options: ["Yazları sıcak ve kurak", "Kışları ılık ve yağışlı", "Her mevsim yağışlı", "Maki bitki örtüsü"],
        answer: "Her mevsim yağışlı",
        explanation: "Akdeniz ikliminde yazlar sıcak ve kurak, kışlar ılık ve yağışlı geçer. Her mevsim yağışlı olma özelliği Karadeniz iklimine aittir."
      },
      {
        question: "İç Anadolu Bölgesi'nde step (bozkır) bitki örtüsünün yaygın olmasının temel nedeni nedir?",
        options: ["Yükselti", "Yağış azlığı", "Toprak yapısı", "Rüzgar"],
        answer: "Yağış azlığı",
        explanation: "İç Anadolu'da yıllık yağış miktarının az olması (300-400 mm) ve yağışın mevsimlere dağılışındaki düzensizlik, step bitki örtüsünün oluşmasına neden olur."
      }
    ],
    'Fizik': [
      {
        question: "Bir cisim 10 m/s hızla hareket ederken, 5 saniye boyunca 2 m/s² sabit ivme ile hızlanıyor. Son hızı nedir?",
        options: ["20 m/s", "15 m/s", "18 m/s", "22 m/s"],
        answer: "20 m/s",
        explanation: "v = v₀ + at formülünü kullanarak: v = 10 m/s + (2 m/s² × 5 s) = 10 m/s + 10 m/s = 20 m/s"
      },
      {
        question: "Bir cismin kütlesi 5 kg ve üzerine 10 N kuvvet uygulanıyor. Cismin ivmesi nedir?",
        options: ["1 m/s²", "2 m/s²", "5 m/s²", "10 m/s²"],
        answer: "2 m/s²",
        explanation: "F = ma formülünü kullanarak: a = F/m = 10 N / 5 kg = 2 m/s²"
      },
      {
        question: "Yerden 20 metre yükseklikten serbest bırakılan bir cisim yere kaç saniyede ulaşır? (g = 10 m/s²)",
        options: ["1 s", "2 s", "3 s", "4 s"],
        answer: "2 s",
        explanation: "h = (1/2)gt² formülünü kullanarak: 20 m = (1/2) × 10 m/s² × t², t² = 4, t = 2 s"
      }
    ],
    'Matematik': [
      {
        question: "5x + 3 = 18 denklemindeki x değeri nedir?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "5x + 3 = 18, 5x = 15, x = 3"
      },
      {
        question: "Bir dairenin alanı 36π cm² ise, yarıçapı kaç cm'dir?",
        options: ["3", "6", "9", "12"],
        answer: "6",
        explanation: "A = πr², 36π = πr², r² = 36, r = 6 cm"
      },
      {
        question: "log₂(8) değeri nedir?",
        options: ["2", "3", "4", "8"],
        answer: "3",
        explanation: "log₂(8) = log₂(2³) = 3"
      }
    ],
    'Kimya': [
      {
        question: "Periyodik tabloda asal gazlar hangi gruptadır?",
        options: ["1A", "7A", "8A", "3B"],
        answer: "8A",
        explanation: "Asal gazlar periyodik tablonun en sağında 8A (veya 18. grup) olarak bulunur."
      },
      {
        question: "H₂O molekülünde bulunan toplam elektron sayısı kaçtır?",
        options: ["8", "10", "18", "20"],
        answer: "10",
        explanation: "H atomu 1, O atomu 8 elektron içerir. H₂O'da toplam: 2×1 + 8 = 10 elektron bulunur."
      },
      {
        question: "Aşağıdakilerden hangisi bir redoks tepkimesidir?",
        options: ["NaCl + AgNO₃ → AgCl + NaNO₃", "HCl + NaOH → NaCl + H₂O", "Zn + CuSO₄ → ZnSO₄ + Cu", "CaCO₃ → CaO + CO₂"],
        answer: "Zn + CuSO₄ → ZnSO₄ + Cu",
        explanation: "Bu tepkimede Zn elektronu Cu'ya vererek yükseltgeniyor (Zn⁰ → Zn²⁺ + 2e⁻), Cu ise elektron alarak indirgeniyor (Cu²⁺ + 2e⁻ → Cu⁰)."
      }
    ],
    'Biyoloji': [],
    'Tarih': [],
    'Coğrafya': [],
    'Felsefe': [],
    'İngilizce': [],
    'Edebiyat': []
  };
  
  return examplesBySubject[subject] || [];
};

// Initialize mock videos on module load
initializeMockVideos();

// Get all videos for a specific subject
export const getSubjectVideos = (subject: string): Video[] => {
  return mockVideos.filter(video => video.subject === subject);
};

// Get subject videos for a specific grade
export const getSubjectGradeVideos = (subject: string, grade: GradeLevel): Video[] => {
  return mockVideos.filter(
    video => video.subject === subject && video.grade === grade
  );
};
