
interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  imageUrl?: string;
  subject?: string;
}

export const detectMessageSubject = (text: string): string | undefined => {
  const subjectKeywords: Record<string, string[]> = {
    'Matematik': ['matematik', 'sayı', 'geometri', 'işlem', 'problem', 'denklem'],
    'Fizik': ['fizik', 'kuvvet', 'hareket', 'enerji', 'elektrik'],
    'Kimya': ['kimya', 'element', 'bileşik', 'reaksiyon', 'asit', 'baz'],
    'Biyoloji': ['biyoloji', 'hücre', 'canlı', 'organ', 'sistem'],
    'Tarih': ['tarih', 'savaş', 'antlaşma', 'devlet', 'medeniyet'],
    'Coğrafya': ['coğrafya', 'iklim', 'yer', 'bölge', 'harita'],
    'Felsefe': ['felsefe', 'düşünce', 'filozof', 'etik', 'mantık'],
    'İngilizce': ['ingilizce', 'grammar', 'vocabulary', 'tense'],
    'Edebiyat': ['edebiyat', 'şiir', 'roman', 'yazar', 'metin']
  };

  const lowerText = text.toLowerCase();
  
  for (const [subject, keywords] of Object.entries(subjectKeywords)) {
    if (keywords.some(keyword => lowerText.includes(keyword))) {
      return subject;
    }
  }
  
  return undefined;
};

export const saveChatMessages = (messages: ChatMessage[]) => {
  localStorage.setItem('ai_assistant_chats', JSON.stringify(messages));
};

export const getChatMessages = (): ChatMessage[] => {
  const savedMessages = localStorage.getItem('ai_assistant_chats');
  return savedMessages ? JSON.parse(savedMessages) : [];
};

export const getChatsBySubject = (subject: string): ChatMessage[] => {
  const allMessages = getChatMessages();
  return allMessages.filter(msg => msg.subject === subject);
};
