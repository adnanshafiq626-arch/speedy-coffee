import React from 'react';

const Navbar: React.FC = () => {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="bg-[#1F1F1F]/95 backdrop-blur-md text-white rounded-full px-2 py-2 flex items-center shadow-2xl border border-gray-800 max-w-2xl w-full justify-between">
                <button className="flex items-center gap-2 px-4 py-2 hover:text-gray-300 transition-colors">
                    <span className="material-icons-outlined text-xl">menu</span>
                    <span className="font-medium">Menu</span>
                </button>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a
                        className="text-2xl font-display font-bold tracking-tighter uppercase flex items-center gap-1"
                        href="#"
                    >
                        Speedy<span className="text-primary">.</span>
                    </a>
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-5 py-2 rounded-full font-medium text-sm hover:bg-gray-700 transition-colors hidden sm:block">
                        Login
                    </button>
                    <button className="bg-primary text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-lime-400 transition-colors transform hover:scale-105 duration-200 shadow-[0_0_15px_rgba(163,230,53,0.4)]">
                        Order Now
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
