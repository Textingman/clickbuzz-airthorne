import Link from 'next/link';
import Image from 'next/image';
import { Wind, Snowflake, Thermometer, Shield, Clock, Award } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F3EF] to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/Airthorne_Logo.svg"
                  alt="Airthorne HVAC" 
                  width={500} 
                  height={167}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <Link href="/" className="text-[#1F2937] hover:text-[#1F7A8C] px-3 py-2 text-sm font-medium">
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
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-extrabold text-[#1F2937] sm:text-6xl leading-tight">
                Expert HVAC Installation & Repair
              </h1>
              <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed">
                HVAC isn't just hardware, it's your daily comfort. We bring clean design, smart systems, and expert service to every home and business we come to.
              </p>
              <div className="mt-8">
                <Link
                  href="/getquote"
                  className="inline-flex items-center px-8 py-3 bg-[#B7E87B] text-[#1F1F1F] text-base font-bold rounded-lg hover:bg-[#A4DA64] transition-all shadow-lg"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
          
          {/* Full Width Image */}
          <div className="relative w-full">
            <Image 
              src="/HVAC_Image1.png"
              alt="Professional HVAC Installation"
              width={1400}
              height={700}
              className="rounded-2xl shadow-2xl w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F2937]">Our Services</h2>
            <p className="mt-4 text-xl text-[#6B6B6B]">
              Complete HVAC solutions for your home or business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-[#F4F3EF] p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1F7A8C] p-4 rounded-full">
                  <Wind className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] text-center mb-4">
                Air Conditioning
              </h3>
              <p className="text-[#6B6B6B] text-center leading-relaxed">
                Installation, repair, and maintenance of AC systems. Stay cool all summer long with reliable service.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#F4F3EF] p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1F7A8C] p-4 rounded-full">
                  <Thermometer className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] text-center mb-4">
                Heating Systems
              </h3>
              <p className="text-[#6B6B6B] text-center leading-relaxed">
                Furnace and heating system installation and repair. Keep your space warm and comfortable in winter.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#F4F3EF] p-8 rounded-xl hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-[#1F7A8C] p-4 rounded-full">
                  <Snowflake className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1F2937] text-center mb-4">
                Maintenance Plans
              </h3>
              <p className="text-[#6B6B6B] text-center leading-relaxed">
                Regular maintenance to keep your HVAC system running efficiently and prevent costly breakdowns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#F4F3EF] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <Image 
                src="/HVAC_Image3.png"
                alt="HVAC System Installation"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-6">Why Choose Airthorne?</h2>
              <p className="text-xl text-[#1F7A8C] font-semibold mb-10">
                Reliable. Efficient. Trusted.
              </p>

              <div className="space-y-8">
                {/* Reason 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#B7E87B] p-3 rounded-full">
                      <Clock className="w-8 h-8 text-[#1F1F1F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                      24/7 Emergency Service
                    </h3>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      HVAC emergencies don't wait. Neither do we. Available around the clock for urgent repairs.
                    </p>
                  </div>
                </div>

                {/* Reason 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#B7E87B] p-3 rounded-full">
                      <Award className="w-8 h-8 text-[#1F1F1F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                      Licensed & Certified
                    </h3>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      Our technicians are fully licensed, certified, and trained to handle all HVAC systems.
                    </p>
                  </div>
                </div>

                {/* Reason 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="bg-[#B7E87B] p-3 rounded-full">
                      <Shield className="w-8 h-8 text-[#1F1F1F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2">
                      Satisfaction Guaranteed
                    </h3>
                    <p className="text-[#6B6B6B] leading-relaxed">
                      We stand behind our work with a 100% satisfaction guarantee on all services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-[#1F7A8C] to-[#2493A3] rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need HVAC Service Today?
            </h2>
            <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto">
              Don't wait for your comfort to be compromised. Contact us now for fast, reliable HVAC service.
            </p>
            <Link
              href="/getquote"
              className="inline-block px-10 py-4 bg-[#B7E87B] text-[#1F1F1F] text-lg font-bold rounded-lg hover:bg-[#A4DA64] transition-all shadow-lg"
            >
              Request Service
            </Link>
          </div>
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
                  <Link href="/about" className="text-gray-400 hover:text-[#B7E87B]">
                    About Us
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
