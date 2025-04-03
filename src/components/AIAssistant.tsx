
import React, { useState } from 'react';
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
  
  const quickQuestions = [
    "Nasıl daha etkili çalışabilirim?",
    "Son izlediğim videoyu özetle",
    "Tarih konularında zorlanıyorum",
    "Fizik formüllerini ezberlemek için ipuçları"
  ];

  const handleSend = async () => {
    if (!input.trim()) return;
    
    // Add user message
    const newUserMessage = { id: messages.length + 1, text: input, sender: 'user' as const };
    setMessages([...messages, newUserMessage]);
    setInput('');
    
    // Show AI is typing
    setIsTyping(true);
    
    try {
      // OpenAI API call
      const apiKey = "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";
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Sen bir eğitim asistanısın. Öğrencilere derslerinde yardımcı olan, anlaşılır ve destekleyici cevaplar veren bir yapay zekasın. Cevapların kısa, özlü ve Türkçe olmalı.'
            },
            {
              role: 'user',
              content: input
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Add AI response to messages
      const aiResponseText = data.choices[0].message.content;
      const aiResponse = { 
        id: messages.length + 2, 
        text: aiResponseText, 
        sender: 'ai' as const 
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      toast({
        title: "Hata",
        description: "Yanıt alınamadı. Lütfen daha sonra tekrar deneyin.",
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
