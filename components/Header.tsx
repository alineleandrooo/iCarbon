import React from 'react';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="sticky top-0 z-10 bg-black/70 backdrop-blur-md">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6">
                <h1 className="text-2xl font-bold text-white">iCarbon</h1>
                <h2 className="text-lg font-semibold text-gray-300">{title}</h2>
            </div>
        </header>
    );
};

export default Header;
