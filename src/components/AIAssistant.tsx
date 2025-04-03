
import React, { useState, useEffect, useRef } from 'react';
import { Send, Image, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const AIAssistant = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Merhaba! Ben öğrenme asistanınız. Size nasıl yardımcı olabilirim?', sender: 'ai' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const quickQuestions = [
    "Nasıl daha etkili çalışabilirim?",
    "Son izlediğim videoyu özetle",
    "Tarih konularında zorlanıyorum",
    "Fizik formüllerini ezberlemek için ipuçları"
  ];

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const newUserMessage = { id: messages.length + 1, text: input, sender: 'user' as const };
    setMessages([...messages, newUserMessage]);
    setInput('');
    
    // Show AI is typing
    setIsTyping(true);
    
    try {
      // Simulate AI response without relying on OpenAI API
      // We'll have hardcoded responses based on keywords
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      
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
      else {
        aiResponse = "Bu konu hakkında size yardımcı olmak isterim. Daha spesifik bir soru sorabilir misiniz? Eğitim, çalışma teknikleri, veya belirli dersler hakkında sorularınızı yanıtlayabilirim.";
      }
      
      // Add AI response to messages
      const aiResponseObj = { 
        id: messages.length + 2, 
        text: aiResponse, 
        sender: 'ai' as const 
      };
      
      setMessages(prev => [...prev, aiResponseObj]);
    } catch (error) {
      console.error('Hata:', error);
      toast({
        title: "Hata",
        description: "Bir sorun oluştu, lütfen daha sonra tekrar deneyin.",
        variant: "destructive",
      });
      
      // Add fallback error message
      const errorResponse = { 
        id: messages.length + 2, 
        text: "Üzgünüm, bir sorun oluştu. Lütfen daha sonra tekrar deneyin.", 
        sender: 'ai' as const 
      };
      
      setMessages(prev => [...prev, errorResponse]);
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

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  const handleImageUpload = () => {
    toast({
      title: "Görsel yükleme",
      description: "Görsel yükleme özelliği hazırlanıyor...",
    });
    // This would be implemented with OpenAI's vision capabilities in a future update
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
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
              <p className="text-sm whitespace-pre-wrap">{message.text}</p>
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
        <div className="flex flex-wrap gap-2 mb-4">
          {quickQuestions.map((question, index) => (
            <button
              key={index}
              className="bg-muted text-xs py-1.5 px-3 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => handleQuickQuestion(question)}
            >
              {question}
            </button>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="shrink-0"
            onClick={handleImageUpload}
            disabled={isTyping || isUploading}
          >
            <Image size={20} />
          </Button>
          
          <div className="relative flex-1">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Bir soru sorun veya fotoğraf gönderin..."
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
            disabled={isTyping || !input.trim()}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
