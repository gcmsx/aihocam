
import { Video } from '@/types/video';

// Clean mock video data with consistent structure
export const mockVideos: Video[] = [
  {
    id: 1,
    title: "Cumhuriyetin İlanı",
    thumbnailUrl: "https://images.unsplash.com/photo-1596005554384-d293674c91d7",
    duration: "15:30",
    saved: false,
    subject: "Tarih",
    description: "Bu derste Türkiye Cumhuriyeti'nin kuruluş süreci ve Cumhuriyet'in ilanına giden olaylar anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    examples: [
      {
        question: "Cumhuriyet hangi tarihte ilan edilmiştir?",
        options: ["29 Ekim 1923", "23 Nisan 1920", "30 Ağustos 1922", "19 Mayıs 1919"],
        answer: "29 Ekim 1923",
        explanation: "Türkiye Cumhuriyeti, 29 Ekim 1923 tarihinde ilan edilmiştir."
      }
    ]
  },
  {
    id: 2,
    title: "Kıtalar ve Okyanuslar",
    thumbnailUrl: "https://images.unsplash.com/photo-1589519160732-57fc498494f8",
    duration: "18:45",
    saved: false,
    subject: "Coğrafya",
    description: "Bu derste dünya üzerindeki kıtalar, okyanuslar ve bunların özellikleri detaylı olarak incelenmektedir.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    examples: [
      {
        question: "Dünya üzerinde kaç kıta vardır?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "Dünya üzerinde 7 kıta vardır: Asya, Afrika, Kuzey Amerika, Güney Amerika, Antarktika, Avrupa ve Okyanusya."
      }
    ]
  },
  {
    id: 3,
    title: "Türev Kavramı",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "22:10",
    saved: false,
    subject: "Matematik",
    description: "Bu derste türev kavramı, türev alma kuralları ve türevin günlük hayattaki uygulamaları anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    examples: [
      {
        question: "f(x) = x² fonksiyonunun türevi nedir?",
        options: ["f'(x) = x", "f'(x) = 2x", "f'(x) = 2", "f'(x) = x²"],
        answer: "f'(x) = 2x",
        explanation: "x² fonksiyonunun türevi, türev kurallarına göre 2x'tir."
      }
    ]
  },
  {
    id: 4,
    title: "Hareket Kanunları",
    thumbnailUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    duration: "20:15",
    saved: false,
    subject: "Fizik",
    description: "Bu derste Newton'un hareket kanunları ve günlük hayattaki uygulamaları detaylı olarak incelenmektedir.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    examples: [
      {
        question: "Newton'un kaç hareket kanunu vardır?",
        options: ["2", "3", "4", "5"],
        answer: "3",
        explanation: "Newton'un 3 hareket kanunu vardır: Eylemsizlik, Kuvvet ve Etki-Tepki Kanunları."
      }
    ]
  },
  {
    id: 5,
    title: "Hücre Yapısı",
    thumbnailUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
    duration: "19:30",
    saved: false,
    subject: "Biyoloji",
    description: "Bu derste hücre yapısı, hücre organelleri ve hücre fonksiyonları detaylı olarak anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    examples: [
      {
        question: "Hücrenin enerji üretiminden sorumlu organeli hangisidir?",
        options: ["Golgi cisimciği", "Endoplazmik retikulum", "Lizozom", "Mitokondri"],
        answer: "Mitokondri",
        explanation: "Mitokondri, hücrenin enerji fabrikası olarak görev yapar ve ATP üretiminden sorumludur."
      }
    ]
  },
  {
    id: 6,
    title: "Günlük Konuşma Kalıpları",
    thumbnailUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    duration: "17:45",
    saved: false,
    subject: "İngilizce",
    description: "Bu derste günlük İngilizce konuşmada sıkça kullanılan kalıplar ve pratik uygulamaları anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    examples: [
      {
        question: "\"How do you do?\" ifadesinin doğru karşılığı nedir?",
        options: ["İyi misin?", "Nasılsın?", "Ne yapıyorsun?", "Memnun oldum."],
        answer: "Memnun oldum.",
        explanation: "\"How do you do?\" bir karşılaşma selamlaşması olup, karşılığında genellikle \"How do you do?\" veya \"Pleased to meet you.\" (Memnun oldum) denir."
      }
    ]
  },
  {
    id: 7,
    title: "Periyodik Tablo",
    thumbnailUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
    duration: "21:20",
    saved: false,
    subject: "Kimya",
    description: "Bu derste periyodik tablo, elementlerin özellikleri ve periyodik eğilimler detaylı olarak incelenmektedir.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    examples: [
      {
        question: "Periyodik tabloda kaç grup vardır?",
        options: ["8", "16", "18", "32"],
        answer: "18",
        explanation: "Modern periyodik tabloda 18 grup bulunmaktadır."
      }
    ]
  },
  {
    id: 8,
    title: "Şiir Analizi",
    thumbnailUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe",
    duration: "16:40",
    saved: false,
    subject: "Edebiyat",
    description: "Bu derste şiir analizi teknikleri, şiirin yapı unsurları ve anlam katmanları incelenmektedir.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    examples: [
      {
        question: "Şiirde 'imge' ne anlama gelir?",
        options: ["Söz sanatları", "Mecazlar", "Somut bir varlığın soyut hali", "Tekrar eden kelimeler"],
        answer: "Somut bir varlığın soyut hali",
        explanation: "İmge, somut bir varlığın şairin zihnindeki soyut, öznel çağrışımlarıdır."
      }
    ]
  },
  {
    id: 9,
    title: "Varoluşçuluk",
    thumbnailUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
    duration: "23:50",
    saved: false,
    subject: "Felsefe",
    description: "Bu derste varoluşçuluk akımı, önemli temsilcileri ve temel fikirleri detaylı olarak incelenmektedir.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    examples: [
      {
        question: "Aşağıdakilerden hangisi varoluşçu bir filozof değildir?",
        options: ["Jean-Paul Sartre", "Albert Camus", "Søren Kierkegaard", "Immanuel Kant"],
        answer: "Immanuel Kant",
        explanation: "Immanuel Kant, Aydınlanma döneminin önemli bir filozofudur, varoluşçuluk akımının bir temsilcisi değildir."
      }
    ]
  }
];
