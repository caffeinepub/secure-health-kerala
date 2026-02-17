import { Phone } from 'lucide-react';

export default function HeaderTopBar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/tata-aig-logo.dim_512x512.png"
              alt="TATA AIG Insurance"
              className="h-12 md:h-14 w-auto"
            />
            <div className="hidden sm:block border-l border-gray-300 pl-3">
              <p className="text-sm md:text-base font-bold text-brand-primary leading-tight">
                Arya Vineeth
              </p>
              <p className="text-xs md:text-sm text-gray-700 font-medium">
                TATA AIG Advisor
              </p>
            </div>
          </div>
          <a
            href="tel:9495670101"
            className="flex items-center gap-2 px-4 py-2 bg-brand-primary text-white rounded-full hover:bg-brand-primary-dark transition-colors font-medium text-sm md:text-base"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now:</span>
            <span>9495670101</span>
          </a>
        </div>
      </div>
    </header>
  );
}
