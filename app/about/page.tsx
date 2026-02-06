import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
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
                <Link href="/about" className="text-[#1F2937] hover:text-[#1F7A8C] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-[#6B7280] hover:text-[#1F7A8C] px-3 py-2 rounded-md text-sm font-medium">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F4F3EF] to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              About Airthorne
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in delivering exceptional service that exceeds expectations. Quality isn't just what we do—it's who we are.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              At Airthorne, we're committed to providing professional services that make a real difference in our customers' lives. We understand that quality service isn't just about getting the job done—it's about building lasting relationships based on trust and excellence.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Every project we undertake is an opportunity to demonstrate our dedication to craftsmanship, reliability, and customer satisfaction. We don't cut corners, and we don't compromise on quality.
            </p>
            <p className="text-lg text-gray-600">
              Our goal is simple: to be the service provider you can count on, every single time.
            </p>
          </div>
          <div className="bg-[#F0F9F4] rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-[#B7E87B]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence in Every Detail</h3>
                  <p className="text-gray-600">
                    We believe that quality service starts with attention to detail and a commitment to doing things right.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#B7E87B]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust & Reliability</h3>
                  <p className="text-gray-600">
                    Your trust is earned through consistent, dependable service that meets and exceeds expectations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="w-8 h-8 text-[#B7E87B]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Service</h3>
                  <p className="text-gray-600">
                    We're here when you need us, with prompt responses and efficient service delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Airthorne</h2>
          <p className="text-xl text-gray-600">
            Our commitment to quality service sets us apart
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#B7E87B]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">
              We stand behind our work with comprehensive warranties and guarantees.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#B7E87B]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Team</h3>
            <p className="text-gray-600">
              Our experienced professionals are licensed, certified, and dedicated to excellence.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#B7E87B]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Efficient</h3>
            <p className="text-gray-600">
              We respect your time with prompt service and efficient project completion.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#B7E87B]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focused</h3>
            <p className="text-gray-600">
              Your satisfaction is our priority, and we're not done until you're completely happy.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1F7A8C] via-[#2493A3] to-[#B7E87B] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Experience Quality Service?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the customers who trust Airthorne for professional, reliable service.
          </p>
          <Link
            href="/getquote"
            className="inline-block px-8 py-4 bg-white text-[#1F7A8C] text-lg font-semibold rounded-lg hover:bg-[#F9FAFB] transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2937] text-white py-12">
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
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Airthorne. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
