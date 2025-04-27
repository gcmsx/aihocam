// Grade levels for the Turkish education system
export const gradeNames = {
  9: "9. Sınıf",
  10: "10. Sınıf",
  11: "11. Sınıf",
  12: "12. Sınıf"
};

export type GradeLevel = 9 | 10 | 11 | 12;

// Define the structure for a topic with associated video IDs
export interface Topic {
  name: string;
  videoIds: number[]; // IDs referencing videos in mockData or a database
}

// Updated structure: Video topics and their associated video IDs by grade for each subject
export const gradeTopics: Record<string, Record<GradeLevel, Topic[]>> = {
  'Fizik': {
    9: [
      { name: 'Fizik Bilimine Giriş', videoIds: [] }, // Assign relevant video IDs here
      { name: 'Madde ve Özellikleri', videoIds: [] },
      { name: 'Hareket ve Kuvvet', videoIds: [] },
      { name: 'Enerji', videoIds: [] }
    ],
    10: [
      { name: 'Basınç ve Kaldırma Kuvveti', videoIds: [] },
      { name: 'Elektrostatik', videoIds: [] },
      { name: 'Elektrik Akımı', videoIds: [] },
      { name: 'Manyetizma', videoIds: [] }
    ],
    11: [
      { name: 'Kuvvet ve Hareket', videoIds: [] },
      { name: 'Elektrik ve Manyetizma', videoIds: [] },
      { name: 'Dalgalar', videoIds: [] },
      { name: 'Modern Fizik', videoIds: [] }
    ],
    12: [
      { name: 'Çembersel Hareket', videoIds: [] },
      { name: 'Basit Harmonik Hareket', videoIds: [] },
      { name: 'Dalga Mekaniği', videoIds: [] },
      { name: 'Atom Fiziği', videoIds: [] }
    ]
  },
  'Kimya': {
    9: [
      { name: 'Kimya Bilimi', videoIds: [] },
      { name: 'Atom ve Yapısı', videoIds: [] },
      { name: 'Periyodik Sistem', videoIds: [] },
      { name: 'Kimyasal Bağlar', videoIds: [] }
    ],
    10: [
      { name: 'Kimyasal Tepkimeler', videoIds: [] },
      { name: 'Karışımlar', videoIds: [] },
      { name: 'Asit, Baz ve Tuzlar', videoIds: [] },
      { name: 'Kimya ve Çevre', videoIds: [] }
    ],
    11: [
      { name: 'Gazlar', videoIds: [] },
      { name: 'Sıvı Çözeltiler', videoIds: [] },
      { name: 'Kimyasal Tepkimelerde Enerji', videoIds: [] },
      { name: 'Karbon Kimyası', videoIds: [] }
    ],
    12: [
      { name: 'Kimyasal Kinetik', videoIds: [] },
      { name: 'Kimyasal Denge', videoIds: [] },
      { name: 'Elektrokimya', videoIds: [] },
      { name: 'Organik Kimya', videoIds: [] }
    ]
  },
  'Biyoloji': {
    9: [
      { name: 'Yaşam Bilimi', videoIds: [] },
      { name: 'Hücre', videoIds: [] },
      { name: 'Canlıların Çeşitliliği', videoIds: [] },
      { name: 'Canlı Sistemler', videoIds: [] }
    ],
    10: [
      { name: 'Hücre Bölünmesi', videoIds: [] },
      { name: 'Kalıtım', videoIds: [] },
      { name: 'Ekosistem Ekolojisi', videoIds: [] },
      { name: 'Güncel Çevre Sorunları', videoIds: [] }
    ],
    11: [
      { name: 'İnsan Fizyolojisi', videoIds: [] },
      { name: 'Sinir Sistemi', videoIds: [] },
      { name: 'Endokrin Sistem', videoIds: [] },
      { name: 'Duyu Organları', videoIds: [] }
    ],
    12: [
      { name: 'Genden Proteine', videoIds: [] },
      { name: 'Biyoteknoloji', videoIds: [] },
      { name: 'Canlılarda Enerji Dönüşümleri', videoIds: [] },
      { name: 'Bitki Biyolojisi', videoIds: [] }
    ]
  },
  'Matematik': {
    9: [
      { name: 'Kümeler', videoIds: [] },
      { name: 'Denklemler ve Eşitsizlikler', videoIds: [] },
      { name: 'Üçgenler', videoIds: [] },
      { name: 'Veri Analizi', videoIds: [] }
    ],
    10: [
      { name: 'Fonksiyonlar', videoIds: [] },
      { name: 'Polinomlar', videoIds: [] },
      { name: 'İkinci Dereceden Denklemler', videoIds: [] },
      { name: 'Dörtgenler ve Çokgenler', videoIds: [] }
    ],
    11: [
      { name: 'Trigonometri', videoIds: [] },
      { name: 'Analitik Geometri', videoIds: [] },
      { name: 'Fonksiyonlarda Limit ve Süreklilik', videoIds: [] },
      { name: 'Türev', videoIds: [7] } // Example: Assign video ID 7 to 'Türev'
    ],
    12: [
      { name: 'İntegral', videoIds: [] },
      { name: 'Diziler', videoIds: [] },
      { name: 'Olasılık', videoIds: [] },
      { name: 'İstatistik', videoIds: [] }
    ]
  },
  'Tarih': {
    9: [
      { name: 'İnsanlığın İlk Dönemleri', videoIds: [] },
      { name: 'İlk Türk Devletleri', videoIds: [] },
      { name: 'İslam Tarihi', videoIds: [] },
      { name: 'Türk İslam Devletleri', videoIds: [] }
    ],
    10: [
      { name: 'Beylikten Devlete', videoIds: [] },
      { name: 'Dünya Gücü Osmanlı', videoIds: [2] }, // Example: Assign video ID 2
      { name: 'Arayış Yılları', videoIds: [] },
      { name: 'Avrupa ve Osmanlı Devleti', videoIds: [] }
    ],
    11: [
      { name: 'Değişen Dünya Dengeleri', videoIds: [] },
      { name: 'Milliyetçilik ve Bağımsızlık', videoIds: [] },
      { name: 'Milli Mücadele', videoIds: [3] }, // Example: Assign video ID 3
      { name: 'Türkiye Cumhuriyeti', videoIds: [1] } // Example: Assign video ID 1
    ],
    12: [
      { name: 'İki Savaş Arasındaki Dönem', videoIds: [] },
      { name: 'İkinci Dünya Savaşı', videoIds: [] },
      { name: 'Soğuk Savaş Dönemi', videoIds: [] },
      { name: 'Yumuşama Dönemi ve Sonrası', videoIds: [] }
    ]
  },
  'Coğrafya': {
    9: [
      { name: 'Doğal Sistemler', videoIds: [4] }, // Example: Assign video ID 4
      { name: 'Beşeri Sistemler', videoIds: [] },
      { name: 'Küresel Ortam', videoIds: [] },
      { name: 'Çevre ve Toplum', videoIds: [] }
    ],
    10: [
      { name: 'Doğal Sistemler', videoIds: [5] }, // Example: Assign video ID 5
      { name: 'Beşeri Sistemler', videoIds: [] },
      { name: 'Mekansal Sentez', videoIds: [6] }, // Example: Assign video ID 6
      { name: 'Küresel Ortam', videoIds: [] }
    ],
    11: [
      { name: 'Doğal Sistemler', videoIds: [] },
      { name: 'Beşeri Sistemler', videoIds: [] },
      { name: 'Küresel Ortam', videoIds: [] },
      { name: 'Çevre ve Toplum', videoIds: [] }
    ],
    12: [
      { name: 'Doğal Sistemler', videoIds: [] },
      { name: 'Beşeri Sistemler', videoIds: [] },
      { name: 'Mekansal Sentez', videoIds: [] },
      { name: 'Küresel Ortam', videoIds: [] }
    ]
  },
  'İngilizce': {
    9: [
      { name: 'Günlük İletişim', videoIds: [] },
      { name: 'Okul Hayatı', videoIds: [] },
      { name: 'İnsan ve Toplum', videoIds: [] },
      { name: 'Çevre', videoIds: [] }
    ],
    10: [
      { name: 'Seyahat', videoIds: [] },
      { name: 'Gençlik Sorunları', videoIds: [] },
      { name: 'Spor', videoIds: [] },
      { name: 'Doğal Afetler', videoIds: [] }
    ],
    11: [
      { name: 'Müzik', videoIds: [] },
      { name: 'Sinema', videoIds: [] },
      { name: 'İletişim', videoIds: [] },
      { name: 'İnsan İlişkileri', videoIds: [] }
    ],
    12: [
      { name: 'Gelecek Planları', videoIds: [] },
      { name: 'İş Hayatı', videoIds: [] },
      { name: 'Alternatif Enerji', videoIds: [] },
      { name: 'Dünya Sorunları', videoIds: [] }
    ]
  },
  'Edebiyat': {
    9: [
      { name: 'Giriş', videoIds: [] },
      { name: 'Şiir', videoIds: [] },
      { name: 'Öykü ve Roman', videoIds: [] },
      { name: 'Tiyatro', videoIds: [] }
    ],
    10: [
      { name: 'Destan ve Efsane', videoIds: [] },
      { name: 'Şiir', videoIds: [] },
      { name: 'Anlatmaya Bağlı Edebi Metinler', videoIds: [] },
      { name: 'Tiyatro', videoIds: [] }
    ],
    11: [
      { name: 'Tanzimat Dönemi Edebiyatı', videoIds: [] },
      { name: 'Servet-i Fünun Edebiyatı', videoIds: [] },
      { name: 'Milli Edebiyat', videoIds: [] },
      { name: 'Cumhuriyet Dönemi', videoIds: [] }
    ],
    12: [
      { name: '1923-1940 Dönemi', videoIds: [] },
      { name: '1940-1960 Dönemi', videoIds: [] },
      { name: '1960 Sonrası Dönem', videoIds: [] },
      { name: 'Dünya Edebiyatı', videoIds: [] }
    ]
  },
  'Felsefe': {
    9: [
      { name: 'Felsefeye Giriş', videoIds: [] },
      { name: 'Bilgi Felsefesi', videoIds: [] },
      { name: 'Varlık Felsefesi', videoIds: [] },
      { name: 'Ahlak Felsefesi', videoIds: [] }
    ],
    10: [
      { name: 'Din Felsefesi', videoIds: [] },
      { name: 'Sanat Felsefesi', videoIds: [] },
      { name: 'Siyaset Felsefesi', videoIds: [] },
      { name: 'Bilim Felsefesi', videoIds: [] }
    ],
    11: [
      { name: 'Felsefi Akımlar', videoIds: [] },
      { name: 'MÖ 6. Yüzyıl-MS 2. Yüzyıl Felsefesi', videoIds: [] },
      { name: 'MS 2. Yüzyıl-15. Yüzyıl Felsefesi', videoIds: [] },
      { name: '15. Yüzyıl-17. Yüzyıl Felsefesi', videoIds: [] }
    ],
    12: [
      { name: '18. Yüzyıl-19. Yüzyıl Felsefesi', videoIds: [] },
      { name: '20. Yüzyıl Felsefesi', videoIds: [] },
      { name: 'Türk İslam Düşüncesi', videoIds: [] },
      { name: 'Çağdaş Türk Düşüncesi', videoIds: [] }
    ]
  }
};

