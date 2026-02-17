import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-brand-primary to-brand-secondary overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-white z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Secure Your Health. Secure Your Future.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed">
              Authorized Health Insurance Advisor – Expert Guidance & Lifetime Claim Support
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-primary hover:bg-gray-50 font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <a href="tel:9495670101" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now – 9495670101
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary font-semibold text-lg px-8 py-6 rounded-full transition-all"
              >
                <a href="https://wa.me/919495670101" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp – 9495670101
                </a>
              </Button>
            </div>
          </div>
          <div className="relative z-10 hidden md:block">
            <img
              src="/assets/generated/secure-health-hero-illustration.dim_1400x800.png"
              alt="Family Health Protection"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
