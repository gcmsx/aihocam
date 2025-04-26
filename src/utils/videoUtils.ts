import { Video } from '@/types/video';
import { GradeLevel } from '@/data/gradeData';

// Mock video data
export const mockVideos: Video[] = [
  {
    id: 1,
    title: "Matematik Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "10:00",
    saved: false,
    subject: "Matematik",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 2,
    title: "Fizik Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "12:30",
    saved: false,
    subject: "Fizik",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 3,
    title: "Kimya Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "15:45",
    saved: false,
    subject: "Kimya",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 4,
    title: "Biyoloji Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "8:15",
    saved: false,
    subject: "Biyoloji",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 5,
    title: "Tarih Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "11:20",
    saved: false,
    subject: "Tarih",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 6,
    title: "Coğrafya Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "9:50",
    saved: false,
    subject: "Coğrafya",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 7,
    title: "Edebiyat Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "14:05",
    saved: false,
    subject: "Edebiyat",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 8,
    title: "Felsefe Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "13:30",
    saved: false,
    subject: "Felsefe",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 9,
    title: "İngilizce Soru Çözüm Teknikleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "İngilizce",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 10,
    title: "TYT Türkçe Deneme Çözümleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Türkçe",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 11,
    title: "AYT Matematik Deneme Çözümleri",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Matematik",
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 12,
    title: "9. Sınıf Matematik Konu Anlatımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Matematik",
	grade: 9,
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 13,
    title: "10. Sınıf Matematik Konu Anlatımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Matematik",
	grade: 10,
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 14,
    title: "11. Sınıf Matematik Konu Anlatımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Matematik",
	grade: 11,
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
   {
    id: 15,
    title: "12. Sınıf Matematik Konu Anlatımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Matematik",
	grade: 12,
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 16,
    title: "9. Sınıf Fizik Konu Anlatımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Fizik",
	grade: 9,
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 17,
    title: "10. Sınıf Fizik Konu Anlatımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Fizik",
	grade: 10,
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    id: 18,
    title: "11. Sınıf Fizik Konu Anlatımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Fizik",
	grade: 11,
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
   {
    id: 19,
    title: "12. Sınıf Fizik Konu Anlatımı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "16:20",
    saved: false,
    subject: "Fizik",
	grade: 12,
	videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
];

// Mock descriptions for each subject
export const getSubjectDescription = (subject: string): string => {
  const descriptions = {
    "Matematik": "Matematik dersi, sayıları, şekilleri ve yapıları inceleyen bir bilim dalıdır. Temel matematik konuları arasında cebir, geometri, trigonometri ve analiz bulunmaktadır. Bu ders, öğrencilere problem çözme, analitik düşünme ve soyutlama becerileri kazandırmayı hedefler.",
    "Fizik": "Fizik dersi, evrenin temel yasalarını ve madde ile enerji arasındaki etkileşimleri inceleyen bir bilim dalıdır. Mekanik, termodinamik, elektromanyetizma ve optik gibi konuları kapsar. Bu ders, öğrencilere bilimsel düşünme, deney yapma ve modelleme becerileri kazandırmayı amaçlar.",
    "Kimya": "Kimya dersi, maddelerin yapısını, özelliklerini ve değişimlerini inceleyen bir bilim dalıdır. Atomlar, moleküller, kimyasal reaksiyonlar ve organik kimya gibi konuları kapsar. Bu ders, öğrencilere laboratuvar becerileri, analitik düşünme ve problem çözme yetenekleri kazandırmayı hedefler.",
    "Biyoloji": "Biyoloji dersi, canlı organizmaları, onların yapılarını, işlevlerini, evrimlerini ve çevreleriyle olan etkileşimlerini inceleyen bir bilim dalıdır. Hücre biyolojisi, genetik, ekoloji ve evrim gibi konuları kapsar. Bu ders, öğrencilere biyolojik süreçleri anlama, bilimsel yöntemleri kullanma ve doğal dünyaya duyarlılık geliştirme becerileri kazandırmayı amaçlar.",
    "Tarih": "Tarih dersi, geçmişte yaşamış insan topluluklarının yaşayışlarını, kültürlerini, devletlerini ve birbirleriyle olan ilişkilerini inceleyen bir bilim dalıdır. Siyasi tarih, sosyal tarih, ekonomik tarih ve kültürel tarih gibi konuları kapsar. Bu ders, öğrencilere tarihsel düşünme, kaynak analizi yapma ve farklı perspektifleri değerlendirme becerileri kazandırmayı hedefler.",
    "Coğrafya": "Coğrafya dersi, yeryüzünü, doğal ortamı ve insan faaliyetlerini inceleyen bir bilim dalıdır. Fiziki coğrafya, beşeri coğrafya, bölgesel coğrafya ve çevre coğrafyası gibi konuları kapsar. Bu ders, öğrencilere mekansal düşünme, harita okuma ve çevre sorunlarına duyarlılık geliştirme becerileri kazandırmayı amaçlar.",
    "Edebiyat": "Edebiyat dersi, yazılı ve sözlü anlatım biçimlerini, edebi eserleri ve kültürel değerleri inceleyen bir alandır. Roman, şiir, tiyatro, deneme ve eleştiri gibi türleri kapsar. Bu ders, öğrencilere okuma, yazma, yorumlama ve eleştirel düşünme becerileri kazandırmayı hedefler.",
    "Felsefe": "Felsefe dersi, temel varlık, bilgi, değer ve ahlak gibi konuları sorgulayan bir düşünce sistemidir. Metafizik, epistemoloji, etik ve mantık gibi alanları kapsar. Bu ders, öğrencilere eleştirel düşünme, argüman geliştirme ve farklı perspektifleri değerlendirme becerileri kazandırmayı amaçlar.",
    "İngilizce": "İngilizce dersi, İngilizce dilini ve kültürünü öğretmeyi amaçlayan bir derstir. Dilbilgisi, kelime bilgisi, okuma, yazma, dinleme ve konuşma becerilerini kapsar. Bu ders, öğrencilere İngilizce iletişim kurma, farklı kültürleri anlama ve küresel dünyada aktif rol alma becerileri kazandırmayı hedefler.",
	"Türkçe": "Türkçe dersi, Türk dilini ve edebiyatını öğretmeyi amaçlayan bir derstir. Dilbilgisi, kelime bilgisi, okuma, yazma, dinleme ve konuşma becerilerini kapsar. Bu ders, öğrencilere Türkçeyi doğru ve etkili kullanma, farklı metinleri anlama ve yorumlama becerileri kazandırmayı hedefler."
  };
  return descriptions[subject] || "Bu dersin açıklaması henüz eklenmedi.";
};

// Function to initialize mock videos with default values
export const initializeMockVideos = (): Video[] => {
  return mockVideos.map(video => ({
    ...video,
    saved: false, // Initialize saved status to false
  }));
};

// Function to get video title by ID
export const getVideoTitle = (videoId: number): string => {
  const video = mockVideos.find(v => v.id === videoId);
  return video ? video.title : "Video Bulunamadı";
};

// Function to get videos by subject
export const getSubjectVideos = (subject: string): Video[] => {
  return mockVideos.filter(video => video.subject === subject);
};

// Function to get videos by subject and grade
export const getSubjectGradeVideos = (subject: string, grade: GradeLevel): Video[] => {
  return mockVideos.filter(video => video.subject === subject && video.grade === grade);
};

// Mock topics for each grade level and subject
export const gradeTopics = {
  "Matematik": {
    9: ["Kümeler", "Sayılar", "Denklemler", "Eşitsizlikler", "Oran Orantı"],
    10: ["Trigonometri", "Polinomlar", "Çarpanlara Ayırma", "2. Dereceden Denklemler", "Permütasyon Kombinasyon"],
    11: ["Limit", "Türev", "İntegral", "Diziler", "Seriler"],
    12: ["Logaritma", "Karmaşık Sayılar", "Matrisler", "Determinantlar", "Vektörler"]
  },
  "Fizik": {
    9: ["Fizik Bilimine Giriş", "Madde ve Özellikleri", "Kuvvet ve Hareket", "Enerji", "Isı ve Sıcaklık"],
    10: ["Elektrik", "Manyetizma", "Optik", "Dalgalar", "Basınç"],
    11: ["Vektörler", "Bağıl Hareket", "Newton'ın Hareket Yasaları", "İş, Güç, Enerji", "Momentum"],
    12: ["Çembersel Hareket", "Harmonik Hareket", "Elektromanyetik Dalgalar", "Atom Fiziği", "Nükleer Fizik"]
  },
  "Kimya": {
    9: ["Kimya Bilimine Giriş", "Atom ve Periyodik Sistem", "Kimyasal Türler Arası Etkileşimler", "Maddenin Halleri", "Karışımlar"],
    10: ["Asitler ve Bazlar", "Kimyasal Hesaplamalar", "Gazlar", "Çözeltiler", "Kimyasal Tepkimeler"],
    11: ["Organik Kimya", "Termokimya", "Kimyasal Denge", "Hız", "Redoks Tepkimeleri"],
    12: ["Elektrokimya", "Karbon Kimyası", "Enerji Kaynakları", "Endüstriyel Kimya", "Çevre Kimyası"]
  },
  "Biyoloji": {
    9: ["Biyoloji Bilimine Giriş", "Hücre", "Canlıların Sınıflandırılması", "Ekoloji", "Genetik"],
    10: ["Canlıların Yapısı", "Enzimler", "Metabolizma", "Fotosentez", "Solunum"],
    11: ["İnsan Fizyolojisi", "Sinir Sistemi", "Endokrin Sistem", "Duyu Organları", "Üreme Sistemi"],
    12: ["Genden Proteine", "Biyoteknoloji", "Evrim", "Davranış", "Popülasyon Ekolojisi"]
  },
  "Tarih": {
    9: ["İlk Çağ Uygarlıkları", "Orta Çağ", "İlk Türk Devletleri", "İslam Tarihi", "Türkiye Tarihi"],
    10: ["Osmanlı Devleti Kuruluşu", "Osmanlı Yükselme Dönemi", "Osmanlı Duraklama Dönemi", "Osmanlı Gerileme Dönemi", "Osmanlı Dağılma Dönemi"],
    11: ["18. Yüzyıl Değişim", "19. Yüzyıl", "I. Dünya Savaşı", "Kurtuluş Savaşı", "Türkiye Cumhuriyeti"],
    12: ["Soğuk Savaş", "Küreselleşme", "20. Yüzyıl Siyasi Olayları", "Türkiye Dış Politikası", "Uluslararası İlişkiler"]
  },
  "Coğrafya": {
    9: ["Doğa ve İnsan", "Harita Bilgisi", "Atmosfer", "İklim", "Yer Şekilleri"],
    10: ["Nüfus", "Yerleşme", "Ekonomi", "Ulaşım", "Bölgeler"],
    11: ["Türkiye Fiziki Coğrafyası", "Türkiye Beşeri Coğrafyası", "Türkiye Ekonomik Coğrafyası", "Türkiye Bölgeleri", "Türkiye Çevre Sorunları"],
    12: ["Dünya Fiziki Coğrafyası", "Dünya Beşeri Coğrafyası", "Dünya Ekonomik Coğrafyası", "Uluslararası Örgütler", "Küresel Sorunlar"]
  },
  "Edebiyat": {
    9: ["Edebiyat ve Sanat", "Söz Sanatları", "Şiir", "Hikaye", "Roman"],
    10: ["Divan Edebiyatı", "Halk Edebiyatı", "Tanzimat Edebiyatı", "Servet-i Fünun Edebiyatı", "Milli Edebiyat"],
    11: ["Cumhuriyet Dönemi Edebiyatı", "Modernizm", "Postmodernizm", "Edebi Akımlar", "Edebi Eleştiri"],
    12: ["Dünya Edebiyatı", "Batı Edebiyatı", "Doğu Edebiyatı", "Edebi Türler", "Edebi Kişilikler"]
  },
  "Felsefe": {
    9: ["Felsefenin Anlamı", "Bilgi Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Siyaset Felsefesi"],
    10: ["İlk Çağ Felsefesi", "Orta Çağ Felsefesi", "Rönesans Felsefesi", "Yeni Çağ Felsefesi", "Aydınlanma Felsefesi"],
    11: ["19. Yüzyıl Felsefesi", "20. Yüzyıl Felsefesi", "Varoluşçuluk", "Marksizm", "Pozitivizm"],
    12: ["Bilim Felsefesi", "Din Felsefesi", "Sanat Felsefesi", "Hukuk Felsefesi", "Eğitim Felsefesi"]
  },
  "İngilizce": {
    9: ["Introduction to English", "Present Simple", "Past Simple", "Future Simple", "Adjectives"],
    10: ["Present Continuous", "Past Continuous", "Present Perfect", "Past Perfect", "Adverbs"],
    11: ["Conditional Sentences", "Relative Clauses", "Passive Voice", "Reported Speech", "Modal Verbs"],
    12: ["Advanced Grammar", "Vocabulary", "Reading", "Writing", "Speaking"]
  },
  "Türkçe": {
    9: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Ses Bilgisi", "Yazım Kuralları"],
    10: ["Edebi Sanatlar", "Şiir Bilgisi", "Hikaye Bilgisi", "Roman Bilgisi", "Tiyatro Bilgisi"],
    11: ["Dil Bilgisi", "Cümlenin Öğeleri", "Cümle Türleri", "Anlatım Bozuklukları", "Metin Türleri"],
    12: ["Edebiyat Akımları", "Edebi Kişilikler", "Edebi Eserler", "Edebi Eleştiri", "Edebi Araştırma"]
  }
};

// Generate examples for each subject and topic
export const getSubjectExamples = (subject: string) => {
  const examplesBySubject = {
    'Coğrafya': [
      {
        question: "Aşağıdakilerden hangisi Türkiye'nin coğrafi bölgelerinden biri değildir?",
        options: ["Karadeniz", "Akdeniz", "Ege", "Güneydoğu Asya"],
        answer: "Güneydoğu Asya",
        explanation: "Güneydoğu Asya, Türkiye'nin değil, Asya kıtasının bir bölgesidir. Türkiye'nin coğrafi bölgeleri Karadeniz, Akdeniz ve Ege'dir."
      },
      {
        question: "Aşağıdakilerden hangisi bir iklim elemanı değildir?",
        options: ["Sıcaklık", "Basınç", "Rüzgar", "Bitki örtüsü"],
        answer: "Bitki örtüsü",
        explanation: "Bitki örtüsü iklimin bir sonucu olup, iklim elemanı değildir. Sıcaklık, basınç ve rüzgar ise iklim elemanlarıdır."
      },
      {
        question: "Aşağıdakilerden hangisi Türkiye'nin en uzun akarsuyudur?",
        options: ["Fırat", "Dicle", "Kızılırmak", "Sakarya"],
        answer: "Kızılırmak",
        explanation: "Kızılırmak, Türkiye sınırları içerisindeki en uzun akarsudur. Fırat ve Dicle nehirleri de Türkiye'den geçer ancak daha uzun mesafeleri kat ederler."
      },
      {
        question: "Aşağıdakilerden hangisi bir doğal afet değildir?",
        options: ["Deprem", "Sel", "Heyelan", "Sanayileşme"],
        answer: "Sanayileşme",
        explanation: "Sanayileşme, insan faaliyetleri sonucu ortaya çıkan bir süreçtir, doğal bir afet değildir. Deprem, sel ve heyelan ise doğal afetlerdir."
      },
      {
        question: "Aşağıdakilerden hangisi Türkiye'nin en kalabalık şehridir?",
        options: ["Ankara", "İstanbul", "İzmir", "Bursa"],
        answer: "İstanbul",
        explanation: "İstanbul, Türkiye'nin en kalabalık şehridir ve aynı zamanda ülkenin kültürel ve ekonomik merkezlerinden biridir."
      }
    ],
    'Fizik': [
      {
        question: "Aşağıdakilerden hangisi temel bir fiziksel büyüklük değildir?",
        options: ["Uzunluk", "Kütle", "Zaman", "Hız"],
        answer: "Hız",
        explanation: "Hız, uzunluk ve zaman gibi temel büyüklüklerden türetilen bir büyüklüktür. Uzunluk, kütle ve zaman ise temel fiziksel büyüklüklerdir."
      },
      {
        question: "Aşağıdakilerden hangisi enerji birimidir?",
        options: ["Newton", "Pascal", "Joule", "Watt"],
        answer: "Joule",
        explanation: "Joule, enerjinin SI birimidir. Newton kuvvet, Pascal basınç ve Watt güç birimidir."
      },
      {
        question: "Işığın boşluktaki hızı yaklaşık olarak kaç km/s'dir?",
        options: ["300.000", "150.000", "450.000", "600.000"],
        answer: "300.000",
        explanation: "Işığın boşluktaki hızı yaklaşık olarak 300.000 km/s'dir. Bu, evrendeki en yüksek hızlardan biridir."
      },
      {
        question: "Aşağıdakilerden hangisi bir vektörel büyüklüktür?",
        options: ["Sıcaklık", "Hacim", "Kütle", "Kuvvet"],
        answer: "Kuvvet",
        explanation: "Kuvvet, yönü ve büyüklüğü olan bir vektörel büyüklüktür. Sıcaklık, hacim ve kütle ise skaler büyüklüklerdir."
      },
      {
        question: "Aşağıdakilerden hangisi Newton'ın hareket yasalarından biri değildir?",
        options: ["Eylemsizlik Yasası", "Temel Yasa", "Etki-Tepki Yasası", "Enerjinin Korunumu Yasası"],
        answer: "Enerjinin Korunumu Yasası",
        explanation: "Enerjinin Korunumu Yasası, termodinamiğin bir yasasıdır, Newton'ın hareket yasalarından biri değildir. Diğer üç seçenek ise Newton'ın hareket yasalarıdır."
      }
    ],
    'Matematik': [
      {
        question: "2x + 3 = 7 denkleminin çözümü nedir?",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: "2x + 3 = 7 denklemini çözmek için önce 3'ü karşıya atarız: 2x = 4. Sonra her iki tarafı 2'ye böleriz: x = 2."
      },
      {
        question: "Aşağıdakilerden hangisi bir asal sayıdır?",
        options: ["1", "4", "9", "11"],
        answer: "11",
        explanation: "Asal sayılar sadece 1'e ve kendisine bölünebilen sayılardır. 11 bir asal sayıdır, diğer seçenekler (1, 4, 9) asal sayı değildir."
      },
      {
        question: "Bir üçgenin iç açılarının toplamı kaç derecedir?",
        options: ["90", "180", "270", "360"],
        answer: "180",
        explanation: "Bir üçgenin iç açılarının toplamı her zaman 180 derecedir."
      },
      {
        question: "π (pi) sayısı yaklaşık olarak kaçtır?",
        options: ["2.14", "3.14", "4.14", "5.14"],
        answer: "3.14",
        explanation: "π (pi) sayısı yaklaşık olarak 3.14'tür ve bir dairenin çevresinin çapına oranıdır."
      },
      {
        question: "Aşağıdakilerden hangisi bir rasyonel sayıdır?",
        options: ["√2", "π", "e", "1/2"],
        answer: "1/2",
        explanation: "Rasyonel sayılar, iki tam sayının oranı şeklinde ifade edilebilen sayılardır. 1/2 bir rasyonel sayıdır, diğer seçenekler (√2, π, e) irrasyonel sayılardır."
      }
    ],
    'Kimya': [
      {
        question: "Aşağıdakilerden hangisi bir element değildir?",
        options: ["Altın", "Su", "Oksijen", "Demir"],
        answer: "Su",
        explanation: "Su (H2O), hidrojen ve oksijen elementlerinden oluşan bir bileşiktir. Altın, oksijen ve demir ise elementlerdir."
      },
      {
        question: "pH değeri 7'den küçük olan bir çözelti için aşağıdakilerden hangisi doğrudur?",
        options: ["Asidik", "Bazik", "Nötr", "Amfoterik"],
        answer: "Asidik",
        explanation: "pH değeri 7'den küçük olan çözeltiler asidiktir. pH değeri 7 olan çözeltiler nötr, 7'den büyük olanlar ise baziktir."
      },
      {
        question: "Aşağıdakilerden hangisi bir soygazdır?",
        options: ["Hidrojen", "Oksijen", "Neon", "Azot"],
        answer: "Neon",
        explanation: "Neon, periyodik tabloda 8A grubunda bulunan bir soygazdır. Soygazlar kararlı yapıya sahiptir ve reaktif değildirler."
      },
      {
        question: "Aşağıdakilerden hangisi bir kimyasal değişim örneğidir?",
        options: ["Buzun erimesi", "Suyun kaynaması", "Demirin paslanması", "Şekerin çözünmesi"],
        answer: "Demirin paslanması",
        explanation: "Demirin paslanması, demirin oksijenle reaksiyona girerek yeni bir madde oluşturmasıdır, bu nedenle kimyasal bir değişimdir. Diğer seçenekler fiziksel değişimlerdir."
      },
      {
        question: "Aşağıdakilerden hangisi bir molekül değildir?",
        options: ["H2O", "NaCl", "O2", "Fe"],
        answer: "Fe",
        explanation: "Fe (demir), bir element sembolüdür ve molekül değildir. H2O (su), NaCl (sofra tuzu) ve O2 (oksijen) ise moleküllerdir."
      }
    ],
    'Biyoloji': [
      {
        question: "Aşağıdakilerden hangisi hücrenin enerji santrali olarak bilinir?",
        options: ["Ribozom", "Mitokondri", "Golgi aygıtı", "Endoplazmik retikulum"],
        answer: "Mitokondri",
        explanation: "Mitokondri, hücrenin enerji santrali olarak bilinir ve ATP (adenozin trifosfat) üretir. Ribozom protein sentezi yapar, Golgi aygıtı paketleme ve taşıma işlevlerini yerine getirir, endoplazmik retikulum ise protein ve lipid sentezinde rol oynar."
      },
      {
        question: "Aşağıdakilerden hangisi DNA'nın yapısında bulunmaz?",
        options: ["Adenin", "Guanin", "Timin", "Urasil"],
        answer: "Urasil",
        explanation: "Urasil, RNA'da bulunan bir bazdır, DNA'da timin bulunur. Adenin, guanin ve timin ise DNA'nın yapısında bulunan bazlardır."
      },
      {
        question: "Aşağıdakilerden hangisi bir vitamin değildir?",
        options: ["A", "B", "C", "Kalsiyum"],
        answer: "Kalsiyum",
        explanation: "Kalsiyum, bir mineraldir, vitamin değildir. A, B ve C ise vitaminlerdir."
      },
      {
        question: "Aşağıdakilerden hangisi bitkilerde fotosentezde kullanılan temel pigmenttir?",
        options: ["Klorofil", "Karotenoid", "Antosiyanin", "Fikosiyanin"],
        answer: "Klorofil",
        explanation: "Klorofil, bitkilerde fotosentezde kullanılan temel pigmenttir ve yeşil renklidir. Karotenoid, antosiyanin ve fikosiyanin ise diğer pigmentlerdir."
      },
      {
        question: "Aşağıdakilerden hangisi bir omurgalı hayvan değildir?",
        options: ["Balık", "Kurbağa", "Yılan", "Sinek"],
        answer: "Sinek",
        explanation: "Sinek, bir böcek türüdür ve omurgasızdır. Balık, kurbağa ve yılan ise omurgalı hayvanlardır."
      }
    ],
    'Tarih': [
      {
        question: "Aşağıdakilerden hangisi Türk tarihinde önemli bir dönüm noktasıdır?",
        options: ["Malazgirt Savaşı", "İstanbul'un Fethi", "Kurtuluş Savaşı", "Hepsi"],
        answer: "Hepsi",
        explanation: "Verilen üç olay da Türk tarihinde önemli dönüm noktalarıdır. Malazgirt Savaşı (1071) Anadolu'nun kapılarını Türklere açmıştır, İstanbul'un Fethi (1453) Orta Çağ'ı kapatıp Yeni Çağ'ı açmış, Kurtuluş Savaşı ise bağımsız Türkiye Cumhuriyeti'nin temelini oluşturmuştur."
      },
      {
        question: "Osmanlı Devleti hangi yıl kurulmuştur?",
        options: ["1299", "1326", "1453", "1517"],
        answer: "1299",
