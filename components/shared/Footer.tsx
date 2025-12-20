import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#111111] text-white py-16 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand Column */}
                <div className="space-y-6">
                    <Link to="/" className="text-2xl font-display font-bold tracking-tighter uppercase flex items-center gap-1">
                        Speedy<span className="text-primary">.</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
                        Premium caffeine delivered at the speed of light. Sustainable sourcing, expert roasts, and flavor that keeps you moving.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                            <span className="material-icons-outlined text-xl">facebook</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                            <span className="material-icons-outlined text-xl">camera_alt</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-colors">
                            <span className="material-icons-outlined text-xl">X</span>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary">Shop</h4>
                    <ul className="space-y-4 text-gray-400 text-sm font-light">
                        <li><a href="#" className="hover:text-white transition-colors">Subscriptions</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Coffee Beans</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Brewing Gear</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary">Company</h4>
                    <ul className="space-y-4 text-gray-400 text-sm font-light">
                        <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                        <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-display font-bold mb-6 text-sm uppercase tracking-widest text-primary">Support</h4>
                    <ul className="space-y-4 text-gray-400 text-sm font-light">
                        <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>© 2025 Speedy Coffee Co. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <Link to="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
