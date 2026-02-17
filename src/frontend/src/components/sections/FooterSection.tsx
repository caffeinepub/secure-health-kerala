import { Heart } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'secure-health-kerala'
  );

  return (
    <footer className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Secure Health Kerala</h3>
            <p className="text-blue-100 text-lg">Health Insurance Advisory Services</p>
          </div>
          <div className="space-y-2">
            <p className="text-blue-100">
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:9495670101" className="hover:text-white transition-colors">
                9495670101
              </a>
            </p>
            <p className="text-blue-100">Serving Kerala & Across India</p>
          </div>
          <div className="pt-6 border-t border-white/20 space-y-2">
            <p className="text-sm text-blue-100">
              © {currentYear} Secure Health Kerala. All Rights Reserved.
            </p>
            <p className="text-sm text-blue-100 flex items-center justify-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-400 fill-current" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-white transition-colors underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
