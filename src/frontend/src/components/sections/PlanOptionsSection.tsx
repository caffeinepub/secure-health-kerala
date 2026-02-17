import { User, Users, UserCheck, Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PlanOptionsSection() {
  const plans = [
    { icon: User, title: 'Individual Health Insurance', color: 'text-blue-600' },
    { icon: Users, title: 'Family Floater Plans', color: 'text-green-600' },
    { icon: UserCheck, title: 'Senior Citizen Health Plans', color: 'text-purple-600' },
    { icon: Heart, title: 'Critical Illness Cover', color: 'text-red-600' },
    { icon: TrendingUp, title: 'Super Top-Up Plans', color: 'text-orange-600' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary text-center mb-12">
            Available Plan Options
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-brand-secondary hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">{plan.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
