import React from 'react';
import type { Product } from '../../types/types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const rotationClasses = {
        left: 'md:-rotate-6 hover:rotate-0',
        center: 'md:-translate-y-12 hover:-translate-y-16 hover:scale-105 z-10',
        right: 'md:rotate-6 hover:rotate-0',
    };

    const borderClasses = {
        left: 'border-gray-700',
        center: 'border-gray-800',
        right: 'border-gray-700',
    };

    const gradientClasses = {
        left: 'bg-gradient-to-br from-white/5 to-transparent',
        center: 'bg-gradient-to-t from-black via-transparent to-transparent',
        right: 'bg-gradient-to-br from-white/5 to-transparent',
    };

    return (
        <div
            className={`group relative w-full md:w-1/3 aspect-[4/3] ${product.backgroundColor} rounded-2xl shadow-2xl transform ${rotationClasses[product.rotation]} hover:z-20 transition-all duration-500 ease-out overflow-hidden border ${borderClasses[product.rotation]}`}
        >
            <div className={`absolute inset-0 ${gradientClasses[product.rotation]} z-10`}></div>
            <img
                alt={`${product.title} coffee`}
                className={`w-full h-full object-cover ${product.rotation === 'center' ? '' : 'opacity-80'} group-hover:scale-110 transition-transform duration-700`}
                src={product.image}
            />

            {product.isBestseller && (
                <>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
                        <span className="bg-primary text-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
                            Bestseller
                        </span>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-center">
                        <h3 className="text-3xl font-display font-bold text-white mb-2">
                            {product.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{product.description}</p>
                        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Quick Add
                        </button>
                    </div>
                </>
            )}

            {!product.isBestseller && (
                <div className={`absolute bottom-0 ${product.rotation === 'right' ? 'left-0 w-full' : 'left-0'} p-6 z-20`}>
                    <p className="text-xs font-mono text-primary mb-1">
                        {product.category}
                    </p>
                    <h3 className={`text-2xl font-display font-bold text-white ${product.rotation === 'right' ? 'text-right' : ''}`}>
                        {product.title}
                    </h3>
                    <div className="w-full h-px bg-white/20 my-3"></div>
                    <div className="flex justify-between text-gray-300 text-sm">
                        <span>{product.details.left}</span>
                        <span>{product.details.right}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductCard;
