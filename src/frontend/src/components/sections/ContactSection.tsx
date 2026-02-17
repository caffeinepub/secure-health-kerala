import { Phone, MessageCircle, MapPin } from 'lucide-react';
import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Get Free Consultation Today
            </h2>
            <p className="text-lg text-gray-700">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                <h3 className="font-bold text-xl text-brand-primary mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:9495670101"
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Phone</div>
                      <div className="font-bold text-lg">9495670101</div>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/919495670101"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-500 text-white rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-sm opacity-90">WhatsApp</div>
                      <div className="font-bold text-lg">9495670101</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-white border-2 border-gray-100 rounded-xl">
                    <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-brand-secondary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Service Area</div>
                      <div className="font-bold text-gray-800">Kerala & Across India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
