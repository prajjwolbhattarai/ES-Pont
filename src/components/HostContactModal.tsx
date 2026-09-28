import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HostContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostContactModal: React.FC<HostContactModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t, language } = useLanguage();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '685b9be2-922c-4720-86ac-33b4bd9b7ffe',
          subject: `New Villa Es Pont Inquiry from ${formData.name}`,
          from_name: 'Villa Es Pont Inquiry Form',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          check_in: formData.checkIn || 'Flexible / Not specified',
          check_out: formData.checkOut || 'Flexible / Not specified',
          guests: `${formData.guests} ${Number(formData.guests) === 1 ? guestSingleLabel : guestLabel}`,
          message: formData.message || 'Direct reservation inquiry from website.',
          botcheck: '',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Failed to submit inquiry. Please try again or email us directly.');
      }
    } catch {
      setErrorMessage(
        language === 'es'
          ? 'Error al enviar el mensaje. Por favor, contáctenos directamente por correo electrónico.'
          : language === 'de'
          ? 'Fehler beim Senden der Anfrage. Bitte kontaktieren Sie uns direkt per E-Mail.'
          : 'Failed to send inquiry. Please contact us directly by email.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setErrorMessage(null);
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

  const guestLabel = language === 'es' ? 'Huéspedes' : language === 'de' ? 'Gäste' : 'Guests';
  const guestSingleLabel = language === 'es' ? 'Huésped' : language === 'de' ? 'Gast' : 'Guest';

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white text-[#2D2825] rounded-2xl shadow-xl border border-[#E8E2D8] overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#FAF7F2] border-b border-[#E8E2D8] p-6 flex items-start justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#C59B4D] font-semibold block mb-1 font-sans-clean">
              {t.contactModal.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-light text-[#2D2825]">
              {t.contactModal.heading}
            </h3>
            <p className="text-xs text-[#5C554E] font-light mt-1 font-sans-clean">
              {t.contactModal.subtitle}
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
                {t.contactModal.submittedTitle}
              </h4>
              <p className="text-sm text-[#5C554E] font-light max-w-md mx-auto leading-relaxed font-sans-clean">
                {t.contactModal.submittedDesc}
              </p>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xl bg-[#2D2825] hover:bg-[#3D3733] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer font-sans-clean"
                >
                  {t.contactModal.closeBtn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam Honeypot for Web3Forms */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2 font-sans-clean">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    {t.contactModal.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.contactModal.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4D] focus:border-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    {t.contactModal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.contactModal.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4D] focus:border-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    {t.contactModal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    placeholder={t.contactModal.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4D] focus:border-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    {t.contactModal.guestsLabel}
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? guestSingleLabel : guestLabel}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                    {t.contactModal.checkinLabel}
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
                    {t.contactModal.checkoutLabel}
                  </label>
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E8E2D8] text-xs focus:outline-none focus:ring-2 focus:ring-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#2D2825] mb-1 font-sans-clean">
                  {t.contactModal.messageLabel}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.contactModal.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E2D8] text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B4D] focus:border-[#C59B4D] bg-[#FAF7F2] font-sans-clean"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#C59B4D] hover:bg-[#B48B3D] disabled:opacity-75 disabled:cursor-not-allowed text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer font-sans-clean"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>
                        {language === 'es' ? 'Enviando consulta...' : language === 'de' ? 'Anfrage wird gesendet...' : 'Sending Inquiry...'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contactModal.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Quick Contact Links */}
          <div className="mt-6 pt-5 border-t border-[#E8E2D8] flex items-center justify-center text-xs text-[#5C554E] font-sans-clean">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C59B4D] shrink-0" />
              <span>{language === 'es' ? 'Contacto directo por correo:' : language === 'de' ? 'Direkter Kontakt per E-Mail:' : 'Direct host email:'}</span>
              <a href="mailto:rainer.kaderka@web.de" className="text-[#C59B4D] hover:underline font-medium">
                rainer.kaderka@web.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
