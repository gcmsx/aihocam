
import { Video } from '@/types/video';

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
 * Get subject-specific examples based on subject name
 */
export const getSubjectExamples = (subject: string) => {
  const examplesBySubject = {
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
        question: "Hücre zarının temel yapı taşı nedir?",
        options: ["Protein", "Fosfolipid", "Karbonhidrat", "DNA"],
        answer: "Fosfolipid",
        explanation: "Hücre zarı fosfolipid çift tabakadan oluşur. Bu yapı zarın seçici geçirgen özelliğini sağlar."
      },
      {
        question: "Mitokondri hangi hücresel süreci gerçekleştirir?",
        options: ["Protein sentezi", "DNA replikasyonu", "Hücresel solunum", "Fotosentez"],
        answer: "Hücresel solunum",
        explanation: "Mitokondri 'hücrenin enerji santrali' olarak bilinir ve ATP üretimi için hücresel solunum gerçekleştirir."
      },
      {
        question: "İnsanda kromozom sayısı kaçtır?",
        options: ["23", "46", "48", "64"],
        answer: "46",
        explanation: "İnsanda 23 çift (toplam 46) kromozom bulunur. Bunların 44'ü otozom, 2'si eşey kromozomudur."
      }
    ],
    'Tarih': [
      {
        question: "Türkiye Cumhuriyeti hangi tarihte ilan edilmiştir?",
        options: ["23 Nisan 1920", "29 Ekim 1923", "30 Ağustos 1922", "10 Kasım 1938"],
        answer: "29 Ekim 1923",
        explanation: "Türkiye Cumhuriyeti, TBMM'de yapılan anayasa değişikliği ile 29 Ekim 1923 tarihinde ilan edilmiştir."
      },
      {
        question: "Aşağıdakilerden hangisi Kurtuluş Savaşı'nda imzalanan antlaşmalardan biri değildir?",
        options: ["Ankara Antlaşması", "Lozan Antlaşması", "Sevr Antlaşması", "Mudanya Ateşkes Antlaşması"],
        answer: "Sevr Antlaşması",
        explanation: "Sevr Antlaşması Kurtuluş Savaşı'ndan önce, 10 Ağustos 1920'de Osmanlı Devleti tarafından imzalanmıştır. Ancak TBMM bu antlaşmayı tanımamıştır."
      },
      {
        question: "İstanbul'un fethi hangi tarihte gerçekleşmiştir?",
        options: ["1453", "1461", "1481", "1517"],
        answer: "1453",
        explanation: "İstanbul, Fatih Sultan Mehmet tarafından 29 Mayıs 1453 tarihinde fethedilmiştir."
      }
    ],
    'Coğrafya': [
      {
        question: "Aşağıdakilerden hangisi Türkiye'nin en büyük gölüdür?",
        options: ["Tuz Gölü", "İznik Gölü", "Beyşehir Gölü", "Van Gölü"],
        answer: "Van Gölü",
        explanation: "3.713 km² yüzölçümü ile Van Gölü, Türkiye'nin en büyük gölüdür ve aynı zamanda dünyanın en büyük sodalı göllerinden biridir."
      },
      {
        question: "Aşağıdaki illerden hangisi Karadeniz Bölgesi'nde yer almaz?",
        options: ["Rize", "Trabzon", "Sinop", "Eskişehir"],
        answer: "Eskişehir",
        explanation: "Eskişehir, İç Anadolu Bölgesi'nde yer alır. Diğer seçeneklerdeki iller Karadeniz Bölgesi'ndedir."
      },
      {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Erciyes Dağı", "Ağrı Dağı", "Uludağ", "Kaçkar Dağı"],
        answer: "Ağrı Dağı",
        explanation: "5.137 metre yüksekliği ile Ağrı Dağı, Türkiye'nin en yüksek dağıdır ve Doğu Anadolu Bölgesi'nde yer alır."
      }
    ],
    'Felsefe': [
      {
        question: "\"Bildiğim tek şey, hiçbir şey bilmediğimdir.\" sözü hangi filozofa aittir?",
        options: ["Platon", "Aristoteles", "Sokrates", "Descartes"],
        answer: "Sokrates",
        explanation: "Bu ünlü söz Sokrates'e aittir ve bilgeliğin kendi cahilliğinin farkında olmakla başladığını vurgular."
      },
      {
        question: "Aşağıdaki filozoflardan hangisi \"Düşünüyorum, öyleyse varım.\" (Cogito ergo sum) sözüyle tanınır?",
        options: ["Immanuel Kant", "Jean-Jacques Rousseau", "René Descartes", "Friedrich Nietzsche"],
        answer: "René Descartes",
        explanation: "Bu ifade, Descartes'ın şüphecilik metodunda temel kesinlik olarak kullandığı düşüncedir."
      },
      {
        question: "Aşağıdakilerden hangisi varoluşçuluk (existentialism) akımının temsilcilerinden biri değildir?",
        options: ["Jean-Paul Sartre", "Albert Camus", "Karl Marx", "Søren Kierkegaard"],
        answer: "Karl Marx",
        explanation: "Karl Marx diyalektik materyalizm ve marksizm ile ilişkilendirilir. Diğer filozoflar varoluşçuluk akımının önemli temsilcileridir."
      }
    ],
    'İngilizce': [
      {
        question: "Which of the following sentences is grammatically correct?",
        options: ["She don't like coffee.", "He have a new car.", "They is going to the party.", "We are studying English."],
        answer: "We are studying English.",
        explanation: "This sentence uses the correct form of the verb 'to be' (are) with the subject 'we'."
      },
      {
        question: "Complete the sentence: \"If I _____ rich, I would buy a big house.\"",
        options: ["am", "was", "were", "be"],
        answer: "were",
        explanation: "In second conditional sentences, we use 'were' with all subjects when talking about hypothetical situations."
      },
      {
        question: "Which word is a synonym for 'begin'?",
        options: ["End", "Finish", "Start", "Stop"],
        answer: "Start",
        explanation: "'Start' and 'begin' have the same meaning - to initiate an action or process."
      }
    ],
    'Edebiyat': [
      {
        question: "\"İnsan Bu, Su Misali\" şiiri hangi şairimize aittir?",
        options: ["Nazım Hikmet", "Orhan Veli Kanık", "Cahit Sıtkı Tarancı", "Necip Fazıl Kısakürek"],
        answer: "Necip Fazıl Kısakürek",
        explanation: "\"İnsan Bu, Su Misali\" Necip Fazıl Kısakürek'in ünlü şiiridir ve insanın değişken doğasını anlatır."
      },
      {
        question: "\"Çalıkuşu\" romanının yazarı kimdir?",
        options: ["Halide Edip Adıvar", "Reşat Nuri Güntekin", "Yakup Kadri Karaosmanoğlu", "Peyami Safa"],
        answer: "Reşat Nuri Güntekin",
        explanation: "\"Çalıkuşu\" romanı, Reşat Nuri Güntekin tarafından yazılmıştır ve Anadolu'da öğretmenlik yapan Feride'nin hikayesini anlatır."
      },
      {
        question: "Divan edebiyatında aşk konusunu işleyen şiir türü hangisidir?",
        options: ["Kaside", "Gazel", "Mesnevi", "Rubai"],
        answer: "Gazel",
        explanation: "Gazel, Divan edebiyatında genellikle aşk, sevgili ve güzellik temalarını işleyen lirik bir şiir türüdür."
      }
    ]
  };
  
  return examplesBySubject[subject] || [];
};

/**
 * Get subject-specific video description
 */
export const getSubjectDescription = (subject: string) => {
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
  
  return descriptions[subject] || "Bu derste konu anlatımı ve örnekler bulacaksınız.";
};

