
import { Example } from '@/hooks/useVideoDetail';

// Generate example questions for each subject
export const getSubjectExamples = (subject: string): Example[] => {
  switch (subject) {
    case 'Tarih':
      return [
        {
          question: "Cumhuriyet hangi tarihte ilan edilmiştir?",
          options: ["29 Ekim 1923", "23 Nisan 1920", "30 Ağustos 1922", "19 Mayıs 1919"],
          answer: "29 Ekim 1923",
          explanation: "Türkiye Cumhuriyeti, 29 Ekim 1923 tarihinde ilan edilmiştir."
        },
        {
          question: "Kurtuluş Savaşı'nın başlangıç tarihi olarak kabul edilen olay hangisidir?",
          options: ["Erzurum Kongresi", "Amasya Genelgesi", "Mustafa Kemal'in Samsun'a çıkışı", "TBMM'nin açılışı"],
          answer: "Mustafa Kemal'in Samsun'a çıkışı",
          explanation: "Kurtuluş Savaşı'nın başlangıcı olarak Mustafa Kemal'in 19 Mayıs 1919'da Samsun'a çıkışı kabul edilir."
        },
        {
          question: "Osmanlı Devleti'nin sona ermesi hangi antlaşma ile olmuştur?",
          options: ["Sevr Antlaşması", "Lozan Antlaşması", "Mondros Ateşkes Antlaşması", "Ankara Antlaşması"],
          answer: "Lozan Antlaşması",
          explanation: "Osmanlı Devleti resmen Lozan Antlaşması (24 Temmuz 1923) ile sona ermiştir."
        },
        {
          question: "Türkiye'de çok partili hayata geçiş hangi yıl gerçekleşmiştir?",
          options: ["1923", "1938", "1946", "1950"],
          answer: "1946",
          explanation: "Türkiye'de çok partili hayata geçiş 1946 yılında Demokrat Parti'nin kurulmasıyla başlamıştır."
        },
        {
          question: "Türkiye Cumhuriyeti'nin ilk anayasası hangi yılda kabul edilmiştir?",
          options: ["1921", "1924", "1927", "1931"],
          answer: "1921",
          explanation: "Türkiye Cumhuriyeti'nin ilk anayasası 1921 Anayasası'dır, ancak Cumhuriyet ilan edildikten sonraki ilk anayasa 1924 Anayasası'dır."
        },
        {
          question: "Hangi olay sonrası saltanat kaldırılmıştır?",
          options: ["Kurtuluş Savaşı", "Balkan Savaşları", "I. Dünya Savaşı", "Lozan Konferansı"],
          answer: "Lozan Konferansı",
          explanation: "Lozan Konferansı'na Osmanlı Devleti ve TBMM hükümetinin birlikte çağrılması üzerine 1 Kasım 1922'de saltanat kaldırılmıştır."
        }
      ];
    case 'Coğrafya':
      return [
        {
          question: "Dünya üzerinde kaç kıta vardır?",
          options: ["5", "6", "7", "8"],
          answer: "7",
          explanation: "Dünya üzerinde 7 kıta vardır: Asya, Afrika, Kuzey Amerika, Güney Amerika, Antarktika, Avrupa ve Okyanusya."
        },
        {
          question: "Türkiye'nin en yüksek dağı hangisidir?",
          options: ["Erciyes Dağı", "Ağrı Dağı", "Uludağ", "Kaçkar Dağları"],
          answer: "Ağrı Dağı",
          explanation: "Türkiye'nin en yüksek dağı 5137 metre yüksekliğindeki Ağrı Dağı'dır."
        },
        {
          question: "Aşağıdakilerden hangisi Karadeniz'e kıyısı olan bir ülke değildir?",
          options: ["Türkiye", "Bulgaristan", "Yunanistan", "Romanya"],
          answer: "Yunanistan",
          explanation: "Yunanistan, Karadeniz'e kıyısı olmayan bir ülkedir. Ege Denizi ve Akdeniz'e kıyısı vardır."
        },
        {
          question: "Türkiye'nin en büyük gölü hangisidir?",
          options: ["Tuz Gölü", "Beyşehir Gölü", "İznik Gölü", "Van Gölü"],
          answer: "Van Gölü",
          explanation: "Türkiye'nin en büyük gölü Van Gölü'dür. 3,713 km² yüzölçümüne sahiptir."
        },
        {
          question: "Aşağıdakilerden hangisi Akdeniz ikliminin özelliklerinden değildir?",
          options: ["Yazları sıcak ve kurak", "Kışları ılık ve yağışlı", "Yıl boyunca yağış alması", "Zeytinin yetişmesi"],
          answer: "Yıl boyunca yağış alması",
          explanation: "Akdeniz ikliminde yağışlar genellikle kış aylarında görülür, yazlar kurak geçer. Yıl boyunca yağış almaz."
        },
        {
          question: "Aşağıdaki şehirlerden hangisi İç Anadolu Bölgesi'nde yer almaz?",
          options: ["Ankara", "Konya", "Eskişehir", "Trabzon"],
          answer: "Trabzon",
          explanation: "Trabzon, Karadeniz Bölgesi'nde yer alan bir şehirdir, İç Anadolu Bölgesi'nde değildir."
        }
      ];
    case 'Felsefe':
      return [
        {
          question: "Aşağıdakilerden hangisi varoluşçu bir filozof değildir?",
          options: ["Jean-Paul Sartre", "Albert Camus", "Søren Kierkegaard", "Immanuel Kant"],
          answer: "Immanuel Kant",
          explanation: "Immanuel Kant, Aydınlanma döneminin önemli bir filozofudur, varoluşçuluk akımının bir temsilcisi değildir."
        },
        {
          question: "Epistemoloji nedir?",
          options: ["Varlık felsefesi", "Bilgi felsefesi", "Ahlak felsefesi", "Sanat felsefesi"],
          answer: "Bilgi felsefesi",
          explanation: "Epistemoloji, bilginin doğasını, kapsamını ve kökenini inceleyen felsefe dalıdır."
        },
        {
          question: "'Cogito ergo sum' (Düşünüyorum, öyleyse varım) sözü hangi filozofa aittir?",
          options: ["Platon", "Aristoteles", "René Descartes", "Friedrich Nietzsche"],
          answer: "René Descartes",
          explanation: "Bu söz, René Descartes'ın şüphecilik yöntemini kullanarak ulaştığı kesin bilginin ifadesidir."
        },
        {
          question: "Aşağıdakilerden hangisi pragmatist felsefenin kurucularından biri değildir?",
          options: ["William James", "Charles Sanders Peirce", "John Dewey", "Bertrand Russell"],
          answer: "Bertrand Russell",
          explanation: "Bertrand Russell, pragmatist felsefenin değil, analitik felsefenin önemli temsilcilerindendir."
        },
        {
          question: "'İdealar Kuramı' hangi filozofun görüşüdür?",
          options: ["Aristoteles", "Platon", "Sokrates", "Herakleitos"],
          answer: "Platon",
          explanation: "İdealar Kuramı, Platon'un felsefesinin temelini oluşturan, gerçekliğin idealardan ibaret olduğunu savunan görüştür."
        },
        {
          question: "Nihilizm kavramını felsefede öne çıkaran düşünür kimdir?",
          options: ["Friedrich Nietzsche", "Jean-Paul Sartre", "Immanuel Kant", "John Locke"],
          answer: "Friedrich Nietzsche",
          explanation: "Nihilizm kavramı, özellikle Friedrich Nietzsche'nin felsefesinde önemli bir yer tutar ve değerlerin değersizleşmesi anlamına gelir."
        }
      ];
    case 'Matematik':
      return [
        {
          question: "f(x) = x² fonksiyonunun türevi nedir?",
          options: ["f'(x) = x", "f'(x) = 2x", "f'(x) = 2", "f'(x) = x²"],
          answer: "f'(x) = 2x",
          explanation: "x² fonksiyonunun türevi, türev kurallarına göre 2x'tir."
        },
        {
          question: "∫ x² dx ifadesinin sonucu nedir?",
          options: ["x³", "x³/2", "x³/3 + C", "2x³ + C"],
          answer: "x³/3 + C",
          explanation: "x² fonksiyonunun belirsiz integrali x³/3 + C'dir. Burada C, integral sabiti olarak adlandırılır."
        },
        {
          question: "Bir ikinci dereceden denklemin köklerinin gerçek ve birbirine eşit olması için diskriminant değeri ne olmalıdır?",
          options: ["b² - 4ac > 0", "b² - 4ac < 0", "b² - 4ac = 0", "b² + 4ac = 0"],
          answer: "b² - 4ac = 0",
          explanation: "İkinci dereceden bir denklemin köklerinin gerçek ve birbirine eşit olması için diskriminant (Δ = b² - 4ac) değerinin sıfıra eşit olması gerekir."
        },
        {
          question: "4! (faktöriyel 4) ifadesinin değeri nedir?",
          options: ["8", "12", "16", "24"],
          answer: "24",
          explanation: "4! = 4 × 3 × 2 × 1 = 24"
        },
        {
          question: "Aşağıdakilerden hangisi bir logaritma özelliği değildir?",
          options: ["log(a×b) = log(a) + log(b)", "log(a/b) = log(a) - log(b)", "log(a^n) = n×log(a)", "log(a+b) = log(a) × log(b)"],
          answer: "log(a+b) = log(a) × log(b)",
          explanation: "log(a+b) = log(a) × log(b) doğru bir logaritma özelliği değildir. Toplam halindeki sayıların logaritması, logaritmalar cinsinden ifade edilemez."
        },
        {
          question: "Bir çemberin çevresi 6π ise, yarıçapı kaçtır?",
          options: ["3", "6", "π", "3π"],
          answer: "3",
          explanation: "Çemberin çevresi formülü 2πr'dir. 2πr = 6π ise r = 3 olur."
        }
      ];
    case 'Fizik':
      return [
        {
          question: "Newton'un kaç hareket kanunu vardır?",
          options: ["2", "3", "4", "5"],
          answer: "3",
          explanation: "Newton'un 3 hareket kanunu vardır: Eylemsizlik, Kuvvet ve Etki-Tepki Kanunları."
        },
        {
          question: "Işık hızı yaklaşık olarak kaç km/s'dir?",
          options: ["150.000 km/s", "300.000 km/s", "450.000 km/s", "600.000 km/s"],
          answer: "300.000 km/s",
          explanation: "Işık hızı yaklaşık olarak 300.000 km/s'dir (tam olarak 299.792.458 m/s)."
        },
        {
          question: "Elektrik akımının birimi nedir?",
          options: ["Volt", "Watt", "Amper", "Ohm"],
          answer: "Amper",
          explanation: "Elektrik akımının birimi Amper'dir ve A sembolü ile gösterilir."
        },
        {
          question: "Hangi fizik yasası 'Her etki, eşit büyüklükte ve zıt yönde bir tepkiye neden olur' ifadesiyle açıklanır?",
          options: ["Newton'un 1. Hareket Yasası", "Newton'un 2. Hareket Yasası", "Newton'un 3. Hareket Yasası", "Arşimet Prensibi"],
          answer: "Newton'un 3. Hareket Yasası",
          explanation: "Newton'un 3. Hareket Yasası (Etki-Tepki Prensibi), her etkiye karşı eşit büyüklükte ve zıt yönde bir tepki oluşacağını söyler."
        },
        {
          question: "Aşağıdakilerden hangisi bir enerji birimi değildir?",
          options: ["Joule", "Calori", "Watt", "Kilowatt-saat"],
          answer: "Watt",
          explanation: "Watt bir güç birimidir, enerji birimi değildir. Joule, Calori ve Kilowatt-saat enerji birimleridir."
        },
        {
          question: "Serbest düşme hareketi yapan bir cismin hızı, yerçekimi ivmesinin değerine ve cismin düşme süresine bağlı olarak nasıl değişir?",
          options: ["v = g/t", "v = g×t", "v = g×t²", "v = g×t/2"],
          answer: "v = g×t",
          explanation: "Serbest düşme hareketi yapan bir cismin hızı, v = g×t formülü ile hesaplanır. Burada g yerçekimi ivmesi, t ise düşme süresidir."
        }
      ];
    case 'Kimya':
      return [
        {
          question: "Periyodik tabloda kaç grup vardır?",
          options: ["8", "16", "18", "32"],
          answer: "18",
          explanation: "Modern periyodik tabloda 18 grup bulunmaktadır."
        },
        {
          question: "Aşağıdakilerden hangisi bir asit örneği değildir?",
          options: ["HCl", "H2SO4", "NaOH", "HNO3"],
          answer: "NaOH",
          explanation: "NaOH (Sodyum hidroksit) bir asit değil, bazdır. HCl, H2SO4 ve HNO3 asit örnekleridir."
        },
        {
          question: "Suyun kimyasal formülü nedir?",
          options: ["H2O", "CO2", "NaCl", "O2"],
          answer: "H2O",
          explanation: "Suyun kimyasal formülü H2O'dur, yani iki hidrojen ve bir oksijen atomundan oluşur."
        },
        {
          question: "Aşağıdakilerden hangisi bir elektron verdiğinde pozitif yüklü iyon haline gelir?",
          options: ["Anyon", "Katyon", "İzotop", "İzomer"],
          answer: "Katyon",
          explanation: "Katyonlar, elektron vererek pozitif yüklü iyon haline gelen atomlardır."
        },
        {
          question: "Karbon atomunun atom numarası kaçtır?",
          options: ["4", "6", "8", "12"],
          answer: "6",
          explanation: "Karbon atomunun atom numarası 6'dır, yani çekirdeğinde 6 proton bulunur."
        },
        {
          question: "Aşağıdakilerden hangisi pH ölçeğinde en baziktir?",
          options: ["pH = 3", "pH = 7", "pH = 9", "pH = 14"],
          answer: "pH = 14",
          explanation: "pH ölçeğinde 0-7 arası asidik, 7 nötr, 7-14 arası baziktir. En bazik olan pH = 14'tür."
        }
      ];
    case 'Biyoloji':
      return [
        {
          question: "Hücrenin enerji üretiminden sorumlu organeli hangisidir?",
          options: ["Golgi cisimciği", "Endoplazmik retikulum", "Lizozom", "Mitokondri"],
          answer: "Mitokondri",
          explanation: "Mitokondri, hücrenin enerji fabrikası olarak görev yapar ve ATP üretiminden sorumludur."
        },
        {
          question: "DNA'nın açılımı nedir?",
          options: ["Deoksi Nitrik Asit", "Deoksi Nükleik Asit", "Deoksiribo Nükleik Asit", "Deoksiribo Nitrik Asit"],
          answer: "Deoksiribo Nükleik Asit",
          explanation: "DNA, Deoksiribo Nükleik Asit'in kısaltmasıdır."
        },
        {
          question: "İnsanın kalp atış hızını kontrol eden bölüm hangisidir?",
          options: ["Sinoatriyal (SA) düğüm", "Atrioventriküler (AV) düğüm", "Purkinje lifleri", "His demeti"],
          answer: "Sinoatriyal (SA) düğüm",
          explanation: "Kalbin doğal pili olarak bilinen Sinoatriyal (SA) düğüm, kalp atış hızını belirler."
        },
        {
          question: "Aşağıdakilerden hangisi ototroftur?",
          options: ["Mantar", "Bakteri", "Bitki", "İnsan"],
          answer: "Bitki",
          explanation: "Bitkiler, fotosentez yaparak kendi besinlerini üretebilen ototroflardır."
        },
        {
          question: "İnsanda kaç kromozom çifti bulunur?",
          options: ["21", "23", "46", "48"],
          answer: "23",
          explanation: "İnsanda 23 çift, toplam 46 kromozom bulunur."
        },
        {
          question: "Oksijenli solunum sonucu hangi atık madde oluşur?",
          options: ["Karbondioksit ve su", "Oksijen ve glikoz", "Amonyak ve üre", "Azot ve hidrojen"],
          answer: "Karbondioksit ve su",
          explanation: "Oksijenli solunum sonucunda karbondioksit ve su açığa çıkar."
        }
      ];
    case 'İngilizce':
      return [
        {
          question: "\"How do you do?\" ifadesinin doğru karşılığı nedir?",
          options: ["İyi misin?", "Nasılsın?", "Ne yapıyorsun?", "Memnun oldum."],
          answer: "Memnun oldum.",
          explanation: "\"How do you do?\" bir karşılaşma selamlaşması olup, karşılığında genellikle \"How do you do?\" veya \"Pleased to meet you.\" (Memnun oldum) denir."
        },
        {
          question: "Which of the following is NOT a past tense form?",
          options: ["went", "took", "would go", "saw"],
          answer: "would go",
          explanation: "\"Would go\" is a modal verb form expressing hypothetical conditions or habitual past actions, not a simple past tense form like \"went\", \"took\", or \"saw\"."
        },
        {
          question: "Choose the correct sentence:",
          options: ["She don't like coffee", "He don't like coffee", "They doesn't like coffee", "He doesn't like coffee"],
          answer: "He doesn't like coffee",
          explanation: "Correct form for third person singular (he/she/it) in present simple negative is \"doesn't\"."
        },
        {
          question: "What is the meaning of the phrase \"to break the ice\"?",
          options: ["to destroy something", "to start a conversation in a social situation", "to solve a difficult problem", "to cause trouble"],
          answer: "to start a conversation in a social situation",
          explanation: "\"To break the ice\" means to do or say something to relieve tension or get conversation going in a social situation."
        },
        {
          question: "Choose the correct word order:",
          options: ["He quickly ran to the store", "He ran quickly to the store", "He ran to the quickly store", "Quickly he ran to the store"],
          answer: "He ran quickly to the store",
          explanation: "The correct word order is Subject + Verb + Adverb + Other elements, although \"He quickly ran to the store\" is also acceptable in many contexts."
        },
        {
          question: "The opposite of \"cheap\" is:",
          options: ["rich", "expensive", "poor", "inexpensive"],
          answer: "expensive",
          explanation: "The antonym (opposite) of \"cheap\" is \"expensive\"."
        }
      ];
    case 'Edebiyat':
      return [
        {
          question: "Şiirde 'imge' ne anlama gelir?",
          options: ["Söz sanatları", "Mecazlar", "Somut bir varlığın soyut hali", "Tekrar eden kelimeler"],
          answer: "Somut bir varlığın soyut hali",
          explanation: "İmge, somut bir varlığın şairin zihnindeki soyut, öznel çağrışımlarıdır."
        },
        {
          question: "Aşağıdakilerden hangisi Tanzimat Dönemi yazarlarından değildir?",
          options: ["Namık Kemal", "Şinasi", "Ahmet Hamdi Tanpınar", "Ziya Paşa"],
          answer: "Ahmet Hamdi Tanpınar",
          explanation: "Ahmet Hamdi Tanpınar, Cumhuriyet Dönemi yazarlarındandır. Diğerleri Tanzimat Dönemi yazarlarıdır."
        },
        {
          question: "Divan edebiyatında sevgiliyi anlatan mazmun aşağıdakilerden hangisidir?",
          options: ["Bülbül", "Gül", "Servi", "Hepsi"],
          answer: "Hepsi",
          explanation: "Divan edebiyatında bülbül, gül ve servi sevgiliyi anlatan mazmunlardandır."
        },
        {
          question: "\"Saatleri Ayarlama Enstitüsü\" adlı eser kime aittir?",
          options: ["Orhan Pamuk", "Ahmet Hamdi Tanpınar", "Oğuz Atay", "Yaşar Kemal"],
          answer: "Ahmet Hamdi Tanpınar",
          explanation: "\"Saatleri Ayarlama Enstitüsü\", Ahmet Hamdi Tanpınar'ın önemli romanlarından biridir."
        },
        {
          question: "Aşağıdakilerden hangisi halk edebiyatı nazım biçimlerinden değildir?",
          options: ["Koşma", "Türkü", "Gazel", "Mani"],
          answer: "Gazel",
          explanation: "Gazel, divan edebiyatı nazım biçimidir. Diğerleri halk edebiyatı nazım biçimleridir."
        },
        {
          question: "Aşağıdakilerden hangisi \"İstiklal Marşı\"nın yazarıdır?",
          options: ["Namık Kemal", "Mehmet Akif Ersoy", "Tevfik Fikret", "Yahya Kemal Beyatlı"],
          answer: "Mehmet Akif Ersoy",
          explanation: "İstiklal Marşı, Mehmet Akif Ersoy tarafından yazılmıştır."
        }
      ];
    default:
      return [
        {
          question: "Bu konu için henüz soru bulunmuyor.",
          options: ["Evet", "Hayır"],
          answer: "Evet",
          explanation: "Bu konu için henüz örnek sorular eklenmemiştir."
        },
        {
          question: "Bu konu için hazırlanan sorular yakında eklenecektir.",
          options: ["Evet", "Hayır"],
          answer: "Evet",
          explanation: "Bu konu için örnek sorular yakında eklenecektir."
        },
        {
          question: "Bu konuyla ilgili bir soru sormak ister misiniz?",
          options: ["Evet", "Hayır"],
          answer: "Evet",
          explanation: "Asistan üzerinden bu konuyla ilgili sorularınızı sorabilirsiniz."
        },
        {
          question: "Sorular çalışması tamamlandığında bildirim almak ister misiniz?",
          options: ["Evet", "Hayır"],
          answer: "Evet",
          explanation: "Sorular hazır olduğunda bildirim almak için profil ayarlarınızı kontrol edebilirsiniz."
        },
        {
          question: "Bu dersi tamamlandı olarak işaretlemek ister misiniz?",
          options: ["Evet", "Hayır"],
          answer: "Hayır",
          explanation: "Henüz sorular tamamlanmadığı için dersi tamamlandı olarak işaretlememeniz önerilir."
        },
        {
          question: "Farklı bir derse geçmek ister misiniz?",
          options: ["Evet", "Hayır"],
          answer: "Evet",
          explanation: "Ana sayfaya dönerek farklı bir ders seçebilirsiniz."
        }
      ];
  }
};

// Generate detailed descriptions for each subject
export const getSubjectDescription = (subject: string): string => {
  switch (subject) {
    case 'Tarih':
      return `Tarih, geçmişteki olayların, toplumların, medeniyetlerin ve kültürlerin sistematik olarak incelenmesidir. İnsanlığın geçmişini ve gelişimini anlamak, bugünü yorumlamak ve geleceği şekillendirmek için önemlidir.

Türkiye'nin tarihi, zengin ve çeşitli medeniyetlerin mirasını taşır. Osmanlı İmparatorluğu'ndan Türkiye Cumhuriyeti'ne geçiş süreci, Kurtuluş Savaşı, Cumhuriyet'in ilanı ve Atatürk'ün inkılapları modern Türkiye'nin temellerini oluşturur.

Bu derste, Türk tarihinin önemli dönüm noktaları, siyasi gelişmeler, toplumsal değişimler ve kültürel dönüşümler incelenmektedir. Ayrıca dünya tarihiyle olan etkileşimler ve paralel gelişmeler de ele alınmaktadır.`;

    case 'Coğrafya':
      return `Coğrafya, yeryüzünün fiziksel özellikleri, insan toplulukları ve bu ikisi arasındaki ilişkiyi inceleyen bilim dalıdır. Fiziki coğrafya, beşeri coğrafya ve ekonomik coğrafya olmak üzere çeşitli alt dallara ayrılır.

Türkiye, üç tarafı denizlerle çevrili, farklı iklim bölgelerine sahip, dağlık ve engebeli bir ülkedir. Karadeniz, Akdeniz, Ege ve Marmara denizlerine kıyısı vardır. Doğu Anadolu'daki yüksek dağlar, İç Anadolu'daki platolar ve kıyı kesimlerindeki ovalar Türkiye'nin temel fiziki yapısını oluşturur.

Bu derste, Türkiye ve dünya coğrafyasının temel özellikleri, iklimler, yerşekilleri, nüfus dağılımı, ekonomik faaliyetler ve doğal kaynaklar detaylı olarak incelenmektedir.`;

    case 'Felsefe':
      return `Felsefe, bilgelik sevgisi anlamına gelen, varlık, bilgi, değer ve mantık konularını sorgulayan düşünce disiplinidir. İnsanın kendini ve evreni anlamlandırma çabasıdır.

Felsefe; epistemoloji (bilgi felsefesi), ontoloji (varlık felsefesi), etik (ahlak felsefesi), estetik (sanat felsefesi), mantık, siyaset felsefesi gibi çeşitli alt dallara ayrılır. Sokrates, Platon, Aristoteles, Descartes, Kant, Nietzsche gibi düşünürler felsefe tarihinin önemli isimleridir.

Bu derste, felsefenin temel kavramları, düşünce akımları, filozoflar ve onların görüşleri incelenmektedir. Öğrencilere eleştirel düşünme, sorgulama ve analiz etme becerileri kazandırılması hedeflenmektedir.`;

    case 'Matematik':
      return `Matematik, sayılar, şekiller, yapılar, değişimler ve bunlar arasındaki ilişkileri inceleyen evrensel bir dildir. Günlük hayatımızdan bilime, sanattan teknolojiye kadar pek çok alanın temelini oluşturur.

Matematik; aritmetik, cebir, geometri, trigonometri, istatistik, olasılık, analiz gibi çeşitli dallara ayrılır. Her biri kendi içinde özel kavramlar, kurallar ve formüller barındırır.

Bu derste, matematiksel düşünme becerisinin geliştirilmesi, problem çözme stratejilerinin öğrenilmesi ve matematiksel kavramların günlük hayatta kullanılması amaçlanmaktadır. Sayılar, cebirsel ifadeler, denklemler, fonksiyonlar, geometrik şekiller ve bunlar arasındaki ilişkiler detaylı olarak incelenmektedir.`;

    case 'Fizik':
      return `Fizik, madde, enerji, zaman ve bunların birbirleriyle etkileşimlerini inceleyen temel bilim dalıdır. Evrenin en küçük parçacıklarından en büyük gök cisimlerine kadar tüm fiziksel olayları açıklamaya çalışır.

Fizik; mekanik, termodinamik, elektromanyetizma, optik, akustik, nükleer fizik, kuantum fiziği gibi çeşitli alt dallara ayrılır. Newton'un hareket yasaları, Einstein'ın görelilik teorisi, termodinamiğin yasaları fiziğin temel prensiplerini oluşturur.

Bu derste, fiziksel olayların anlaşılması, matematiksel modellerle ifade edilmesi ve günlük hayattaki uygulamalarının kavranması hedeflenmektedir. Kuvvet, hareket, enerji, elektrik, manyetizma, ışık ve ses konuları detaylı olarak incelenmektedir.`;

    case 'Kimya':
      return `Kimya, maddenin yapısını, özelliklerini, bileşimini ve değişimlerini inceleyen bilim dalıdır. Atom ve moleküllerin davranışlarından, maddelerin tepkimelerine kadar geniş bir alanı kapsar.

Kimya; analitik kimya, organik kimya, anorganik kimya, fizikokimya, biyokimya gibi alt dallara ayrılır. Periyodik tablo, elementlerin sınıflandırılması, atomun yapısı, kimyasal bağlar, asitler, bazlar, redoks tepkimeleri kimyanın temel konularıdır.

Bu derste, kimyasal tepkimelerin anlaşılması, maddenin fiziksel ve kimyasal özelliklerinin kavranması, günlük hayatta karşılaşılan kimyasal olayların açıklanması amaçlanmaktadır. Atomlar, kimyasal bağlar, tepkimeler, çözeltiler ve organik bileşikler detaylı olarak incelenmektedir.`;

    case 'Biyoloji':
      return `Biyoloji, canlıları, onların yapılarını, işlevlerini, gelişimlerini, evrimlerini ve çevreleriyle etkileşimlerini inceleyen yaşam bilimidir.

Biyoloji; hücre biyolojisi, genetik, ekoloji, fizyoloji, mikrobiyoloji, zooloji, botanik gibi çeşitli alt dallara ayrılır. Hücre teorisi, evrim teorisi, kalıtım yasaları biyolojinin temel prensiplerini oluşturur.

Bu derste, canlıların ortak özellikleri, hücre yapısı ve işlevleri, canlı sistemlerdeki enerji dönüşümleri, kalıtım mekanizmaları, ekosistemlerin işleyişi ve çevresel sorunlar detaylı olarak incelenmektedir. Öğrencilere yaşamı anlama, sağlıklı yaşam için gerekli bilgileri edinme ve çevre bilinci kazandırma amaçlanmaktadır.`;

    case 'İngilizce':
      return `İngilizce, günümüzün en yaygın kullanılan global iletişim dilidir. Bilim, teknoloji, ticaret, diplomasi ve eğitim alanlarında büyük öneme sahiptir.

İngilizce dil becerileri; dinleme, konuşma, okuma ve yazma olmak üzere dört temel alana ayrılır. Gramer yapıları, kelime bilgisi, telaffuz ve dil kullanımı bu becerilerin geliştirilmesinde önemli rol oynar.

Bu derste, günlük konuşma kalıpları, temel gramer yapıları, yaygın kullanılan kelime ve deyimler, akademik ve profesyonel İngilizce becerileri kazandırılmaktadır. Öğrencilerin iletişim kurabilecek düzeyde İngilizce öğrenmeleri ve global dünyada kendilerini ifade edebilmeleri hedeflenmektedir.`;

    case 'Edebiyat':
      return `Edebiyat, dili sanat aracı olarak kullanan, insanın duygu ve düşüncelerini estetik bir biçimde ifade eden yaratıcı çalışmaların tümüdür. Şiir, roman, öykü, tiyatro, deneme gibi farklı türleri içerir.

Türk edebiyatı; İslamiyet öncesi Türk edebiyatı, Divan edebiyatı, Tanzimat edebiyatı, Milli edebiyat, Cumhuriyet dönemi edebiyatı gibi dönemlere ayrılır. Her dönem kendi içinde özgün edebi akımlar, yazarlar ve eserler barındırır.

Bu derste, Türk ve dünya edebiyatının önemli eserlerinin incelenmesi, edebi türlerin özellikleri, dönemlerin karakteristik nitelikleri ve yazar-eser-dönem ilişkisinin kavranması amaçlanmaktadır. Öğrencilere edebi metinleri anlama, yorumlama ve değerlendirme becerisi kazandırılmaya çalışılmaktadır.`;

    default:
      return "Bu konu için detaylı açıklama henüz eklenmemiştir. Yakında güncellenecektir.";
  }
};
