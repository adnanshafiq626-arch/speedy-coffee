import React from 'react';
import type { Testimonial } from '../../types/types';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    const { variant, content, author, rating, likes, comments, date, platform, productImage } = testimonial;

    // Rose Quote variant
    if (variant === 'rose-quote') {
        return (
            <div className="break-inside-avoid bg-rose-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                <span className="material-icons absolute top-6 right-6 text-rose-200 text-6xl -z-0">
                    format_quote
                </span>
                <div className="flex items-start gap-4 relative z-10">
                    <img
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                        src={author.avatar}
                    />
                    <div>
                        <p className="text-gray-800 font-medium leading-relaxed mb-2">
                            "{content}"
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // White Review with Platform Logo
    if (variant === 'white-review') {
        return (
            <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                        <img
                            alt="User Avatar"
                            className="w-10 h-10 rounded-full object-cover"
                            src={author.avatar}
                        />
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="font-bold text-sm text-gray-900">
                                    {author.name}
                                </h4>
                                {author.role && (
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                                        {author.role}
                                    </span>
                                )}
                            </div>
                            {author.handle && <p className="text-xs text-gray-500">{author.handle}</p>}
                        </div>
                    </div>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {content}
                </p>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                    {platform && <img alt="Platform Logo" className="w-5 h-5" src={platform} />}
                    {date && <span className="text-xs text-gray-400">{date}</span>}
                </div>
            </div>
        );
    }

    // Yellow with Video Button
    if (variant === 'yellow-video') {
        return (
            <div className="break-inside-avoid bg-amber-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="material-icons text-amber-200 text-5xl mb-2 block">
                    format_quote
                </span>
                <p className="text-gray-800 font-medium mb-6">
                    "{content}"
                </p>
                <button className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow hover:scale-105 transition-all duration-200 group w-max">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <span className="material-icons text-sm">play_arrow</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                        Watch their review
                    </span>
                </button>
                <div className="mt-6 flex items-center gap-3">
                    <img
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                        src={author.avatar}
                    />
                    <div>
                        <p className="text-sm font-bold text-gray-900">{author.name}</p>
                        {author.role && <p className="text-xs text-gray-500">{author.role}</p>}
                    </div>
                </div>
            </div>
        );
    }

    // White with Rating
    if (variant === 'white-rating') {
        return (
            <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start mb-3">
                    <img
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                        src={author.avatar}
                    />
                    {rating && (
                        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
                            <span className="material-icons text-amber-400 text-sm">star</span>
                            <span className="text-xs font-bold text-amber-700">{rating}/5</span>
                        </div>
                    )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    "{content}"
                </p>
                <div className="flex items-center justify-end gap-4 text-gray-400 text-xs">
                    {likes && (
                        <div className="flex items-center gap-1">
                            <span className="material-icons text-sm text-rose-400">favorite</span> {likes >= 1000 ? `${likes / 1000}k` : likes}
                        </div>
                    )}
                    {comments && (
                        <div className="flex items-center gap-1">
                            <span className="material-icons text-sm">chat_bubble_outline</span> {comments}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // Large White with Gradient Bar
    if (variant === 'large-white') {
        return (
            <div className="break-inside-avoid bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-200 to-amber-500"></div>
                <span className="material-icons absolute top-6 right-8 text-amber-100 text-8xl -z-0">
                    format_quote
                </span>
                <p className="text-gray-600 text-lg italic leading-relaxed mb-6 relative z-10">
                    "{content}"
                </p>
                <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between items-end sm:items-center gap-4">
                    <div>
                        <p className="font-bold text-gray-900">{author.name}</p>
                        {rating && (
                            <div className="flex text-amber-400 text-sm mt-1">
                                {Array.from({ length: rating }).map((_, i) => (
                                    <span key={i} className="material-icons text-sm">star</span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                        <span className="material-icons text-lg">coffee</span>
                    </div>
                </div>
            </div>
        );
    }

    // Product Designer with Stars
    if (variant === 'product-designer') {
        return (
            <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                {rating && (
                    <div className="flex text-amber-400 mb-3">
                        {Array.from({ length: rating }).map((_, i) => (
                            <span key={i} className="material-icons text-sm">star</span>
                        ))}
                    </div>
                )}
                <p className="text-gray-800 font-medium mb-4">
                    "{content}"
                </p>
                <div className="flex items-center gap-3">
                    <img
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover"
                        src={author.avatar}
                    />
                    <div>
                        <p className="text-xs font-bold text-amber-900">
                            {author.name}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Image Overlay
    if (variant === 'image-overlay' && productImage) {
        return (
            <div className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-[400px]">
                <img
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={productImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2 mb-2">
                        <img
                            alt="User"
                            className="w-8 h-8 rounded-full border border-white/50"
                            src={author.avatar}
                        />
                        <div className="text-white/90 text-xs">
                            <p className="font-bold">{author.name}</p>
                            {author.handle && <p className="opacity-70">{author.handle}</p>}
                        </div>
                    </div>
                    <p className="text-white text-sm font-medium leading-relaxed">
                        "{content}"
                    </p>
                </div>
            </div>
        );
    }

    // Rose Long Text
    if (variant === 'rose-long') {
        return (
            <div className="break-inside-avoid bg-rose-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                    <img
                        alt="User"
                        className="w-12 h-12 rounded-full object-cover border-4 border-white"
                        src={author.avatar}
                    />
                </div>
                <p className="text-gray-700 mb-6 leading-loose">
                    {content}
                </p>
                <div className="mt-auto">
                    <p className="font-bold text-gray-900 text-sm">{author.name}</p>
                    {author.role && (
                        <p className="text-xs text-rose-400">
                            {author.role}
                        </p>
                    )}
                </div>
            </div>
        );
    }

    // Yellow Small Quote
    if (variant === 'yellow-small') {
        return (
            <div className="break-inside-avoid bg-amber-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <span className="material-icons text-amber-200 text-4xl mb-2 block">
                    format_quote
                </span>
                <p className="text-gray-800 font-semibold mb-4 text-sm">
                    "{content}"
                </p>
                <div className="flex items-center gap-2">
                    <img
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover"
                        src={author.avatar}
                    />
                    <div>
                        <p className="text-xs font-bold text-gray-900">{author.name}</p>
                        {author.handle && <p className="text-[10px] text-gray-500">{author.handle}</p>}
                    </div>
                </div>
            </div>
        );
    }

    // White with Date
    if (variant === 'white-date') {
        return (
            <div className="break-inside-avoid bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-between items-center text-xs text-gray-400 mb-4 pb-4 border-b border-gray-100">
                    <div className="flex gap-3">
                        {likes && (
                            <span className="flex items-center gap-1 text-rose-500">
                                <i className="material-icons text-sm">favorite</i> {likes >= 1000 ? `${likes / 1000}k` : likes}
                            </span>
                        )}
                        {comments && (
                            <span className="flex items-center gap-1">
                                <i className="material-icons text-sm">chat_bubble</i> {comments}
                            </span>
                        )}
                    </div>
                    {date && <span>{date}</span>}
                </div>
                <p className="text-gray-700 text-sm mb-4">
                    {content}
                </p>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img
                            alt="User"
                            className="w-8 h-8 rounded-full object-cover"
                            src={author.avatar}
                        />
                        <div className="text-xs">
                            <p className="font-bold text-gray-900">{author.name}</p>
                            {author.handle && <p className="text-gray-400">{author.handle}</p>}
                        </div>
                    </div>
                    {platform && (
                        <img
                            alt="Platform Logo"
                            className="w-4 h-4 opacity-70 grayscale hover:grayscale-0 transition-all"
                            src={platform}
                        />
                    )}
                </div>
            </div>
        );
    }

    // Yellow with Product Image
    if (variant === 'yellow-product' && productImage) {
        return (
            <div className="break-inside-avoid bg-amber-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-1">
                    <span className="material-icons text-amber-200 text-4xl mb-2 block">
                        format_quote
                    </span>
                    <p className="text-gray-700 text-sm mb-4">
                        {content}
                    </p>
                    <div>
                        <p className="font-bold text-gray-900 text-sm">{author.name}</p>
                        {author.role && (
                            <p className="text-xs text-gray-500">
                                {author.role}
                            </p>
                        )}
                    </div>
                </div>
                <div className="w-24 h-24 shrink-0 relative">
                    <div className="absolute inset-0 bg-amber-200 rounded-full blur-xl opacity-50"></div>
                    <img
                        alt="Product Small"
                        className="w-full h-full object-contain relative z-10 drop-shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300"
                        src={productImage}
                    />
                </div>
            </div>
        );
    }

    return null;
};

export default TestimonialCard;
