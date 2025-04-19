import React, { useState, useEffect, useRef } from 'react';
import { Send, Image, X, Loader2, FolderOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import ReactMarkdown from 'react-markdown';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { detectMessageSubject, saveChatMessages, getChatMessages } from '@/utils/chatUtils';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  imageUrl?: string;
  subject?: string;
}

const allSubjects = [
  'Tarih',
  'Coğrafya',
  'Felsefe',
  'Matematik',
  'Fizik',
  'Kimya',
  'Biyoloji',
  'İngilizce',
  'Edebiyat'
];

const AIAssistant = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Merhaba! Ben öğrenme asistanınız. Size nasıl yardımcı olabilirim?', sender: 'ai' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | undefined>(undefined);

  const OPENAI_API_KEY = "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";

  useEffect(() => {
    const savedMessages = getChatMessages();
    if (savedMessages.length > 0) {
      setMessages(savedMessages);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      saveChatMessages(messages);
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;
    
    const userText = input.trim() || "";
    const detectedSubject = detectMessageSubject(userText) || selectedSubject;
    
    const newUserMessage: Message = { 
      id: messages.length + 1, 
      text: userText, 
      sender: 'user',
      imageUrl: selectedImage || undefined,
      subject: detectedSubject
    };
    
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    saveChatMessages(updatedMessages);
    setInput('');
    setSelectedImage(null);
    
    setIsTyping(true);
    
    try {
      const apiMessages = [
        {
          role: 'system',
          content: 'Sen bir eğitim asistanısın. Öğrencilere ders çalışma, motivasyon, eğitim içerikleri hakkında Türkçe yardım ediyorsun. Eğitimle ilgili olmayan sorulara "Üzgünüm, ben bir eğitim asistanıyım ve sadece eğitimle ilgili konularda yardımcı olabilirim." diye yanıt ver.'
        },
        ...messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.imageUrl 
            ? [
                { type: 'text', text: msg.text },
                { type: 'image_url', image_url: { url: msg.imageUrl } }
              ] 
            : msg.text
        }))
      ];

      if (selectedImage) {
        apiMessages.push({
          role: 'user',
          content: [
            { type: 'text', text: userText || "Bu görsel hakkında bilgi verir misiniz?" },
            { type: 'image_url', image_url: { url: selectedImage } }
          ]
        });
      } else {
        apiMessages.push({
          role: 'user',
          content: userText
        });
      }

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 500
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('OpenAI API Error:', errorData);
        throw new Error(`API error: ${response.status} ${errorData.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      const aiMessage = data.choices[0].message.content;
      
      const aiResponseObj = { 
        id: updatedMessages.length + 1, 
        text: aiMessage, 
        sender: 'ai' as const,
        subject: detectedSubject
      };
      
      const finalMessages = [...updatedMessages, aiResponseObj];
      setMessages(finalMessages);
      saveChatMessages(finalMessages);
    } catch (error) {
      console.error('OpenAI API Error:', error);
      
      let aiResponse = "";
      const userInput = input.toLowerCase();
      
      if (userInput.includes("etkili çalış") || userInput.includes("verimli çalış")) {
        aiResponse = "Etkili çalışmak için bazı öneriler:\n\n" +
          "1. Pomodoro tekniğini deneyin: 25 dakika çalışıp 5 dakika ara verin\n" +
          "2. Çalışma ortamınızı dikkat dağıtıcılardan arındırın\n" +
          "3. Günlük ve haftalık çalışma planları yapın\n" +
          "4. Zor konuları sabah saatlerinde çalışın\n" +
          "5. Aktif öğrenme teknikleri kullanın: notlar alın, özetler çıkarın";
      }
      else if (userInput.includes("video") || userInput.includes("özetle")) {
        aiResponse = "Son izlediğiniz video hakkında bilgim yok, ancak ana noktaları hatırlamak için video izlerken not almayı deneyebilirsiniz. Videoyu izledikten sonra kendi cümlelerinizle özetlemeye çalışın.";
      }
      else if (userInput.includes("tarih")) {
        aiResponse = "Tarih konularında zorlanıyorsanız şunları deneyebilirsiniz:\n\n" +
          "1. Tarih şeritleri ve zaman çizelgeleri oluşturun\n" +
          "2. Olayları hikayeleştirin ve bağlantılar kurun\n" +
          "3. Tarihsel romanlar ve belgeseller izleyin\n" +
          "4. Konular arasında neden-sonuç ilişkileri kurun\n" +
          "5. Dönem dönem çalışın, tüm tarihi birden öğrenmeye çalışmayın";
      }
      else if (userInput.includes("fizik") || userInput.includes("formül")) {
        aiResponse = "Fizik formüllerini ezberlemek için ipuçları:\n\n" +
          "1. Formülleri anlamaya çalışın, ezberlemeyin\n" +
          "2. Her bir sembolün ne anlama geldiğini öğrenin\n" +
          "3. Formülleri türetmeye çalışın\n" +
          "4. Pratik yapın: formülleri uygulayın\n" +
          "5. Görsel kartlar hazırlayın ve düzenli tekrar edin";
      }
      else if (userInput.includes("matematik")) {
        aiResponse = "Matematik çalışırken:\n\n" +
          "1. Temel kavramları sağlam öğrenin\n" +
          "2. Bol örnek çözün\n" +
          "3. Zorlandığınız konularda video derslerden faydalanın\n" +
          "4. Formülleri not kartlarına yazıp düzenli tekrar edin\n" +
          "5. Öğrendiğiniz konuyu başkalarına anlatmaya çalışın";
      }
      else if (userInput.includes("motivasyon") || userInput.includes("motive")) {
        aiResponse = "Motivasyonunuzu artırmak için:\n\n" +
          "1. Küçük, ulaşılabilir hedefler belirleyin\n" +
          "2. Kendinizi ödüllendirin\n" +
          "3. Çalışma arkadaşı edinin\n" +
          "4. İlerlemenizi takip edin\n" +
          "5. Neden çalıştığınızı hatırlayın ve hedeflerinizi görünür bir yere asın";
      }
      else if (userInput.includes("sınav") || userInput.includes("test")) {
        aiResponse = "Sınavlara hazırlanırken:\n\n" +
          "1. Düzenli ve planlı çalışın\n" +
          "2. Bol soru çözün\n" +
          "3. Deneme sınavları yapın\n" +
          "4. Hata analizleri yapın\n" +
          "5. Stres yönetimi tekniklerini öğrenin";
      }
      else if (userInput.includes("kitap") || userInput.includes("okuma")) {
        aiResponse = "Kitap okuma alışkanlığı için öneriler:\n\n" +
          "1. Her gün belirli bir süre okumaya ayırın\n" +
          "2. İlgi alanlarınıza göre kitaplar seçin\n" +
          "3. Not alarak okuyun\n" +
          "4. Kitap kulüplerine katılın\n" +
          "5. E-kitap ve sesli kitapları da değerlendirin";
      }
      else if (userInput.includes("not") || userInput.includes("not alma")) {
        aiResponse = "Etkili not alma teknikleri:\n\n" +
          "1. Cornell not alma sistemi\n" +
          "2. Harita ve şemalar kullanın\n" +
          "3. Kendi kelimelilerinizle yazın\n" +
          "4. Renkli kalemler ve işaretleyiciler kullanın\n" +
          "5. Dijital not alma araçlarını deneyin (Notion, Evernote vb.)";
      }
      else if (selectedImage) {
        aiResponse = "Görselinizi inceledim ancak şu anda API bağlantısı olmadığı için detaylı analiz yapamıyorum. Görsel içeriği ile ilgili belirli bir sorunuz varsa, lütfen tekrar sorunuzu belirtin.";
      }
      else {
        aiResponse = "Üzgünüm, şu anda API ile bağlantı kuramıyorum. Daha sonra tekrar deneyebilir misiniz? Alternatif olarak, eğitim teknikleri, çalışma yöntemleri veya belirli dersler hakkında sorular sorabilirsiniz.";
      }
      
      toast({
        title: "Bağlantı Hatası",
        description: "OpenAI API ile iletişim kurarken bir sorun oluştu. Offline mod kullanılıyor.",
        variant: "destructive",
      });
      
      const errorResponse = { 
        id: updatedMessages.length + 1, 
        text: aiResponse, 
        sender: 'ai' as const,
        subject: detectedSubject
      };
      
      const finalMessages = [...updatedMessages, errorResponse];
      setMessages(finalMessages);
      saveChatMessages(finalMessages);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Hata",
        description: "Lütfen geçerli bir görsel dosyası seçin (JPEG, PNG, vb.)",
        variant: "destructive",
      });
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "Hata",
        description: "Görsel boyutu 5MB'den küçük olmalıdır.",
        variant: "destructive",
      });
      return;
    }
    
    setIsUploading(true);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result as string;
        setSelectedImage(base64String);
        setIsUploading(false);
      };
      reader.onerror = () => {
        throw new Error("Görsel yüklenirken bir hata oluştu.");
      };
    } catch (error: any) {
      toast({
        title: "Görsel Yükleme Hatası",
        description: error.message,
        variant: "destructive",
      });
      setIsUploading(false);
    }
    
    e.target.value = '';
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">AI Asistan</h2>
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tüm dersler" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">Tüm dersler</SelectItem>
            {allSubjects.map((subject) => (
              <SelectItem key={subject} value={subject}>
                {subject}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 p-4 overflow-y-auto">
        {messages
          .filter(msg => !selectedSubject || msg.subject === selectedSubject)
          .map((message) => (
          <div 
            key={message.id} 
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl p-3 ${
                message.sender === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-foreground'
              }`}
            >
              {message.subject && (
                <div className="text-xs opacity-75 mb-1 flex items-center gap-1">
                  <FolderOpen size={12} />
                  {message.subject}
                </div>
              )}
              {message.imageUrl && (
                <div className="mb-2">
                  <img 
                    src={message.imageUrl} 
                    alt="User uploaded" 
                    className="rounded-lg max-h-[200px] max-w-full object-contain"
                  />
                </div>
              )}
              {message.sender === 'ai' ? (
                <div className="text-sm markdown-content">
                  <ReactMarkdown>{message.text}</ReactMarkdown>
                </div>
              ) : (
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-muted text-foreground max-w-[80%] rounded-2xl p-3">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-light"></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-light" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse-light" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 bg-background border-t border-border">
        {selectedImage && (
          <div className="mb-2 relative inline-block">
            <img 
              src={selectedImage} 
              alt="Selected" 
              className="h-20 rounded-lg object-cover"
            />
            <button
              onClick={removeSelectedImage}
              className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1"
            >
              <X size={14} />
            </button>
          </div>
        )}
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="shrink-0"
            onClick={handleImageUpload}
            disabled={isTyping || isUploading}
          >
            {isUploading ? (
              <Loader2 size={20} className="animate-spin" />
            ) : (
              <Image size={20} />
            )}
          </Button>
          
          <input 
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          
          <div className="relative flex-1">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="AI Asistanım"
              className="w-full rounded-full px-4 pr-12 py-2 resize-none bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              rows={1}
              style={{ minHeight: '40px', maxHeight: '120px' }}
              disabled={isTyping}
            />
            {input && (
              <button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary"
                onClick={() => setInput('')}
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          <Button 
            size="icon" 
            className="shrink-0 rounded-full"
            onClick={handleSend}
            disabled={isTyping || (!input.trim() && !selectedImage)}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
