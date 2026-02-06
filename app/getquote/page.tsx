'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Building, Phone, User } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    urgency: '',
    message: ''
  });
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate with Web3Forms later
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', address: '', urgency: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/Airthorne_Logo.svg"
                  alt="Airthorne"
                  width={500} 
                  height={167}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link href="/" className="text-[#6B7280] hover:text-[#1F7A8C] px-3 py-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#6B7280] hover:text-[#1F7A8C] px-3 py-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/getquote" className="bg-[#B7E87B] text-[#1F1F1F] hover:bg-[#A4DA64] px-6 py-2 rounded-md text-sm font-semibold transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F4F3EF] to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your needs and we'll get back to you within 24 hours with a free quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-8">
                We've received your request. Our team will contact you within 24 hours.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-[#B7E87B] text-white font-semibold rounded-lg hover:bg-[#A4DA64] transition-colors"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Quote</h2>
                <p className="text-gray-600">
                  Complete the form below and our team will provide you with a customized quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F7A8C] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F7A8C] focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F7A8C] focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F7A8C] focus:border-transparent"
                    placeholder="123 Main St, City, State ZIP"
                  />
                </div>

                {/* Urgency Field */}
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    When do you need service? *
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F7A8C] focus:border-transparent"
                  >
                    <option value="">Select timeframe</option>
                    <option value="emergency">Emergency (ASAP)</option>
                    <option value="within-week">Within a week</option>
                    <option value="within-month">Within a month</option>
                    <option value="planning">Just planning ahead</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1F7A8C] focus:border-transparent"
                    placeholder="Tell us more about your needs..."
                  />
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  {/* SMS Consent Checkbox */}
                  <div className="bg-[#3b3a41] text-white rounded-lg p-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="sms-consent"
                        className="mt-1 h-4 w-4 text-[#B7E87B] focus:ring-[#1F7A8C] border-gray-300 rounded flex-shrink-0"
                      />
                      <label htmlFor="sms-consent" className="ml-3 text-sm leading-relaxed">
                        By checking this box, you provide consent to receive automated SMS messages from Airthorne. Message frequency varies and message and data rates may apply. You may opt-out by replying 'STOP'. Reply 'HELP' for help or email support@airthorne.com. Consent is not required as a condition of purchasing any products or services.
                      </label>
                    </div>
                  </div>

                  {/* Call Consent Checkbox */}
                  <div className="bg-[#3b3a41] text-white rounded-lg p-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="call-consent"
                        className="mt-1 h-4 w-4 text-[#B7E87B] focus:ring-[#1F7A8C] border-gray-300 rounded flex-shrink-0"
                      />
                      <label htmlFor="call-consent" className="ml-3 text-sm leading-relaxed">
                        By checking this box, you provide consent to receive automated customer care calls from Airthorne. Call frequency varies and standard phone rates may apply. You may opt-out at any time by contacting support@airthorne.com. Consent is not required as a condition of purchasing any products or services.
                      </label>
                    </div>
                  </div>

                  {/* Account Notifications Opt-in Checkbox */}
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="account-notifications"
                        checked={accountNotifications}
                        onChange={(e) => setAccountNotifications(e.target.checked)}
                        className="mt-1 h-4 w-4 text-[#B7E87B] focus:ring-[#1F7A8C] border-gray-300 rounded flex-shrink-0"
                      />
                      <label htmlFor="account-notifications" className="ml-3 text-sm leading-relaxed text-gray-700">
                        By checking this box, you consent to receive account notifications, service updates, and important information about your Airthorne account via email and SMS. You may opt-out at any time by contacting support@airthorne.com or by following the unsubscribe instructions in our communications. Consent is not required as a condition of purchasing any products or services.
                      </label>
                    </div>
                  </div>

                  {/* Terms & Privacy Policy Checkbox */}
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms-consent"
                        className="mt-1 h-4 w-4 text-[#B7E87B] focus:ring-[#1F7A8C] border-gray-300 rounded flex-shrink-0"
                      />
                      <label htmlFor="terms-consent" className="ml-3 text-sm leading-relaxed text-gray-700">
                        I agree with the{' '}
                        <Link href="/terms" className="text-[#1F7A8C] hover:text-[#B7E87B] font-medium underline">
                          Terms & Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-[#1F7A8C] hover:text-[#B7E87B] font-medium underline">
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg text-lg font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#B7E87B] hover:bg-[#A4DA64] text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit'
                  )}
                </button>

              </form>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Airthorne</h3>
              <p className="text-gray-400">
                Professional services you can trust.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-[#B7E87B]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-[#B7E87B]">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">
                62 Hypolita St
              </p>
              <p className="text-gray-400 mb-2">
                Saint Augustine, FL 32084
              </p>
              <p className="text-gray-400 mb-2">
                +1 (617) 210-8911
              </p>
              <p className="text-gray-400">
                info@airthorne.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Airthorne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
