import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
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
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-[#6B7280] hover:text-[#1F7A8C] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-[#6B7280] hover:text-[#1F7A8C] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#1F2937] hover:text-[#1F7A8C] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-[#6B7280] hover:text-[#1F7A8C] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/getquote" className="bg-[#B7E87B] text-white hover:bg-[#A4DA64] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-b from-[#F4F3EF] to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last Updated: January 6, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            Airthorne ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, request quotes, or visit our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Information You Provide</h3>
          <p className="text-gray-600 mb-4">When you request a quote or service, we may collect:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Name and contact information (email, phone number, address)</li>
            <li>Service address and property details</li>
            <li>Preferred service timeframe</li>
            <li>Payment information (processed securely by third-party payment processors)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Information Collected Automatically</h3>
          <p className="text-gray-600 mb-4">When you visit our website, we automatically collect:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Device information (browser type, operating system)</li>
            <li>IP address and general location data</li>
            <li>Usage data (pages visited, time spent, navigation patterns)</li>
            <li>Referral source</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.3 Service-Related Information</h3>
          <p className="text-gray-600 mb-6">
            When we provide services, we may collect information about your service history, maintenance schedules, and equipment or property details to better serve you.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.4 Mobile Information Protection</h3>
          <p className="text-gray-600 mb-6">
            <strong>We do not sell mobile data to marketers or 3rd parties.</strong> Your phone number and mobile information are used solely for service-related communications, appointment scheduling, and emergency service notifications. We are committed to protecting your mobile information and will only use it for the purposes outlined in this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Provide professional services as requested</li>
            <li>Process service requests and provide quotes</li>
            <li>Schedule appointments and send service reminders</li>
            <li>Communicate about your service requests and account</li>
            <li>Send urgent service notifications</li>
            <li>Process payments and manage billing</li>
            <li>Improve our services and customer experience</li>
            <li>Comply with legal obligations and safety requirements</li>
            <li>Send promotional offers (with your consent)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-4">We may share your information with:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Service Providers</h3>
          <p className="text-gray-600 mb-6">
            Third-party vendors who assist us with scheduling, payment processing, customer communications, and other business operations. These providers are contractually obligated to protect your information.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Service Professionals</h3>
          <p className="text-gray-600 mb-6">
            Our licensed and certified service professionals who need access to your information to provide services at your property.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Legal Requirements</h3>
          <p className="text-gray-600 mb-6">
            When required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.4 Business Transfers</h3>
          <p className="text-gray-600 mb-6">
            In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Secure data encryption (HTTPS/TLS)</li>
            <li>Secure payment processing systems</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Employee training on data protection</li>
          </ul>
          <p className="text-gray-600 mb-6">
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p className="text-gray-600 mb-6">
            We retain your information for as long as necessary to provide services, maintain service records, comply with legal obligations, and resolve disputes. Service history and equipment records may be retained for warranty purposes and to provide better ongoing service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights and Choices</h2>
          <p className="text-gray-600 mb-4">You have the following rights regarding your information:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
            <li><strong>Opt-out:</strong> Opt out of marketing communications at any time</li>
            <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
          </ul>
          <p className="text-gray-600 mb-6">
            To exercise these rights, please contact us at <a href="mailto:privacy@airthorne.com" className="text-[#1F7A8C] hover:text-[#B7E87B]">privacy@airthorne.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Communications</h2>
          <p className="text-gray-600 mb-6">
            We may send you service-related communications including appointment confirmations, service reminders, emergency notifications, and billing statements. You may also receive promotional offers if you have opted in. You can opt out of promotional communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600 mb-6">
            We use cookies and similar tracking technologies to improve your experience on our website, analyze usage patterns, and deliver relevant content. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Third-Party Links</h2>
          <p className="text-gray-600 mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Children's Privacy</h2>
          <p className="text-gray-600 mb-6">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. California Privacy Rights</h2>
          <p className="text-gray-600 mb-6">
            If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your personal information. <strong>We do not sell personal information.</strong>
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to This Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after changes become effective constitutes acceptance of the modified Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Airthorne</strong></p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:privacy@airthorne.com" className="text-[#1F7A8C] hover:text-[#B7E87B]">privacy@airthorne.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (617) 210-8911</p>
            <p className="text-gray-600"><strong>Website:</strong> <a href="/" className="text-[#1F7A8C] hover:text-[#B7E87B]">https://airthorne.com</a></p>
          </div>

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
