import { Shield, Clock, Users, HeartHandshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const features = [
    { icon: Shield, text: 'Transparent Advice' },
    { icon: Clock, text: 'Quick Claim Assistance' },
    { icon: Users, text: 'Personalized Coverage Plans' },
    { icon: HeartHandshake, text: 'Long-Term Service Support' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
            Your Trusted Health Insurance Partner
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We provide expert consultation and personalized health insurance solutions for individuals, families, and senior citizens. Our mission is to help you choose the right policy based on your medical needs and budget.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From policy selection to claim settlement support, we stand with you at every step.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-brand-secondary hover:shadow-lg transition-all">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-secondary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-brand-secondary" />
                </div>
                <p className="font-semibold text-gray-800">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
