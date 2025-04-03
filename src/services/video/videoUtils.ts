
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
      },
      {
        question: "Sürtünmesiz bir ortamda 100 N'luk kuvvet uygulanan 25 kg'lık bir cismin ivmesi nedir?",
        options: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²"],
        answer: "4 m/s²",
        explanation: "F = ma formülünden, a = F/m = 100 N / 25 kg = 4 m/s²"
      },
      {
        question: "Sabit bir hızla hareket eden araç için hangi ifade doğrudur?",
        options: ["Net kuvvet sıfırdır", "İvme artar", "Hız zamanla artmalıdır", "Momentum sabittir"],
        answer: "Net kuvvet sıfırdır",
        explanation: "Newton'un birinci yasasına göre, cismin ivmesi yoksa (sabit hız), üzerine etki eden net kuvvet sıfırdır."
      },
      {
        question: "Bir taşın kinetik enerjisi 250 Joule ve kütlesi 2 kg ise, taşın hızı kaç m/s'dir?",
        options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
        answer: "15.8 m/s",
        explanation: "Kinetik enerji formülü E = (1/2)mv² kullanarak: 250 J = (1/2) × 2 kg × v², v² = 250, v = 15.8 m/s"
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
        question: "3x² - 12x + 9 ifadesinin çarpanları nelerdir?",
        options: ["(3x - 3)²", "(3x + 3)²", "(x - 1)³", "(3x - 3)(x - 3)"],
        answer: "(3x - 3)²",
        explanation: "3x² - 12x + 9 = 3(x² - 4x + 3) = 3(x - 1)² = (3x - 3)²"
      },
      {
        question: "Bir düzgün altıgenin iç açılarının toplamı kaç derecedir?",
        options: ["540°", "720°", "900°", "1080°"],
        answer: "720°",
        explanation: "n kenarlı bir düzgün çokgende iç açılar toplamı (n-2)×180° formülüyle hesaplanır. Altıgen için n=6, (6-2)×180° = 4×180° = 720°"
      },
      {
        question: "f(x) = x³ - 3x² + 2x fonksiyonunun x = 2 noktasındaki türevi nedir?",
        options: ["2", "4", "6", "8"],
        answer: "4",
        explanation: "f'(x) = 3x² - 6x + 2, f'(2) = 3×2² - 6×2 + 2 = 12 - 12 + 2 = 2"
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
        question: "Hangi madde suda çözündüğünde elektriği iletmez?",
        options: ["NaCl", "HCl", "C₁₂H₂₂O₁₁ (şeker)", "H₂SO₄"],
        answer: "C₁₂H₂₂O₁₁ (şeker)",
        explanation: "Şeker suda çözündüğünde iyonlarına ayrışmaz, moleküler halde kalır. Bu nedenle elektriği iletmez."
      },
      {
        question: "Aşağıdakilerden hangisi amfoter özellik gösterir?",
        options: ["NaOH", "HCl", "Al(OH)₃", "KOH"],
        answer: "Al(OH)₃",
        explanation: "Amfoter maddeler hem asit hem de baz olarak davranabilir. Al(OH)₃ bu özelliğe sahiptir, asitlerle ve bazlarla tepkime verebilir."
      },
      {
        question: "Atomun çekirdeğinde hangi parçacıklar bulunur?",
        options: ["Proton ve elektron", "Nötron ve elektron", "Proton ve nötron", "Sadece proton"],
        answer: "Proton ve nötron",
        explanation: "Atom çekirdeği proton ve nötronlardan oluşur. Elektronlar çekirdeğin etrafındaki orbital bulutunda bulunur."
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
      },
      {
        question: "Fotosentez olayında bitkiler hangi gazı kullanıp hangi gazı açığa çıkarır?",
        options: ["O₂ kullanır, CO₂ açığa çıkarır", "CO₂ kullanır, O₂ açığa çıkarır", "O₂ kullanır, H₂O açığa çıkarır", "N₂ kullanır, O₂ açığa çıkarır"],
        answer: "CO₂ kullanır, O₂ açığa çıkarır",
        explanation: "Fotosentez sırasında bitkiler, karbondioksit (CO₂) ve su (H₂O) kullanarak güneş enerjisi yardımıyla glikoz üretir ve oksijen (O₂) açığa çıkarır."
      },
      {
        question: "Hangi hücre organeli proteinlerin sentezinden sorumludur?",
        options: ["Mitokondri", "Lizozom", "Ribozom", "Golgi aygıtı"],
        answer: "Ribozom",
        explanation: "Ribozomlar, mRNA'daki genetik bilgiyi kullanarak protein sentezi yapar. Hücrelerde serbest halde veya endoplazmik retikulum üzerinde bulunabilirler."
      },
      {
        question: "İnsanda aşağıdaki sindirim enzimlerinden hangisi karbonhidratları sindirir?",
        options: ["Pepsin", "Lipaz", "Amilaz", "Tripsin"],
        answer: "Amilaz",
        explanation: "Amilaz, nişasta gibi kompleks karbonhidratları daha küçük moleküllere parçalayan bir enzimdir. Tükürük ve pankreas tarafından salgılanır."
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
      },
      {
        question: "Malazgirt Savaşı hangi Türk devleti döneminde gerçekleşmiştir?",
        options: ["Osmanlı Devleti", "Selçuklu Devleti", "Karahanlılar", "İlhanlılar"],
        answer: "Selçuklu Devleti",
        explanation: "Malazgirt Savaşı, 1071 yılında Büyük Selçuklu Devleti hükümdarı Alparslan ile Bizans İmparatoru Romen Diyojen arasında gerçekleşmiştir."
      },
      {
        question: "Aşağıdakilerden hangisi Atatürk'ün kaleminden çıkan bir eserdir?",
        options: ["İstiklal Marşı", "Nutuk", "Safahat", "Çalıkuşu"],
        answer: "Nutuk",
        explanation: "Nutuk, Mustafa Kemal Atatürk'ün 15-20 Ekim 1927 tarihlerinde verdiği ve Kurtuluş Savaşı'nı ve Cumhuriyet'in kuruluşunu anlattığı tarihi söylevdir."
      },
      {
        question: "Aşağıdaki hangi inkılap, Türkiye'de laikleşme sürecinde önemli bir adımdır?",
        options: ["Şapka Kanunu", "Soyadı Kanunu", "Tevhid-i Tedrisat Kanunu", "Kabotaj Kanunu"],
        answer: "Tevhid-i Tedrisat Kanunu",
        explanation: "3 Mart 1924'te çıkarılan Tevhid-i Tedrisat (Öğretim Birliği) Kanunu ile tüm eğitim kurumları Milli Eğitim Bakanlığı'na bağlanmış, medreselerin yerini modern okullar almıştır."
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
      },
      {
        question: "Aşağıdakilerden hangisi Akdeniz ikliminin özelliklerinden değildir?",
        options: ["Yazları sıcak ve kurak", "Kışları ılık ve yağışlı", "Yıl boyunca yağış alma", "Maki bitki örtüsü"],
        answer: "Yıl boyunca yağış alma",
        explanation: "Akdeniz ikliminde yağışlar mevsimlik dağılır, yazlar kurak geçer. Yıl boyunca düzenli yağış, Karadeniz ikliminin bir özelliğidir."
      },
      {
        question: "Türkiye'de en fazla yağış alan bölge hangisidir?",
        options: ["Akdeniz Bölgesi", "Ege Bölgesi", "Karadeniz Bölgesi", "Marmara Bölgesi"],
        answer: "Karadeniz Bölgesi",
        explanation: "Karadeniz Bölgesi, Türkiye'de yıl boyunca en fazla ve en düzenli yağış alan bölgedir. Bunun nedeni dağların denize paralel uzanması ve denizden gelen nemli havanın iç kesimlere geçişini engellemesidir."
      },
      {
        question: "Aşağıdakilerden hangisi bir delta ovasıdır?",
        options: ["Konya Ovası", "Çukurova", "Pasinler Ovası", "Muş Ovası"],
        answer: "Çukurova",
        explanation: "Çukurova, Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyonların birikmesiyle oluşan bir delta ovasıdır."
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
      },
      {
        question: "Aşağıdakilerden hangisi Kant'ın ahlak felsefesinde temel kavramlardan biridir?",
        options: ["Erdem etiği", "Faydacılık", "Kategorik imperatif", "Hazcılık"],
        answer: "Kategorik imperatif",
        explanation: "Kategorik imperatif, Kant'ın ahlak felsefesinin temelidir. 'Öyle davran ki, davranışının ilkesi evrensel bir yasa olabilsin' şeklinde ifade edilebilir."
      },
      {
        question: "Aşağıdakilerden hangisi nihilizm akımının temel görüşüdür?",
        options: ["Herşeyin ölçüsü insandır", "Değerlerin ve anlamın olmadığı", "Varlığın özden önce geldiği", "Erdemin bilgi olduğu"],
        answer: "Değerlerin ve anlamın olmadığı",
        explanation: "Nihilizm, geleneksel değerlerin, ahlakın ve anlamların reddedilmesi, hiçbir şeyin gerçek veya bilinebilir olmadığı görüşüdür."
      },
      {
        question: "Stoa felsefesinin temel amacı nedir?",
        options: ["Haz", "Mutluluk", "Ruhsal dinginlik", "Güç"],
        answer: "Ruhsal dinginlik",
        explanation: "Stoa felsefesi, dış olayların kontrolümüz dışında olduğunu kabul ederek tutkulardan arınma ve ruhsal dinginliğe (ataraxia) ulaşmayı amaçlar."
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
      },
      {
        question: "What is the correct passive voice of the sentence: 'They build houses'?",
        options: ["Houses build they", "Houses are build", "Houses are built", "Houses built by them"],
        answer: "Houses are built",
        explanation: "To form the passive voice, we use the structure: subject + be + past participle. The correct form is 'Houses are built'."
      },
      {
        question: "Choose the correct phrasal verb: 'I can't _____ this noise anymore.'",
        options: ["put up with", "put off", "put down", "put away"],
        answer: "put up with",
        explanation: "'Put up with' means to tolerate or endure something unpleasant. The other options have different meanings."
      },
      {
        question: "What is the correct comparative form of the adjective 'good'?",
        options: ["Gooder", "More good", "Better", "Best"],
        answer: "Better",
        explanation: "'Good' is an irregular adjective. Its comparative form is 'better' and its superlative form is 'best'."
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
      },
      {
        question: "Aşağıdakilerden hangisi Tanzimat Dönemi yazarlarından değildir?",
        options: ["Namık Kemal", "Şinasi", "Ahmet Hamdi Tanpınar", "Ziya Paşa"],
        answer: "Ahmet Hamdi Tanpınar",
        explanation: "Ahmet Hamdi Tanpınar, Cumhuriyet Dönemi yazarlarındandır. Diğer isimler Tanzimat Dönemi'nin önemli yazarlarıdır."
      },
      {
        question: "\"Safahat\" adlı eser kime aittir?",
        options: ["Mehmet Akif Ersoy", "Yahya Kemal Beyatlı", "Tevfik Fikret", "Ahmet Haşim"],
        answer: "Mehmet Akif Ersoy",
        explanation: "Safahat, Mehmet Akif Ersoy'un yedi kitaptan oluşan şiir külliyatıdır. İçinde İstiklal Marşı da dahil olmak üzere toplumsal sorunları, milli değerleri işleyen şiirleri yer alır."
      },
      {
        question: "Aşağıdakilerden hangisi Orhan Pamuk'un Nobel Edebiyat Ödülü aldığı eseri değildir?",
        options: ["Kara Kitap", "Benim Adım Kırmızı", "Masumiyet Müzesi", "Kar"],
        answer: "Kara Kitap",
        explanation: "Orhan Pamuk, 2006 yılında Nobel Edebiyat Ödülü'nü almıştır, ancak bu ödüle belirli bir eseri için değil, tüm edebi çalışmalarını kapsayacak şekilde layık görülmüştür. Kara Kitap 1990'da yayımlanmış önemli eserlerinden biridir."
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
    'Fizik': "Bu videoda, fiziğin temel prensiplerini ve günlük hayatta nasıl uygulandığını derinlemesine inceleyeceksiniz. Newton'un hareket kanunları, momentum, enerji korunumu ve termodinamik gibi temel kavramlar detaylı olarak ele alınacaktır. Ayrıca, pratik örneklerle teorik bilgilerin nasıl uygulanacağı gösterilecektir. Modern fiziğin temellerini oluşturan kuantum mekaniği ve görelilik teorisi hakkında da giriş niteliğinde bilgiler verilecektir. Öğrencilerin karşılaştıkları zorluklara yönelik çözüm stratejileri ve problem çözme teknikleri de bu derste paylaşılacaktır. Tüm bu kavramlar, görsel anlatımlar ve interaktif deneylerle desteklenerek, fiziğin günlük hayatta ne kadar önemli olduğu vurgulanacaktır.",
    
    'Matematik': "Bu matematik dersinde, türev ve integral kavramlarının temellerini, çeşitli türev alma kurallarını ve bunların pratik uygulamalarını detaylı olarak öğreneceksiniz. Fonksiyonların davranışlarını analiz etmek, grafiklerini çizmek, maksimum-minimum problemlerini çözmek ve optimizasyon yapmak için türevin nasıl kullanılacağı gösterilecektir. Ayrıca, diferansiyel denklemlerin günlük hayattaki uygulamaları ve bilimsel araştırmalardaki önemi vurgulanacaktır. Lineer cebir, vektör uzayları, matrisler ve determinantlar gibi konular da incelenecek, bu kavramların bilgisayar grafiği, ekonomi ve mühendislikteki pratik uygulamaları gösterilecektir. Tüm bunların yanında, olasılık teorisi ve istatistik yöntemlerinin veri analizinde nasıl kullanıldığı da ele alınacaktır.",
    
    'Kimya': "Bu kimya dersinde, periyodik tablo ve elementlerin özelliklerini, atomik yapılarını, elektron dizilimlerini ve periyodik eğilimlerini detaylı olarak inceleyeceksiniz. Kimyasal bağlar, moleküler geometri ve VSEPR teorisi gibi temel konular ele alınacaktır. Kimyasal tepkimelerin mekanizmaları, asit-baz reaksiyonları, redoks tepkimeleri ve denge kavramı derinlemesine anlatılacaktır. Organik kimya bölümünde, karbon bileşiklerinin yapıları, fonksiyonel gruplar ve organik sentez yöntemleri incelenecektir. Ayrıca, modern analitik kimya teknikleri, spektroskopi ve kromatografi yöntemleri tanıtılacak, bunların ilaç geliştirme, adli kimya ve çevre analizlerindeki uygulamaları gösterilecektir. Laboratuvar güvenliği, deney tasarımı ve veri analizi konularında da pratik bilgiler verilecektir.",
    
    'Biyoloji': "Bu biyoloji dersinde, hücrenin yapısı, fonksiyonları ve hücresel süreçler hakkında kapsamlı bilgi edineceksiniz. Hücre zarı, organeller, DNA, RNA ve protein sentezi gibi temel konular derinlemesine işlenecektir. Genetik biliminin temelleri, kalıtım yasaları, gen ekspresyonu ve genetik mühendisliği teknikleri detaylı olarak ele alınacaktır. Evrim teorisi, doğal seleksiyon mekanizmaları ve biyolojik çeşitliliğin nasıl ortaya çıktığı incelenecektir. Ekoloji bölümünde, ekosistemler, besin zincirleri, enerji akışı ve biyojeokimyasal döngüler anlatılacaktır. İnsan anatomisi ve fizyolojisi konularında, organ sistemlerinin yapısı, fonksiyonları ve hastalıkları ele alınacaktır. Modern biyoteknoloji uygulamaları, CRISPR gen düzenleme teknolojisi ve kök hücre araştırmaları gibi güncel konulara da değinilecektir.",
    
    'Tarih': "Bu tarih dersinde, Türkiye Cumhuriyeti'nin kuruluş süreci ve Cumhuriyet'in ilanına giden olaylar zincirini detaylı olarak inceleyeceksiniz. Mondros Mütarekesi'nden başlayarak, Kurtuluş Savaşı'nın tüm aşamaları, cepheler, kongreler ve diplomatik girişimler kronolojik olarak ele alınacaktır. Lozan Barış Antlaşması'nın maddeleri ve Türkiye için önemi, yeni kurulan cumhuriyetin karşılaştığı iç ve dış sorunlar detaylandırılacaktır. Atatürk inkılapları, bunların toplumsal, siyasal ve kültürel etkileri derinlemesine analiz edilecektir. Tek parti döneminin özellikleri, çok partili hayata geçiş süreci ve Türkiye'nin uluslararası ilişkilerdeki konumu değerlendirilecektir. Ayrıca, Cumhuriyet'in ilanının Türk ve dünya tarihi açısından önemi, modern Türkiye'nin oluşumunda oynadığı rol ve günümüze yansımaları tarihsel bir perspektifle sunulacaktır.",
    
    'Coğrafya': "Bu coğrafya dersinde, Türkiye'nin fiziki özellikleri, jeolojik yapısı, dağları, platoları, ovaları ve akarsu sistemleri detaylı olarak incelenecektir. Türkiye'nin iklim tipleri, bitki örtüsü ve toprak yapısı bölgelere göre karşılaştırmalı olarak ele alınacaktır. Ülkemizin nüfus özellikleri, demografik yapısı, göç hareketleri ve kentleşme süreçleri istatistiksel verilerle desteklenerek anlatılacaktır. Türkiye'nin ekonomik coğrafyası, tarım, hayvancılık, sanayi, ticaret ve turizm faaliyetlerinin bölgesel dağılımı ve özellikleri incelenecektir. Doğal kaynaklar, enerji kaynakları ve sürdürülebilir kullanımları konularına değinilecektir. Türkiye'nin jeopolitik konumu, bölgesel ve küresel ilişkilerdeki önemi stratejik açıdan değerlendirilecektir. Ayrıca, çevre sorunları, doğal afetler ve bunlara karşı alınabilecek önlemler de bu dersin kapsamında yer alacaktır.",
    
    'Felsefe': "Bu felsefe dersinde, varoluşçuluk akımının tarihsel gelişimi, temel kavramları ve önemli temsilcileri derinlemesine incelenecektir. Kierkegaard, Nietzsche, Heidegger, Sartre, Camus ve Beauvoir gibi filozofların varoluşçu düşünceleri karşılaştırmalı olarak ele alınacaktır. Varoluşçuluğun temel kavramları olan özgürlük, sorumluluk, otantiklik, saçma, bulantı ve hiçlik gibi kavramlar detaylı olarak açıklanacaktır. Varoluşçu felsefenin edebiyat, sinema ve sanata etkileri analiz edilecektir. Bu akımın 20. yüzyıl düşüncesine katkıları ve günümüz felsefesindeki yeri değerlendirilecektir. Ayrıca, varoluşçuluğun diğer felsefi akımlarla ilişkisi, fenomenoloji, yapısalcılık ve postmodernizm gibi akımlarla karşılaştırılması yapılacaktır. Dersin sonunda, varoluşçu felsefenin güncel tartışmalara ve bireysel varoluş sorunlarına nasıl ışık tutabileceği üzerinde durulacaktır.",
    
    'İngilizce': "Bu İngilizce dersinde, günlük konuşma kalıpları, sık kullanılan ifadeler ve pratik yapma teknikleri derinlemesine incelenecektir. Farklı sosyal ortamlarda kullanılan selamlaşma, tanışma, vedalaşma, rica etme, özür dileme ve teşekkür etme ifadeleri detaylı olarak ele alınacaktır. Resmi ve gayri resmi dil kullanımı arasındaki farklar ve bunların uygun bağlamlarda nasıl kullanılacağı gösterilecektir. Telefon görüşmeleri, iş toplantıları, sosyal etkinlikler ve seyahat durumları için gerekli diyalog örnekleri sunulacaktır. İngilizce'de yaygın kullanılan deyimler, kalıp ifadeler ve güncel sözlüklere girmemiş konuşma dili öğeleri açıklanacaktır. Telaffuz çalışmaları, tonlama ve vurgu özellikleri sesli örneklerle pekiştirilecektir. Ayrıca, İngilizce konuşurken yapılan yaygın hatalar ve bunları nasıl düzeltebileceğinize dair ipuçları verilecektir. Kültürel farklılıklar ve bunların İngilizce iletişime nasıl yansıdığı da dersin kapsamında yer alacaktır.",
    
    'Edebiyat': "Bu edebiyat dersinde, şiir analizi teknikleri ve Türk edebiyatındaki önemli şiir akımları kapsamlı bir şekilde incelenecektir. Şiirin yapı unsurları olan vezin, kafiye, redif, uyak düzeni ve nazım biçimleri detaylı olarak ele alınacaktır. Edebi sanatlar, mecaz, benzetme, metafor, metonimi, kinaye gibi anlam zenginliği yaratan unsurlar örneklerle açıklanacaktır. Divan edebiyatından modern şiire uzanan Türk şiirinin tarihsel gelişimi, dönemler, akımlar ve önemli temsilciler üzerinden anlatılacaktır. Halk şiiri, Tanzimat şiiri, Servet-i Fünun, Fecr-i Ati, Milli Edebiyat, Garip, İkinci Yeni gibi önemli şiir hareketlerinin özellikleri karşılaştırmalı olarak incelenecektir. Nazım Hikmet, Orhan Veli, Cahit Sıtkı Tarancı, Necip Fazıl, Cemal Süreya, Turgut Uyar gibi modern Türk şairlerinin şiir anlayışları ve eserlerinden örnekler sunulacaktır. Ayrıca, şiirlerin tarihsel, toplumsal ve kültürel bağlamda nasıl yorumlanabileceğine dair eleştirel yaklaşımlar da bu dersin kapsamında yer alacaktır."
  };
  
  return descriptions[subject] || "Bu derste konu anlatımı ve örnekler bulacaksınız.";
};
