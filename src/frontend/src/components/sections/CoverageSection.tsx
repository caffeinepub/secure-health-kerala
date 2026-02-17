import { Hospital, Stethoscope, TestTube, Ambulance, Calendar, Leaf, Home } from 'lucide-react';

export default function CoverageSection() {
  const coverageItems = [
    { icon: Hospital, text: 'Room Rent & ICU Charges' },
    { icon: Stethoscope, text: 'Doctor Consultation & Surgery Fees' },
    { icon: TestTube, text: 'Diagnostic Tests' },
    { icon: Ambulance, text: 'Ambulance Charges' },
    { icon: Calendar, text: 'Pre & Post Hospitalization Expenses' },
    { icon: Leaf, text: 'AYUSH Treatments' },
    { icon: Home, text: 'Domiciliary Treatment' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary text-center mb-12">
            What Is Covered?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-2xl hover:border-brand-secondary hover:shadow-lg transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-brand-secondary" />
                </div>
                <span className="font-medium text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
