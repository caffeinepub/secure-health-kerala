import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useSubmitContact } from '../hooks/useQueries';
import { CheckCircle2, Loader2 } from 'lucide-react';
import type { Contact } from '../backend';

export default function ContactForm() {
  const [formData, setFormData] = useState<Contact>({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Contact>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const submitContact = useSubmitContact();

  const validateForm = (): boolean => {
    const newErrors: Partial<Contact> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await submitContact.mutateAsync(formData);
      setFormData({ name: '', phoneNumber: '', email: '', message: '' });
      setErrors({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error('Failed to submit contact form:', error);
    }
  };

  const handleChange = (field: keyof Contact, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (showSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl border-2 border-green-500 shadow-lg">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
          <p className="text-gray-600">
            We've received your request. Our team will contact you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border-2 border-gray-100 shadow-lg">
      <div className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-gray-700 font-semibold">
            Name *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="phoneNumber" className="text-gray-700 font-semibold">
            Phone Number *
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            className={`mt-2 ${errors.phoneNumber ? 'border-red-500' : ''}`}
            placeholder="Enter your phone number"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700 font-semibold">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className="mt-2"
            placeholder="Enter your email address"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-gray-700 font-semibold">
            Message *
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className={`mt-2 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Tell us about your insurance needs"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={submitContact.isPending}
          className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-lg py-6 rounded-full hover:shadow-xl transition-all"
        >
          {submitContact.isPending ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Get Free Quote'
          )}
        </Button>
      </div>
    </form>
  );
}
