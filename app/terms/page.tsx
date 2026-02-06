import Link from 'next/link';
import Image from 'next/image';

export default function TermsPage() {
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

      {/* Header */}
      <section className="bg-gradient-to-b from-[#F4F3EF] to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last Updated: January 6, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using Airthorne's services ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users of the Service, including customers and visitors to our website.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-600 mb-6">
            Airthorne provides professional services to residential and commercial customers. The Service includes:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Service quotes and estimates</li>
            <li>Appointment scheduling and management</li>
            <li>Professional service delivery</li>
            <li>Customer support and follow-up</li>
            <li>Warranty and guarantee programs</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Account Registration and Security</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Account Creation</h3>
          <p className="text-gray-600 mb-6">
            To use certain features of the Service, you may need to create an account by providing accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Account Security</h3>
          <p className="text-gray-600 mb-6">
            You agree to immediately notify us of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with these security obligations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Account Eligibility</h3>
          <p className="text-gray-600 mb-6">
            You must be at least 18 years old and have the legal capacity to enter into contracts to use the Service. By using the Service, you represent and warrant that you meet these requirements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Service Requests and Quotes</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Quote Requests</h3>
          <p className="text-gray-600 mb-6">
            When you request a quote, you agree to provide accurate information about your service needs. Quotes are estimates and may be subject to change based on actual conditions discovered during service delivery.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Service Agreements</h3>
          <p className="text-gray-600 mb-6">
            Once you accept a quote and schedule service, a service agreement is formed. You agree to provide access to the service location and cooperate with our service professionals to complete the work.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Cancellations and Rescheduling</h3>
          <p className="text-gray-600 mb-6">
            You may cancel or reschedule appointments according to our cancellation policy. Late cancellations or no-shows may be subject to fees as specified in your service agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Fees and Payment</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.1 Service Fees</h3>
          <p className="text-gray-600 mb-6">
            Fees for services will be specified in your quote or service agreement. You agree to pay all applicable fees in accordance with the payment terms presented to you.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.2 Payment Terms</h3>
          <p className="text-gray-600 mb-6">
            Payment is due as specified in your service agreement. We accept various payment methods as indicated at the time of service. All fees are non-refundable unless otherwise stated in writing.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">5.3 Late Payment</h3>
          <p className="text-gray-600 mb-6">
            If payment is not received when due, we may suspend future services and pursue collection. You will be responsible for all costs of collection, including reasonable attorney fees.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Service Quality and Warranties</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.1 Professional Standards</h3>
          <p className="text-gray-600 mb-6">
            We strive to provide high-quality professional services performed by licensed and certified service professionals. All work will be completed in accordance with industry standards and applicable regulations.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.2 Warranties</h3>
          <p className="text-gray-600 mb-6">
            Warranties on services and parts will be specified in your service agreement. Warranty terms vary based on the type of service provided and may be subject to manufacturer warranties.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">6.3 Service Guarantee</h3>
          <p className="text-gray-600 mb-6">
            We stand behind our work. If you are not satisfied with our service, please contact us within the timeframe specified in your service agreement to discuss resolution options.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Customer Responsibilities</h2>
          <p className="text-gray-600 mb-4">As a customer, you agree to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Provide accurate information about your service needs</li>
            <li>Ensure safe access to the service location</li>
            <li>Disclose any known hazards or special conditions</li>
            <li>Be present or designate a representative during service</li>
            <li>Follow any care or maintenance instructions provided</li>
            <li>Pay for services as agreed</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Intellectual Property Rights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.1 Our Rights</h3>
          <p className="text-gray-600 mb-6">
            The Service and all content, features, and functionality are owned by Airthorne and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">8.2 Feedback</h3>
          <p className="text-gray-600 mb-6">
            If you provide us with feedback or suggestions about the Service, we may use such feedback without any obligation to you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Disclaimers and Limitations of Liability</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.1 Service "As Is"</h3>
          <p className="text-gray-600 mb-6">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.2 Limitation of Liability</h3>
          <p className="text-gray-600 mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, AIRTHORNE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">9.3 Maximum Liability</h3>
          <p className="text-gray-600 mb-6">
            Our total liability to you for all claims arising from or related to the Service shall not exceed the amount you paid us for services in the twelve (12) months preceding the claim.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Indemnification</h2>
          <p className="text-gray-600 mb-6">
            You agree to indemnify, defend, and hold harmless Airthorne and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising from:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your violation of applicable laws or regulations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Termination</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.1 Termination by You</h3>
          <p className="text-gray-600 mb-6">
            You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.2 Termination by Us</h3>
          <p className="text-gray-600 mb-6">
            We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Reasons for termination may include violation of these Terms, non-payment, or any conduct that we believe is harmful to other users or the Service.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">11.3 Effect of Termination</h3>
          <p className="text-gray-600 mb-6">
            Upon termination, all licenses and rights granted to you will immediately cease. Provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Dispute Resolution</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.1 Informal Resolution</h3>
          <p className="text-gray-600 mb-6">
            Before filing a claim, you agree to contact us and attempt to resolve the dispute informally by sending a written notice describing the dispute and your proposed resolution.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.2 Arbitration</h3>
          <p className="text-gray-600 mb-6">
            If we cannot resolve the dispute informally, any dispute arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">12.3 Class Action Waiver</h3>
          <p className="text-gray-600 mb-6">
            You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. General Provisions</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.1 Governing Law</h3>
          <p className="text-gray-600 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.2 Entire Agreement</h3>
          <p className="text-gray-600 mb-6">
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and Airthorne regarding the Service and supersede all prior agreements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.3 Severability</h3>
          <p className="text-gray-600 mb-6">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.4 Waiver</h3>
          <p className="text-gray-600 mb-6">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">13.5 Assignment</h3>
          <p className="text-gray-600 mb-6">
            You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. We may assign these Terms without restriction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2"><strong>Airthorne</strong></p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:legal@airthorne.com" className="text-[#1F7A8C] hover:text-[#B7E87B]">legal@airthorne.com</a></p>
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
