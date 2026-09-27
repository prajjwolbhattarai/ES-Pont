import React, { useState } from 'react';
import { PROPERTY_DATA } from '../data/propertyData';
import { ShieldCheck, MapPin, Mail, Phone, X, FileText, Scale } from 'lucide-react';
import { EsPontBrandLogo } from './EsPontBrandLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

type LegalModalType = 'terms' | 'privacy' | 'imprint' | null;

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenContact }) => {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  return (
    <footer className="bg-[#F4EFEB] text-[#5C554E] pt-16 pb-24 lg:pb-16 border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E8E2D8]">
          
          {/* Col 1: Brand Wordmark & License */}
          <div className="space-y-4 lg:col-span-2">
            <div>
              <span className="text-[10px] tracking-[0.25em] font-light text-[#5C554E] uppercase block font-sans-clean mb-1">
                VILLA
              </span>
              <EsPontBrandLogo size="md" colorScheme="dark" withVillaPrefix={false} />
            </div>
            <p className="text-xs text-[#5C554E] font-light leading-relaxed max-w-sm font-sans-clean">
              Exclusive private Spanish-style villa in prestigious Son Vida, Palma de Mallorca. Featuring a 10m × 5m swimming pool, private basketball court, and sweeping panoramic views over Palma Bay and the Cathedral.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#5C554E] font-sans-clean">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Official Tourism License: <strong>{PROPERTY_DATA.licenseNumber}</strong></span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-4 font-sans-clean">
              Explore Property
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C554E] font-light font-sans-clean">
              <li>
                <a href="#overview" className="hover:text-[#2D2825] transition-colors">Property Overview</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#2D2825] transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#2D2825] transition-colors">Villa Amenities</a>
              </li>
              <li>
                <a href="#bedrooms" className="hover:text-[#2D2825] transition-colors">Bedrooms & Suites</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#2D2825] transition-colors">Location & Setting</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#2D2825] transition-colors">Villa Es Pont FAQs</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal (Specifically requested by user) */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-4 font-sans-clean">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C554E] font-light font-sans-clean">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-[#2D2825] transition-colors cursor-pointer text-left"
                >
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-[#2D2825] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('imprint')}
                  className="hover:text-[#2D2825] transition-colors cursor-pointer text-left"
                >
                  Imprint
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Property Management & Location */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-4 font-sans-clean">
              Host Contact
            </h4>
            <div className="space-y-3 text-xs text-[#5C554E] font-light font-sans-clean">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59B4D] shrink-0 mt-0.5" />
                <span>{PROPERTY_DATA.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B4D] shrink-0" />
                <span>info@espont-sonvida.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B4D] shrink-0" />
                <span>+34 971 88 42 10</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2 rounded-xl bg-white border border-[#E8E2D8] hover:border-[#C59B4D] text-[#2D2825] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  Send Inquiry Form
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C554E] font-light font-sans-clean">
          <div>
            © {new Date().getFullYear()} ES Pont in Son Vida · Official Direct Booking Website. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Carrer Marola 4, Son Vida, 07013 Palma, Spain</span>
            <span>·</span>
            <span>Integrated with Smoobu PMS</span>
          </div>
        </div>
      </div>

      {/* Legal Content Modal Dialogs */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-xl border border-[#E8E2D8] text-[#2D2825] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8E2D8]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] border border-[#EEDBBA]/60 flex items-center justify-center text-[#C59B4D]">
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-serif-luxury font-medium text-[#2D2825]">
                  {legalModal === 'terms' && 'Terms and Conditions (Allgemeine Geschäftsbedingungen)'}
                  {legalModal === 'privacy' && 'Privacy Policy (Datenschutzerklärung)'}
                  {legalModal === 'imprint' && 'Imprint (Impressum)'}
                </h3>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1.5 rounded-lg text-[#5C554E] hover:text-[#2D2825] hover:bg-[#F4EFEB] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#5C554E] space-y-4 font-light leading-relaxed font-sans-clean">
              {legalModal === 'terms' && (
                <>
                  <p><strong>1. Scope & Rental Agreement:</strong> These terms govern the private short-term holiday rental of ES Pont, Carrer Marola 4, 07013 Son Vida, Palma, Spain (Tourism License: ETV/13085).</p>
                  <p><strong>2. Booking & Confirmation:</strong> A booking is binding upon confirmation via our direct booking engine (Smoobu) and completion of payment. Direct bookings guarantee the lowest published direct rate.</p>
                  <p><strong>3. Maximum Occupancy & House Rules:</strong> The villa accommodates a maximum group size of 10 guests across 6 bedrooms. Stag, hen, or unauthorized loud party groups are strictly prohibited to respect the residential tranquillity of Son Vida. Quiet hours are 23:00 to 08:00.</p>
                  <p><strong>4. Check-in & Check-out:</strong> Check-in is from 15:00 onwards (contactless via smart keybox or host greeting). Check-out is strictly until 11:00 to facilitate professional sanitization and turnover.</p>
                  <p><strong>5. Cancellation Policy:</strong> Full 100% refund for cancellations made up to 14 days before arrival. Cancellations made within 14 days of arrival are subject to the agreed seasonal terms.</p>
                  <p><strong>6. Security Deposit:</strong> A refundable security deposit of €500 is collected upon arrival and reimbursed in full upon departure following property inspection.</p>
                </>
              )}

              {legalModal === 'privacy' && (
                <>
                  <p><strong>1. Data Controller:</strong> Management of ES Pont in Son Vida, Palma de Mallorca, Spain. Contact: info@espont-sonvida.com.</p>
                  <p><strong>2. Personal Data Collected:</strong> In accordance with the General Data Protection Regulation (GDPR) and Spanish Organic Law on Data Protection (LOPD), we only collect information necessary to fulfill your holiday booking (name, email, phone number, payment details, and guest IDs required by Spanish tourism laws).</p>
                  <p><strong>3. Booking Engine Processing:</strong> Our booking engine is securely provided by Smoobu GmbH (Wönnichstraße 68, 10317 Berlin, Germany) via SSL encrypted endpoints. Payments are processed securely via PCI-DSS compliant gateways.</p>
                  <p><strong>4. Your Rights:</strong> You have the right to request access, rectification, or deletion of your stored personal data at any time by contacting info@espont-sonvida.com.</p>
                </>
              )}

              {legalModal === 'imprint' && (
                <>
                  <p><strong>Information pursuant to legal disclosure requirements:</strong></p>
                  <p><strong>Property:</strong> ES Pont in Son Vida<br />
                  <strong>Address:</strong> Carrer Marola 4, Son Vida, 07013 Palma de Mallorca, Illes Balears, Spain<br />
                  <strong>Official Tourism License:</strong> ETV/13085 (Govern de les Illes Balears)</p>
                  <p><strong>Contact:</strong><br />
                  Telephone: +34 971 88 42 10<br />
                  Email: info@espont-sonvida.com<br />
                  Website: Direct Reservation Portal</p>
                  <p><strong>Responsible for Content:</strong> Property Host Management, ES Pont, Son Vida, Mallorca.</p>
                  <p><strong>Online Dispute Resolution:</strong> The European Commission provides a platform for online dispute resolution (ODR): https://ec.europa.eu/consumers/odr.</p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-[#2D2825] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3D3733] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
