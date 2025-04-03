
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, BookOpen, MessageSquareText, User } from 'lucide-react';

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border h-16 flex items-center justify-around px-4 z-10">
      <Link to="/" className={`nav-item ${path === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
        <Home className="nav-icon" />
        <span>Ana Sayfa</span>
      </Link>
      <Link to="/library" className={`nav-item ${path === '/library' ? 'text-primary' : 'text-muted-foreground'}`}>
        <BookOpen className="nav-icon" />
        <span>Kütüphane</span>
      </Link>
      <Link to="/assistant" className={`nav-item ${path === '/assistant' ? 'text-primary' : 'text-muted-foreground'}`}>
        <MessageSquareText className="nav-icon" />
        <span>Asistan</span>
      </Link>
      <Link to="/profile" className={`nav-item ${path === '/profile' ? 'text-primary' : 'text-muted-foreground'}`}>
        <User className="nav-icon" />
        <span>Profil</span>
      </Link>
    </div>
  );
};

export default NavBar;
