
import { Video } from '@/types/video';

// Clean mock video data with consistent structure
export const mockVideos: Video[] = [
  // Tarih videos
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
      },
      {
        question: "Cumhuriyet'in ilanını hangi olay takip etmiştir?",
        options: ["Halifeliğin Kaldırılması", "Saltanatın Kaldırılması", "Lozan Antlaşması", "Sevr Antlaşması"],
        answer: "Halifeliğin Kaldırılması",
        explanation: "Cumhuriyet'in ilanından sonra 3 Mart 1924'te halifelik kaldırılmıştır."
      },
      {
        question: "Cumhuriyet'in ilan edildiği gün Mustafa Kemal'e hangi görev verilmiştir?",
        options: ["Başbakanlık", "Meclis Başkanlığı", "Cumhurbaşkanlığı", "Genelkurmay Başkanlığı"],
        answer: "Cumhurbaşkanlığı",
        explanation: "29 Ekim 1923'te Cumhuriyet'in ilanı ile birlikte Mustafa Kemal Türkiye Cumhuriyeti'nin ilk Cumhurbaşkanı seçilmiştir."
      },
      {
        question: "Cumhuriyet'in ilanı sırasında ilk başbakan kimdi?",
        options: ["İsmet İnönü", "Fethi Okyar", "Celal Bayar", "İsmail Hakkı Renda"],
        answer: "İsmet İnönü",
        explanation: "Cumhuriyet'in ilanı sırasında İsmet İnönü başbakanlık görevini üstlenmiştir."
      },
      {
        question: "Cumhuriyet'in ilan edildiği şehir hangisidir?",
        options: ["İstanbul", "Ankara", "İzmir", "Sivas"],
        answer: "Ankara",
        explanation: "Cumhuriyet, 29 Ekim 1923'te Ankara'da ilan edilmiştir. Ankara, 13 Ekim 1923'te Türkiye'nin başkenti olmuştur."
      },
      {
        question: "Cumhuriyet'in ilanından sonra yeni anayasa ne zaman kabul edilmiştir?",
        options: ["1921", "1923", "1924", "1927"],
        answer: "1924",
        explanation: "Cumhuriyet'in ilanından sonra 20 Nisan 1924'te yeni Türk anayasası (Teşkilât-ı Esasiye Kanunu) kabul edilmiştir."
      }
    ]
  },
  {
    id: 2,
    title: "Osmanlı İmparatorluğu'nun Yıkılışı",
    thumbnailUrl: "https://images.unsplash.com/photo-1602137680969-96571b47c012",
    duration: "17:20",
    saved: false,
    subject: "Tarih",
    description: "Bu derste Osmanlı İmparatorluğu'nun son dönemleri ve yıkılma süreci ele alınmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    examples: [
      {
        question: "Osmanlı İmparatorluğu'nun resmi sonu hangi antlaşma ile gelmiştir?",
        options: ["Mondros Ateşkes Antlaşması", "Sevr Antlaşması", "Lozan Antlaşması", "Mudanya Ateşkes Antlaşması"],
        answer: "Sevr Antlaşması",
        explanation: "Her ne kadar uygulanmamış olsa da, Osmanlı İmparatorluğu'nun resmi sonu 10 Ağustos 1920'de imzalanan Sevr Antlaşması ile gelmiştir."
      },
      {
        question: "Osmanlı'nın son padişahı kimdir?",
        options: ["V. Mehmed Reşad", "VI. Mehmed Vahideddin", "II. Abdülhamid", "V. Murad"],
        answer: "VI. Mehmed Vahideddin",
        explanation: "VI. Mehmed Vahideddin, Osmanlı İmparatorluğu'nun 36. ve son padişahıdır. 1918-1922 yılları arasında hüküm sürmüştür."
      },
      {
        question: "Osmanlı İmparatorluğu'nun fiili sonu hangi olaydan sonra gerçekleşmiştir?",
        options: ["Saltanatın Kaldırılması", "Balkan Savaşları", "I. Dünya Savaşı", "Trablusgarp Savaşı"],
        answer: "Saltanatın Kaldırılması",
        explanation: "Osmanlı İmparatorluğu'nun fiilen sona erişi, 1 Kasım 1922'de TBMM'nin Saltanatı kaldırması ile gerçekleşmiştir."
      },
      {
        question: "Hangi olay Osmanlı'nın çöküş sürecinin başlangıcı olarak kabul edilir?",
        options: ["Karlofça Antlaşması", "Tanzimat Fermanı", "Islahat Fermanı", "Küçük Kaynarca Antlaşması"],
        answer: "Karlofça Antlaşması",
        explanation: "1699 yılında imzalanan Karlofça Antlaşması, Osmanlı'nın ilk kez büyük toprak kaybettiği anlaşma olup, çöküş sürecinin başlangıcı olarak kabul edilir."
      },
      {
        question: "Osmanlı İmparatorluğu kaç yıl hüküm sürmüştür?",
        options: ["400 yıl", "500 yıl", "600 yıl", "700 yıl"],
        answer: "600 yıl",
        explanation: "Osmanlı İmparatorluğu yaklaşık 600 yıl (1299-1922) boyunca varlığını sürdürmüştür."
      },
      {
        question: "Osmanlı İmparatorluğu'nun I. Dünya Savaşı'nda müttefikleri hangi devletlerdi?",
        options: ["İngiltere, Fransa, Rusya", "Almanya, Avusturya-Macaristan, Bulgaristan", "İtalya, Japonya, ABD", "Romanya, Yunanistan, Sırbistan"],
        answer: "Almanya, Avusturya-Macaristan, Bulgaristan",
        explanation: "Osmanlı İmparatorluğu, I. Dünya Savaşı'nda İttifak Devletleri tarafında yer almış ve Almanya, Avusturya-Macaristan, Bulgaristan ile müttefik olmuştur."
      }
    ]
  },
  {
    id: 3,
    title: "Kurtuluş Savaşı",
    thumbnailUrl: "https://images.unsplash.com/photo-1641728769131-2df8623d8d8a",
    duration: "19:45",
    saved: false,
    subject: "Tarih",
    description: "Bu derste Türk Kurtuluş Savaşı'nın aşamaları, önemli muharebeler ve diplomatik süreçler anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    examples: [
      {
        question: "Kurtuluş Savaşı'nın başlangıcı olarak kabul edilen olay hangisidir?",
        options: ["Sakarya Meydan Muharebesi", "Mustafa Kemal'in Samsun'a çıkışı", "İzmir'in işgali", "TBMM'nin açılışı"],
        answer: "Mustafa Kemal'in Samsun'a çıkışı",
        explanation: "Mustafa Kemal'in 19 Mayıs 1919'da Samsun'a çıkışı, Kurtuluş Savaşı'nın başlangıcı olarak kabul edilmektedir."
      },
      {
        question: "Kurtuluş Savaşı'nın son büyük taarruzu hangisidir?",
        options: ["I. İnönü Muharebesi", "Sakarya Meydan Muharebesi", "Büyük Taarruz", "Kütahya-Eskişehir Muharebeleri"],
        answer: "Büyük Taarruz",
        explanation: "26 Ağustos 1922'de başlayan Büyük Taarruz, Kurtuluş Savaşı'nın son büyük askeri harekâtıdır."
      },
      {
        question: "Kurtuluş Savaşı'nın sona erdiği antlaşma hangisidir?",
        options: ["Ankara Antlaşması", "Lozan Antlaşması", "Mudanya Ateşkes Antlaşması", "Sevr Antlaşması"],
        answer: "Lozan Antlaşması",
        explanation: "Kurtuluş Savaşı, 24 Temmuz 1923'te imzalanan Lozan Antlaşması ile resmen sona ermiştir."
      },
      {
        question: "Kurtuluş Savaşı sırasında TBMM hükümeti hangi ülke ile ilk dostluk antlaşmasını imzalamıştır?",
        options: ["Sovyet Rusya", "Fransa", "İngiltere", "İtalya"],
        answer: "Sovyet Rusya",
        explanation: "TBMM Hükümeti, ilk dostluk antlaşmasını 16 Mart 1921'de Sovyet Rusya ile imzalamıştır."
      },
      {
        question: "Mustafa Kemal'e 'Mareşal' unvanı ve 'Gazi' unvanı hangi zaferden sonra verilmiştir?",
        options: ["I. İnönü Zaferi", "II. İnönü Zaferi", "Sakarya Zaferi", "Büyük Taarruz"],
        answer: "Sakarya Zaferi",
        explanation: "Mustafa Kemal'e 'Mareşal' rütbesi ve 'Gazi' unvanı, Sakarya Meydan Muharebesi zaferinden sonra 19 Eylül 1921'de TBMM tarafından verilmiştir."
      },
      {
        question: "Kurtuluş Savaşı sırasında doğu sınırlarını belirleyen antlaşma hangisidir?",
        options: ["Ankara Antlaşması", "Gümrü Antlaşması", "Kars Antlaşması", "Moskova Antlaşması"],
        answer: "Kars Antlaşması",
        explanation: "13 Ekim 1921'de imzalanan Kars Antlaşması, Türkiye'nin doğu sınırlarını belirlemiştir."
      }
    ]
  },
  
  // Coğrafya videos
  {
    id: 4,
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
      },
      {
        question: "En büyük kıta hangisidir?",
        options: ["Afrika", "Avrupa", "Kuzey Amerika", "Asya"],
        answer: "Asya",
        explanation: "Asya, 44,5 milyon km² yüzölçümü ile dünyanın en büyük kıtasıdır."
      },
      {
        question: "En büyük okyanus hangisidir?",
        options: ["Atlantik Okyanusu", "Hint Okyanusu", "Pasifik Okyanusu", "Arktik Okyanusu"],
        answer: "Pasifik Okyanusu",
        explanation: "Pasifik Okyanusu, yaklaşık 165,2 milyon km² yüzölçümü ile dünyanın en büyük okyanusudur."
      },
      {
        question: "Hangisi bir deniz değil, bir okyanustur?",
        options: ["Akdeniz", "Karadeniz", "Hint Okyanusu", "Baltık Denizi"],
        answer: "Hint Okyanusu",
        explanation: "Hint Okyanusu, dünyanın üçüncü büyük okyanusudur, diğer seçenekler ise denizdir."
      },
      {
        question: "Türkiye'nin kıyısı olan denizler hangileridir?",
        options: ["Karadeniz, Akdeniz, Ege Denizi", "Akdeniz, Kızıldeniz, Ege Denizi", "Karadeniz, Marmara Denizi, Adriyatik Denizi", "Karadeniz, Ege Denizi, Kızıldeniz"],
        answer: "Karadeniz, Akdeniz, Ege Denizi",
        explanation: "Türkiye'nin Karadeniz, Akdeniz ve Ege Denizi olmak üzere üç denize kıyısı vardır. Marmara Denizi iç deniz olduğu için genelde ayrı sayılır."
      },
      {
        question: "Aşağıdaki kıtalardan hangisinde Türkiye yer almaktadır?",
        options: ["Yalnız Asya", "Yalnız Avrupa", "Hem Asya hem Avrupa", "Hem Avrupa hem Afrika"],
        answer: "Hem Asya hem Avrupa",
        explanation: "Türkiye, hem Asya hem de Avrupa kıtalarında yer alan, iki kıtalı bir ülkedir."
      }
    ]
  },
  {
    id: 5,
    title: "Türkiye'nin İklimi",
    thumbnailUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    duration: "16:30",
    saved: false,
    subject: "Coğrafya",
    description: "Bu derste Türkiye'nin farklı bölgelerindeki iklim özellikleri ve iklim çeşitliliğinin nedenleri anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    examples: [
      {
        question: "Türkiye'de en yaygın görülen iklim tipi hangisidir?",
        options: ["Akdeniz İklimi", "Karasal İklim", "Marmara (Geçiş) İklimi", "Karadeniz İklimi"],
        answer: "Karasal İklim",
        explanation: "Türkiye'de en yaygın görülen iklim tipi, İç Anadolu, Doğu Anadolu ve Güneydoğu Anadolu bölgelerinde etkili olan karasal iklimdir."
      },
      {
        question: "Türkiye'de yıllık yağış miktarının en fazla olduğu bölge hangisidir?",
        options: ["Akdeniz Bölgesi", "Karadeniz Bölgesi", "Marmara Bölgesi", "Ege Bölgesi"],
        answer: "Karadeniz Bölgesi",
        explanation: "Türkiye'de yıllık yağış miktarının en fazla olduğu bölge Karadeniz Bölgesi'dir."
      },
      {
        question: "Aşağıdakilerden hangisi Türkiye'de görülen bir iklim tipi değildir?",
        options: ["Akdeniz İklimi", "Karasal İklim", "Ekvatoral İklim", "Karadeniz İklimi"],
        answer: "Ekvatoral İklim",
        explanation: "Ekvatoral iklim, Türkiye'de görülmeyen bir iklim tipidir ve daha çok ekvator çevresindeki bölgelerde görülür."
      },
      {
        question: "Aşağıdakilerden hangisi Türkiye'nin iklim çeşitliliğinin nedenlerinden biri değildir?",
        options: ["Dağların uzanış doğrultusu", "Yükselti", "Okyanuslara yakınlık", "Denizlere olan mesafe"],
        answer: "Okyanuslara yakınlık",
        explanation: "Türkiye'nin herhangi bir okyanusa kıyısı yoktur, bu nedenle okyanuslara yakınlık Türkiye'nin iklim çeşitliliğini etkileyen bir faktör değildir."
      },
      {
        question: "Akdeniz ikliminin görüldüğü yerlerde hangi tarım ürünü yaygın olarak yetiştirilir?",
        options: ["Çay", "Zeytin", "Buğday", "Ayçiçeği"],
        answer: "Zeytin",
        explanation: "Akdeniz ikliminin görüldüğü yerlerde zeytin yaygın olarak yetiştirilir."
      },
      {
        question: "Aşağıdaki şehirlerden hangisinde karasal iklim özellikleri görülür?",
        options: ["Antalya", "Trabzon", "Ankara", "İzmir"],
        answer: "Ankara",
        explanation: "Ankara'da karasal iklim özellikleri görülür. Yazları sıcak ve kurak, kışları soğuk ve kar yağışlıdır."
      }
    ]
  },
  {
    id: 6,
    title: "Türkiye'nin Dağları ve Ovaları",
    thumbnailUrl: "https://images.unsplash.com/photo-1621682372775-533449e550ed", 
    duration: "20:15",
    saved: false,
    subject: "Coğrafya",
    description: "Bu derste Türkiye'nin önemli dağları, ovaları ve yeryüzü şekilleri detaylı olarak incelenmektedir.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    examples: [
      {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        options: ["Erciyes Dağı", "Ağrı Dağı", "Uludağ", "Kaçkar Dağları"],
        answer: "Ağrı Dağı",
        explanation: "Türkiye'nin en yüksek dağı, 5137 metre yüksekliğindeki Ağrı Dağı'dır."
      },
      {
        question: "Aşağıdaki sıradağlardan hangisi Akdeniz Bölgesi'nde yer alır?",
        options: ["Kaçkar Dağları", "Toros Dağları", "Köroğlu Dağları", "Yıldız Dağları"],
        answer: "Toros Dağları",
        explanation: "Toros Dağları, Akdeniz Bölgesi'nde yer alan ve bölgenin iklimini etkileyen önemli bir sıradağdır."
      },
      {
        question: "Türkiye'nin en büyük ovası hangisidir?",
        options: ["Konya Ovası", "Çukurova", "Bafra Ovası", "Bursa Ovası"],
        answer: "Konya Ovası",
        explanation: "Konya Ovası, Türkiye'nin en büyük ovasıdır ve İç Anadolu Bölgesi'nde yer alır."
      },
      {
        question: "Aşağıdaki dağlardan hangisi Türkiye'nin batısında yer alır?",
        options: ["Aladağlar", "Tendürek Dağı", "Kaçkar Dağları", "Kazdağları"],
        answer: "Kazdağları",
        explanation: "Kazdağları (Ida Dağı), Türkiye'nin batısında, Balıkesir ve Çanakkale illeri arasında yer alır."
      },
      {
        question: "Aşağıdaki ovalardan hangisi alüvyal bir ovadır?",
        options: ["Konya Ovası", "Erzurum Ovası", "Çukurova", "Pasinler Ovası"],
        answer: "Çukurova",
        explanation: "Çukurova (Adana Ovası), Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyonlarla oluşmuş alüvyal bir ovadır."
      },
      {
        question: "Volkanik dağlara aşağıdakilerden hangisi örnek verilemez?",
        options: ["Erciyes Dağı", "Nemrut Dağı", "Kazdağları", "Hasandağı"],
        answer: "Kazdağları",
        explanation: "Kazdağları volkanik bir dağ değil, kıvrım dağıdır. Diğer seçenekler ise Türkiye'deki önemli volkanik dağlardır."
      }
    ]
  },
  
  // Matematik videos
  {
    id: 7,
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
      },
      {
        question: "Türev geometrik olarak neyi ifade eder?",
        options: ["Eğrinin altında kalan alanı", "Eğrinin teğetinin eğimini", "Eğrinin uzunluğunu", "Eğrinin orijine olan uzaklığını"],
        answer: "Eğrinin teğetinin eğimini",
        explanation: "Türev, bir eğrinin belirli bir noktadaki teğetinin eğimini ifade eder."
      },
      {
        question: "Sabit bir fonksiyonun türevi nedir?",
        options: ["Sıfır", "Bir", "Sabitin kendisi", "Tanımsız"],
        answer: "Sıfır",
        explanation: "Sabit bir fonksiyonun (örneğin f(x) = c) türevi her zaman sıfırdır."
      },
      {
        question: "f(x) = sinx fonksiyonunun türevi nedir?",
        options: ["f'(x) = cosx", "f'(x) = -sinx", "f'(x) = -cosx", "f'(x) = tanx"],
        answer: "f'(x) = cosx",
        explanation: "sinx fonksiyonunun türevi cosx'tir."
      },
      {
        question: "İki fonksiyonun çarpımının türevi için hangi kural kullanılır?",
        options: ["Toplam kuralı", "Çarpım kuralı", "Zincir kuralı", "Bölüm kuralı"],
        answer: "Çarpım kuralı",
        explanation: "İki fonksiyonun çarpımının türevi için çarpım kuralı kullanılır: (f·g)' = f'·g + f·g'"
      },
      {
        question: "Bir fonksiyonun ekstremum noktalarında türev ne olur?",
        options: ["Pozitif", "Negatif", "Sıfır", "Bir"],
        answer: "Sıfır",
        explanation: "Bir fonksiyonun yerel maksimum veya minimum (ekstremum) noktalarında türev sıfırdır."
      }
    ]
  },
  {
    id: 8,
    title: "İntegral Hesabı",
    thumbnailUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
    duration: "23:40",
    saved: false,
    subject: "Matematik",
    description: "Bu derste integral kavramı, belirli ve belirsiz integraller, integral alma yöntemleri ve integrallerin uygulamaları anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    examples: [
      {
        question: "∫x²dx integrali nedir?",
        options: ["x³/3 + C", "x³ + C", "2x³ + C", "x³/2 + C"],
        answer: "x³/3 + C",
        explanation: "∫x²dx = x³/3 + C şeklinde hesaplanır. Burada C integral sabiti olarak adlandırılır."
      },
      {
        question: "Belirli bir integralin geometrik anlamı nedir?",
        options: ["Eğrinin eğimi", "Eğrinin altında kalan alan", "Fonksiyonun değişim hızı", "Fonksiyonun maksimum değeri"],
        answer: "Eğrinin altında kalan alan",
        explanation: "Belirli bir integral, fonksiyon grafiğinin altında kalan alanı ifade eder."
      },
      {
        question: "Hangisi integral alma yöntemlerinden biri değildir?",
        options: ["Değişken değiştirme", "Kısmi integral", "Parçalı integral", "Türev genişletme"],
        answer: "Türev genişletme",
        explanation: "Türev genişletme, bilinen bir integral alma yöntemi değildir. Diğerleri ise standart integral alma yöntemleridir."
      },
      {
        question: "∫sinx dx integrali nedir?",
        options: ["-cosx + C", "cosx + C", "tanx + C", "-tanx + C"],
        answer: "-cosx + C",
        explanation: "sinx'in integrali -cosx + C'dir."
      },
      {
        question: "Belirsiz integralde neden sabit terim (C) eklenir?",
        options: ["Formülün bir parçası olduğu için", "Fonksiyonun sınırlarını belirlemek için", "Farklı türevleri olan fonksiyonları kapsayabilmek için", "İntegralin değerini sıfırlamak için"],
        answer: "Farklı türevleri olan fonksiyonları kapsayabilmek için",
        explanation: "Belirsiz integralde sabit terim (C), aynı türevi olan farklı fonksiyonları kapsayabilmek için eklenir."
      },
      {
        question: "∫₁² x² dx ifadesinin değeri nedir?",
        options: ["7/3", "8/3", "9/3", "10/3"],
        answer: "7/3",
        explanation: "∫₁² x² dx = [x³/3]₁² = (2³/3) - (1³/3) = 8/3 - 1/3 = 7/3"
      }
    ]
  },
  {
    id: 9,
    title: "Logaritma",
    thumbnailUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904",
    duration: "20:25",
    saved: false,
    subject: "Matematik",
    description: "Bu derste logaritma kavramı, logaritma özellikleri ve logaritmik denklemlerin çözüm yöntemleri anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    examples: [
      {
        question: "log₃ 9 işleminin sonucu nedir?",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation: "log₃ 9 = log₃ 3² = 2 (logaritma tanımı gereği)"
      },
      {
        question: "log₂ 8 + log₂ 2 işleminin sonucu nedir?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "log₂ 8 + log₂ 2 = log₂ 8·2 = log₂ 16 = log₂ 2⁴ = 4"
      },
      {
        question: "ln(e²) değeri nedir? (ln, e tabanındaki doğal logaritmadır)",
        options: ["1", "2", "e", "e²"],
        answer: "2",
        explanation: "ln(e²) = 2·ln(e) = 2·1 = 2 (ln(e) = 1 olduğu için)"
      },
      {
        question: "log₁₀ 0.01 değeri nedir?",
        options: ["-3", "-2", "-1", "0.01"],
        answer: "-2",
        explanation: "log₁₀ 0.01 = log₁₀ 10⁻² = -2"
      },
      {
        question: "logₐ 1 değeri nedir? (a herhangi bir pozitif sayı ve a≠1)",
        options: ["0", "1", "a", "Tanımsız"],
        answer: "0",
        explanation: "Logaritmanın özelliği gereği, herhangi bir a tabanında 1'in logaritması 0'dır: logₐ 1 = 0"
      },
      {
        question: "2ˣ = 8 denkleminin çözümü nedir?",
        options: ["x = 2", "x = 3", "x = 4", "x = 8"],
        answer: "x = 3",
        explanation: "2ˣ = 8 denklemi, 2ˣ = 2³ şeklinde yazılabilir. Bu durumda x = 3 olur."
      }
    ]
  },
  
  // Fizik videos
  {
    id: 10,
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
      },
      {
        question: "Newton'un I. Kanunu neyi ifade eder?",
        options: ["Etki-tepki prensibini", "İvme prensibini", "Eylemsizlik prensibini", "Momentum korunumunu"],
        answer: "Eylemsizlik prensibini",
        explanation: "Newton'un I. Kanunu (Eylemsizlik Kanunu), üzerine net bir kuvvet etki etmeyen bir cismin duruyorsa durmaya, hareket ediyorsa sabit hızla hareketine devam etme eğilimini ifade eder."
      },
      {
        question: "F = m·a formülü, Newton'un hangi kanununu ifade eder?",
        options: ["I. Kanun", "II. Kanun", "III. Kanun", "IV. Kanun"],
        answer: "II. Kanun",
        explanation: "F = m·a formülü, Newton'un II. Kanunu'nu (Kuvvet Kanunu) ifade eder ve bir cisme etki eden net kuvvetin, cismin kütlesi ile ivmesinin çarpımına eşit olduğunu gösterir."
      },
      {
        question: "Newton'un III. Kanunu'na göre, cisimlerin birbirlerine uyguladıkları kuvvetlerin ilişkisi nasıldır?",
        options: ["Eşittir ve aynı yönlüdür", "Eşittir ve zıt yönlüdür", "Farklıdır ve aynı yönlüdür", "Farklıdır ve zıt yönlüdür"],
        answer: "Eşittir ve zıt yönlüdür",
        explanation: "Newton'un III. Kanunu'na göre, iki cisim birbirine kuvvet uyguladığında, bu kuvvetler büyüklükçe eşit ve yön olarak zıttır."
      },
      {
        question: "Aşağıdakilerden hangisi Newton'un II. Kanunu'nun bir sonucu değildir?",
        options: ["Bir cismin ivmesi, uygulanan net kuvvetle doğru orantılıdır", "Bir cismin ivmesi, kütlesiyle ters orantılıdır", "Bir cisme etkiyen her kuvvet, eşit büyüklükte ve zıt yönde bir tepki kuvveti doğurur", "Bir cismin ivmesi, net kuvvetin yönünde oluşur"],
        answer: "Bir cisme etkiyen her kuvvet, eşit büyüklükte ve zıt yönde bir tepki kuvveti doğurur",
        explanation: "Bu ifade, Newton'un III. Kanunu'nun (Etki-Tepki Kanunu) bir sonucudur, II. Kanun'un değil."
      },
      {
        question: "100 kg kütleli bir cisme 200 N'luk bir kuvvet uygulandığında, cismin ivmesi ne olur?",
        options: ["0.5 m/s²", "1 m/s²", "2 m/s²", "5 m/s²"],
        answer: "2 m/s²",
        explanation: "Newton'un II. Kanunu'na göre, F = m·a formülünden a = F/m = 200 N / 100 kg = 2 m/s² olur."
      }
    ]
  },
  {
    id: 11,
    title: "Elektrik ve Manyetizma",
    thumbnailUrl: "https://images.unsplash.com/photo-1589433697129-9280a00ab3d9",
    duration: "21:35",
    saved: false,
    subject: "Fizik",
    description: "Bu derste elektrik yükleri, elektrik alan, manyetik alan ve elektromanyetik indüksiyon konuları anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    examples: [
      {
        question: "Elektrik yükünün birimi nedir?",
        options: ["Volt", "Amper", "Coulomb", "Ohm"],
        answer: "Coulomb",
        explanation: "Elektrik yükünün SI birim sistemindeki birimi Coulomb (C)'dur."
      },
      {
        question: "Aşağıdakilerden hangisi bir manyetik alan oluşturmaz?",
        options: ["Akım taşıyan tel", "Sabit mıknatıs", "Elektron demeti", "Durgun elektrik yükü"],
        answer: "Durgun elektrik yükü",
        explanation: "Durgun elektrik yükü sadece elektrik alan oluşturur, manyetik alan oluşturmaz."
      },
      {
        question: "Elektrik akımının oluşması için gerekli olan nedir?",
        options: ["Potansiyel farkı", "Manyetik alan", "Sıcaklık farkı", "Işık"],
        answer: "Potansiyel farkı",
        explanation: "Elektrik akımının oluşması için bir potansiyel farkı (gerilim) gereklidir."
      },
      {
        question: "Elektrik direncinin birimi nedir?",
        options: ["Volt", "Amper", "Watt", "Ohm"],
        answer: "Ohm",
        explanation: "Elektrik direncinin SI birim sistemindeki birimi Ohm (Ω)'dur."
      },
      {
        question: "Faraday'ın elektromanyetik indüksiyon kanununa göre, bir iletken içinde indüksiyon akımı oluşması için ne gereklidir?",
        options: ["Manyetik alanın sabit kalması", "Manyetik akının zamanla değişmesi", "Elektrik alanının sabit kalması", "Elektrik potansiyelinin sabit kalması"],
        answer: "Manyetik akının zamanla değişmesi",
        explanation: "Faraday'ın elektromanyetik indüksiyon kanununa göre, bir iletken içinde indüksiyon akımı oluşması için manyetik akının zamanla değişmesi gereklidir."
      },
      {
        question: "Ohm kanunu neyi ifade eder?",
        options: ["V = I·R", "P = I·V", "F = m·a", "E = m·c²"],
        answer: "V = I·R",
        explanation: "Ohm kanunu, bir iletkenden geçen akımın, iletkenin uçları arasındaki potansiyel farkına doğru orantılı ve iletkenin direncine ters orantılı olduğunu ifade eder: V = I·R"
      }
    ]
  },
  {
    id: 12,
    title: "Optik ve Işık",
    thumbnailUrl: "https://images.unsplash.com/photo-1520869309377-88c9961a0a2b",
    duration: "19:50",
    saved: false,
    subject: "Fizik",
    description: "Bu derste ışığın doğası, yansıma, kırılma, mercekler ve optik araçlar konuları anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    examples: [
      {
        question: "Işığın boşluktaki hızı yaklaşık olarak kaç km/s'dir?",
        options: ["300.000", "3.000.000", "30.000", "3.000"],
        answer: "300.000",
        explanation: "Işığın boşluktaki hızı yaklaşık olarak 300.000 km/s veya 3 × 10⁸ m/s'dir."
      },
      {
        question: "Aşağıdakilerden hangisi ışığın bir özelliği değildir?",
        options: ["Yansıma", "Kırılma", "Girişim", "Manyetiklik"],
        answer: "Manyetiklik",
        explanation: "Manyetiklik ışığın değil, mıknatısların ve elektrik akımlarının bir özelliğidir."
      },
      {
        question: "Aşağıdaki mercek türlerinden hangisi ince kenarlıdır?",
        options: ["Çift çukur mercek", "Çift tümsek mercek", "Çukur-tümsek mercek", "Hiçbiri"],
        answer: "Çift tümsek mercek",
        explanation: "Çift tümsek (bikonveks) mercek, ince kenarlı mercek türüdür ve ışığı bir noktada toplar."
      },
      {
        question: "Yansıma kanununa göre, yüzeye çarpan ışının geliş açısı ile yansıma açısı arasındaki ilişki nedir?",
        options: ["Geliş açısı yansıma açısından büyüktür", "Yansıma açısı geliş açısından büyüktür", "Geliş açısı ve yansıma açısı birbirine eşittir", "Geliş açısı ve yansıma açısı birbirine diktir"],
        answer: "Geliş açısı ve yansıma açısı birbirine eşittir",
        explanation: "Yansıma kanununa göre, geliş açısı ve yansıma açısı birbirine eşittir."
      },
      {
        question: "Bir cismin görüntüsünün oluşabilmesi için aynada cismin nerede olması gerekir?",
        options: ["Odak noktasında", "Merkez noktasında", "Ayna üzerinde", "Aynanın önünde herhangi bir yerde"],
        answer: "Aynanın önünde herhangi bir yerde",
        explanation: "Bir düzlem aynada görüntü oluşabilmesi için cismin aynanın önünde herhangi bir yerde olması yeterlidir."
      },
      {
        question: "Gökkuşağı, ışığın hangi olayı sonucunda oluşur?",
        options: ["Yansıma", "Kırılma", "Girişim", "Dağılma"],
        answer: "Dağılma",
        explanation: "Gökkuşağı, güneş ışığının su damlacıklarında kırılması ve dağılması (farklı renklere ayrılması) sonucunda oluşur."
      }
    ]
  },
  
  // Kimya videos
  {
    id: 13,
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
      },
      {
        question: "Periyodik tablodaki yatay sıralara ne ad verilir?",
        options: ["Grup", "Periyot", "Blok", "Seri"],
        answer: "Periyot",
        explanation: "Periyodik tablodaki yatay sıralara periyot adı verilir."
      },
      {
        question: "Hangi element alkali metaller grubunda yer alır?",
        options: ["Sodyum (Na)", "Klor (Cl)", "Oksijen (O)", "Neon (Ne)"],
        answer: "Sodyum (Na)",
        explanation: "Sodyum (Na), 1A grubunda yer alan bir alkali metaldir."
      },
      {
        question: "Aşağıdakilerden hangisi periyodik tabloda bir soy gaz değildir?",
        options: ["Neon", "Argon", "Klor", "Kripton"],
        answer: "Klor",
        explanation: "Klor (Cl) bir halojendir, 7A grubunda yer alır. Diğer seçenekler ise 8A grubundaki soy gazlardır."
      },
      {
        question: "Periyodik tabloda atom numarası arttıkça atom yarıçapı nasıl değişir?",
        options: ["Her zaman artar", "Her zaman azalır", "Periyotlarda soldan sağa azalır, gruplarda yukarıdan aşağıya artar", "Periyotlarda soldan sağa artar, gruplarda yukarıdan aşağıya azalır"],
        answer: "Periyotlarda soldan sağa azalır, gruplarda yukarıdan aşağıya artar",
        explanation: "Periyodik tabloda atom yarıçapı, periyotlarda soldan sağa çekirdek yükünün artmasıyla azalır; gruplarda yukarıdan aşağıya yeni enerji seviyelerinin eklenmesiyle artar."
      },
      {
        question: "Elementlerin periyodik tablodaki yerini belirleyen temel faktör nedir?",
        options: ["Kütle numarası", "Atom numarası", "Nötron sayısı", "İzotop sayısı"],
        answer: "Atom numarası",
        explanation: "Elementlerin periyodik tablodaki yerini belirleyen temel faktör atom numarasıdır."
      }
    ]
  },
  {
    id: 14,
    title: "Kimyasal Bağlar",
    thumbnailUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
    duration: "18:45",
    saved: false,
    subject: "Kimya",
    description: "Bu derste iyonik, kovalent ve metalik bağlar ile moleküller arası etkileşimler anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    examples: [
      {
        question: "Aşağıdakilerden hangisi bir kovalent bağ örneğidir?",
        options: ["NaCl", "H₂O", "CaO", "MgCl₂"],
        answer: "H₂O",
        explanation: "H₂O (su) molekülünde oksijen ve hidrojen atomları arasında kovalent bağ bulunur."
      },
      {
        question: "İyonik bağın oluşumu için ne gereklidir?",
        options: ["İki ametal arasındaki elektron ortaklaşması", "İki metal arasındaki elektron ortaklaşması", "Metal ile ametal arasındaki elektron alışverişi", "Aynı element atomları arasındaki etkileşim"],
        answer: "Metal ile ametal arasındaki elektron alışverişi",
        explanation: "İyonik bağ, genellikle bir metal ile bir ametal arasında elektron alışverişi sonucu oluşur."
      },
      {
        question: "Metalik bağın temel özelliği nedir?",
        options: ["Atomlar arasında elektron ortaklaşması", "Pozitif iyonlar ile negatif iyonların elektrostatik çekimi", "Metal katyonları etrafında serbest hareket eden elektronlar", "İki ametal arasındaki kuvvetli çekim"],
        answer: "Metal katyonları etrafında serbest hareket eden elektronlar",
        explanation: "Metalik bağda, metal atomları elektronlarını ortaklaşa kullanır ve bu elektronlar metal katyonları etrafında serbest hareket eder."
      },
      {
        question: "Hidrojen bağı hangi elementler arasında oluşur?",
        options: ["Sadece hidrojen atomları arasında", "Hidrojen ile yüksek elektronegatifliğe sahip F, O, N atomları arasında", "Herhangi iki element arasında", "Sadece metal atomları arasında"],
        answer: "Hidrojen ile yüksek elektronegatifliğe sahip F, O, N atomları arasında",
        explanation: "Hidrojen bağı, bir moleküldeki hidrojen atomu ile diğer moleküldeki yüksek elektronegatifliğe sahip F, O veya N atomları arasında oluşur."
      },
      {
        question: "Kovalent bağın oluşumunda atomlar arasında ne paylaşılır?",
        options: ["Protonlar", "Nötronlar", "Elektronlar", "Çekirdekler"],
        answer: "Elektronlar",
        explanation: "Kovalent bağın oluşumunda atomlar arasında elektronlar paylaşılır."
      },
      {
        question: "Aşağıdakilerden hangisi apolar kovalent bağlı bir moleküldür?",
        options: ["HCl", "H₂O", "NH₃", "O₂"],
        answer: "O₂",
        explanation: "O₂ molekülü, aynı tür atomlar arasında elektronların eşit paylaşıldığı apolar kovalent bağa sahiptir."
      }
    ]
  },
  {
    id: 15,
    title: "Asitler ve Bazlar",
    thumbnailUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6",
    duration: "20:30",
    saved: false,
    subject: "Kimya",
    description: "Bu derste asit-baz teorileri, pH kavramı, nötrleşme tepkimeleri ve tampon çözeltiler anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    examples: [
      {
        question: "Brønsted-Lowry teorisine göre asit nedir?",
        options: ["OH⁻ iyonu veren maddeler", "Elektron veren maddeler", "H⁺ iyonu veren maddeler", "Elektron alan maddeler"],
        answer: "H⁺ iyonu veren maddeler",
        explanation: "Brønsted-Lowry teorisine göre asit, proton (H⁺ iyonu) veren maddelerdir."
      },
      {
        question: "pH ölçeği genellikle hangi değerler arasında değişir?",
        options: ["0-7", "0-10", "0-14", "0-100"],
        answer: "0-14",
        explanation: "pH ölçeği genellikle 0 ile 14 arasında değişir. 7 nötr, 7'den küçük değerler asidik, 7'den büyük değerler bazik ortamı gösterir."
      },
      {
        question: "Saf suyun 25°C'deki pH değeri nedir?",
        options: ["0", "7", "10", "14"],
        answer: "7",
        explanation: "Saf suyun 25°C'deki pH değeri 7'dir ve nötr olarak kabul edilir."
      },
      {
        question: "Aşağıdakilerden hangisi bir baz örneğidir?",
        options: ["HCl", "H₂SO₄", "NaOH", "HNO₃"],
        answer: "NaOH",
        explanation: "NaOH (sodyum hidroksit) bir bazdır, diğerleri ise asittir."
      },
      {
        question: "Bir asit ile bir bazın tepkimesi sonucu ne oluşur?",
        options: ["Sadece tuz", "Sadece su", "Tuz ve su", "Yeni bir asit"],
        answer: "Tuz ve su",
        explanation: "Bir asit ile bir bazın nötrleşme tepkimesi sonucu tuz ve su oluşur."
      },
      {
        question: "Tampon çözeltilerin en önemli özelliği nedir?",
        options: ["Her zaman nötr olmaları", "pH değerlerinin sabit olması", "Elektrik iletmemeleri", "Renkli olmaları"],
        answer: "pH değerlerinin sabit olması",
        explanation: "Tampon çözeltilerin en önemli özelliği, az miktarda asit veya baz eklendiğinde pH değerlerinin fazla değişmemesidir."
      }
    ]
  },
  
  // Biyoloji videos
  {
    id: 16,
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
      },
      {
        question: "Hücre zarının temel yapısı nedir?",
        options: ["Karbonhidrat-protein", "Protein-lipit", "Lipit-karbonhidrat", "DNA-protein"],
        answer: "Protein-lipit",
        explanation: "Hücre zarı, temel olarak çift katlı lipit tabakası ve bu tabakaya gömülü proteinlerden oluşur (protein-lipit yapısı)."
      },
      {
        question: "Aşağıdaki organellerden hangisi sadece hayvan hücrelerinde bulunur?",
        options: ["Hücre duvarı", "Sentrozom", "Kloroplast", "Büyük koful"],
        answer: "Sentrozom",
        explanation: "Sentrozom, sadece hayvan hücrelerinde bulunan bir organeldir ve hücre bölünmesinde görev alır."
      },
      {
        question: "DNA'nın bulunduğu hücre organeli hangisidir?",
        options: ["Mitokondri", "Lizozom", "Çekirdek", "Golgi cisimciği"],
        answer: "Çekirdek",
        explanation: "DNA, çekirdek içinde bulunur ve genetik bilgiyi taşır."
      },
      {
        question: "Protein sentezinden sorumlu organel hangisidir?",
        options: ["Golgi cisimciği", "Ribozom", "Lizozom", "Koful"],
        answer: "Ribozom",
        explanation: "Ribozom, protein sentezinden sorumlu hücre organelidir."
      },
      {
        question: "Fotosentez hangi organelde gerçekleşir?",
        options: ["Mitokondri", "Kloroplast", "Golgi cisimciği", "Endoplazmik retikulum"],
        answer: "Kloroplast",
        explanation: "Fotosentez, bitki hücrelerindeki kloroplast organelinde gerçekleşir."
      }
    ]
  },
  {
    id: 17,
    title: "Kalıtım ve Genetik",
    thumbnailUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
    duration: "22:15",
    saved: false,
    subject: "Biyoloji",
    description: "Bu derste DNA yapısı, gen kavramı, kalıtım prensipleri ve genetik hastalıklar anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    examples: [
      {
        question: "DNA'nın yapı birimi nedir?",
        options: ["Amino asit", "Nükleotid", "Yağ asidi", "Glikoz"],
        answer: "Nükleotid",
        explanation: "DNA'nın yapı birimi nükleotiddir. Her nükleotid, bir şeker (deoksiriboz), bir fosfat grubu ve bir azotlu bazdan oluşur."
      },
      {
        question: "Mendel'in kalıtım kanunlarına göre, iki heterozigot bireyin çaprazlanmasından elde edilen fenotip oranı nedir?",
        options: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
        answer: "3:1",
        explanation: "Mendel'in kalıtım kanunlarına göre, iki heterozigot bireyin çaprazlanmasından elde edilen fenotip oranı 3:1'dir (3 baskın, 1 çekinik)."
      },
      {
        question: "Aşağıdakilerden hangisi DNA'da bulunan azotlu bazlardan biri değildir?",
        options: ["Adenin", "Guanin", "Sitozin", "Ürasil"],
        answer: "Ürasil",
        explanation: "Ürasil, RNA'da bulunan bir azotlu bazdır, DNA'da bulunmaz. DNA'da ürasil yerine timin bulunur."
      },
      {
        question: "İnsan vücut hücrelerinde (somatik hücrelerde) kaç kromozom bulunur?",
        options: ["23", "44", "46", "48"],
        answer: "46",
        explanation: "İnsan vücut hücrelerinde 46 kromozom (23 çift) bulunur."
      },
      {
        question: "Aşağıdakilerden hangisi X kromozomuna bağlı çekinik bir genetik hastalıktır?",
        options: ["Down sendromu", "Hemofili", "Fenilketonüri", "Huntington hastalığı"],
        answer: "Hemofili",
        explanation: "Hemofili, X kromozomuna bağlı çekinik bir genetik hastalıktır ve daha çok erkeklerde görülür."
      },
      {
        question: "Mayoz bölünme sonucunda oluşan hücrelerin kromozom sayısı ana hücreye göre nasıldır?",
        options: ["Aynıdır", "İki katıdır", "Yarısıdır", "Dört katıdır"],
        answer: "Yarısıdır",
        explanation: "Mayoz bölünme sonucunda oluşan hücrelerin kromozom sayısı, ana hücrenin kromozom sayısının yarısı kadardır (haploit)."
      }
    ]
  },
  {
    id: 18,
    title: "Ekoloji ve Ekosistemler",
    thumbnailUrl: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120",
    duration: "20:55",
    saved: false,
    subject: "Biyoloji",
    description: "Bu derste ekosistem kavramı, besin zincirleri, enerji akışı ve biyolojik çeşitlilik konuları anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    examples: [
      {
        question: "Besin piramidinin en alt basamağında hangi canlılar bulunur?",
        options: ["Ayrıştırıcılar", "Otçullar", "Etçiller", "Üreticiler"],
        answer: "Üreticiler",
        explanation: "Besin piramidinin en alt basamağında, güneş enerjisini kullanarak besin üretebilen üreticiler (bitkiler, algler) bulunur."
      },
      {
        question: "Ekosistemdeki madde döngüsü için aşağıdakilerden hangisi doğrudur?",
        options: ["Maddeler tek yönlü hareket eder", "Maddeler sürekli yeniden kullanılır", "Maddeler ekosistemden sürekli kaybolur", "Maddeler sadece canlılarda bulunur"],
        answer: "Maddeler sürekli yeniden kullanılır",
        explanation: "Ekosistemde maddeler döngüler halinde sürekli yeniden kullanılır (karbon, azot, su döngüsü gibi)."
      },
      {
        question: "Canlıların doğal yaşam alanına ne ad verilir?",
        options: ["Popülasyon", "Ekosistem", "Habitat", "Komünite"],
        answer: "Habitat",
        explanation: "Canlıların doğal yaşam alanına habitat adı verilir."
      },
      {
        question: "Aynı türe ait bireylerin oluşturduğu topluluğa ne ad verilir?",
        options: ["Ekosistem", "Habitat", "Popülasyon", "Komünite"],
        answer: "Popülasyon",
        explanation: "Aynı türe ait bireylerin oluşturduğu topluluğa popülasyon adı verilir."
      },
      {
        question: "Aşağıdakilerden hangisi abiyotik (cansız) faktörlerden biridir?",
        options: ["Bitkiler", "Bakteriler", "Sıcaklık", "Mantarlar"],
        answer: "Sıcaklık",
        explanation: "Sıcaklık, bir ekosistemde abiyotik (cansız) faktörlerden biridir."
      },
      {
        question: "İki tür arasında her iki türün de yarar sağladığı ilişki türü nedir?",
        options: ["Parazitlik", "Kommensalizm", "Mutualizm", "Rekabet"],
        answer: "Mutualizm",
        explanation: "Mutualizm, iki tür arasında her iki türün de yarar sağladığı simbiyotik ilişki türüdür."
      }
    ]
  },
  
  // İngilizce videos
  {
    id: 19,
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
      },
      {
        question: "\"I'm looking forward to...\" ifadesi ne anlama gelir?",
        options: ["...dikkate alıyorum", "...bakıyorum", "...düşünüyorum", "...sabırsızlıkla bekliyorum"],
        answer: "...sabırsızlıkla bekliyorum",
        explanation: "\"I'm looking forward to...\" ifadesi \"...sabırsızlıkla bekliyorum\" anlamına gelir."
      },
      {
        question: "\"Could you give me a hand?\" ifadesi hangi durumda kullanılır?",
        options: ["El sıkışmak istediğimizde", "Birinden yardım istediğimizde", "Yön sorduğumuzda", "Bir şeyi anlamadığımızda"],
        answer: "Birinden yardım istediğimizde",
        explanation: "\"Could you give me a hand?\" ifadesi \"Bana yardım eder misin?\" anlamında, birinden yardım istediğimizde kullanılır."
      },
      {
        question: "Aşağıdakilerden hangisi İngilizce'de bir veda ifadesi değildir?",
        options: ["See you later", "Take care", "Nice to meet you", "Goodbye"],
        answer: "Nice to meet you",
        explanation: "\"Nice to meet you\" (Tanıştığımıza memnun oldum) bir karşılaşma ifadesidir, veda ifadesi değildir."
      },
      {
        question: "\"Break a leg!\" deyimi hangi durumda kullanılır?",
        options: ["Birisi yaralandığında", "Birisi bir yarışmaya katıldığında", "Birisi bir performans sergileyeceği zaman şans dilemek için", "Birisi spor yaparken"],
        answer: "Birisi bir performans sergileyeceği zaman şans dilemek için",
        explanation: "\"Break a leg!\" deyimi, birisi bir performans (örneğin sahne gösterisi) sergileyeceği zaman \"Bol şans!\" anlamında kullanılır."
      },
      {
        question: "\"It's on me.\" ifadesi ne anlama gelir?",
        options: ["Üzerimde", "Beni ilgilendiriyor", "Ben ödeyeceğim", "Benim hatam"],
        answer: "Ben ödeyeceğim",
        explanation: "\"It's on me.\" ifadesi genellikle bir restoran veya kafede \"Ben ödeyeceğim, benden\" anlamında kullanılır."
      }
    ]
  },
  {
    id: 20,
    title: "İngilizce Zamanlar",
    thumbnailUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    duration: "21:30",
    saved: false,
    subject: "İngilizce",
    description: "Bu derste İngilizce'deki temel zaman yapıları ve kullanım alanları detaylı olarak anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    examples: [
      {
        question: "\"I am studying English.\" cümlesi hangi zamanı ifade eder?",
        options: ["Present Simple", "Present Continuous", "Past Simple", "Future Simple"],
        answer: "Present Continuous",
        explanation: "\"I am studying English.\" cümlesi Present Continuous (Şimdiki Zaman) yapısındadır ve şu anda devam eden bir eylemi ifade eder."
      },
      {
        question: "Aşağıdaki cümlelerden hangisi Present Perfect Tense yapısındadır?",
        options: ["She went to London last year.", "She has gone to London.", "She is going to London.", "She goes to London every year."],
        answer: "She has gone to London.",
        explanation: "\"She has gone to London.\" cümlesi Present Perfect Tense yapısındadır (has/have + past participle)."
      },
      {
        question: "Past Simple Tense'in düzenli fiillerde eki nedir?",
        options: ["-ing", "-ed", "-s", "-en"],
        answer: "-ed",
        explanation: "Past Simple Tense'in düzenli fiillerde eki -ed'dir (örneğin: walk → walked)."
      },
      {
        question: "\"I _____ to the cinema tomorrow.\" boşluğa hangisi gelmelidir?",
        options: ["go", "goes", "went", "will go"],
        answer: "will go",
        explanation: "Gelecek zamandan bahsedildiği için (tomorrow), boşluğa Future Simple (will + infinitive) yapısı olan \"will go\" gelmelidir."
      },
      {
        question: "Present Perfect Tense genellikle hangi zaman belirteçleriyle kullanılır?",
        options: ["yesterday, last week", "now, at the moment", "already, just, ever, never", "tomorrow, next week"],
        answer: "already, just, ever, never",
        explanation: "Present Perfect Tense genellikle already, just, ever, never gibi zaman belirteçleriyle kullanılır."
      },
      {
        question: "\"She has been living in London _____ 2010.\" boşluğa hangisi gelmelidir?",
        options: ["for", "since", "ago", "during"],
        answer: "since",
        explanation: "Belirli bir başlangıç zamanından beri devam eden durumlarda \"since\" kullanılır: \"She has been living in London since 2010.\""
      }
    ]
  },
  {
    id: 21,
    title: "İş İngilizcesi",
    thumbnailUrl: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d",
    duration: "19:15",
    saved: false,
    subject: "İngilizce",
    description: "Bu derste iş dünyasında kullanılan İngilizce kalıplar, yazışmalar ve görüşme teknikleri anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    examples: [
      {
        question: "İş e-postasında \"I am writing to inquire about...\" ifadesi hangi amaçla kullanılır?",
        options: ["Bir konuda bilgi istemek için", "Şikayet bildirmek için", "Teşekkür etmek için", "Özür dilemek için"],
        answer: "Bir konuda bilgi istemek için",
        explanation: "\"I am writing to inquire about...\" ifadesi, bir konuda bilgi istemek amacıyla kullanılır."
      },
      {
        question: "\"We look forward to hearing from you.\" ifadesi bir iş yazışmasının hangi bölümünde kullanılır?",
        options: ["Giriş", "Gelişme", "Sonuç", "Başlık"],
        answer: "Sonuç",
        explanation: "\"We look forward to hearing from you.\" ifadesi genellikle bir iş yazışmasının sonuç bölümünde, kapanış cümlesi olarak kullanılır."
      },
      {
        question: "İş dünyasında \"deadline\" ne anlama gelir?",
        options: ["İş anlaşması", "Son teslim tarihi", "Maaş günü", "İş tanımı"],
        answer: "Son teslim tarihi",
        explanation: "\"Deadline\" iş dünyasında \"son teslim tarihi\" anlamına gelir."
      },
      {
        question: "İş mülakatında \"What are your strengths?\" sorusu ne hakkında bilgi ister?",
        options: ["Kişisel hobiler", "Güçlü yönler", "Maaş beklentisi", "İş tecrübesi"],
        answer: "Güçlü yönler",
        explanation: "\"What are your strengths?\" sorusu adayın güçlü yönleri hakkında bilgi ister."
      },
      {
        question: "İş hayatında \"to touch base\" deyimi ne anlama gelir?",
        options: ["İşten ayrılmak", "Kısa bir görüşme yapmak", "Anlaşma imzalamak", "İşe geri dönmek"],
        answer: "Kısa bir görüşme yapmak",
        explanation: "\"To touch base\" deyimi, iş hayatında \"kısa bir görüşme yapmak\", \"durum güncellemesi almak\" anlamında kullanılır."
      },
      {
        question: "\"Cc\" bir e-postada ne anlama gelir?",
        options: ["Gizli alıcı", "Karbon kopya", "E-posta konusu", "Zorunlu yanıt"],
        answer: "Karbon kopya",
        explanation: "\"Cc\" (Carbon copy) e-postada \"karbon kopya\" anlamına gelir ve e-postanın bir kopyasının gönderildiği kişileri belirtir."
      }
    ]
  },
  
  // Edebiyat videos
  {
    id: 22,
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
      },
      {
        question: "Şiirde 'kafiye' neyi ifade eder?",
        options: ["Dizelerin uzunluğunu", "Dize sonlarındaki ses benzerliklerini", "Şiirdeki anlam derinliğini", "Şiirin konusunu"],
        answer: "Dize sonlarındaki ses benzerliklerini",
        explanation: "Kafiye, şiirde dize sonlarındaki ses benzerliklerini ifade eder."
      },
      {
        question: "Aşağıdakilerden hangisi şiirin biçimsel unsurlarından biri değildir?",
        options: ["Vezin", "Redif", "Kafiye", "Tema"],
        answer: "Tema",
        explanation: "Tema, şiirin içeriğiyle ilgili bir unsurdur, biçimsel bir unsur değildir."
      },
      {
        question: "\"Gökyüzü mavi bir çanak\" ifadesinde hangi söz sanatı vardır?",
        options: ["Teşbih (Benzetme)", "Teşhis (Kişileştirme)", "Tezat (Karşıtlık)", "Mübalağa (Abartma)"],
        answer: "Teşbih (Benzetme)",
        explanation: "\"Gökyüzü mavi bir çanak\" ifadesinde gökyüzü çanağa benzetilmiştir, bu bir teşbih (benzetme) sanatıdır."
      },
      {
        question: "Hece ölçüsüyle ilgili aşağıdakilerden hangisi doğrudur?",
        options: ["Dizelerdeki hecelerin uzunluk ve kısalıklarına dayanır", "Dizelerdeki hece sayılarının eşitliğine dayanır", "Sadece Batı edebiyatında kullanılır", "Aruz ölçüsünün diğer adıdır"],
        answer: "Dizelerdeki hece sayılarının eşitliğine dayanır",
        explanation: "Hece ölçüsü, şiirde dizelerdeki hece sayılarının eşitliğine dayanır."
      },
      {
        question: "\"Akşam, yine akşam, yine akşam\" dizesinde hangi söz sanatı vardır?",
        options: ["Teşbih", "Tekrir", "Teşhis", "Tezat"],
        answer: "Tekrir",
        explanation: "\"Akşam, yine akşam, yine akşam\" dizesinde \"akşam\" kelimesi tekrar edilerek vurgulanmıştır, bu bir tekrir (yineleme) sanatıdır."
      }
    ]
  },
  {
    id: 23,
    title: "Destan ve Efsaneler",
    thumbnailUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe",
    duration: "18:20",
    saved: false,
    subject: "Edebiyat",
    description: "Bu derste destan ve efsanelerin özellikleri, Türk ve dünya destanları anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    examples: [
      {
        question: "Aşağıdakilerden hangisi Türk destanlarından biri değildir?",
        options: ["Oğuz Kağan Destanı", "Ergenekon Destanı", "Bozkurt Destanı", "İlyada Destanı"],
        answer: "İlyada Destanı",
        explanation: "İlyada Destanı, Yunanlara ait bir destandır, Türk destanı değildir."
      },
      {
        question: "Destanlar hangi dönemde ortaya çıkmıştır?",
        options: ["Yazının kullanılmadığı dönemlerde", "Rönesans döneminde", "Sanayi Devrimi sonrasında", "Modern çağda"],
        answer: "Yazının kullanılmadığı dönemlerde",
        explanation: "Destanlar genellikle yazının kullanılmadığı, sözlü edebiyat dönemlerinde ortaya çıkmıştır."
      },
      {
        question: "Aşağıdaki özelliklerden hangisi destanları efsanelerden ayırır?",
        options: ["Kahramanların olağanüstü özelliklere sahip olması", "Doğa olaylarını açıklaması", "Daha kapsamlı ve uzun olması", "Tanrıların varlığı"],
        answer: "Daha kapsamlı ve uzun olması",
        explanation: "Destanlar, efsanelere göre daha kapsamlı ve uzun anlatılardır, genellikle bir milletin tarihi ve kültürüyle ilgili geniş bilgiler içerir."
      },
      {
        question: "Aşağıdakilerden hangisi Türklerin İslamiyet'ten sonraki dönemine ait bir destandır?",
        options: ["Bozkurt Destanı", "Oğuz Kağan Destanı", "Satuk Buğra Han Destanı", "Yaratılış Destanı"],
        answer: "Satuk Buğra Han Destanı",
        explanation: "Satuk Buğra Han Destanı, Türklerin İslamiyet'i kabul ettikten sonraki dönemine ait bir destandır."
      },
      {
        question: "Aşağıdakilerden hangisi destanların özelliklerinden biri değildir?",
        options: ["Toplumsal olayları konu alması", "Zamanla değişime uğraması", "Her zaman yazılı olarak aktarılması", "Kahramanların olağanüstü niteliklere sahip olması"],
        answer: "Her zaman yazılı olarak aktarılması",
        explanation: "Destanlar başlangıçta sözlü olarak aktarılır, yazıya geçirilmeleri daha sonra olmuştur."
      },
      {
        question: "Homeros'un yazdığı düşünülen dünya edebiyatının önemli destanları hangileridir?",
        options: ["Gılgamış ve Mahabharata", "İlyada ve Odesa", "Kalevala ve Şehname", "Beowulf ve Ramayana"],
        answer: "İlyada ve Odesa",
        explanation: "İlyada ve Odesa (Odysseia), Homeros'un yazdığı düşünülen dünya edebiyatının önemli destanlarıdır."
      }
    ]
  },
  {
    id: 24,
    title: "Roman İncelemesi",
    thumbnailUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe",
    duration: "20:10",
    saved: false,
    subject: "Edebiyat",
    description: "Bu derste roman türünün özellikleri, roman tahlil yöntemleri ve farklı roman akımları anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    examples: [
      {
        question: "Aşağıdakilerden hangisi romanın temel unsurlarından biri değildir?",
        options: ["Kişiler", "Olay örgüsü", "Zaman", "Kafiye"],
        answer: "Kafiye",
        explanation: "Kafiye, şiirin bir unsurudur, romanın temel unsurlarından biri değildir."
      },
      {
        question: "Türk edebiyatında ilk yerli roman olarak kabul edilen eser hangisidir?",
        options: ["İntibah", "Araba Sevdası", "Şemseddin Sami-Taaşşuk-ı Talat ve Fitnat", "Karabibik"],
        answer: "Şemseddin Sami-Taaşşuk-ı Talat ve Fitnat",
        explanation: "Şemseddin Sami'nin \"Taaşşuk-ı Talat ve Fitnat\" adlı eseri, Türk edebiyatında ilk yerli roman olarak kabul edilir."
      },
      {
        question: "Anlatıcının olaylara dahil olmadığı, üçüncü tekil şahıs ağzıyla anlattığı, tarafsız kaldığı anlatım tekniği hangisidir?",
        options: ["Kahraman anlatıcı", "Gözlemci anlatıcı", "Tanrısal anlatıcı", "İç monolog"],
        answer: "Gözlemci anlatıcı",
        explanation: "Gözlemci anlatıcı, olaylara dahil olmadan, üçüncü tekil şahıs ağzıyla anlatan ve tarafsız kalan anlatıcı türüdür."
      },
      {
        question: "Aşağıdakilerden hangisi realizm akımının özelliklerinden biri değildir?",
        options: ["Toplumsal gerçekleri yansıtma", "Objektif gözlem", "Günlük hayattan kesitler sunma", "Düş ve hayal unsurlarına ağırlık verme"],
        answer: "Düş ve hayal unsurlarına ağırlık verme",
        explanation: "Düş ve hayal unsurlarına ağırlık verme, realizm akımının değil, romantizm veya sembolizm gibi akımların özelliğidir."
      },
      {
        question: "Türk edebiyatında Servet-i Fünun döneminin önemli romancılarından biri kimdir?",
        options: ["Ömer Seyfettin", "Halit Ziya Uşaklıgil", "Orhan Kemal", "Yaşar Kemal"],
        answer: "Halit Ziya Uşaklıgil",
        explanation: "Halit Ziya Uşaklıgil, Türk edebiyatında Servet-i Fünun döneminin önemli romancılarından biridir."
      },
      {
        question: "Romanda \"geriye dönüş tekniği\" ne amaçla kullanılır?",
        options: ["Okuyucuyu gelecek hakkında bilgilendirmek için", "Olayların akışını hızlandırmak için", "Geçmişteki olayları hatırlatmak için", "Roman kahramanının fiziksel özelliklerini betimlemek için"],
        answer: "Geçmişteki olayları hatırlatmak için",
        explanation: "Geriye dönüş tekniği, romanda geçmişteki olayları hatırlatmak, karakterlerin geçmişiyle ilgili bilgi vermek için kullanılır."
      }
    ]
  },
  
  // Felsefe videos
  {
    id: 25,
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
      },
      {
        question: "\"Varoluş özden önce gelir.\" sözü hangi filozofa aittir?",
        options: ["Friedrich Nietzsche", "Jean-Paul Sartre", "Albert Camus", "Simone de Beauvoir"],
        answer: "Jean-Paul Sartre",
        explanation: "\"Varoluş özden önce gelir.\" sözü, varoluşçu felsefenin önemli temsilcilerinden Jean-Paul Sartre'a aittir."
      },
      {
        question: "Varoluşçuluk akımının temel iddiası nedir?",
        options: ["İnsan ancak toplumda var olabilir", "İnsan, kendi özünü kendi eylemleriyle oluşturur", "İnsan doğuştan belirlenmiş bir öze sahiptir", "İnsan aklı tüm bilginin kaynağıdır"],
        answer: "İnsan, kendi özünü kendi eylemleriyle oluşturur",
        explanation: "Varoluşçuluk akımının temel iddiası, insanın önceden belirlenmiş bir öze sahip olmadığı, kendi özünü kendi seçimleri ve eylemleriyle oluşturduğudur."
      },
      {
        question: "Varoluşçu felsefede \"anlamsızlık\" ve \"saçmalık\" kavramlarını eserlerinde en çok işleyen düşünür kimdir?",
        options: ["Martin Heidegger", "Albert Camus", "Karl Jaspers", "Simone de Beauvoir"],
        answer: "Albert Camus",
        explanation: "Albert Camus, eserlerinde özellikle \"absürd\" (saçma) kavramını işlemiş ve hayatın anlamsızlığı üzerine düşünceler geliştirmiştir."
      },
      {
        question: "Varoluşçu felsefede \"bulantı\" kavramı neyi ifade eder?",
        options: ["Fiziksel bir rahatsızlığı", "Özgürlük karşısında duyulan kaygıyı", "Yaşamın anlamsızlığı karşısında hissedilen duyguyu", "Diğer insanlarla ilişkilerdeki güvensizliği"],
        answer: "Yaşamın anlamsızlığı karşısında hissedilen duyguyu",
        explanation: "Varoluşçu felsefede, özellikle Sartre'ın eserlerinde \"bulantı\" kavramı, yaşamın anlamsızlığı ve insan varoluşunun temelsizliği karşısında hissedilen duyguyu ifade eder."
      },
      {
        question: "Varoluşçu filozoflara göre \"otantik varoluş\" ne anlama gelir?",
        options: ["Toplumsal kurallara uygun yaşamak", "Başkalarının beklentilerine göre yaşamak", "Kendi seçimlerinin sorumluluğunu üstlenerek yaşamak", "Dini kurallara bağlı kalmak"],
        answer: "Kendi seçimlerinin sorumluluğunu üstlenerek yaşamak",
        explanation: "Varoluşçu filozoflara göre \"otantik varoluş\", kişinin kendi seçimlerinin sorumluluğunu üstlenerek, dışarıdan dayatılan kalıplardan bağımsız bir şekilde yaşamasını ifade eder."
      }
    ]
  },
  {
    id: 26,
    title: "Etik Teoriler",
    thumbnailUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
    duration: "22:25",
    saved: false,
    subject: "Felsefe",
    description: "Bu derste deontoloji, faydacılık, erdem etiği gibi temel etik teoriler ve bunların güncel etik sorunlara uygulanması anlatılmaktadır.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    examples: [
      {
        question: "Kant'ın deontolojik etik teorisinin temel ilkesi nedir?",
        options: ["En fazla sayıda insanın en büyük mutluluğu", "Eylemlerinde erdemli olmak", "Kategorik imperatif", "Altın kural"],
        answer: "Kategorik imperatif",
        explanation: "Kant'ın deontolojik etik teorisinin temel ilkesi kategorik imperatiftir: \"Öyle bir ilkeye göre davran ki, bu ilkenin herkes için geçerli olmasını isteyebilesin.\""
      },
      {
        question: "Faydacılık (utilitarianizm) hangi filozofla özdeşleşmiştir?",
        options: ["Aristoteles", "John Locke", "Jeremy Bentham", "René Descartes"],
        answer: "Jeremy Bentham",
        explanation: "Faydacılık (utilitarianizm) etik teorisi, özellikle Jeremy Bentham ve daha sonra John Stuart Mill ile özdeşleşmiştir."
      },
      {
        question: "Erdem etiği teorisinin temellerini atan düşünür kimdir?",
        options: ["Aristoteles", "Platon", "Sokrates", "Epikuros"],
        answer: "Aristoteles",
        explanation: "Erdem etiği teorisinin temelleri Aristoteles tarafından atılmıştır. Aristoteles'e göre etik davranış, erdemli karakterden kaynaklanır."
      },
      {
        question: "Aşağıdakilerden hangisi faydacılık teorisinin temel prensibidir?",
        options: ["Mutlak doğrular vardır ve bunlara uymak gerekir", "Erdemli bir karakter geliştirmek önemlidir", "En çok sayıda insanın en büyük faydasını sağlayan eylem doğrudur", "Eylemlerin niyeti sonuçlarından daha önemlidir"],
        answer: "En çok sayıda insanın en büyük faydasını sağlayan eylem doğrudur",
        explanation: "Faydacılık teorisinin temel prensibi, en çok sayıda insanın en büyük faydasını (veya mutluluğunu) sağlayan eylemin doğru olduğudur."
      },
      {
        question: "Deontolojik etik teorisine göre, bir eylemin ahlaki değeri neye bağlıdır?",
        options: ["Eylemin sonuçlarına", "Eylemin niyetine ve ödev duygusuna", "Toplum tarafından kabul görmesine", "Kişisel tercihlere"],
        answer: "Eylemin niyetine ve ödev duygusuna",
        explanation: "Deontolojik etik teorisine göre, bir eylemin ahlaki değeri onun sonuçlarına değil, niyetine ve ödev duygusuna bağlıdır."
      },
      {
        question: "Aşağıdakilerden hangisi etik teorilerin cevaplamaya çalıştığı temel sorulardan biri değildir?",
        options: ["İyi yaşam nedir?", "Doğru eylem nedir?", "Evrenin kökeni nedir?", "Erdemli insan nasıl olmalıdır?"],
        answer: "Evrenin kökeni nedir?",
        explanation: "\"Evrenin kökeni nedir?\" sorusu, etik teorilerin değil, metafizik veya kozmolojinin cevaplamaya çalıştığı bir sorudur."
      }
    ]
  },
  {
    id: 27,
    title: "Bilgi Felsefesi",
    thumbnailUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b",
    duration: "21:15",
    saved: false,
    subject: "Felsefe",
    description: "Bu derste epistemoloji (bilgi teorisi), bilginin kaynağı, doğruluğu ve sınırları konuları incelenmektedir.",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    examples: [
      {
        question: "Bilgi felsefesinde \"Ben düşünüyorum, öyleyse varım.\" sözü hangi filozofa aittir?",
        options: ["René Descartes", "John Locke", "David Hume", "Immanuel Kant"],
        answer: "René Descartes",
        explanation: "\"Cogito, ergo sum\" (Ben düşünüyorum, öyleyse varım) sözü, modern felsefenin kurucusu olarak kabul edilen René Descartes'a aittir."
      },
      {
        question: "Empirizm (deneycilik) bilginin kaynağı olarak neyi kabul eder?",
        options: ["Aklı", "Deneyi ve duyumları", "Sezgiyi", "Vahiyi"],
        answer: "Deneyi ve duyumları",
        explanation: "Empirizm (deneycilik), bilginin kaynağı olarak deneyi ve duyumları kabul eder. Bu görüşe göre, bilgi a posteriori (deneyden sonra) elde edilir."
      },
      {
        question: "Rasyonalizm (akılcılık) bilginin kaynağı olarak neyi kabul eder?",
        options: ["Aklı", "Deneyi", "İnancı", "Duyguları"],
        answer: "Aklı",
        explanation: "Rasyonalizm (akılcılık), bilginin kaynağı olarak aklı kabul eder. Bu görüşe göre, bazı bilgiler a priori (deneyden önce) olarak elde edilir."
      },
      {
        question: "Bilgi felsefesinde, bir bilginin doğru olması için doğru inanca ek olarak ne gereklidir?",
        options: ["Geniş kabul görmesi", "Gerekçelendirilmesi", "Yazılı olması", "Basit olması"],
        answer: "Gerekçelendirilmesi",
        explanation: "Klasik bilgi tanımına göre, bilgi 'gerekçelendirilmiş doğru inanç'tır. Yani bir bilginin doğru olması için doğru inanca ek olarak gerekçelendirilmesi gerekir."
      },
      {
        question: "\"Hiçbir şey bilinemez.\" görüşünü savunan felsefi yaklaşım hangisidir?",
        options: ["Dogmatizm", "Skeptisizm (Şüphecilik)", "Pozitivizm", "Pragmatizm"],
        answer: "Skeptisizm (Şüphecilik)",
        explanation: "Skeptisizm (Şüphecilik), kesin bilginin mümkün olmadığını, hiçbir şeyin tam olarak bilinemeyeceğini savunan felsefi yaklaşımdır."
      },
      {
        question: "Kant'ın bilgi teorisinde \"sentetik a priori bilgi\" ne anlama gelir?",
        options: ["Deneyden bağımsız ama içeriği genişleten bilgi", "Sadece deneyle elde edilen bilgi", "Doğuştan gelen bilgi", "Tamamen analitik olan bilgi"],
        answer: "Deneyden bağımsız ama içeriği genişleten bilgi",
        explanation: "Kant'ın bilgi teorisinde \"sentetik a priori bilgi\", deneyden bağımsız (a priori) olmasına rağmen, analitik önermeler gibi sadece kavram çözümlemesi olmayıp, bilgimizin içeriğini genişleten bilgidir."
      }
    ]
  }
];

