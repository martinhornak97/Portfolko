'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  useScrollReveal();

  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isSubmitted]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    
    try {
      const response = await fetch('https://formspree.io/f/mkgbvpky', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        throw new Error('Something went wrong');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  }

  return (
    <section className="py-5 md:py-20 px-4 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        
        {/* Nadpis + podnadpis */}
        <div className="mt-[100px] md:mt-[200px] mb-[100px] md:mb-[200px] md:mb-0" data-reveal>
          {isSubmitted ? (
            <>
              <h1 className="text-left">Looking forward to our conversation</h1>
              <div className="max-w-[900px] text-left" data-reveal data-delay="100">
                <p className="text-[20px] text-gray-800 leading-relaxed mt-[25px] md:mt-[50px]">
                  Thanks for your message — I'll be in touch shortly so we can discuss next steps.
                </p>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-left">Let's talk</h1>
              <div className="max-w-[900px] text-left" data-reveal data-delay="100">
                <p className="text-[20px] text-gray-800 leading-relaxed mt-[25px] md:mt-[50px]">
                  Feel free to reach out – whether it's work, feedback, or collaboration.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Formulár alebo Success tlačítko */}
        <div className="md:mt-[200px] md:max-w-md md:w-full flex justify-center md:justify-end" data-reveal data-delay="200">
          <div className="min-h-[450px] w-full max-w-md">
            {isSubmitted ? (
              <div className="space-y-6 w-full flex flex-col md:block">
                <Link 
                  href="/"
                  className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors text-center block order-first md:order-last"
                >
                  Go to Homepage
                </Link>
                <div className="hidden md:block">
                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2 opacity-0">Name</div>
                    <div className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 opacity-0">&nbsp;</div>
                  </div>

                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2 opacity-0">Email</div>
                    <div className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 opacity-0">&nbsp;</div>
                  </div>

                  <div>
                    <div className="block text-sm font-medium text-gray-700 mb-2 opacity-0">Message</div>
                    <div className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 opacity-0 h-[132px]">&nbsp;</div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                {error && (
                  <div className="bg-red-50 text-red-800 px-4 py-3 rounded-md">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-900 transition-colors"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
} 