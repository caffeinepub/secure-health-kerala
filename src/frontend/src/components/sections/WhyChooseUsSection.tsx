import { Award, Zap, Headphones, DollarSign, CheckCircle } from 'lucide-react';

export default function WhyChooseUsSection() {
  const reasons = [
    { icon: Award, text: 'Professional Advisory Service' },
    { icon: Zap, text: 'Quick Policy Issuance' },
    { icon: Headphones, text: 'Dedicated Claim Support' },
    { icon: DollarSign, text: 'Affordable Premium Options' },
    { icon: CheckCircle, text: 'Trusted & Transparent Guidance' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-primary to-brand-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Secure Health Kerala?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl hover:bg-white/20 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <span className="font-semibold text-white">{reason.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
