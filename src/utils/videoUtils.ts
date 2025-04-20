import { Video } from "@/types/video";
import { GradeLevel } from "@/data/gradeData";
import { mockVideos } from "@/services/video/mockData";

// Belirli bir subject ve topic için videoları filtrele
export function getVideosBySubjectAndTopic(
  subject: string,
  topic: string,
  allVideos: Video[]
): Video[] {
  return allVideos.filter(
    (video) =>
      video.subject === subject &&
      video.topic === topic
  );
}

/**
 * Belirli bir ders için tüm videoları getir
 */
export function getSubjectVideos(subject: string, allVideos: Video[] = mockVideos): Video[] {
  return allVideos.filter(video => video.subject === subject);
}

/**
 * Belirli bir ders ve sınıf seviyesine göre videoları getir
 */
export function getSubjectGradeVideos(
  subject: string, 
  grade: GradeLevel, 
  allVideos: Video[] = mockVideos
): Video[] {
  return allVideos.filter(video => 
    video.subject === subject && 
    video.grade === grade
  );
}

/**
 * Search videos based on query string
 */
export const searchVideos = (query: string, videos: Video[]): Video[] => {
  if (!query) return [];
  
  return videos.filter(video => 
    video.title.toLowerCase().includes(query.toLowerCase())
  );
};

/**
 * Get videos by their IDs
 */
export const getVideosByIds = (ids: number[], allVideos: Video[]): Video[] => {
  if (!ids || !Array.isArray(ids) || ids.length === 0) return [];
  
  return allVideos.filter(video => ids.includes(video.id));
};

/**
 * Update video saved status based on saved IDs
 */
export const updateVideoSavedStatus = (
  videos: Video[], 
  savedIds: number[]
): Video[] => {
  if (!videos || !Array.isArray(videos)) return [];
  if (!savedIds || !Array.isArray(savedIds)) return videos;
  
  return videos.map(video => ({
    ...video,
    saved: savedIds.includes(video.id)
  }));
};

/**
 * Get subject-specific video description
 */
export const getSubjectDescription = (subject: string): string => {
  const descriptions = {
    'Fizik': "Bu videoda, fiziğin temel prensiplerini ve günlük hayatta nasıl uygulandığını öğreneceksiniz. Newton'un hareket kanunları, enerji korunumu ve momentum gibi temel kavramlar ele alınacaktır. Ayrıca, pratik örneklerle teorik bilgilerin nasıl uygulanacağı gösterilecektir.",
    'Matematik': "Bu matematik dersinde, türev kavramı, türev alma kuralları ve türevin günlük hayattaki uygulamalarını öğreneceksiniz. Anlık değişim hızı, maksimum-minimum problemleri ve optimizasyon örnekleri üzerinde durulacaktır.",
    'Kimya': "Bu kimya dersinde, periyodik tablo ve elementlerin özellikleri detaylı olarak incelenecektir. Elementlerin periyodik tablodaki yerleşimi, elektron dizilimleri ve kimyasal bağ oluşumları ele alınacaktır.",
    'Biyoloji': "Bu biyoloji dersinde, hücre yapısı, organeller ve hücresel fonksiyonlar hakkında kapsamlı bilgi edineceksiniz. Hücre zarı, çekirdek, mitokondri gibi yapıların görevleri ve hücre bölünmesi süreçleri anlatılacaktır.",
    'Tarih': "Bu tarih dersinde, modern Türkiye'nin kuruluş süreci ve Cumhuriyet'in ilanına giden olaylar zincirini öğreneceksiniz. Kurtuluş Savaşı'nın aşamaları, Lozan Antlaşması ve Cumhuriyet'in ilanının önemi detaylı olarak incelenecektir.",
    'Coğrafya': "Bu coğrafya dersinde, Türkiye'nin fiziki özellikleri, iklimi, bitki örtüsü ve su kaynakları hakkında detaylı bilgi edineceksiniz. Türkiye'nin jeopolitik önemi ve bölgesel farklılıklar üzerinde durulacaktır.",
    'Felsefe': "Bu felsefe dersinde, varoluşçuluk akımının tarihsel gelişimi, temel kavramları ve önemli temsilcileri incelenecektir. Sartre, Camus ve Kierkegaard gibi filozofların görüşleri ve eserleri ele alınacaktır.",
    'İngilizce': "Bu İngilizce dersinde, günlük konuşma kalıpları, sık kullanılan ifadeler ve pratik yapma teknikleri öğreneceksiniz. Gerçek yaşam durumlarında kullanabileceğiniz diyalog örnekleri ve telaffuz çalışmaları yapılacaktır.",
    'Edebiyat': "Bu edebiyat dersinde, şiir analizi teknikleri ve Türk edebiyatındaki önemli şiir akımları incelenecektir. Vezin, kafiye, edebi sanatlar gibi teknik konuların yanı sıra şiirlerin tarihsel ve toplumsal bağlamda yorumlanması ele alınacaktır."
  };
  
  return descriptions[subject as keyof typeof descriptions] || "Bu derste konu anlatımı ve örnekler bulacaksınız.";
};

/**
 * Get topic-specific descriptions based on subject and topic
 */
export const getTopicDescription = (subject: string, topic: string): string => {
  const topicDescriptions: {[key: string]: {[key: string]: string}} = {
    'Matematik': {
      'Fonksiyonlar': "Bu videoda fonksiyonlar konusunu ele alıyoruz. Fonksiyonların tanımı, çeşitleri, grafikleri ve özellikleri detaylı olarak anlatılmaktadır. Bire bir, örten, içine fonksiyonlar ve bunların uygulamaları örneklerle açıklanmaktadır.",
      'Trigonometri': "Bu videoda trigonometri konusunu ele alıyoruz. Açı ölçüleri, trigonometrik oranlar, sinüs, kosinüs ve tanjant fonksiyonları ve trigonometrik denklemler detaylı olarak incelenmektedir.",
      'Logaritma': "Bu videoda logaritma konusunu ele alıyoruz. Logaritma tanımı, özellikleri, logaritmik denklemler ve gerçek hayat uygulamaları örneklerle açıklanmaktadır.",
      'Limit': "Bu videoda limit konusunu ele alıyoruz. Limit kavramı, limit hesaplama yöntemleri, süreklilik ve türev ile bağlantısı detaylı olarak anlatılmaktadır.",
      'Türev': "Bu videoda türev konusunu ele alıyoruz. Türevin tanımı, geometrik yorumu, türev alma kuralları ve uygulamaları örneklerle açıklanmaktadır.",
      'İntegral': "Bu videoda integral konusunu ele alıyoruz. Belirsiz ve belirli integraller, integral alma teknikleri ve alan hesaplama uygulamaları detaylı olarak incelenmektedir.",
      'Olasılık': "Bu videoda olasılık konusunu ele alıyoruz. Olasılık kavramı, bağımlı ve bağımsız olaylar, permütasyon ve kombinasyon uygulamaları örneklerle açıklanmaktadır."
    },
    'Fizik': {
      'Mekanik': "Bu videoda mekanik konusunu ele alıyoruz. Newton'un hareket kanunları, momentum, enerji korunumu ve çarpışmalar detaylı olarak anlatılmaktadır.",
      'Elektrik': "Bu videoda elektrik konusunu ele alıyoruz. Elektrik yükü, elektrik alan, potansiyel, akım ve direnç kavramları ve devrelerin çalışması detaylı olarak incelenmektedir.",
      'Manyetizma': "Bu videoda manyetizma konusunu ele alıyoruz. Manyetik alan, manyetik kuvvet ve elektromanyetik indüksiyon olayları örneklerle açıklanmaktadır.",
      'Optik': "Bu videoda optik konusunu ele alıyoruz. Işığın doğası, yansıma, kırılma, mercekler ve optik araçların çalışma prensipleri detaylı olarak anlatılmaktadır.",
      'Modern Fizik': "Bu videoda modern fizik konusunu ele alıyoruz. Kuantum mekaniği, görelilik teorisi ve atom fiziğinin temel prensipleri örneklerle açıklanmaktadır."
    },
    'Kimya': {
      'Atom Yapısı': "Bu videoda atom yapısı konusunu ele alıyoruz. Atomun parçacıkları, elektron dizilimi ve periyodik tablodaki yerleşim düzeni detaylı olarak anlatılmaktadır.",
      'Kimyasal Bağlar': "Bu videoda kimyasal bağlar konusunu ele alıyoruz. İyonik, kovalent ve metalik bağların oluşumu ve özellikleri örneklerle açıklanmaktadır.",
      'Asitler ve Bazlar': "Bu videoda asitler ve bazlar konusunu ele alıyoruz. Asit-baz tanımları, pH kavramı, nötrleşme tepkimeleri detaylı olarak incelenmektedir.",
      'Organik Kimya': "Bu videoda organik kimya konusunu ele alıyoruz. Karbon bileşikleri, fonksiyonel gruplar ve organik tepkimeler örneklerle açıklanmaktadır."
    },
    'Biyoloji': {
      'Hücre': "Bu videoda hücre konusunu ele alıyoruz. Hücre yapısı, organellerin görevleri ve hücre bölünmesi süreçleri detaylı olarak anlatılmaktadır.",
      'Kalıtım': "Bu videoda kalıtım konusunu ele alıyoruz. Mendel genetiği, DNA yapısı, gen ifadesi ve genetik hastalıklar örneklerle açıklanmaktadır.",
      'Sinir Sistemi': "Bu videoda sinir sistemi konusunu ele alıyoruz. Sinir hücreleri, impuls iletimi, merkezi ve çevresel sinir sistemi yapıları detaylı olarak incelenmektedir.",
      'Ekosistemler': "Bu videoda ekosistemler konusunu ele alıyoruz. Enerji akışı, madde döngüleri, popülasyon dinamikleri ve ekolojik denge örneklerle açıklanmaktadır."
    },
    'Tarih': {
      'Osmanlı İmparatorluğu': "Bu videoda Osmanlı İmparatorluğu konusunu ele alıyoruz. Kuruluş, yükseliş ve gerileme dönemleri, önemli padişahlar ve siyasi olaylar detaylı olarak anlatılmaktadır.",
      'Türkiye Cumhuriyeti': "Bu videoda Türkiye Cumhuriyeti'nin kuruluş sürecini ele alıyoruz. Kurtuluş Savaşı, Lozan Antlaşması ve Cumhuriyet'in ilanı örneklerle açıklanmaktadır.",
      'İnkılap Tarihi': "Bu videoda İnkılap Tarihi konusunu ele alıyoruz. Türk inkılabının temel ilkeleri, yapılan reformlar ve çağdaşlaşma süreci detaylı olarak incelenmektedir."
    }
  };
  
  if (!topicDescriptions[subject] || !topicDescriptions[subject][topic]) {
    return getSubjectDescription(subject);
  }
  
  return topicDescriptions[subject][topic];
};

/**
 * Get subject-specific examples based on subject name
 */
export const getSubjectExamples = (subject: string) => {
  const examplesBySubject: {[key: string]: any[]} = {
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
    'Biyoloji': [
      {
        question: "Fotosentez hangi hücre organelinde gerçekleşir?",
        options: ["Mitokondri", "Kloroplast", "Ribozom", "Golgi aygıtı"],
        answer: "Kloroplast",
        explanation: "Fotosentez, bitki hücrelerindeki kloroplast organelinde gerçekleşir. Kloroplastlar yeşil pigment olan klorofil içerir."
      },
      {
        question: "İnsanda kromozom sayısı kaçtır?",
        options: ["23", "46", "48", "64"],
        answer: "46",
        explanation: "İnsan vücut hücrelerinde 46 kromozom (23 çift) bulunur. Üreme hücreleri (gamet) ise 23 kromozom içerir."
      },
      {
        question: "DNA'nın yapısında aşağıdaki moleküllerden hangisi bulunmaz?",
        options: ["Deoksiriboz şekeri", "Fosfat", "Adenin", "Ürasil"],
        answer: "Ürasil",
        explanation: "Ürasil RNA'da bulunur, DNA'da ise timin bazı vardır. DNA'nın yapısında adenin, timin, guanin ve sitozin bazları bulunur."
      }
    ],
    'Tarih': [
      {
        question: "Osmanlı İmparatorluğu'nun kurucusu kimdir?",
        options: ["Fatih Sultan Mehmet", "Osman Bey", "Kanuni Sultan Süleyman", "Yavuz Sultan Selim"],
        answer: "Osman Bey",
        explanation: "Osmanlı İmparatorluğu'nun kurucusu Osman Bey'dir (1299)."
      },
      {
        question: "Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
        options: ["23 Nisan 1920", "19 Mayıs 1919", "29 Ekim 1923", "30 Ağustos 1922"],
        answer: "29 Ekim 1923",
        explanation: "Türkiye Cumhuriyeti, 29 Ekim 1923 tarihinde TBMM'de yapılan anayasa değişikliğiyle ilan edilmiştir."
      }
    ],
    'Coğrafya': [
      {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Erciyes", "Ağrı", "Uludağ", "Toroslar"],
        answer: "Ağrı",
        explanation: "Türkiye'nin en yüksek dağı 5137 metre ile Ağrı Dağı'dır."
      },
      {
        question: "Dünya'nın en büyük okyanusu hangisidir?",
        options: ["Atlantik", "Hint", "Pasifik", "Arktik"],
        answer: "Pasifik",
        explanation: "Dünya'nın en büyük ve en derin okyanusu Pasifik Okyanusu'dur."
      }
    ],
    'Felsefe': [],
    'İngilizce': [],
    'Edebiyat': []
  };
  
  return examplesBySubject[subject] || [];
};

/**
 * Get topic-specific examples based on subject and topic
 */
export const getTopicExamples = (subject: string, topic: string) => {
  const topicExamples: {[key: string]: {[key: string]: any[]}} = {
    'Matematik': {
      'Fonksiyonlar': [
        {
          question: "f(x) = 3x + 2 ve g(x) = x² - 1 olduğuna göre f(g(2)) değeri nedir?",
          options: ["11", "14", "17", "23"],
          answer: "11",
          explanation: "g(2) = 2² - 1 = 4 - 1 = 3, f(g(2)) = f(3) = 3(3) + 2 = 9 + 2 = 11"
        },
        {
          question: "f(x) = 2x - 3 fonksiyonunun tersi nedir?",
          options: ["f⁻¹(x) = x/2 + 3/2", "f⁻¹(x) = (x+3)/2", "f⁻¹(x) = (x-3)/2", "f⁻¹(x) = 2x + 3"],
          answer: "f⁻¹(x) = (x+3)/2",
          explanation: "y = 2x - 3, x = 2y - 3, y = (x+3)/2, yani f⁻¹(x) = (x+3)/2"
        },
        {
          question: "f(x) = |x-2| fonksiyonunun grafiğinin x-ekseni ile kesiştiği nokta hangisidir?",
          options: ["(0, 0)", "(1, 0)", "(2, 0)", "(3, 0)"],
          answer: "(2, 0)",
          explanation: "|x-2| = 0 eşitliğini sağlayan x değeri 2'dir, bu durumda kesişim noktası (2, 0) olur."
        }
      ],
      'Trigonometri': [
        {
          question: "sin 30° değeri nedir?",
          options: ["1/4", "1/3", "1/2", "2/3"],
          answer: "1/2",
          explanation: "sin 30° = 1/2"
        },
        {
          question: "cos(π/3) değeri nedir?",
          options: ["1/2", "√2/2", "√3/2", "1"],
          answer: "1/2",
          explanation: "π/3 radyan = 60°, ve cos 60° = 1/2"
        }
      ],
      'Logaritma': [
        {
          question: "log₃ 81 değeri nedir?",
          options: ["3", "4", "6", "9"],
          answer: "4",
          explanation: "log₃ 81 = log₃ 3⁴ = 4"
        },
        {
          question: "log₂ 8 + log₂ 2 değeri nedir?",
          options: ["3", "4", "5", "6"],
          answer: "4",
          explanation: "log₂ 8 + log₂ 2 = log₂(8 × 2) = log₂ 16 = log₂ 2⁴ = 4"
        }
      ]
    },
    'Fizik': {
      'Mekanik': [
        {
          question: "10 kg kütleli bir cisme 5 N'luk kuvvet uygulandığında cismin ivmesi ne olur?",
          options: ["0.2 m/s²", "0.5 m/s²", "2 m/s²", "5 m/s²"],
          answer: "0.5 m/s²",
          explanation: "F = m×a, a = F/m = 5/10 = 0.5 m/s²"
        },
        {
          question: "20 m yüksekten serbest bırakılan bir cismin yere çarpma hızı ne olur? (g = 10 m/s²)",
          options: ["10 m/s", "20 m/s", "30 m/s", "40 m/s"],
          answer: "20 m/s",
          explanation: "v² = 2gh, v² = 2×10×20 = 400, v = 20 m/s"
        }
      ],
      'Elektrik': [
        {
          question: "10 Ω dirençli bir iletkenin uçlarına 20 V potansiyel farkı uygulanırsa, akım şiddeti ne olur?",
          options: ["0.5 A", "2 A", "5 A", "10 A"],
          answer: "2 A",
          explanation: "Ohm Kanunu: I = V/R = 20/10 = 2 A"
        }
      ]
    },
    'Kimya': {
      'Atom Yapısı': [
        {
          question: "Nötron sayısı 12, elektron sayısı 10 olan nötr olmayan bir atomun proton sayısı kaçtır?",
          options: ["8", "10", "12", "14"],
          answer: "10",
          explanation: "Nötr olmayan atomda elektron sayısı proton sayısına eşit olmayabilir, ancak element türü proton sayısı ile belirlenir. Verilen elektron sayısı 10 olduğuna göre proton sayısı 10'dur."
        }
      ]
    }
  };
  
  if (!topicExamples[subject] || !topicExamples[subject][topic]) {
    return getSubjectExamples(subject);
  }
  
  return topicExamples[subject][topic];
};

/**
 * Generate subject, grade and topic specific video data
 */
export const generateTopicVideoData = (subject: string, grade: GradeLevel, topic: string): Video => {
  const videoId = Math.floor(Math.random() * 10000) + 1;
  
  return {
    id: videoId,
    title: `${subject} ${grade}. Sınıf - ${topic} Konu Anlatımı`,
    thumbnailUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1171&auto=format&fit=crop",
    duration: `${Math.floor(Math.random() * 20) + 5}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}`,
    saved: false,
    subject: subject,
    grade: grade,
    topic: topic,
    description: getTopicDescription(subject, topic),
    examples: getTopicExamples(subject, topic),
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  };
};

/**
 * Ensure videos exist for specific subject, grade and topic
 */
export const ensureTopicVideos = (
  subject: string, 
  grade: GradeLevel, 
  topic: string, 
  allVideos: Video[] = mockVideos
): Video[] => {
  // Check if videos for this topic already exist
  const existingVideos = allVideos.filter(
    video => video.subject === subject && video.grade === grade && video.topic === topic
  );
  
  // If we already have videos for this topic, return them
  if (existingVideos.length > 0) {
    return existingVideos;
  }
  
  // Otherwise, generate a new video for this topic
  const newVideo = generateTopicVideoData(subject, grade, topic);
  
  // In a real app, you'd save this to the database
  // For now, we'll just return the new video
  return [newVideo];
};

/**
 * Get topic-specific videos for a subject and grade
 */
export const getSubjectGradeTopicVideos = (
  subject: string,
  grade: GradeLevel,
  topic: string,
  allVideos: Video[] = mockVideos
): Video[] => {
  // Get existing videos for this topic
  let videos = allVideos.filter(
    video => video.subject === subject && 
             video.grade === grade && 
             video.topic === topic
  );
  
  // If no videos exist for this topic, ensure we have at least one
  if (videos.length === 0) {
    videos = ensureTopicVideos(subject, grade, topic, allVideos);
  }
  
  return videos;
};
