import type { ReactNode } from 'react';

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

const Header = ({ image, children }: HeaderProps) => {
  return (
    <header className="text-2xl uppercase pb-2">
      <img
        src={image.src}
        alt={image.alt}
        className="w-16 h-16 object-contain mb-4"
      />
      {children}
    </header>
  );
};

export default Header;
