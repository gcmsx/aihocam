
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
        'Fiziki Coğrafya Temelleri',
        'İklim Bilgisi ve İklim Değişikliği',
        'Ekosistemler ve Biyoçeşitlilik',
        'Yerleşme Coğrafyası',
        'Doğal Kaynaklar ve Sürdürülebilirlik',
        'Afetler ve Yönetimi'
      ],
      10: [
        'Dünya\'nın Tektonik Yapısı',
        'İklim Sistemleri ve Değişim',
        'Nüfus ve Göç Politikaları',
        'Küresel Ekonomi Dinamikleri',
        'Enerji Kaynakları ve Dağılımı',
        'Çevre Sorunları ve Çözümleri'
      ],
      11: [
        'Bölgesel Kalkınma Stratejileri',
        'Ulaşım Sistemleri ve Ağları',
        'Uluslararası Ticaret ve Ekonomi',
        'Doğal Kaynak Yönetim Politikaları',
        'Kent Ekolojisi ve Sürdürülebilir Şehirler',
        'Küresel Çevre Sorunlarının Analizi'
      ],
      12: [
        'Türkiye\'nin Jeomorfolojik Özellikleri',
        'Türkiye\'nin İklim Bölgeleri',
        'Türkiye\'nin Demografik Yapısı',
        'Türkiye Ekonomi Coğrafyası',
        'Türkiye\'nin Turizm Potansiyeli',
        'Türkiye\'nin Çevre Politikaları ve Uygulamaları'
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
      },
      {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Erciyes", "Ağrı Dağı", "Uludağ", "Kaçkar Dağı"],
        answer: "Ağrı Dağı",
        explanation: "Türkiye'nin en yüksek dağı 5137 metre ile Ağrı Dağı'dır. Volkanik bir dağ olan Ağrı Dağı, Doğu Anadolu Bölgesi'nde yer alır."
      },
      {
        question: "Aşağıdakilerden hangisi bir akarsu aşındırma şekli değildir?",
        options: ["Kanyon", "Delta", "Menderes", "Çağlayan"],
        answer: "Delta",
        explanation: "Delta, akarsuların taşıdığı alüvyonları deniz veya göl kıyısında biriktirmesiyle oluşan bir birikim şeklidir. Kanyon, menderes ve çağlayan aşındırma şekilleridir."
      },
      {
        question: "Türkiye'nin en büyük gölü hangisidir?",
        options: ["Beyşehir Gölü", "Tuz Gölü", "İznik Gölü", "Van Gölü"],
        answer: "Van Gölü",
        explanation: "Türkiye'nin en büyük gölü, 3713 km² yüzölçümüyle Van Gölü'dür. Sodalı bir göl olan Van Gölü tektonik kökenlidir ve Doğu Anadolu Bölgesi'nde yer alır."
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
      },
      {
        question: "1 kilowatt-saat kaç joule enerjiye eşittir?",
        options: ["3600 J", "36000 J", "360000 J", "3600000 J"],
        answer: "3600000 J",
        explanation: "1 kWh = 1000 W × 3600 s = 3600000 J"
      },
      {
        question: "Paralel bağlı dirençlerin eşdeğer direnci için aşağıdakilerden hangisi doğrudur?",
        options: ["Her zaman en büyük dirençten küçüktür", "Her zaman en küçük dirençten büyüktür", "Dirençlerin toplamından büyüktür", "Dirençlerin çarpımına eşittir"],
        answer: "Her zaman en küçük dirençten küçüktür",
        explanation: "Paralel bağlı dirençlerde eşdeğer direnç her zaman devredeki en küçük dirençten daha küçüktür. 1/Req = 1/R1 + 1/R2 + ... + 1/Rn formülüne göre hesaplanır."
      },
      {
        question: "Elektromanyetik dalgalar için aşağıdakilerden hangisi doğru değildir?",
        options: ["Boşlukta ışık hızıyla yayılırlar", "Enerjileri frekansları ile doğru orantılıdır", "Yayılmak için maddesel ortama ihtiyaç duyarlar", "Hem elektrik hem manyetik alan içerirler"],
        answer: "Yayılmak için maddesel ortama ihtiyaç duyarlar",
        explanation: "Elektromanyetik dalgalar boşlukta yayılabilirler, maddesel ortama ihtiyaç duymazlar. Bu yüzden güneşten gelen ışık, boşlukta yayılarak dünyaya ulaşabilir."
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
      },
      {
        question: "f(x) = 3x² - 12x + 5 fonksiyonunun türevi nedir?",
        options: ["f'(x) = 6x - 12", "f'(x) = 3x - 12", "f'(x) = 6x² - 12", "f'(x) = 3x² - 12"],
        answer: "f'(x) = 6x - 12",
        explanation: "f(x) = 3x² - 12x + 5 fonksiyonunun türevi f'(x) = 6x - 12 olur. x² teriminin türevi 2x, sabit terimin türevi ise 0'dır."
      },
      {
        question: "∫(2x + 3)dx ifadesinin belirsiz integrali nedir?",
        options: ["x² + 3x + C", "x² + 3x", "2x² + 3x + C", "x² + 3 + C"],
        answer: "x² + 3x + C",
        explanation: "∫(2x + 3)dx = ∫2xdx + ∫3dx = 2∫xdx + 3∫dx = 2(x²/2) + 3x + C = x² + 3x + C"
      },
      {
        question: "Bir ürünün fiyatı %20 zamlandıktan sonra %10 indirim yapılıyor. Bu ürünün fiyatında net değişim yüzdesi nedir?",
        options: ["%10 artış", "%10 azalış", "%8 artış", "%12 azalış"],
        answer: "%8 artış",
        explanation: "Başlangıç fiyatını 100 birim kabul edelim. %20 zam sonrası 120 birim olur. %10 indirim sonrası 120 × 0,9 = 108 birim olur. Net değişim: (108-100)/100 = 0,08 = %8 artış"
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
      },
      {
        question: "Aşağıdaki elementlerden hangisi bir metaldir?",
        options: ["Cl", "S", "P", "Na"],
        answer: "Na",
        explanation: "Na (Sodyum) bir alkali metaldir. Cl (Klor), S (Kükürt) ve P (Fosfor) ametaller grubunda yer alır."
      },
      {
        question: "pH değeri 3 olan bir çözeltinin H⁺ iyon derişimi nedir?",
        options: ["3 M", "0.3 M", "0.001 M", "0.03 M"],
        answer: "0.001 M",
        explanation: "pH = -log[H⁺], pH = 3 ise [H⁺] = 10^(-3) M = 0.001 M olur."
      },
      {
        question: "Aşağıdakilerden hangisi bir izotop örneğidir?",
        options: ["C-O", "H-Cl", "C-12 ve C-14", "O-N"],
        answer: "C-12 ve C-14",
        explanation: "İzotoplar, aynı elementin farklı nötron sayısına sahip atomlarıdır. C-12 ve C-14, karbon elementinin farklı izotoplarıdır."
      }
    ],
    'Biyoloji': [
      {
        question: "Hücre zarının yapısını açıklayan model hangisidir?",
        options: ["Akışkan Mozaik Model", "Elektron Transpor Zinciri", "Endosimbiyont Teori", "Santral Dogma"],
        answer: "Akışkan Mozaik Model",
        explanation: "Akışkan Mozaik Model, Singer ve Nicolson tarafından önerilen ve hücre zarının yapısını açıklayan modeldir. Fosfolipid çift tabaka içerisinde protein moleküllerinin hareket halinde olduğunu belirtir."
      },
      {
        question: "Mitokondri organelinin esas görevi nedir?",
        options: ["Protein sentezi", "Hücre sindirim", "ATP üretimi", "DNA replikasyonu"],
        answer: "ATP üretimi",
        explanation: "Mitokondriler, oksijenli solunum yoluyla hücre için enerji (ATP) üreten organellerdir. Bu nedenle hücrenin enerji santrali olarak bilinirler."
      },
      {
        question: "DNA'nın ana bileşenleri nelerdir?",
        options: ["Amino asitler ve proteinler", "Şeker, fosfat grubu ve bazlar", "Nükleotidler ve yağ asitleri", "RNA ve ribozomlar"],
        answer: "Şeker, fosfat grubu ve bazlar",
        explanation: "DNA molekülü, deoksiriboz şekeri, fosfat grupları ve azotlu organik bazlardan (adenin, guanin, sitozin, timin) oluşur."
      },
      {
        question: "Aşağıdakilerden hangisi bitkilerle hayvanlarda ortak olarak bulunan hücre organeli değildir?",
        options: ["Mitokondri", "Ribozom", "Kloroplast", "Endoplazmik retikulum"],
        answer: "Kloroplast",
        explanation: "Kloroplast sadece bitki ve bazı alg hücrelerinde bulunan, fotosentez yapan organelidir. Hayvan hücrelerinde kloroplast bulunmaz."
      },
      {
        question: "Mendel'in kalıtım kanunlarından biri olan 'Ayrılma Kanunu' neyi ifade eder?",
        options: ["Genlerin protein sentezi", "Homolog kromozomların ayrılması", "DNA'nın replikasyonu", "RNA'nın transkripsiyonu"],
        answer: "Homolog kromozomların ayrılması",
        explanation: "Ayrılma Kanunu, homolog kromozomlarda bulunan alel genlerin gamet oluşumu sırasında birbirinden ayrılarak farklı gametlere geçtiğini ifade eder."
      },
      {
        question: "İnsanda hangi kromozomlar cinsiyeti belirler?",
        options: ["X ve Y kromozomları", "1. kromozom çifti", "21. kromozom çifti", "X ve Z kromozomları"],
        answer: "X ve Y kromozomları",
        explanation: "İnsanda cinsiyet kromozomları X ve Y'dir. XX dişi, XY erkek bireyler oluşturur. Cinsiyeti babadan gelen kromozom belirler."
      }
    ],
    'Tarih': [
      {
        question: "Aşağıdakilerden hangisi Türk tarihinde kurulan ilk Müslüman Türk devletidir?",
        options: ["Karahanlılar", "Gazneliler", "Selçuklular", "Osmanlılar"],
        answer: "Karahanlılar",
        explanation: "Karahanlılar (840-1212), tarihte kurulan ilk Müslüman Türk devletidir. 10. yüzyılda Satuk Buğra Han döneminde İslamiyet'i kabul etmişlerdir."
      },
      {
        question: "Osmanlı Devleti'nin kuruluş tarihi aşağıdakilerden hangisidir?",
        options: ["1071", "1299", "1453", "1517"],
        answer: "1299",
        explanation: "Osmanlı Devleti'nin kuruluş tarihi olarak Osman Bey'in Söğüt'te bağımsızlığını ilan ettiği 1299 yılı kabul edilir."
      },
      {
        question: "İstanbul'un fethi hangi padişah döneminde gerçekleşmiştir?",
        options: ["Yıldırım Bayezid", "Fatih Sultan Mehmet", "Kanuni Sultan Süleyman", "Yavuz Sultan Selim"],
        answer: "Fatih Sultan Mehmet",
        explanation: "İstanbul 29 Mayıs 1453'te Fatih Sultan Mehmet tarafından fethedilmiştir. Bu fetihle Orta Çağ kapanıp Yeni Çağ başlamıştır."
      },
      {
        question: "Aşağıdakilerden hangisi Kurtuluş Savaşı'nda yapılan ilk anlaşmadır?",
        options: ["Sevr", "Lozan", "Ankara", "Mudanya"],
        answer: "Ankara",
        explanation: "Kurtuluş Savaşı'nda yapılan ilk anlaşma, 20 Ekim 1921'de Fransa ile imzalanan Ankara Antlaşması'dır. Bu anlaşmayla Fransa, Misakı Millî'yi tanıyan ilk İtilaf Devleti olmuştur."
      },
      {
        question: "Türkiye Cumhuriyeti'nin ilânı hangi tarihte gerçekleşmiştir?",
        options: ["23 Nisan 1920", "30 Ağustos 1922", "29 Ekim 1923", "5 Aralık 1934"],
        answer: "29 Ekim 1923",
        explanation: "Türkiye Cumhuriyeti, TBMM'de kabul edilen anayasa değişikliği ile 29 Ekim 1923 tarihinde ilan edilmiştir."
      },
      {
        question: "Aşağıdakilerden hangisi Atatürk döneminde gerçekleştirilen inkılâplardan biri değildir?",
        options: ["Soyadı Kanunu", "Şapka İnkılabı", "Çok Partili Hayata Geçiş", "Harf İnkılabı"],
        answer: "Çok Partili Hayata Geçiş",
        explanation: "Çok partili hayata kalıcı olarak geçiş, Atatürk'ün vefatından sonra 1946'da gerçekleşmiştir. Diğer seçenekler Atatürk döneminde yapılan inkılâplardır."
      }
    ],
    'Felsefe': [
      {
        question: "Aşağıdakilerden hangisi Antik Yunan felsefesinin önemli filozoflarından biridir?",
        options: ["Descartes", "Socrates", "Kant", "Sartre"],
        answer: "Socrates",
        explanation: "Sokrates (Socrates), MÖ 469-399 yılları arasında yaşamış ve Platon ile Aristoteles'i etkilemiş önemli bir Antik Yunan filozofudur."
      },
      {
        question: "'Cogito ergo sum' (Düşünüyorum, öyleyse varım) sözü hangi filozofa aittir?",
        options: ["Aristoteles", "Platon", "Descartes", "Nietzsche"],
        answer: "Descartes",
        explanation: "'Cogito ergo sum', 17. yüzyıl Fransız filozof René Descartes'a ait meşhur bir sözdür ve modern felsefenin başlangıç noktası olarak kabul edilir."
      },
      {
        question: "Aşağıdakilerden hangisi bir ahlak felsefesi görüşü değildir?",
        options: ["Hedonizm", "Faydacılık", "Determinizm", "Deontoloji"],
        answer: "Determinizm",
        explanation: "Determinizm, evrendeki tüm olayların sebep-sonuç ilişkisine bağlı olduğunu savunan metafizik bir görüştür. Diğerleri ahlak felsefesi (etik) görüşleridir."
      },
      {
        question: "'Kategorik İmperatif' kavramı hangi filozofa aittir?",
        options: ["Hegel", "Kant", "Locke", "Hume"],
        answer: "Kant",
        explanation: "Kategorik İmperatif (Kesin Buyruk), Immanuel Kant'ın ahlak felsefesinin temel kavramıdır. Kant'a göre, eylemlerimizin evrensel bir yasa olabilecek şekilde olmalıdır."
      },
      {
        question: "Varoluşçuluk (Egzistansiyalizm) akımının öncülerinden biri aşağıdakilerden hangisidir?",
        options: ["Auguste Comte", "Karl Marx", "Jean-Paul Sartre", "John Locke"],
        answer: "Jean-Paul Sartre",
        explanation: "Jean-Paul Sartre, 20. yüzyılın en önemli varoluşçu filozoflarındandır. 'Varoluş özden önce gelir' sözü ona aittir."
      },
      {
        question: "'İdea'lar teorisi hangi filozofun öğretisinde merkez kavramdır?",
        options: ["Platon", "Aristoteles", "Herakleitos", "Thales"],
        answer: "Platon",
        explanation: "İdealar teorisi, Platon'un felsefesinin merkezidir. Platon'a göre gerçek dünya, duyularla algıladığımız dünya değil, idealar dünyasıdır."
      }
    ],
    'İngilizce': [
      {
        question: "Choose the correct sentence.",
        options: ["She don't like coffee.", "She doesn't likes coffee.", "She doesn't like coffee.", "She not like coffee."],
        answer: "She doesn't like coffee.",
        explanation: "Simple present tense with third person singular subject requires 'doesn't' + base form of the verb."
      },
      {
        question: "If I _____ rich, I would buy a big house.",
        options: ["am", "were", "will be", "would be"],
        answer: "were",
        explanation: "This is a type 2 conditional sentence (unreal present). The correct form in the if-clause is 'were' for all subjects."
      },
      {
        question: "She has been studying English _____ five years.",
        options: ["since", "for", "during", "while"],
        answer: "for",
        explanation: "'For' is used with periods of time (five years), while 'since' is used with specific points in time."
      },
      {
        question: "The passive form of 'They are building a new bridge' is:",
        options: ["A new bridge is being build.", "A new bridge is build.", "A new bridge is being built.", "A new bridge was built."],
        answer: "A new bridge is being built.",
        explanation: "To form the present continuous passive, use 'is/are being + past participle'. The past participle of 'build' is 'built'."
      },
      {
        question: "Which sentence contains a phrasal verb?",
        options: ["I want to speak English fluently.", "She looks beautiful in that dress.", "We need to look after our environment.", "They always arrive on time."],
        answer: "We need to look after our environment.",
        explanation: "'Look after' is a phrasal verb meaning 'to take care of'. Phrasal verbs consist of a verb + adverb/preposition."
      },
      {
        question: "Choose the sentence with correct word order:",
        options: ["Always she goes to bed early.", "She goes always to bed early.", "She always goes to bed early.", "She goes to bed always early."],
        answer: "She always goes to bed early.",
        explanation: "In English, adverbs of frequency (always, never, sometimes, etc.) usually come before the main verb but after auxiliary verbs."
      }
    ],
    'Edebiyat': [
      {
        question: "Aşağıdakilerden hangisi Divan edebiyatının özelliklerinden değildir?",
        options: ["Aruz ölçüsü kullanılır.", "Halk dilinden uzaktır.", "Sade bir dil kullanılır.", "Mazmunlar önemlidir."],
        answer: "Sade bir dil kullanılır.",
        explanation: "Divan edebiyatında Arapça ve Farsça kelimeler çok kullanıldığından dil ağır ve süslüdür. Sade dil, halk edebiyatı ve Tanzimat sonrası edebiyatın özelliğidir."
      },
      {
        question: "Aşağıdaki eserlerden hangisi Tanzimat dönemine aittir?",
        options: ["Çalıkuşu", "İntibah", "Sinekli Bakkal", "Yaban"],
        answer: "İntibah",
        explanation: "İntibah, Namık Kemal'in 1876'da yazdığı, Tanzimat döneminin önemli romanlarından biridir. Batılı anlamda yazılmış ilk edebi Türk romanı olarak kabul edilir."
      },
      {
        question: "Aşağıdakilerden hangisi Servet-i Fünun edebiyatının temsilcilerinden biridir?",
        options: ["Namık Kemal", "Tevfik Fikret", "Mehmet Akif Ersoy", "Ahmet Hamdi Tanpınar"],
        answer: "Tevfik Fikret",
        explanation: "Tevfik Fikret, Servet-i Fünun dergisinin başyazarı ve Servet-i Fünun edebiyatının en önemli temsilcilerindendir. 'Rubab-ı Şikeste' önemli eseridir."
      },
      {
        question: "'Safahat' adlı eser hangi şairimize aittir?",
        options: ["Yahya Kemal Beyatlı", "Mehmet Akif Ersoy", "Tevfik Fikret", "Necip Fazıl Kısakürek"],
        answer: "Mehmet Akif Ersoy",
        explanation: "Safahat, İstiklal Marşı'nın yazarı Mehmet Akif Ersoy'un yedi kitaptan oluşan şiir külliyatıdır."
      },
      {
        question: "Aşağıdakilerden hangisi Ömer Seyfettin'in bir hikayesi değildir?",
        options: ["Yalnız Efe", "Pembe İncili Kaftan", "Çalıkuşu", "Kaşağı"],
        answer: "Çalıkuşu",
        explanation: "Çalıkuşu, Reşat Nuri Güntekin'in romanıdır. Diğerleri Ömer Seyfettin'in hikayeleridir."
      },
      {
        question: "Aşağıdakilerden hangisi edebi bir tür değildir?",
        options: ["Makale", "Roman", "Hikaye", "Gazel"],
        answer: "Makale",
        explanation: "Makale, düşünce yazısı türüdür ve edebi bir tür değildir. Roman, hikaye ve gazel edebi türlerdir."
      }
    ]
  };
  
  return examplesBySubject[subject] || [];
};

// Initialize mock videos on module load
initializeMockVideos();
