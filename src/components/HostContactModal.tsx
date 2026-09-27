import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone } from 'lucide-react';

interface HostContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostContactModal: React.FC<HostContactModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '6',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '6',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white text-[#2D2825] rounded-2xl shadow-xl border border-[#E8E2D8] overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#FAF7F2] border-b border-[#E8E2D8] p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#C59B4D] font-semibold block mb-1 font-sans-clean">
              Direct Host Communication
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-light text-[#2D2825]">
              Inquire About Villa Es Pont
            </h3>
            <p className="text-xs text-[#5C554E] font-light mt-1 font-sans-clean">
              Connect directly with our local Son Vida estate management team.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#5C554E] hover:text-[#2D2825] hover:bg-[#F4EFEB] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {formSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif-luxury font-medium text-[#2D2825]">
                Inquiry Received
              </h4>
              <p className="text-sm text-[#5C554E] font-light max-w-md mx-auto leading-relaxed font-sans-clean">
                Thank you, {formData.name || 'valued guest'}! Our estate team will review your dates ({formData.checkIn || 'your selected dates'}) and respond to <span className="font-semibold text-[#2D2825]">{formData.email}</span> within a few hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-[#2D2825] hover:bg-[#3D3733] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer font-sans-clean"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Gonzalez"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4D] focus:border-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4D] focus:border-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E2D8] text-xs focus:outline-none focus:ring-2 focus:ring-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E2D8] text-xs focus:outline-none focus:ring-2 focus:ring-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E2D8] text-xs focus:outline-none focus:ring-2 focus:ring-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                  Questions or Special Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your trip, desired arrival time, or requests for baby gear, airport transfers, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4D] focus:border-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer font-sans-clean"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message to Host</span>
                </button>
              </div>
            </form>
          )}

          {/* Quick Contact Links */}
          <div className="mt-6 pt-5 border-t border-[#E8E2D8] grid grid-cols-2 gap-3 text-xs text-[#5C554E] font-sans-clean">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C59B4D] shrink-0" />
              <span>info@espont-sonvida.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#C59B4D] shrink-0" />
              <span>+34 971 88 42 10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
