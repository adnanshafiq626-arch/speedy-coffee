import React from 'react';

interface FormInputProps {
    type: 'text' | 'email';
    placeholder: string;
    required?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, required = false }) => {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all hover:bg-white/10"
                required={required}
            />
        </div>
    );
};

export default FormInput;
