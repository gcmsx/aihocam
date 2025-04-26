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
      'Olasılık': "Bu videoda olasılık konusunu ele alıyoruz. Olasılık kavramı, bağımlı ve bağımsız olaylar, permütasyon ve kombinasyon uygulamaları örneklerle açıklanmaktadır.",
      'Polinomlar': "Bu videoda polinomlar konusunu ele alıyoruz. Polinomların tanımı, çarpanlara ayırma, faktöriyel formülleri ve çözüm yöntemleri detaylı olarak anlatılmaktadır.",
      'Karmaşık Sayılar': "Bu videoda karmaşık sayılar konusunu ele alıyoruz. Karmaşık sayıların tanımı, cebirsel ve trigonometrik formda gösterimi, geometrik yorumu ile ilgili detaylı bilgiler aktarılmaktadır.",
      'Matrisler': "Bu videoda matrisler konusunu ele alıyoruz. Matrislerin tanımı, türleri, matris işlemleri, determinant hesaplamaları ve lineer denklem sistemlerinde kullanımları detaylı olarak incelenmektedir."
    },
    'Fizik': {
      'Mekanik': "Bu videoda mekanik konusunu ele alıyoruz. Newton'un hareket kanunları, momentum, enerji korunumu ve çarpışmalar detaylı olarak anlatılmaktadır.",
      'Elektrik': "Bu videoda elektrik konusunu ele alıyoruz. Elektrik yükü, elektrik alan, potansiyel, akım ve direnç kavramları ve devrelerin çalışması detaylı olarak incelenmektedir.",
      'Manyetizma': "Bu videoda manyetizma konusunu ele alıyoruz. Manyetik alan, manyetik kuvvet ve elektromanyetik indüksiyon olayları örneklerle açıklanmaktadır.",
      'Optik': "Bu videoda optik konusunu ele alıyoruz. Işığın doğası, yansıma, kırılma, mercekler ve optik araçların çalışma prensipleri detaylı olarak anlatılmaktadır.",
      'Modern Fizik': "Bu videoda modern fizik konusunu ele alıyoruz. Kuantum mekaniği, görelilik teorisi ve atom fiziğinin temel prensipleri örneklerle açıklanmaktadır.",
      'Termodinamik': "Bu videoda termodinamik konusunu ele alıyoruz. Isı, sıcaklık, entalpi, entropi kavramları ve termodinamiğin ana yasaları detaylı olarak incelenmektedir.",
      'Dalgalar': "Bu videoda dalgalar konusunu ele alıyoruz. Dalga çeşitleri, dalga özellikleri, ses dalgaları, elektromanyetik dalgalar ve bunların günlük hayattaki uygulamaları ayrıntılı şekilde anlatılmaktadır.",
      'Kütle ve Ağırlık': "Bu videoda kütle ve ağırlık konusunu ele alıyoruz. Kütle ve ağırlık arasındaki farklar, yer çekimi, ağırlık merkezi kavramları ve ölçüm yöntemleri detaylı olarak incelenmektedir.",
      'Basınç ve Kaldırma Kuvveti': "Bu videoda basınç ve kaldırma kuvveti konusunu ele alıyoruz. Pascal prensibi, Arşimet prensibi, basınç ölçümü ve sıvıların kaldırma kuvveti detaylı olarak anlatılmaktadır.",
      'İş, Güç ve Enerji': "Bu videoda iş, güç ve enerji konularını ele alıyoruz. İş kavramı, güç hesaplamaları, kinetik ve potansiyel enerji, enerji dönüşümleri ve korunumu detaylı olarak incelenmektedir."
    },
    'Kimya': {
      'Atom Yapısı': "Bu videoda atom yapısı konusunu ele alıyoruz. Atomun parçacıkları, elektron dizilimi ve periyodik tablonun yerleşim düzeni detaylı olarak anlatılmaktadır.",
      'Kimyasal Bağlar': "Bu videoda kimyasal bağlar konusunu ele alıyoruz. İyonik, kovalent ve metalik bağların oluşumu ve özellikleri örneklerle açıklanmaktadır.",
      'Asitler ve Bazlar': "Bu videoda asitler ve bazlar konusunu ele alıyoruz. Asit-baz tanımları, pH kavramı, nötrleşme tepkimeleri detaylı olarak incelenmektedir.",
      'Organik Kimya': "Bu videoda organik kimya konusunu ele alıyoruz. Karbon bileşikleri, fonksiyonel gruplar ve organik tepkimeler örneklerle açıklanmaktadır.",
      'Periyodik Tablo': "Bu videoda periyodik tablo konusunu ele alıyoruz. Periyodik tablonun tarihsel gelişimi, elementlerin gruplanması, periyodik özellikler ve element türleri detaylı olarak anlatılmaktadır.",
      'Kimyasal Tepkimeler': "Bu videoda kimyasal tepkimeler konusunu ele alıyoruz. Tepkime türleri, denklem denkleştirme, tepkime hızı ve kimyasal denge detaylı olarak incelenmektedir.",
      'Gazlar': "Bu videoda gazlar konusunu ele alıyoruz. İdeal gaz yasaları, kinetik teori, gaz basıncı, sıcaklık ve hacim ilişkileri detaylı olarak açıklanmaktadır.",
      'Çözeltiler': "Bu videoda çözeltiler konusunu ele alıyoruz. Çözünürlük, derişim birimleri, koligatif özellikler ve uygulama alanları detaylı olarak incelenmektedir.",
      'Termokimya': "Bu videoda termokimya konusunu ele alıyoruz. Endotermik ve ekzotermik tepkimeler, enerji değişimleri, entalpi ve Hess Yasası detaylı olarak anlatılmaktadır.",
      'Elektrokimya': "Bu videoda elektrokimya konusunu ele alıyoruz. Redoks tepkimeleri, elektroliz, galvanik hücreler ve elektrokimyasal uygulamalar detaylı olarak incelenmektedir."
    },
    'Biyoloji': {
      'Hücre': "Bu videoda hücre konusunu ele alıyoruz. Hücre yapısı, organellerin görevleri ve hücre bölünmesi süreçleri detaylı olarak anlatılmaktadır.",
      'Kalıtım': "Bu videoda kalıtım konusunu ele alıyoruz. Mendel genetiği, DNA yapısı, gen ifadesi ve genetik hastalıklar örneklerle açıklanmaktadır.",
      'Sinir Sistemi': "Bu videoda sinir sistemi konusunu ele alıyoruz. Sinir hücreleri, impuls iletimi, merkezi ve çevresel sinir sistemi yapıları detaylı olarak incelenmektedir.",
      'Ekosistemler': "Bu videoda ekosistemler konusunu ele alıyoruz. Enerji akışı, madde döngüleri, popülasyon dinamikleri ve ekolojik denge örneklerle açıklanmaktadır.",
      'Hücre Bölünmesi': "Bu videoda hücre bölünmesi konusunu ele alıyoruz. Mitoz ve mayoz bölünme aşamaları, farklılıkları ve hücre döngüsünün kontrol mekanizmaları detaylı olarak anlatılmaktadır.",
      'Solunum': "Bu videoda solunum konusunu ele alıyoruz. Hücresel solunum, aerobik ve anaerobik solunum, solunumun aşamaları ve enerji üretimi detaylı olarak incelenmektedir.",
      'Dolaşım Sistemi': "Bu videoda dolaşım sistemi konusunu ele alıyoruz. Kalp yapısı, kan damarları, kan bileşenleri ve dolaşım sisteminin çalışma prensibi detaylı olarak anlatılmaktadır.",
      'Sindirim Sistemi': "Bu videoda sindirim sistemi konusunu ele alıyoruz. Sindirim organlarının yapısı, besinlerin sindirimi, enzimler ve sindirim sistemi hastalıkları detaylı olarak incelenmektedir.",
      'Fotosentez': "Bu videoda fotosentez konusunu ele alıyoruz. Fotosentezin aşamaları, ışık ve karanlık reaksiyonları, etkileyen faktörler ve fotosentezin önemi detaylı olarak anlatılmaktadır.",
      'Moleküler Biyoloji': "Bu videoda moleküler biyoloji konusunu ele alıyoruz. DNA replikasyonu, protein sentezi, gen ifadesinin düzenlenmesi ve biyoteknolojik uygulamalar detaylı olarak incelenmektedir."
    },
    'Tarih': {
      'Osmanlı İmparatorluğu': "Bu videoda Osmanlı İmparatorluğu konusunu ele alıyoruz. Kuruluş, yükseliş ve gerileme dönemleri, önemli padişahlar ve siyasi olaylar detaylı olarak anlatılmaktadır.",
      'Türkiye Cumhuriyeti': "Bu videoda Türkiye Cumhuriyeti'nin kuruluş sürecini ele alıyoruz. Kurtuluş Savaşı, Lozan Antlaşması ve Cumhuriyet'in ilanı örneklerle açıklanmaktadır.",
      'İnkılap Tarihi': "Bu videoda İnkılap Tarihi konusunu ele alıyoruz. Türk inkılabının temel ilkeleri, yapılan reformlar ve çağdaşlaşma süreci detaylı olarak incelenmektedir.",
      'Orta Çağ Tarihi': "Bu videoda Orta Çağ tarihi konusunu ele alıyoruz. Feodalizm, Haçlı Seferleri, İslamiyet'in yayılışı ve Orta Çağ'da bilim ve kültür detaylı olarak anlatılmaktadır.",
      'İlk Çağ Uygarlıkları': "Bu videoda İlk Çağ uygarlıkları konusunu ele alıyoruz. Mezopotamya, Mısır, Hitit, Yunan ve Roma uygarlıkları ve bu uygarlıkların kültürel mirasları detaylı olarak incelenmektedir.",
      'Dünya Savaşları': "Bu videoda Dünya Savaşları konusunu ele alıyoruz. Birinci ve İkinci Dünya Savaşları'nın nedenleri, gelişimi, sonuçları ve dünya üzerindeki etkileri detaylı olarak anlatılmaktadır.",
      'Soğuk Savaş Dönemi': "Bu videoda Soğuk Savaş dönemini ele alıyoruz. ABD ve SSCB arasındaki rekabet, bloklaşma, NATO ve Varşova Paktı, krizler ve detantın gelişimi detaylı olarak incelenmektedir.",
      'Türk İslam Tarihi': "Bu videoda Türk İslam tarihi konusunu ele alıyoruz. İslamiyet öncesi Türk devletleri, İslamiyet'in kabulü, Selçuklular ve diğer Türk İslam devletleri detaylı olarak anlatılmaktadır.",
      "Türklerin Anadoluya Gelişi": "Bu videoda Türklerin Anadoluya gelişini ele alıyoruz. Malazgirt Savaşı, Anadolu Selçuklu Devleti, beylikler dönemi ve Osmanlı'nın kuruluşu detaylı olarak incelenmektedir.",
      'Yakın Çağ Tarihi': "Bu videoda Yakın Çağ tarihi konusunu ele alıyoruz. Sanayi Devrimi, Fransız İhtilali, milliyetçilik hareketleri ve bu olayların dünya üzerindeki etkileri detaylı olarak anlatılmaktadır."
    },
    'Coğrafya': {
      'Türkiye Fiziki Coğrafyası': "Bu videoda Türkiye'nin fiziki coğrafyası konusunu ele alıyoruz. Dağlar, ovalar, platolar, akarsular ve iklim özellikleri detaylı olarak incelenmektedir.",
      'İklim Bilgisi': "Bu videoda iklim bilgisi konusunu ele alıyoruz. İklim tipleri, iklim elemanları, basınç sistemleri ve iklim değişikliği detaylı olarak anlatılmaktadır.",
      'Nüfus ve Yerleşme': "Bu videoda nüfus ve yerleşme konusunu ele alıyoruz. Nüfus artışı, nüfus dağılışı, göçler, kentleşme ve yerleşme tipleri detaylı olarak incelenmektedir.",
      'Ekonomik Faaliyetler': "Bu videoda ekonomik faaliyetler konusunu ele alıyoruz. Tarım, hayvancılık, sanayi, madencilik, ticaret ve turizm faaliyetleri detaylı olarak anlatılmaktadır.",
      'Doğal Afetler': "Bu videoda doğal afetler konusunu ele alıyoruz. Depremler, volkanik patlamalar, tsunami, sel, heyelan ve kuraklık gibi doğal afetlerin oluşumu ve etkileri detaylı olarak incelenmektedir.",
      "Dünyanın Şekli ve Hareketleri": "Bu videoda Dünyanın şekli ve hareketleri konusunu ele alıyoruz. Dünyanın günlük ve yıllık hareketleri, sonuçları ve mevsimler detaylı olarak anlatılmaktadır.",
      'Harita Bilgisi': "Bu videoda harita bilgisi konusunu ele alıyoruz. Harita çeşitleri, ölçek, projeksiyon, koordinat sistemleri ve harita okuma teknikleri detaylı olarak incelenmektedir.",
      'Kıtalar ve Okyanuslar': "Bu videoda kıtalar ve okyanuslar konusunu ele alıyoruz. Dünyanın büyük kara parçaları ve su kütleleri, özellikleri ve önemi detaylı olarak anlatılmaktadır.",
      'Toprak Bilgisi': "Bu videoda toprak bilgisi konusunu ele alıyoruz. Toprak oluşumu, toprak türleri, toprak erozyonu ve toprak koruması konuları detaylı olarak incelenmektedir.",
      "Türkiyenin Beşeri Coğrafyası": "Bu videoda Türkiyenin beşeri coğrafyası konusunu ele alıyoruz. Nüfus özellikleri, yerleşme tipleri, ekonomik faaliyetler ve kültürel çeşitlilik detaylı olarak anlatılmaktadır."
    },
    'Felsefe': {
      'Varlık Felsefesi': "Bu videoda varlık felsefesi konusunu ele alıyoruz. Ontolojinin temel kavramları, varlık türleri, varlık problemleri ve farklı düşünürlerin varlık görüşleri detaylı olarak anlatılmaktadır.",
      'Bilgi Felsefesi': "Bu videoda bilgi felsefesi konusunu ele alıyoruz. Epistemolojinin temel kavramları, bilginin kaynağı, doğruluğu ve sınırları detaylı olarak incelenmektedir.",
      'Ahlak Felsefesi': "Bu videoda ahlak felsefesi konusunu ele alıyoruz. Etik teoriler, ahlaki değerler, özgürlük ve sorumluluk kavramları detaylı olarak anlatılmaktadır.",
      'Siyaset Felsefesi': "Bu videoda siyaset felsefesi konusunu ele alıyoruz. Devlet teorileri, siyasi sistemler, adalet kavramı ve ideal toplum tartışmaları detaylı olarak incelenmektedir.",
      'Sanat Felsefesi': "Bu videoda sanat felsefesi konusunu ele alıyoruz. Estetik, güzellik kavramı, sanat eserinin değeri ve sanat türleri detaylı olarak anlatılmaktadır.",
      'Mantık': "Bu videoda mantık konusunu ele alıyoruz. Mantığın temelleri, akıl yürütme biçimleri, sembolik mantık ve mantık hataları detaylı olarak incelenmektedir.",
      'Felsefeye Giriş': "Bu videoda felsefeye giriş konusunu ele alıyoruz. Felsefenin anlamı, doğuşu, temel soruları ve diğer disiplinlerle ilişkisi detaylı olarak anlatılmaktadır.",
      'İslam Felsefesi': "Bu videoda İslam felsefesi konusunu ele alıyoruz. İslam felsefesinin kaynakları, önemli İslam filozofları, Meşşailik ve İşrakilik akımları detaylı olarak anlatılmaktadır.",
      'Türk İslam Düşüncesi': "Bu videoda Türk İslam düşüncesi konusunu ele alıyoruz. Türk İslam düşünürlerinin görüşleri, Ahmet Yesevi, Yunus Emre ve Mevlana'nın fikirleri detaylı olarak anlatılmaktadır.",
      'Çağdaş Felsefe': "Bu videoda çağdaş felsefe konusunu ele alıyoruz. Varoluşçuluk, fenomenoloji, postyapısalcılık ve postmodernizm gibi çağdaş felsefe akımları detaylı olarak incelenmektedir."
    },
    'İngilizce': {
      'Temel Gramer': "Bu videoda temel İngilizce gramer konusunu ele alıyoruz. Zamirler, isimler, sıfatlar, zarflar ve temel cümle yapıları detaylı olarak anlatılmaktadır.",
      'Zamanlar': "Bu videoda İngilizcede zaman yapıları konusunu ele alıyoruz. Simple Present, Present Continuous, Present Perfect ve diğer zaman yapıları detaylı olarak incelenmektedir.",
      'Okuma Becerileri': "Bu videoda İngilizce okuma becerileri konusunu ele alıyoruz. Metin okuma stratejileri, anlama teknikleri ve kelime bilgisini geliştirme yöntemleri detaylı olarak anlatılmaktadır.",
      'Yazma Becerileri': "Bu videoda İngilizce yazma becerileri konusunu ele alıyoruz. Paragraf yazma, kompozisyon oluşturma ve farklı yazı türleri detaylı olarak incelenmektedir.",
      'Konuşma Becerileri': "Bu videoda İngilizce konuşma becerileri konusunu ele alıyoruz. Günlük konuşma kalıpları, telaffuz çalışmaları ve akıcı konuşma teknikleri detaylı olarak anlatılmaktadır.",
      'Dinleme Becerileri': "Bu videoda İngilizce dinleme becerileri konusunu ele alıyoruz. Ana fikri bulma, detayları yakalama ve not alma teknikleri detaylı olarak incelenmektedir.",
      'Kelime Bilgisi': "Bu videoda İngilizce kelime bilgisi konusunu ele alıyoruz. Kelime öğrenme stratejileri, kelime aileleri ve bağlamdan anlam çıkarma teknikleri detaylı olarak anlatılmaktadır.",
      'Dilbilgisi': "Bu videoda İngilizce dilbilgisi konusunu ele alıyoruz. Karmaşık cümle yapıları, koşul cümleleri, dolaylı anlatım ve pasif yapı detaylı olarak incelenmektedir.",
      'İletişimsel İngilizce': "Bu videoda iletişimsel İngilizce konusunu ele alıyoruz. Sosyal ortamlarda kullanılan ifadeler, diyaloglar ve kültürel öğeler detaylı olarak anlatılmaktadır.",
      'Akademik İngilizce': "Bu videoda akademik İngilizce konusunu ele alıyoruz. Akademik yazı türleri, sunum yapma teknikleri ve akademik ortamlarda kullanılan dil özellikleri detaylı olarak incelenmektedir."
    },
    'Edebiyat': {
      'Şiir': "Bu videoda şiir konusunu ele alıyoruz. Şiirin unsurları, edebi sanatlar, vezin, kafiye ve şiir türleri detaylı olarak anlatılmaktadır.",
      'Roman': "Bu videoda roman konusunu ele alıyoruz. Roman unsurları, roman türleri, roman tahlili ve Türk ve dünya edebiyatından önemli romanlar detaylı olarak incelenmektedir.",
      'Halk Edebiyatı': "Bu videoda halk edebiyatı konusunu ele alıyoruz. Halk şiiri, halk hikâyeleri, destanlar ve anonim edebi ürünler detaylı olarak anlatılmaktadır.",
      'Divan Edebiyatı': "Bu videoda divan edebiyatı konusunu ele alıyoruz. Divan şiiri özellikleri, nazım şekilleri, mazmunlar ve önemli divan şairleri detaylı olarak anlatılmaktadır.",
      'Tanzimat Edebiyatı': "Bu videoda Tanzimat edebiyatı konusunu ele alıyoruz. Tanzimat döneminin tarihsel arka planı, Tanzimat edebiyatının özellikleri ve önemli temsilcileri detaylı olarak anlatılmaktadır.",
      'Servet-i Fünun Edebiyatı': "Bu videoda Servet-i Fünun edebiyatı konusunu ele alıyoruz. Dönemin edebi anlayışı, dil özellikleri ve önemli temsilcileri detaylı olarak anlatılmaktadır.",
      'Milli Edebiyat': "Bu videoda Milli Edebiyat konusunu ele alıyoruz. Dönemin siyasi ve toplumsal arka planı, edebi anlayışı ve önemli temsilcileri detaylı olarak anlatılmaktadır.",
      'Cumhuriyet Dönemi Edebiyatı': "Bu videoda Cumhuriyet Dönemi Edebiyatı konusunu ele alıyoruz. Dönemin edebi anlayışı, önemli edebi akımlar ve önemli yazarlar detaylı olarak incelenmektedir.",
      'Dünya Edebiyatı': "Bu videoda Dünya Edebiyatı konusunu ele alıyoruz. Farklı ülke edebiyatlarından önemli eserler, akımlar ve yazarlar detaylı olarak anlatılmaktadır.",
      'Edebi Akımlar': "Bu videoda edebi akımlar konusunu ele alıyoruz. Klasizm, romantizm, realizm, natüralizm, modernizm ve postmodernizm gibi akımların özellikleri detaylı olarak incelenmektedir."
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
      },
      {
        question: "Periyodu 0.5 saniye olan bir sarkacın frekansı nedir?",
        options: ["0.5 Hz", "1 Hz", "2 Hz", "4 Hz"],
        answer: "2 Hz",
        explanation: "Frekans = 1/Periyot, f = 1/0.5 = 2 Hz"
      },
      {
        question: "120 W gücünde çalışan bir elektrikli cihaz 2 saat çalıştırıldığında kaç joule enerji harcar?",
        options: ["60 J", "240 J", "7200 J", "864.000 J"],
        answer: "864.000 J",
        explanation: "E = P × t = 120 W × 2 saat × 3600 s/saat = 120 × 7200 = 864.000 J"
      },
      {
        question: "Sürtünmesiz bir yüzeyde durmakta olan 4 kg kütleli bir cisme 20 N'luk kuvvet 10 saniye boyunca uygulanıyor. Cisim bu süre sonunda kaç metre yol almış olur?",
        options: ["50 m", "100 m", "250 m", "500 m"],
        answer: "250 m",
        explanation: "F = ma, a = F/m = 20/4 = 5 m/s². x = (1/2)at² = 0.5 × 5 × 10² = 0.5 × 5 × 100 = 250 m"
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
        question: "3x² - 12x + 9 ifadesinin çarpanlarına ayrılmış hali nedir?",
        options: ["3(x - 1)²", "3(x - 2)²", "3(x² - 4x + 3)", "(3x - 3)²"],
        answer: "3(x - 2)²",
        explanation: "3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x² - 4x + 4 - 1) = 3((x - 2)² - 1 + 1) = 3(x - 2)²"
      },
      {
        question: "sin(30°) + cos(60°) değeri nedir?",
        options: ["0.5", "1", "1.5", "2"],
        answer: "1",
        explanation: "sin(30°) = 0.5 ve cos(60°) = 0.5, toplam = 0.5 + 0.5 = 1"
      },
      {
        question: "f(x) = x² + 2x ve g(x) = 3x - 1 fonksiyonları için f(g(2)) değeri nedir?",
        options: ["34", "35", "36", "37"],
        answer: "35",
        explanation: "g(2) = 3(2) - 1 = 6 - 1 = 5, f(g(2)) = f(5) = 5² + 2(5) = 25 + 10 = 35"
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
        question: "Atomun çekirdeğinde bulunan parçacıklar hangileridir?",
        options: ["Proton ve elektron", "Nötron ve elektron", "Proton ve nötron", "Proton, nötron ve elektron"],
        answer: "Proton ve nötron",
        explanation: "Atom çekirdeğinde proton ve nötron bulunur, elektronlar ise çekirdeğin etrafındaki katmanlarda yer alır."
      },
      {
        question: "pH değeri 3 olan bir çözelti, pH değeri 6 olan bir çözeltiden kaç kat daha asidiktir?",
        options: ["2 kat", "3 kat", "100 kat", "1000 kat"],
        answer: "1000 kat",
        explanation: "pH skalası logaritmiktir. pH'daki her birim değişim, asitlik/bazlık konsantrasyonunda 10 katlık değişim anlamına gelir. 6-3 = 3 birim fark olduğundan, 10³ = 1000 kat daha asidiktir."
      },
      {
        question: "Aşağıdakilerden hangisi bir amfoter oksittir?",
        options: ["Na₂O", "CO₂", "Al₂O₃", "MgO"],
        answer: "Al₂O₃",
        explanation: "Amfoter oksitler hem asitlerle hem de bazlarla tepkimeye girebilen oksitlerdir. Alüminyum oksit (Al₂O₃) amfoter özellik gösterir."
      }
    ],
    'Biyoloji': [
      {
        question: "Hücre yapısı hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: "Bu sorunun cevabı B seçeneğidir. Hücre yapısı hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Organellerin görevleri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Organellerin görevleri hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Hücre bölünmesi süreçleri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Hücre bölünmesi süreçleri hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'Tarih': [
      {
        question: "Modern Türkiye'nin kuruluş sürecini öğrenceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "A seçeneği",
        explanation: "Bu sorunun cevabı A seçeneğidir. Modern Türkiye'nin kuruluş sürecini öğrenceksiniz."
      },
      {
        question: "Cumhuriyet'in ilanına giden olaylar zincirini öğrenceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: "Bu sorunun cevabı B seçeneğidir. Cumhuriyet'in ilanına giden olaylar zincirini öğrenceksiniz."
      },
      {
        question: "Orta Çağ tarihi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Orta Çağ tarihi hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'Coğrafya': [
      {
        question: "Türkiye'nin fiziki coğrafyasını öğrenceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Türkiye'nin fiziki coğrafyasını öğrenceksiniz."
      },
      {
        question: "İklim bilgisi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "A seçeneği",
        explanation: "Bu sorunun cevabı A seçeneğidir. İklim bilgisi hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Nüfus ve yerleşme hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: "Bu sorunun cevabı B seçeneğidir. Nüfus ve yerleşme hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'Felsefe': [
      {
        question: "Varoluşçuluk akımının tarihsel gelişimi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Varoluşçuluk akımının tarihsel gelişimi hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Bilgi felsefesi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Bilgi felsefesi hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Ahlak felsefesi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "A seçeneği",
        explanation: "Bu sorunun cevabı A seçeneğidir. Ahlak felsefesi hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'İngilizce': [
      {
        question: "Günlük konuşma kalıpları hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Günlük konuşma kalıpları hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Okuma becerileri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Okuma becerileri hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Yazma becerileri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "A seçeneği",
        explanation: "Bu sorunun cevabı A seçeneğidir. Yazma becerileri hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'Edebiyat': [
      {
        question: "Şiir analizi teknikleri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: "Bu sorunun cevabı B seçeneğidir. Şiir analizi teknikleri hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Roman türleri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Roman türleri hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Halk edebiyatı hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Halk edebiyatı hakkında kapsamlı bilgi edineceksiniz."
      }
    ]
  };
  
  return examplesBySubject[subject] || [];
};

/**
 * Get topic-specific examples based on subject and topic
 */
export const getTopicExamples = (subject: string, topic: string) => {
  const topicExamples: {[key: string]: any[]} = {
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
        question: "3x² - 12x + 9 ifadesinin çarpanlarına ayrılmış hali nedir?",
        options: ["3(x - 1)²", "3(x - 2)²", "3(x² - 4x + 3)", "(3x - 3)²"],
        answer: "3(x - 2)²",
        explanation: "3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x² - 4x + 4 - 1) = 3((x - 2)² - 1 + 1) = 3(x - 2)²"
      },
      {
        question: "sin(30°) + cos(60°) değeri nedir?",
        options: ["0.5", "1", "1.5", "2"],
        answer: "1",
        explanation: "sin(30°) = 0.5 ve cos(60°) = 0.5, toplam = 0.5 + 0.5 = 1"
      },
      {
        question: "f(x) = x² + 2x ve g(x) = 3x - 1 fonksiyonları için f(g(2)) değeri nedir?",
        options: ["34", "35", "36", "37"],
        answer: "35",
        explanation: "g(2) = 3(2) - 1 = 6 - 1 = 5, f(g(2)) = f(5) = 5² + 2(5) = 25 + 10 = 35"
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
        question: "Periyodu 0.5 saniye olan bir sarkacın frekansı nedir?",
        options: ["0.5 Hz", "1 Hz", "2 Hz", "4 Hz"],
        answer: "2 Hz",
        explanation: "Frekans = 1/Periyot, f = 1/0.5 = 2 Hz"
      },
      {
        question: "120 W gücünde çalışan bir elektrikli cihaz 2 saat çalıştırıldığında kaç joule enerji harcar?",
        options: ["60 J", "240 J", "7200 J", "864.000 J"],
        answer: "864.000 J",
        explanation: "E = P × t = 120 W × 2 saat × 3600 s/saat = 120 × 7200 = 864.000 J"
      },
      {
        question: "Sürtünmesiz bir yüzeyde durmakta olan 4 kg kütleli bir cisme 20 N'luk kuvvet 10 saniye boyunca uygulanıyor. Cisim bu süre sonunda kaç metre yol almış olur?",
        options: ["50 m", "100 m", "250 m", "500 m"],
        answer: "250 m",
        explanation: "F = ma, a = F/m = 20/4 = 5 m/s². x = (1/2)at² = 0.5 × 5 × 10² = 0.5 × 5 × 100 = 250 m"
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
        question: "Atomun çekirdeğinde bulunan parçacıklar hangileridir?",
        options: ["Proton ve elektron", "Nötron ve elektron", "Proton ve nötron", "Proton, nötron ve elektron"],
        answer: "Proton ve nötron",
        explanation: "Atom çekirdeğinde proton ve nötron bulunur, elektronlar ise çekirdeğin etrafındaki katmanlarda yer alır."
      },
      {
        question: "pH değeri 3 olan bir çözelti, pH değeri 6 olan bir çözeltiden kaç kat daha asidiktir?",
        options: ["2 kat", "3 kat", "100 kat", "1000 kat"],
        answer: "1000 kat",
        explanation: "pH skalası logaritmiktir. pH'daki her birim değişim, asitlik/bazlık konsantrasyonunda 10 katlık değişim anlamına gelir. 6-3 = 3 birim fark olduğundan, 10³ = 1000 kat daha asidiktir."
      },
      {
        question: "Aşağıdakilerden hangisi bir amfoter oksittir?",
        options: ["Na₂O", "CO₂", "Al₂O₃", "MgO"],
        answer: "Al₂O₃",
        explanation: "Amfoter oksitler hem asitlerle hem de bazlarla tepkimeye girebilen oksitlerdir. Alüminyum oksit (Al₂O₃) amfoter özellik gösterir."
      }
    ],
    'Biyoloji': [
      {
        question: "Hücre yapısı hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: "Bu sorunun cevabı B seçeneğidir. Hücre yapısı hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Organellerin görevleri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Organellerin görevleri hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Hücre bölünmesi süreçleri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Hücre bölünmesi süreçleri hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'Tarih': [
      {
        question: "Modern Türkiye'nin kuruluş sürecini öğrenceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "A seçeneği",
        explanation: "Bu sorunun cevabı A seçeneğidir. Modern Türkiye'nin kuruluş sürecini öğrenceksiniz."
      },
      {
        question: "Cumhuriyet'in ilanına giden olaylar zincirini öğrenceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: "Bu sorunun cevabı B seçeneğidir. Cumhuriyet'in ilanına giden olaylar zincirini öğrenceksiniz."
      },
      {
        question: "Orta Çağ tarihi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Orta Çağ tarihi hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'Coğrafya': [
      {
        question: "Türkiye'nin fiziki coğrafyasını öğrenceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Türkiye'nin fiziki coğrafyasını öğrenceksiniz."
      },
      {
        question: "İklim bilgisi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "A seçeneği",
        explanation: "Bu sorunun cevabı A seçeneğidir. İklim bilgisi hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Nüfus ve yerleşme hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: "Bu sorunun cevabı B seçeneğidir. Nüfus ve yerleşme hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'Felsefe': [
      {
        question: "Varoluşçuluk akımının tarihsel gelişimi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Varoluşçuluk akımının tarihsel gelişimi hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Bilgi felsefesi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Bilgi felsefesi hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Ahlak felsefesi hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "A seçeneği",
        explanation: "Bu sorunun cevabı A seçeneğidir. Ahlak felsefesi hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'İngilizce': [
      {
        question: "Günlük konuşma kalıpları hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Günlük konuşma kalıpları hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Okuma becerileri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Okuma becerileri hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Yazma becerileri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "A seçeneği",
        explanation: "Bu sorunun cevabı A seçeneğidir. Yazma becerileri hakkında kapsamlı bilgi edineceksiniz."
      }
    ],
    'Edebiyat': [
      {
        question: "Şiir analizi teknikleri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: "Bu sorunun cevabı B seçeneğidir. Şiir analizi teknikleri hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Roman türleri hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "C seçeneği",
        explanation: "Bu sorunun cevabı C seçeneğidir. Roman türleri hakkında kapsamlı bilgi edineceksiniz."
      },
      {
        question: "Halk edebiyatı hakkında kapsamlı bilgi edineceksiniz.",
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "D seçeneği",
        explanation: "Bu sorunun cevabı D seçeneğidir. Halk edebiyatı hakkında kapsamlı bilgi edineceksiniz."
      }
    ]
  };
  
  // Eğer konu için örnek bulunamazsa, dersin genel örneklerini gönder
  if (!topicExamples[subject] || !topicExamples[subject][topic] || topicExamples[subject][topic].length === 0) {
    // Her konu için 6 soru içeren bir dizi üret
    const baseExamples = getSubjectExamples(subject);
    const newExamples = [];
    
    // Mevcut sorulardan 6 tanesini al veya yeterli soru yoksa tümünü al
    for (let i = 0; i < 6 && i < baseExamples.length; i++) {
      newExamples.push(baseExamples[i]);
    }
    
    // Eğer 6'dan az soru varsa, eksik kalan kısmı varsayılan sorularla doldur
    while (newExamples.length < 6) {
      const questionIndex = newExamples.length + 1;
      newExamples.push({
        question: `${subject} - ${topic} için Soru ${questionIndex}`,
        options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
        answer: "B seçeneği",
        explanation: `Bu sorunun cevabı B seçeneğidir. ${subject} - ${topic} konusunda önemli bir bilgiyi test etmektedir.`
      });
    }
    
    return newExamples;
  }
  
  const topicSpecificExamples = topicExamples[subject][topic];
  
  // Eğer 6'dan az soru varsa, eksik kalan kısmı varsayılan sorularla doldur
  while (topicSpecificExamples.length < 6) {
    const questionIndex = topicSpecificExamples.length + 1;
    topicSpecificExamples.push({
      question: `${subject} - ${topic} için Soru ${questionIndex}`,
      options: ["A seçeneği", "B seçeneği", "C seçeneği", "D seçeneği"],
      answer: "C seçeneği",
      explanation: `Bu sorunun cevabı C seçeneğidir. ${subject} - ${topic} konusunda önemli bir bilgiyi test etmektedir.`
    });
  }
  
  return topicSpecificExamples;
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
  const existingVideos = allVideos.filter(video => 
    video.subject === subject && 
    video.grade === grade &&
    video.topic === topic
  );
  
  // If we already have 6 or more videos, return the first 6
  return existingVideos.slice(0, 6);
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
  // Ensure we have at least 6 videos for this topic
  return ensureTopicVideos(subject, grade, topic, allVideos);
};
