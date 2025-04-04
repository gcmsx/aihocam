
// Grade levels for the Turkish education system
export const gradeNames = {
  9: "9. Sınıf",
  10: "10. Sınıf",
  11: "11. Sınıf",
  12: "12. Sınıf"
};

export type GradeLevel = 9 | 10 | 11 | 12;

// Video topics by grade for each subject
export const gradeTopics: Record<string, Record<GradeLevel, string[]>> = {
  'Fizik': {
    9: ['Fizik Bilimine Giriş', 'Madde ve Özellikleri', 'Hareket ve Kuvvet', 'Enerji'],
    10: ['Basınç ve Kaldırma Kuvveti', 'Elektrostatik', 'Elektrik Akımı', 'Manyetizma'],
    11: ['Kuvvet ve Hareket', 'Elektrik ve Manyetizma', 'Dalgalar', 'Modern Fizik'],
    12: ['Çembersel Hareket', 'Basit Harmonik Hareket', 'Dalga Mekaniği', 'Atom Fiziği']
  },
  'Kimya': {
    9: ['Kimya Bilimi', 'Atom ve Yapısı', 'Periyodik Sistem', 'Kimyasal Bağlar'],
    10: ['Kimyasal Tepkimeler', 'Karışımlar', 'Asit, Baz ve Tuzlar', 'Kimya ve Çevre'],
    11: ['Gazlar', 'Sıvı Çözeltiler', 'Kimyasal Tepkimelerde Enerji', 'Karbon Kimyası'],
    12: ['Kimyasal Kinetik', 'Kimyasal Denge', 'Elektrokimya', 'Organik Kimya']
  },
  'Biyoloji': {
    9: ['Yaşam Bilimi', 'Hücre', 'Canlıların Çeşitliliği', 'Canlı Sistemler'],
    10: ['Hücre Bölünmesi', 'Kalıtım', 'Ekosistem Ekolojisi', 'Güncel Çevre Sorunları'],
    11: ['İnsan Fizyolojisi', 'Sinir Sistemi', 'Endokrin Sistem', 'Duyu Organları'],
    12: ['Genden Proteine', 'Biyoteknoloji', 'Canlılarda Enerji Dönüşümleri', 'Bitki Biyolojisi']
  },
  'Matematik': {
    9: ['Kümeler', 'Denklemler ve Eşitsizlikler', 'Üçgenler', 'Veri Analizi'],
    10: ['Fonksiyonlar', 'Polinomlar', 'İkinci Dereceden Denklemler', 'Dörtgenler ve Çokgenler'],
    11: ['Trigonometri', 'Analitik Geometri', 'Fonksiyonlarda Limit ve Süreklilik', 'Türev'],
    12: ['İntegral', 'Diziler', 'Olasılık', 'İstatistik']
  },
  'Tarih': {
    9: ['İnsanlığın İlk Dönemleri', 'İlk Türk Devletleri', 'İslam Tarihi', 'Türk İslam Devletleri'],
    10: ['Beylikten Devlete', 'Dünya Gücü Osmanlı', 'Arayış Yılları', 'Avrupa ve Osmanlı Devleti'],
    11: ['Değişen Dünya Dengeleri', 'Milliyetçilik ve Bağımsızlık', 'Milli Mücadele', 'Türkiye Cumhuriyeti'],
    12: ['İki Savaş Arasındaki Dönem', 'İkinci Dünya Savaşı', 'Soğuk Savaş Dönemi', 'Yumuşama Dönemi ve Sonrası']
  },
  'Coğrafya': {
    9: ['Doğal Sistemler', 'Beşeri Sistemler', 'Küresel Ortam', 'Çevre ve Toplum'],
    10: ['Doğal Sistemler', 'Beşeri Sistemler', 'Mekansal Sentez', 'Küresel Ortam'],
    11: ['Doğal Sistemler', 'Beşeri Sistemler', 'Küresel Ortam', 'Çevre ve Toplum'],
    12: ['Doğal Sistemler', 'Beşeri Sistemler', 'Mekansal Sentez', 'Küresel Ortam']
  },
  'İngilizce': {
    9: ['Günlük İletişim', 'Okul Hayatı', 'İnsan ve Toplum', 'Çevre'],
    10: ['Seyahat', 'Gençlik Sorunları', 'Spor', 'Doğal Afetler'],
    11: ['Müzik', 'Sinema', 'İletişim', 'İnsan İlişkileri'],
    12: ['Gelecek Planları', 'İş Hayatı', 'Alternatif Enerji', 'Dünya Sorunları']
  },
  'Edebiyat': {
    9: ['Giriş', 'Şiir', 'Öykü ve Roman', 'Tiyatro'],
    10: ['Destan ve Efsane', 'Şiir', 'Anlatmaya Bağlı Edebi Metinler', 'Tiyatro'],
    11: ['Tanzimat Dönemi Edebiyatı', 'Servet-i Fünun Edebiyatı', 'Milli Edebiyat', 'Cumhuriyet Dönemi'],
    12: ['1923-1940 Dönemi', '1940-1960 Dönemi', '1960 Sonrası Dönem', 'Dünya Edebiyatı']
  },
  'Felsefe': {
    9: ['Felsefeye Giriş', 'Bilgi Felsefesi', 'Varlık Felsefesi', 'Ahlak Felsefesi'],
    10: ['Din Felsefesi', 'Sanat Felsefesi', 'Siyaset Felsefesi', 'Bilim Felsefesi'],
    11: ['Felsefi Akımlar', 'MÖ 6. Yüzyıl-MS 2. Yüzyıl Felsefesi', 'MS 2. Yüzyıl-15. Yüzyıl Felsefesi', '15. Yüzyıl-17. Yüzyıl Felsefesi'],
    12: ['18. Yüzyıl-19. Yüzyıl Felsefesi', '20. Yüzyıl Felsefesi', 'Türk İslam Düşüncesi', 'Çağdaş Türk Düşüncesi']
  }
};
