'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

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

  const sharedContainerClasses = "w-full min-h-[550px] p-8";

  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-20 py-32">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-[60px] font-semibold leading-[1.1] tracking-tight mb-12">
          Let's talk.
        </h1>

        {isSubmitted ? (
          <div className={`${sharedContainerClasses} flex flex-col items-center justify-center text-center space-y-4`}>
            <h2 className="text-2xl font-semibold text-green-700">Message sent!</h2>
            <p className="text-gray-600">Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <Link 
              href="/"
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-900 transition"
            >
              Back to homepage
            </Link>
          </div>
        ) : (
          <div className={sharedContainerClasses}>
            <form onSubmit={handleSubmit} className="h-full">
              {error && (
                <div className="bg-red-50 text-red-800 px-4 py-3 rounded-md mb-6">
                  {error}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-base text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={8}
                    className="w-full px-4 py-2 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
} 