
import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, X, Upload } from 'lucide-react';

interface ProfileEditorProps {
  isOpen: boolean;
  onClose: () => void;
  currentUsername: string;
  currentInitials: string;
  currentImageUrl?: string;
  onSave: (username: string, imageUrl: string | null) => void;
}

const ProfileEditor = ({
  isOpen,
  onClose,
  currentUsername,
  currentInitials,
  currentImageUrl,
  onSave
}: ProfileEditorProps) => {
  const [username, setUsername] = useState(currentUsername);
  const [imageUrl, setImageUrl] = useState(currentImageUrl || '');
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  // Reset the form when the dialog opens
  useEffect(() => {
    if (isOpen) {
      setUsername(currentUsername);
      setImageUrl(currentImageUrl || '');
    }
  }, [isOpen, currentUsername, currentImageUrl]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // In a real app, you would upload the file to a server here
    // For this demo, we'll just create a local URL
    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      const reader = new FileReader();
      reader.onload = () => {
        // Store the image in localStorage to persist it
        const imageDataUrl = reader.result as string;
        setImageUrl(imageDataUrl);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }, 1000);
  };

  const handleSave = () => {
    if (!username.trim()) {
      toast({
        title: "Hata",
        description: "Kullanıcı adı boş olamaz",
        variant: "destructive"
      });
      return;
    }

    onSave(username, imageUrl || null);
    toast({
      title: "Başarılı",
      description: "Profil bilgileriniz güncellendi"
    });
    onClose();
  };

  const handleClearImage = () => {
    setImageUrl('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profil Düzenle</DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <Avatar className="w-24 h-24">
                {imageUrl ? (
                  <AvatarImage src={imageUrl} alt={username} />
                ) : (
                  <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                    {currentInitials}
                  </AvatarFallback>
                )}
              </Avatar>
              
              {imageUrl && (
                <button 
                  onClick={handleClearImage}
                  className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => document.getElementById('profile-pic')?.click()}>
                <Upload size={16} className="mr-2" />
                {isUploading ? 'Yükleniyor...' : 'Fotoğraf Yükle'}
              </Button>
              <input 
                id="profile-pic"
                type="file" 
                accept="image/*" 
                className="hidden"
                onChange={handleFileChange}
                disabled={isUploading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Kullanıcı Adı</Label>
            <Input 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Kullanıcı adınızı girin"
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>İptal</Button>
          <Button onClick={handleSave}>Kaydet</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileEditor;
