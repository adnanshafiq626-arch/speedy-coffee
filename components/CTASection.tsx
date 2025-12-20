import React, { useState } from "react";
import FormInput from "./cta/FormInput";

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error';

const CTASection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmissionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error message
    setErrorMessage('');

    // Validation
    if (!firstName.trim()) {
      setErrorMessage('Please enter your first name');
      return;
    }

    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Set loading state
    setStatus('loading');

    try {
      const response = await fetch('https://n8n.srv1042843.hstgr.cloud/webhook-test/ae7e6bb9-4030-4098-a001-87a2cc0152b2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: firstName,
          email: email,
          source: 'speedy_coffee_cta'
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Webhook request failed');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again in a moment.');
    }
  };

  return (
    <section className="bg-[#111111] text-white py-24 px-6 relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        {/* Floating Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-mono font-bold uppercase tracking-widest mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          First Time Customer Offer
        </div>

        <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-white leading-none">
          Faster mornings <br />
          <span className="text-gray-500">start here.</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto font-light leading-relaxed">
          Fresh coffee, first access, and <span className="text-primary font-medium">10% off</span> your first bag. No clutter, just high-octane fuel.
        </p>

        {status === 'success' ? (
          // Success State
          <div className="max-w-lg mx-auto space-y-6 py-8">
            {/* Animated Coffee Cup */}
            <div className="relative inline-block">
              <div className="text-8xl mb-4 animate-bounce">☕</div>
              {/* Steam effect */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                <div className="w-1 h-8 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                <div className="w-1 h-10 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1 h-8 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>

            {/* Headline */}
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Freshly brewed and headed your way!
            </h3>

            {/* Body Text */}
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Your <span className="text-primary font-bold">15% off code</span> is zooming toward{' '}
              <span className="text-primary font-medium">{email}</span>. It should arrive faster than a double shot of espresso!
            </p>

            {/* Spam Folder Mention */}
            <p className="text-gray-400 text-base">
              Don't see it? Peek in your 'Promotions' or 'Spam' folder—sometimes the filters get a little too over-caffeinated. ☕😅
            </p>

            {/* Social Proof */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-3">
                🎉 Join <span className="text-primary font-semibold">5,000+ coffee lovers</span> who get our weekly brewing tips.
              </p>
              <p className="text-xs text-gray-500">
                Didn't receive it? Contact us at <span className="text-primary">support@speedycoffee.com</span>
              </p>
            </div>
          </div>
        ) : (
          // Form State
          <>
            <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                    required
                  />
                </div>
              </div>

              {errorMessage && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl px-5 py-3 text-red-400 text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-primary text-black font-bold text-lg rounded-2xl px-8 py-4 hover:bg-lime-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(163,230,53,0.2)] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Get My Discount
                    <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </>
                )}
              </button>
            </form>

            <p className="mt-6 text-xs text-gray-600">
              We respect your inbox. Unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default CTASection;