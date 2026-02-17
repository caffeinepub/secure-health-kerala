import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TataAigSection() {
  const benefits = [
    'Coverage up to ₹3 Crore',
    '12,000+ Cashless Network Hospitals',
    'Pre & Post Hospitalization Coverage',
    'Day Care Procedures Covered',
    'Automatic Sum Insured Restoration',
    'No Claim Bonus up to 100%',
    'Free Annual Health Check-ups',
    'Lifelong Renewability',
    'Tax Benefits under Section 80D',
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              TATA AIG Health Insurance Plans
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer comprehensive health insurance solutions from TATA AIG designed to protect you from unexpected medical expenses.
            </p>
          </div>
          <Card className="border-2 border-brand-secondary/20 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
              <CardTitle className="text-2xl">Key Benefits</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
