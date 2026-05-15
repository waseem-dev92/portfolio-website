import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/10 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm text-muted-foreground font-mono">
          &copy; {currentYear} Waseem Abbas. Designed & Built with precision.
        </p>
      </div>
    </footer>
  );
}
