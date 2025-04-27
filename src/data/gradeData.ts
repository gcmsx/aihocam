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
    9: ['Fizik Bilimine Giriş', 'Madde ve Özellikleri', 'Hareket ve Kuvvet', 'Enerji', 'Isı ve Sıcaklık', 'Elektrik'],
    10: ['Basınç ve Kaldırma Kuvveti', 'Elektrostatik', 'Elektrik ve Manyetizma', 'Optik', 'Dalgalar', 'Modern Fizik'],
    11: ['Vektörler', 'Newton Yasaları', 'İş ve Enerji', 'Atışlar', 'İmpuls ve Momentum', 'Tork'],
    12: ['Çembersel Hareket', 'Basit Harmonik Hareket', 'Dalga Mekaniği', 'Atom Fiziği', 'Nükleer Fizik', 'Görelilik']
  },
  'Kimya': {
    9: ['Kimyanın Temel Kanunları', 'Atom ve Yapısı', 'Periyodik Sistem', 'Kimyasal Türler', 'Mol Kavramı', 'Karışımlar'],
    10: ['Asitler ve Bazlar', 'Karışımlar', 'Kimyasal Tepkimeler', 'Gazlar', 'Sıvılar', 'Çözeltiler'],
    11: ['Katılar', 'Modern Atom Teorisi', 'Gazlar', 'Çözünürlük', 'Kimyasal Tepkimeler', 'Kimyasal Hesaplamalar'],
    12: ['Kimyasal Kinetik', 'Kimyasal Denge', 'Asit-Baz Dengesi', 'Çözünürlük Dengesi', 'Elektrokimya', 'Organik Kimya']
  },
  'Biyoloji': {
    9: ['Canlıların Ortak Özellikleri', 'Hücre', 'Canlı Çeşitliliği', 'Ekosistem', 'Güncel Çevre Sorunları', 'Biyolojik Çeşitlilik'],
    10: ['Hücre Bölünmeleri', 'Kalıtım', 'Ekosistem Ekolojisi', 'Güncel Çevre Sorunları', 'Doğal Kaynaklar', 'Biyolojik Çeşitlilik'],
    11: ['İnsan Fizyolojisi', 'Sinir Sistemi', 'Endokrin Sistem', 'Duyu Organları', 'Destek ve Hareket Sistemi', 'Sindirim Sistemi'],
    12: ['Genden Proteine', 'Biyoteknoloji', 'Canlılarda Enerji', 'Bitki Biyolojisi', 'Metabolizma', 'Fotosentez']
  },
  'Matematik': {
    9: ['Kümeler', 'Denklemler', 'Üçgenler', 'Mantık', 'Fonksiyonlar', 'Olasılık'],
    10: ['Fonksiyonlar', 'Polinomlar', 'Trigonometri', 'İkinci Dereceden Denklemler', 'Permütasyon', 'Kombinasyon'],
    11: ['Trigonometri', 'Analitik Geometri', 'Fonksiyonlarda Limit', 'Türev', 'İntegral', 'Olasılık'],
    12: ['Üstel ve Logaritmik Fonksiyonlar', 'Diziler', 'Karmaşık Sayılar', 'Türev', 'İntegral', 'Analitik Geometri']
  },
  'Tarih': {
    9: ['İlk Uygarlıklar', 'İlk Türk Devletleri', 'İslam Tarihi', 'Türk-İslam Devletleri', 'Türkiye Tarihi', 'Osmanlı Kuruluş'],
    10: ['Osmanlı Kuruluş', 'Osmanlı Yükselme', 'Osmanlı Duraklama', 'Osmanlı Gerileme', 'Avrupa Tarihi', 'Yeni Çağ'],
    11: ['Değişim Çağında Avrupa', 'Osmanlı Modernleşmesi', 'Milli Mücadele', 'TBMM Dönemi', 'Türk İnkılabı', 'Atatürk Dönemi'],
    12: ['İkinci Dünya Savaşı', 'Soğuk Savaş', 'Türkiye Cumhuriyeti', 'Demokrasi Tarihi', 'Yakın Tarih', 'Çağdaş Türk Dünyası']
  },
  'Coğrafya': {
    9: ['Doğal Sistemler', 'İklim Bilgisi', 'Yerşekilleri', 'Nüfus', 'Yerleşme', 'Ekonomik Faaliyetler'],
    10: ['Ekosistemler', 'Nüfus Politikaları', 'Şehirleşme', 'Ekonomik Faaliyetler', 'Ulaşım Sistemleri', 'Bölgesel Kalkınma'],
    11: ['Türkiye Fiziki Coğrafyası', 'Türkiye İklimi', 'Türkiye Bitki Örtüsü', 'Türkiye Nüfusu', 'Türkiye Ekonomisi', 'Türkiye Bölgeleri'],
    12: ['Doğal Kaynaklar', 'Çevre Sorunları', 'Küresel İklim Değişikliği', 'Afetler', 'Küreselleşme', 'Uluslararası Örgütler']
  },
  'İngilizce': {
    9: ['Simple Present Tense', 'Present Continuous', 'Simple Past Tense', 'Future Tense', 'Present Perfect', 'Modal Verbs'],
    10: ['Past Continuous', 'Past Perfect', 'Conditionals', 'Passive Voice', 'Reported Speech', 'Relative Clauses'],
    11: ['Advanced Grammar', 'Academic Writing', 'Business English', 'Literature', 'Public Speaking', 'TOEFL Preparation'],
    12: ['Advanced Writing', 'Critical Reading', 'Research Skills', 'Presentation Skills', 'Job Interviews', 'Academic Essays']
  },
  'Edebiyat': {
    9: ['Edebiyata Giriş', 'Hikaye', 'Roman', 'Şiir', 'Tiyatro', 'Masal ve Destan'],
    10: ['Divan Edebiyatı', 'Halk Edebiyatı', 'Tanzimat Edebiyatı', 'Servet-i Fünun', 'Fecr-i Ati', 'Milli Edebiyat'],
    11: ['Cumhuriyet Dönemi', 'Modern Şiir', 'Modern Roman', 'Modern Tiyatro', 'Öykü', 'Deneme'],
    12: ['Çağdaş Türk Edebiyatı', 'Dünya Edebiyatı', 'Edebi Akımlar', 'Edebi Sanatlar', 'Metin İnceleme', 'Eleştiri']
  },
  'Felsefe': {
    9: ['Felsefeye Giriş', 'Bilgi Felsefesi', 'Varlık Felsefesi', 'Ahlak Felsefesi', 'Din Felsefesi', 'Sanat Felsefesi'],
    10: ['Antik Yunan', 'Orta Çağ', 'Rönesans', 'Aydınlanma', 'Modern Felsefe', 'Çağdaş Felsefe'],
    11: ['Epistemoloji', 'Ontoloji', 'Etik', 'Estetik', 'Siyaset Felsefesi', 'Bilim Felsefesi'],
    12: ['20. Yüzyıl Felsefesi', 'Varoluşçuluk', 'Fenomenoloji', 'Postyapısalcılık', 'Türk Düşüncesi', 'İslam Felsefesi']
  }
};
