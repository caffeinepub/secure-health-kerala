import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

export default function AdvisorSection() {
  return (
    <section 
      id="arya-vineeth-tata-aig-advisor" 
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
              Meet Your Advisor
            </h2>
            <p className="text-lg text-gray-700">
              Expert guidance for your health insurance needs
            </p>
          </div>
          
          <Card className="border-2 border-gray-100 hover:border-brand-secondary hover:shadow-xl transition-all max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand-secondary/20 shadow-lg">
                  <img
                    src="/assets/generated/arya-vineeth-portrait-upload.dim_800x800.png"
                    alt="Advisor Arya Vineeth"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center shadow-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Arya Vineeth
              </h3>
              <p className="text-brand-secondary font-semibold mb-4">
                Senior Health Insurance Advisor
              </p>
              <p className="text-gray-600 leading-relaxed">
                With years of experience in health insurance consultation, Arya is dedicated to helping you find the perfect coverage for your family's needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
