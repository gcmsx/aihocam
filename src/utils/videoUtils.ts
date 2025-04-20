
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
      'Atom Yapısı': "Bu videoda atom yapısı konusunu ele alıyoruz. Atomun parçacıkları, elektron dizilimi ve periyodik tablodaki yerleşim düzeni detaylı olarak anlatılmaktadır.",
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
      'Türklerin Anadolu'ya Gelişi': "Bu videoda Türklerin Anadolu'ya gelişini ele alıyoruz. Malazgirt Savaşı, Anadolu Selçuklu Devleti, beylikler dönemi ve Osmanlı'nın kuruluşu detaylı olarak incelenmektedir.",
      'Yakın Çağ Tarihi': "Bu videoda Yakın Çağ tarihi konusunu ele alıyoruz. Sanayi Devrimi, Fransız İhtilali, milliyetçilik hareketleri ve bu olayların dünya üzerindeki etkileri detaylı olarak anlatılmaktadır."
    },
    'Coğrafya': {
      'Türkiye Fiziki Coğrafyası': "Bu videoda Türkiye'nin fiziki coğrafyası konusunu ele alıyoruz. Dağlar, ovalar, platolar, akarsular ve iklim özellikleri detaylı olarak incelenmektedir.",
      'İklim Bilgisi': "Bu videoda iklim bilgisi konusunu ele alıyoruz. İklim tipleri, iklim elemanları, basınç sistemleri ve iklim değişikliği detaylı olarak anlatılmaktadır.",
      'Nüfus ve Yerleşme': "Bu videoda nüfus ve yerleşme konusunu ele alıyoruz. Nüfus artışı, nüfus dağılışı, göçler, kentleşme ve yerleşme tipleri detaylı olarak incelenmektedir.",
      'Ekonomik Faaliyetler': "Bu videoda ekonomik faaliyetler konusunu ele alıyoruz. Tarım, hayvancılık, sanayi, madencilik, ticaret ve turizm faaliyetleri detaylı olarak anlatılmaktadır.",
      'Doğal Afetler': "Bu videoda doğal afetler konusunu ele alıyoruz. Depremler, volkanik patlamalar, tsunami, sel, heyelan ve kuraklık gibi doğal afetlerin oluşumu ve etkileri detaylı olarak incelenmektedir.",
      'Dünya'nın Şekli ve Hareketleri': "Bu videoda Dünya'nın şekli ve hareketleri konusunu ele alıyoruz. Dünya'nın günlük ve yıllık hareketleri, sonuçları ve mevsimler detaylı olarak anlatılmaktadır.",
      'Harita Bilgisi': "Bu videoda harita bilgisi konusunu ele alıyoruz. Harita çeşitleri, ölçek, projeksiyon, koordinat sistemleri ve harita okuma teknikleri detaylı olarak incelenmektedir.",
      'Kıtalar ve Okyanuslar': "Bu videoda kıtalar ve okyanuslar konusunu ele alıyoruz. Dünya'nın büyük kara parçaları ve su kütleleri, özellikleri ve önemi detaylı olarak anlatılmaktadır.",
      'Toprak Bilgisi': "Bu videoda toprak bilgisi konusunu ele alıyoruz. Toprak oluşumu, toprak türleri, toprak erozyonu ve toprak koruması konuları detaylı olarak incelenmektedir.",
      'Türkiye'nin Beşeri Coğrafyası': "Bu videoda Türkiye'nin beşeri coğrafyası konusunu ele alıyoruz. Nüfus özellikleri, yerleşme tipleri, ekonomik faaliyetler ve kültürel çeşitlilik detaylı olarak anlatılmaktadır."
    },
    'Felsefe': {
      'Varlık Felsefesi': "Bu videoda varlık felsefesi konusunu ele alıyoruz. Ontolojinin temel kavramları, varlık türleri, varlık problemleri ve farklı düşünürlerin varlık görüşleri detaylı olarak anlatılmaktadır.",
      'Bilgi Felsefesi': "Bu videoda bilgi felsefesi konusunu ele alıyoruz. Epistemolojinin temel kavramları, bilginin kaynağı, doğruluğu ve sınırları detaylı olarak incelenmektedir.",
      'Ahlak Felsefesi': "Bu videoda ahlak felsefesi konusunu ele alıyoruz. Etik teoriler, ahlaki değerler, özgürlük ve sorumluluk kavramları detaylı olarak anlatılmaktadır.",
      'Siyaset Felsefesi': "Bu videoda siyaset felsefesi konusunu ele alıyoruz. Devlet teorileri, siyasi sistemler, adalet kavramı ve ideal toplum tartışmaları detaylı olarak incelenmektedir.",
      'Sanat Felsefesi': "Bu videoda sanat felsefesi konusunu ele alıyoruz. Estetik, güzellik kavramı, sanat eserinin değeri ve sanat türleri detaylı olarak anlatılmaktadır.",
      'Mantık': "Bu videoda mantık konusunu ele alıyoruz. Mantığın temelleri, akıl yürütme biçimleri, sembolik mantık ve mantık hataları detaylı olarak incelenmektedir.",
      'Felsefeye Giriş': "Bu videoda felsefeye giriş konusunu ele alıyoruz. Felsefenin anlamı, doğuşu, temel soruları ve diğer disiplinlerle ilişkisi detaylı olarak anlatılmaktadır.",
      'İslam Felsefesi': "Bu videoda İslam felsefesi konusunu ele alıyoruz. İslam felsefesinin kaynakları, önemli İslam filozofları, Meşşailik ve İşrakilik akımları detaylı olarak incelenmektedir.",
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
      'Divan Edebiyatı': "Bu videoda divan edebiyatı konusunu ele alıyoruz. Divan şiiri özellikleri, nazım şekilleri, mazmunlar ve önemli divan şairleri detaylı olarak incelenmektedir.",
      'Tanzimat Edebiyatı': "Bu videoda Tanzimat edebiyatı konusunu ele alıyoruz. Tanzimat döneminin tarihsel arka planı, Tanzimat edebiyatının özellikleri ve önemli temsilcileri detaylı olarak anlatılmaktadır.",
      'Servet-i Fünun Edebiyatı': "Bu videoda Servet-i Fünun edebiyatı konusunu ele alıyoruz. Dönemin edebi anlayışı, dil özellikleri ve önemli temsilcileri detaylı olarak incelenmektedir.",
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
      },
      {
        question: "Hücresel solunumun son ürünleri nelerdir?",
        options: ["Glikoz ve oksijen", "CO₂ ve H₂O", "ATP ve O₂", "Pirüvat ve NADH"],
        answer: "CO₂ ve H₂O",
        explanation: "Hücresel solunumun son ürünleri karbondioksit (CO₂) ve su (H₂O)'dur. Ayrıca bu süreçte ATP üretilir."
      },
      {
        question: "Aşağıdakilerden hangisi prokaryotik bir hücre örneğidir?",
        options: ["Mantar hücresi", "Hayvan hücresi", "Bakteri hücresi", "Bitki hücresi"],
        answer: "Bakteri hücresi",
        explanation: "Prokaryotik hücreler zarla çevrili bir çekirdeğe sahip değildir. Bakteriler prokaryotik hücre yapısına sahiptir."
      },
      {
        question: "Aşağıdaki hastalıklardan hangisi virüslerin neden olduğu bir hastalık değildir?",
        options: ["Grip", "AIDS", "Tüberküloz", "COVID-19"],
        answer: "Tüberküloz",
        explanation: "Tüberküloz, Mycobacterium tuberculosis adlı bir bakteri tarafından neden olur. Diğer seçeneklerdeki hastalıklar virüs kaynaklıdır."
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
      },
      {
        question: "Birinci Dünya Savaşı hangi yıllar arasında gerçekleşmiştir?",
        options: ["1914-1918", "1915-1919", "1913-1917", "1911-1917"],
        answer: "1914-1918",
        explanation: "Birinci Dünya Savaşı 28 Temmuz 1914'te başlamış, 11 Kasım 1918'de sona ermiştir."
      },
      {
        question: "Aşağıdakilerden hangisi Atatürk'ün milliyetçilik ilkesini ifade eder?",
        options: ["Halkçılık", "Devletçilik", "Ulusçuluk", "Laiklik"],
        answer: "Ulusçuluk",
        explanation: "Atatürk'ün milliyetçilik ilkesi, Ulusçuluk olarak da adlandırılır. Bu ilke, Türk milletinin birlik ve beraberlik içinde yaşamasını amaçlar."
      },
      {
        question: "İstanbul'un fethi hangi tarihte gerçekleşmiştir?",
        options: ["1451", "1453", "1455", "1461"],
        answer: "1453",
        explanation: "İstanbul, Fatih Sultan Mehmet tarafından 29 Mayıs 1453 tarihinde fethedilmiştir."
      },
      {
        question: "Kurtuluş Savaşı'nın başlangıcı olarak kabul edilen tarih hangisidir?",
        options: ["23 Nisan 1920", "19 Mayıs 1919", "29 Ekim 1923", "30 Ağustos 1922"],
        answer: "19 Mayıs 1919",
        explanation: "Mustafa Kemal'in Samsun'a çıktığı tarih olan 19 Mayıs 1919, Kurtuluş Savaşı'nın başlangıcı olarak kabul edilir."
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
      },
      {
        question: "Aşağıdakilerden hangisi Akdeniz ikliminin özelliklerinden biri değildir?",
        options: ["Yazları sıcak ve kurak", "Kışları ılık ve yağışlı", "Yıl boyu bol yağış alması", "Maki bitki örtüsünün yaygın olması"],
        answer: "Yıl boyu bol yağış alması",
        explanation: "Akdeniz ikliminde yıl boyu bol yağış görülmez. Bu iklimde yağışlar kış aylarında yoğunlaşır, yazlar ise sıcak ve kuraktır."
      },
      {
        question: "Türkiye'nin en büyük gölü hangisidir?",
        options: ["Tuz Gölü", "Beyşehir Gölü", "Van Gölü", "İznik Gölü"],
        answer: "Van Gölü",
        explanation: "Türkiye'nin en büyük gölü, 3713 km² yüzölçümü ile Van Gölü'dür."
      },
      {
        question: "Hangi şehir Mezopotamya üzerinde kurulmuştur?",
        options: ["Konya", "Diyarbakır", "İzmir", "Ankara"],
        answer: "Diyarbakır",
        explanation: "Diyarbakır, Dicle ve Fırat nehirleri arasındaki Mezopotamya bölgesinde yer alır."
      },
      {
        question: "Aşağıdakilerden hangisi bir Doğu Anadolu kentidir?",
        options: ["Samsun", "Erzurum", "Antalya", "Edirne"],
        answer: "Erzurum",
        explanation: "Erzurum, Türkiye'nin Doğu Anadolu Bölgesi'nde yer alan bir şehirdir."
      }
    ],
    'Felsefe': [
      {
        question: "Aşağıdakilerden hangisi Sokrates'in felsefi yöntemini ifade eder?",
        options: ["Diyalektik", "Analitik", "Hermeneutik", "Fenomenolojik"],
        answer: "Diyalektik",
        explanation: "Sokrates, diyalektik yöntem olarak bilinen soru-cevap tekniğiyle karşısındakine sorular sorarak bilgiye ulaşmayı hedeflemiştir."
      },
      {
        question: "\"Düşünüyorum, öyleyse varım\" sözü hangi filozofa aittir?",
        options: ["Platon", "Aristoteles", "Descartes", "Kant"],
        answer: "Descartes",
        explanation: "\"Cogito ergo sum\" (Düşünüyorum, öyleyse varım) sözü, René Descartes'a aittir ve modern felsefenin başlangıcı olarak kabul edilir."
      },
      {
        question: "Aşağıdakilerden hangisi epistemolojinin inceleme konusudur?",
        options: ["Varlık", "Bilgi", "Ahlak", "Siyaset"],
        answer: "Bilgi",
        explanation: "Epistemoloji, bilgi felsefesidir ve bilginin doğası, kaynakları, sınırları ve geçerliliği ile ilgilenir."
      },
      {
        question: "\"Kategorik imperatif\" kavramı hangi filozofa aittir?",
        options: ["Nietzsche", "Kant", "Hegel", "Sartre"],
        answer: "Kant",
        explanation: "Kategorik imperatif (kesin buyruk), Immanuel Kant'ın ahlak felsefesinin temel kavramıdır."
      },
      {
        question: "Varoluşçuluk akımının kurucusu olarak kabul edilen filozof kimdir?",
        options: ["Jean-Paul Sartre", "Søren Kierkegaard", "Friedrich Nietzsche", "Albert Camus"],
        answer: "Søren Kierkegaard",
        explanation: "Søren Kierkegaard, varoluşçuluk akımının kurucusu olarak kabul edilir. 19. yüzyılda yaşamış Danimarkalı bir filozoftur."
      },
      {
        question: "\"İdeal devlet\" düşüncesini ortaya koyan filozof kimdir?",
        options: ["Platon", "Aristoteles", "Machiavelli", "Thomas Hobbes"],
        answer: "Platon",
        explanation: "Platon, 'Devlet' adlı eserinde filozof kralların yönettiği ideal devlet düşüncesini ortaya koymuştur."
      }
    ],
    'İngilizce': [
      {
        question: "Which of the following is a correct sentence?",
        options: ["She don't like coffee.", "He have a car.", "They goes to school every day.", "We are studying now."],
        answer: "We are studying now.",
        explanation: "We are studying now - Bu cümle doğru özne-yüklem uyumuna sahiptir ve present continuous tense (şimdiki zaman) kurallarına uygundur."
      },
      {
        question: "Choose the correct question form: \"_____ she lived in London?\"",
        options: ["Has", "Have", "Did", "Does"],
        answer: "Has",
        explanation: "\"Has she lived in London?\" - Present Perfect Tense (şimdiki mükemmel zaman) ile soru cümlesi oluşturulurken tekil 3. şahıslar için \"has\" yardımcı fiili kullanılır."
      },
      {
        question: "What is the past simple form of the verb \"go\"?",
        options: ["goed", "gone", "went", "going"],
        answer: "went",
        explanation: "\"Go\" fiilinin past simple (geçmiş zaman) hali \"went\"tir. Bu düzensiz bir fiildir."
      },
      {
        question: "Which word is an adjective?",
        options: ["quickly", "beautiful", "run", "happiness"],
        answer: "beautiful",
        explanation: "\"Beautiful\" bir sıfattır (adjective). \"Quickly\" bir zarf (adverb), \"run\" bir fiil (verb), \"happiness\" bir isimdir (noun)."
      },
      {
        question: "Complete the sentence: \"If it rains tomorrow, I _____ at home.\"",
        options: ["stay", "will stay", "would stay", "have stayed"],
        answer: "will stay",
        explanation: "Birinci tip şart cümlesinde (gerçekleşme ihtimali olan), \"if\" yan cümlesi simple present tense ile, ana cümle ise will + infinitive ile kurulur: \"If it rains tomorrow, I will stay at home.\""
      },
      {
        question: "Which sentence uses the correct preposition?",
        options: ["She is afraid from dogs.", "I am interested on history.", "He is good at playing chess.", "They arrived at Spain yesterday."],
        answer: "He is good at playing chess.",
        explanation: "\"Good at\" doğru bir edat kullanımıdır. Diğerleri şöyle olmalıdır: \"afraid of\", \"interested in\" ve \"arrived in\" (ülkeler için)."
      }
    ],
    'Edebiyat': [
      {
        question: "Aşağıdakilerden hangisi Tanzimat Dönemi yazarlarından biridir?",
        options: ["Namık Kemal", "Cahit Sıtkı Tarancı", "Necip Fazıl Kısakürek", "Orhan Pamuk"],
        answer: "Namık Kemal",
        explanation: "Namık Kemal, Tanzimat Dönemi'nin önemli yazarlarındandır. 'Vatan yahut Silistre' adlı eseri bu dönemin önemli eserlerindendir."
      },
      {
        question: "Aşağıdakilerden hangisi bir halk edebiyatı nazım biçimidir?",
        options: ["Gazel", "Kaside", "Koşma", "Şarkı"],
        answer: "Koşma",
        explanation: "Koşma, halk edebiyatına ait bir nazım biçimidir. Diğer seçenekler divan edebiyatına ait nazım biçimleridir."
      },
      {
        question: "Edebiyatımızda 'Beş Hececiler' olarak bilinen şair grubu hangi dönemde ortaya çıkmıştır?",
        options: ["Tanzimat", "Servet-i Fünun", "Milli Edebiyat", "Garip Akımı"],
        answer: "Milli Edebiyat",
        explanation: "Beş Hececiler (Faruk Nafiz Çamlıbel, Enis Behiç Koryürek, Halit Fahri Ozansoy, Orhan Seyfi Orhon, Yusuf Ziya Ortaç), Milli Edebiyat döneminde ortaya çıkan bir şair grubudur."
      },
      {
        question: "\"İnce Memed\" adlı eser hangi yazarımıza aittir?",
        options: ["Orhan Pamuk", "Yaşar Kemal", "Halide Edip Adıvar", "Reşat Nuri Güntekin"],
        answer: "Yaşar Kemal",
        explanation: "\"İnce Memed\" Yaşar Kemal'in en bilinen romanıdır ve Çukurova'da geçen bir eşkıya hikayesini anlatır."
      },
      {
        question: "Aşağıdakilerden hangisi bir masal türüdür?",
        options: ["Fabl", "Roman", "Makale", "Deneme"],
        answer: "Fabl",
        explanation: "Fabl, kahramanları genellikle hayvanlar olan ve sonunda ahlaki bir ders çıkarılan kısa masal türüdür."
      },
      {
        question: "\"Otuz Beş Yaş\" şiiri hangi şairimize aittir?",
        options: ["Nazım Hikmet", "Cahit Sıtkı Tarancı", "Orhan Veli Kanık", "Necip Fazıl Kısakürek"],
        answer: "Cahit Sıtkı Tarancı",
        explanation: "\"Otuz Beş Yaş\" şiiri, Cahit Sıtkı Tarancı'nın en bilinen şiirlerinden biridir. \"Yaş otuz beş! Yolun yarısı eder.\" dizesiyle başlar."
      }
    ]
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
        },
        {
          question: "f(x) = x² + 3x + 2 fonksiyonunun grafiğinin tepe noktasının koordinatları nedir?",
          options: ["(-1.5, -0.25)", "(-1.5, 0.25)", "(-1.5, -1.25)", "(-0.5, 0.75)"],
          answer: "(-1.5, -0.25)",
          explanation: "f(x) = x² + 3x + 2 için x = -b/2a = -3/2 = -1.5, f(-1.5) = (-1.5)² + 3(-1.5) + 2 = 2.25 - 4.5 + 2 = -0.25"
        },
        {
          question: "f(x) = 2^x ve g(x) = log₂x fonksiyonları için f(g(8)) değeri nedir?",
          options: ["3", "4", "8", "16"],
          answer: "8",
          explanation: "g(8) = log₂8 = 3, f(g(8)) = f(3) = 2³ = 8"
        },
        {
          question: "Aşağıdaki fonksiyonlardan hangisi birebir ve örtendirmedir?",
          options: ["f(x) = x²", "f(x) = |x|", "f(x) = x³", "f(x) = sin(x)"],
          answer: "f(x) = x³",
          explanation: "Bir fonksiyonun birebir ve örten olması için her elemanın sadece bir görüntüsü olmalı ve her eleman fonksiyonun değer kümesinde bulunmalıdır. x³ fonksiyonu bu şartları sağlar."
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
        },
        {
          question: "sin(α) = 3/5 ise cos(α) değeri kaçtır?",
          options: ["3/5", "4/5", "5/4", "4/3"],
          answer: "4/5",
          explanation: "sin²(α) + cos²(α) = 1, cos²(α) = 1 - sin²(α) = 1 - (3/5)² = 1 - 9/25 = 16/25, cos(α) = 4/5 (α birinci bölgede olduğundan)"
        },
        {
          question: "tan(α) = 1 ise sin(2α) değeri kaçtır?",
          options: ["1/2", "√2/2", "1", "2"],
          answer: "1",
          explanation: "sin(2α) = 2sin(α)cos(α), tan(α) = 1 ise sin(α) = cos(α), sin(2α) = 2sin(α)cos(α) = 2sin²(α) = 2cos²(α) = 1"
        },
        {
          question: "Bir üçgenin kenar uzunlukları 3, 4 ve 5 birim ise en büyük açısı kaç derecedir?",
          options: ["60°", "75°", "90°", "120°"],
          answer: "90°",
          explanation: "3² + 4² = 5² olduğundan bu bir dik üçgendir. En uzun kenara karşılık gelen açı en büyük açıdır ve değeri 90° dir."
        },
        {
          question: "sin(α+β) = sin(α)cos(β) + cos(α)sin(β) ifadesi hangi trigonometrik özdeşliğin karşılığıdır?",
          options: ["Sinüsün toplamı", "Kosinüsün toplamı", "Tanjantın toplamı", "Katların formülü"],
          answer: "Sinüsün toplamı",
          explanation: "Bu formül, trigonometrik toplamı formüllerinden sinüsün toplamı formülüdür: sin(α+β) = sin(α)cos(β) + cos(α)sin(β)"
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
        },
        {
          question: "log₅ 125 değeri nedir?",
          options: ["2", "3", "5", "25"],
          answer: "3",
          explanation: "log₅ 125 = log₅ 5³ = 3"
        },
        {
          question: "log₁₀ 0.01 değeri nedir?",
          options: ["-3", "-2", "-1", "0.01"],
          answer: "-2",
          explanation: "log₁₀ 0.01 = log₁₀ 10⁻² = -2"
        },
        {
          question: "log₄ 16 / log₄ 8 değeri nedir?",
          options: ["1", "2", "3/2", "4/3"],
          answer: "4/3",
          explanation: "log₄ 16 = log₄ 4² = 2, log₄ 8 = log₄ 2³ = 3 · log₄ 2 = 3/2, 2/(3/2) = 4/3"
        },
        {
          question: "log₃(x) = 4 ise x değeri nedir?",
          options: ["12", "27", "64", "81"],
          answer: "81",
          explanation: "log₃(x) = 4 ise x = 3⁴ = 81"
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
        },
        {
          question: "İlk hızı 15 m/s olan bir araç 3 m/s² sabit ivme ile yavaşlayarak duruyor. Aracın durma süresi ne kadardır?",
          options: ["3 s", "5 s", "8 s", "10 s"],
          answer: "5 s",
          explanation: "v = v₀ + at, 0 = 15 + (-3)t, t = 15/3 = 5 s"
        },
        {
          question: "Bir cisim 20 N'luk kuvvetle 10 metre çekiliyor. Yapılan iş ne kadardır?",
          options: ["2 J", "20 J", "200 J", "2000 J"],
          answer: "200 J",
          explanation: "W = F × d = 20 N × 10 m = 200 J"
        },
        {
          question: "Kütlesi 2 kg olan bir cisim, 5 m/s hızla hareket ediyor. Bu cismin kinetik enerjisi kaç joule'dür?",
          options: ["5 J", "10 J", "25 J", "50 J"],
          answer: "25 J",
          explanation: "Ek = (1/2)mv² = 0.5 × 2 × 5² = 0.5 × 2 × 25 = 25 J"
        },
        {
          question: "Düzgün dairesel hareket yapan bir cisim için aşağıdakilerden hangisi doğrudur?",
          options: ["Hızın büyüklüğü değişir", "İvme yoktur", "Merkezcil kuvvet, hareket doğrultusundadır", "Açısal hız sabittir"],
          answer: "Açısal hız sabittir",
          explanation: "Düzgün dairesel harekette açısal hız sabittir. Hızın yönü sürekli değiştiği için ivme vardır ve merkezcil kuvvet daima merkeze doğrudur."
        }
      ],
      'Elektrik': [
        {
          question: "10 Ω dirençli bir iletkenin uçlarına 20 V potansiyel farkı uygulanırsa, akım şiddeti ne olur?",
          options: ["0.5 A", "2 A", "5 A", "10 A"],
          answer: "2 A",
          explanation: "Ohm Kanunu: I = V/R = 20/10 = 2 A"
        },
        {
          question: "Birbirinin aynı 6 Ω'luk dirençler paralel bağlanırsa eşdeğer direnç ne olur?",
          options: ["1 Ω", "2 Ω", "3 Ω", "12 Ω"],
          answer: "3 Ω",
          explanation: "1/Req = 1/R₁ + 1/R₂ = 1/6 + 1/6 = 2/6, Req = 6/2 = 3 Ω"
        },
        {
          question: "0.5 A akımın bir iletken üzerinden 10 dakika boyunca geçmesi durumunda transfer edilen yük miktarı ne kadardır?",
          options: ["300 C", "600 C", "30 C", "5 C"],
          answer: "300 C",
          explanation: "Q = I × t = 0.5 A × 10 × 60 s = 0.5 × 600 = 300 C"
        },
        {
          question: "100 watt gücündeki bir ampul 220 volt gerilimle çalıştığında üzerinden geçen akım şiddeti ne kadardır?",
          options: ["0.45 A", "0.66 A", "2.2 A", "4.55 A"],
          answer: "0.45 A",
          explanation: "P = V × I, I = P/V = 100/220 = 0.45 A"
        },
        {
          question: "Kapasitesi 1000 mAh olan bir bataryadan 250 mA akım çekilirse batarya kaç saat dayanır?",
          options: ["2 saat", "4 saat", "6 saat", "8 saat"],
          answer: "4 saat",
          explanation: "Süre = Kapasite / Akım = 1000 mAh / 250 mA = 4 saat"
        },
        {
          question: "İki paralel iletken tel arasındaki manyetik kuvvet, aralarındaki mesafenin karesi ile nasıl değişir?",
          options: ["Doğru orantılıdır", "Ters orantılıdır", "İlişkisi yoktur", "Karesiyle doğru orantılıdır"],
          answer: "Ters orantılıdır",
          explanation: "İki paralel iletken tel arasındaki manyetik kuvvet, aralarındaki mesafenin karesiyle ters orantılıdır. F ∝ 1/r²"
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
        },
        {
          question: "Aşağıdaki atomik parçacıklardan hangisi en büyük kütleye sahiptir?",
          options: ["Proton", "Elektron", "Nötron", "Pozitron"],
          answer: "Nötron",
          explanation: "Nötron, protondan biraz daha ağırdır. Elektron ise proton ve nötrondan çok daha hafiftir."
        },
        {
          question: "Atom numarası 8, kütle numarası 16 olan bir atomun nötron sayısı kaçtır?",
          options: ["8", "16", "24", "32"],
          answer: "8",
          explanation: "Nötron sayısı = Kütle numarası - Atom numarası = 16 - 8 = 8"
        },
        {
          question: "Elektronların atom içindeki yerlerini belirleyen temel ilke aşağıdakilerden hangisidir?",
          options: ["Pauling ilkesi", "Aufbau ilkesi", "Heisenberg belirsizlik ilkesi", "Hund kuralı"],
          answer: "Aufbau ilkesi",
          explanation: "Aufbau ilkesi, elektronların atom içinde yerleşiminde öncelikle düşük enerji seviyelerinin doldurulacağını belirtir."
        },
        {
          question: "2s orbitalinde maksimum kaç elektron bulunabilir?",
          options: ["1", "2", "6", "10"],
          answer: "2",
          explanation: "Her orbital maksimum 2 elektron alabilir. s orbitalleri bir orbitalden oluştuğundan 2s orbitalinde maksimum 2 elektron bulunabilir."
        },
        {
          question: "İzotop atomlar aşağıdakilerden hangisi bakımından farklılık gösterir?",
          options: ["Proton sayısı", "Elektron sayısı", "Nötron sayısı", "Atom numarası"],
          answer: "Nötron sayısı",
          explanation: "İzotop atomlar aynı elementin farklı nötron sayılarına sahip atomlarıdır. Proton sayıları (atom numaraları) aynıdır."
        }
      ],
      'Kimyasal Bağlar': [
        {
          question: "Hangi bağ türünde elektronlar atomlar arasında ortaklaşa kullanılır?",
          options: ["İyonik bağ", "Kovalent bağ", "Metalik bağ", "Hidrojen bağı"],
          answer: "Kovalent bağ",
          explanation: "Kovalent bağda, atomlar arasında elektronlar ortaklaşa kullanılır."
        },
        {
          question: "NaCl bileşiğinde hangi tür bağ bulunur?",
          options: ["İyonik bağ", "Kovalent bağ", "Metalik bağ", "Hidrojen bağı"],
          answer: "İyonik bağ",
          explanation: "NaCl'de Na+ ve Cl- iyonları arasında iyonik bağ bulunur."
        },
        {
          question: "H2O molekülleri arasında aşağıdaki bağlardan hangisi mevcuttur?",
          options: ["İyonik bağ", "Polar kovalent bağ", "Hidrojen bağı", "Metalik bağ"],
          answer: "Hidrojen bağı",
          explanation: "H2O molekülleri arasında hidrojen bağı bulunur. (Molekül içinde polar kovalent bağ vardır.)"
        },
        {
          question: "Aşağıdaki bileşiklerden hangisinde polar kovalent bağ bulunur?",
          options: ["O2", "Cl2", "H2O", "Na2O"],
          answer: "H2O",
          explanation: "H2O'da O ve H atomları arasında elektronegatiflik farkından dolayı polar kovalent bağ bulunur."
        },
        {
          question: "Hidrojen bağı aşağıdaki molekül çiftlerinin hangisinde görülür?",
          options: ["CH4 - CH4", "NH3 - NH3", "CO2 - CO2", "CCl4 - CCl4"],
          answer: "NH3 - NH3",
          explanation: "NH3 molekülleri arasında, N atomuna bağlı H atomu ile diğer moleküldeki N atomu arasında hidrojen bağı oluşabilir."
        },
        {
          question: "İyonik bileşiklerle ilgili aşağıdakilerden hangisi yanlıştır?",
          options: ["Oda sıcaklığında genellikle katı haldedir", "Suda genellikle iyi çözünürler", "Erimiş halde elektriği iletirler", "Moleküler yapıdadırlar"],
          answer: "Moleküler yapıdadırlar",
          explanation: "İyonik bileşikler moleküler yapıda değildir, iyonik kafes yapısındadır."
        }
      ]
    }
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
  // Check if videos for this topic already exist
  let existingVideos = allVideos.filter(
    video => video.subject === subject && video.grade === grade && video.topic === topic
  );
  
  // If we already have videos for this topic but less than 6, add more until we have 6
  if (existingVideos.length > 0 && existingVideos.length < 6) {
    const additionalNeeded = 6 - existingVideos.length;
    for (let i = 0; i < additionalNeeded; i++) {
      const videoId = Math.floor(Math.random() * 10000) + existingVideos.length + 1;
      const newVideo = {
        id: videoId,
        title: `${subject} ${grade}. Sınıf - ${topic} Konu Anlatımı ${existingVideos.length + i + 1}`,
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
      existingVideos.push(newVideo);
    }
    return existingVideos;
  }
  
  // If we have no videos for this topic, create 6 new videos
  if (existingVideos.length === 0) {
    const newVideos = [];
    for (let i = 0; i < 6; i++) {
      const videoId = Math.floor(Math.random() * 10000) + i + 1;
      const newVideo = {
        id: videoId,
        title: `${subject} ${grade}. Sınıf - ${topic} Konu Anlatımı ${i + 1}`,
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
      newVideos.push(newVideo);
    }
    return newVideos;
  }
  
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

