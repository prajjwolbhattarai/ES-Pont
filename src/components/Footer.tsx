import React, { useState } from 'react';
import { PROPERTY_DATA } from '../data/propertyData';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, MapPin, Mail, Phone, X, Scale } from 'lucide-react';
import { EsPontBrandLogo } from './EsPontBrandLogo';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenContact: () => void;
}

type LegalModalType = 'terms' | 'privacy' | 'imprint' | null;

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenContact }) => {
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const { t, language } = useLanguage();

  const legalContent = {
    terms: {
      title: language === 'es' ? 'Términos y Condiciones' : language === 'de' ? 'Allgemeine Geschäftsbedingungen (AGB)' : 'Terms and Conditions',
      p1: language === 'es'
        ? '1. Ámbito y Contrato de Arrendamiento: Estas condiciones regulan el alquiler vacacional de corta estancia de ES Pont, Carrer Marola 4, 07013 Son Vida, Palma, España (Licencia Turística: VT/106136).'
        : language === 'de'
        ? '1. Geltungsbereich & Mietvertrag: Diese Bedingungen regeln die private Ferienvermietung von ES Pont, Carrer Marola 4, 07013 Son Vida, Palma, Spanien (Tourismuslizenz: VT/106136).'
        : '1. Scope & Rental Agreement: These terms govern the private short-term holiday rental of ES Pont, Carrer Marola 4, 07013 Son Vida, Palma, Spain (Tourism License: VT/106136).',
      p2: language === 'es'
        ? '2. Reserva y Confirmación: La reserva es vinculante tras la confirmación a través de nuestro motor de reservas directas (Smoobu) y la liquidación del pago. Las reservas directas garantizan la tarifa oficial más baja publicada.'
        : language === 'de'
        ? '2. Buchung & Bestätigung: Eine Buchung ist nach Bestätigung über unser Direktbuchungssystem (Smoobu) und erfolgter Zahlung verbindlich. Direktbuchungen garantieren den günstigsten Tarif.'
        : '2. Booking & Confirmation: A booking is binding upon confirmation via our direct booking engine (Smoobu) and completion of payment. Direct bookings guarantee the lowest published direct rate.',
      p3: language === 'es'
        ? '3. Ocupación Máxima y Normas: La villa acoge un máximo de 10 huéspedes en 6 dormitorios. Quedan estrictamente prohibidas fiestas ruidosas o despedidas de soltero para preservar la tranquilidad residencial de Son Vida. Horas de silencio: 23:00 a 08:00.'
        : language === 'de'
        ? '3. Maximale Belegung & Hausregeln: Die Villa beherbergt maximal 10 Gäste in 6 Schlafzimmern. Junggesellenabschiede oder laute Partys sind untersagt. Ruhezeiten: 23:00 bis 08:00 Uhr.'
        : '3. Maximum Occupancy & House Rules: The villa accommodates a maximum group size of 10 guests across 6 bedrooms. Stag, hen, or unauthorized loud party groups are strictly prohibited to respect the residential tranquillity of Son Vida. Quiet hours are 23:00 to 08:00.',
      p4: language === 'es'
        ? '4. Cancelación y Fianza: Reembolso íntegro del 100% para cancelaciones realizadas hasta 14 días antes de la llegada. Se solicita un depósito de seguridad reembolsable de 500 € a la llegada.'
        : language === 'de'
        ? '4. Stornierung & Kaution: 100% volle Erstattung bei Stornierungen bis zu 14 Tage vor Anreise. Eine erstattbare Kaution in Höhe von 500 € wird hinterlegt.'
        : '4. Cancellation Policy & Deposit: Full 100% refund for cancellations made up to 14 days before arrival. A refundable security deposit of €500 is collected upon arrival.'
    },
    privacy: {
      title: language === 'es' ? 'Política de Privacidad' : language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy',
      p1: language === 'es'
        ? '1. Responsable del Tratamiento: Proyectos e inversiones RK Inmo SL, Calle Sindicat 69, 10, 07002 Palma, España. Contacto: rainer.kaderka@web.de.'
        : language === 'de'
        ? '1. Verantwortliche Stelle: Proyectos e inversiones RK Inmo SL, Calle Sindicat 69, 10, 07002 Palma, Spanien. Kontakt: rainer.kaderka@web.de.'
        : '1. Data Controller: Proyectos e inversiones RK Inmo SL, Calle Sindicat 69, 10, 07002 Palma, Spain. Contact: rainer.kaderka@web.de.',
      p2: language === 'es'
        ? '2. Datos Recogidos: Conforme al RGPD y la LOPD española, únicamente recopilamos los datos estrictamente necesarios para formalizar su reserva turística (nombre, email, teléfono y documentación exigida por la normativa turística).'
        : language === 'de'
        ? '2. Erhobene Daten: Gemäß DSGVO verarbeiten wir ausschließlich die für Ihre Buchung erforderlichen Daten (Name, E-Mail, Telefon und behördlich vorgeschriebene Meldedaten).'
        : '2. Personal Data Collected: In accordance with the GDPR, we only collect information necessary to fulfill your holiday booking (name, email, phone number, and guest IDs required by tourism regulations).',
      p3: language === 'es'
        ? '3. Motor de Reservas: Gestionado de forma segura por Smoobu GmbH con cifrado SSL de extremo a extremo.'
        : language === 'de'
        ? '3. Buchungsabwicklung: Sicher bereitgestellt durch die Smoobu GmbH via SSL-Verschlüsselung.'
        : '3. Booking Engine Processing: Our booking engine is securely provided by Smoobu GmbH via SSL encrypted endpoints.'
    },
    imprint: {
      title: language === 'es' ? 'Aviso Legal / Imprint' : language === 'de' ? 'Impressum / Rechtliche Hinweise' : 'Legal Notice / Imprint',
      operatorTitle: language === 'es' ? 'Titular del Sitio Web (Website Operator)' : language === 'de' ? 'Website-Betreiber (Website Operator)' : 'Website Operator',
      contactTitle: language === 'es' ? 'Contacto' : language === 'de' ? 'Kontakt' : 'Contact',
      companyTitle: language === 'es' ? 'Información de la Sociedad' : language === 'de' ? 'Unternehmensangaben' : 'Company Information',
      companyRegLabel: language === 'es' ? 'NIF / CIF' : language === 'de' ? 'Handelsregisternummer / Steuernummer (CIF)' : 'Company Registration / Tax ID',
      companyRegVal: 'B07853708',
      registeredInLabel: language === 'es' ? 'Registro' : language === 'de' ? 'Eingetragen in' : 'Registered in',
      registeredInVal: language === 'es' ? 'Palma de Mallorca, España' : language === 'de' ? 'Palma de Mallorca, Spanien' : 'Palma de Mallorca, Spain',
      propertyTitle: language === 'es' ? 'Propiedad' : language === 'de' ? 'Objekt / Immobilie' : 'Property',
      propertyName: 'Villa Es Pont',
      propertyAddress1: 'Carrer Marola 4',
      propertyAddress2: '07013 Son Vida, Palma de Mallorca',
      propertyRegion: language === 'es' ? 'Islas Baleares, España' : language === 'de' ? 'Balearische Inseln, Spanien' : 'Balearic Islands, Spain',
      touristLicenseLabel: language === 'es' ? 'Número de Licencia Turística' : language === 'de' ? 'Tourismuslizenznummer' : 'Tourist Licence Number',
      touristLicenseVal: 'VT/106136',
      responsibleTitle: language === 'es' ? 'Responsable del contenido de este sitio web' : language === 'de' ? 'Verantwortlich für den Inhalt dieser Website' : 'Responsible for the content of this website',
      companyName: 'Proyectos e inversiones RK Inmo SL',
      companyAddress1: 'Calle Sindicat 69, 10',
      companyAddress2: language === 'es' ? '07002 Palma, Islas Baleares' : language === 'de' ? '07002 Palma, Balearische Inseln' : '07002 Palma, Balearic Islands',
      companyCountry: language === 'es' ? 'España' : language === 'de' ? 'Spanien' : 'Spain',
      contactEmail: 'rainer.kaderka@web.de',
      contactPhone: '+49 175 1835942',
      disclaimerTitle: language === 'es' ? 'Descargo de Responsabilidad (Disclaimer)' : language === 'de' ? 'Haftungsausschluss (Disclaimer)' : 'Disclaimer',
      disclaimer1: language === 'es'
        ? 'La información facilitada en este sitio web ha sido elaborada con el debido cuidado. No obstante, no se garantiza la exhaustividad, exactitud o actualidad de la información facilitada.'
        : language === 'de'
        ? 'Die Angaben auf dieser Website wurden mit angemessener Sorgfalt zusammengestellt. Es wird jedoch keine Gewähr für die Vollständigkeit, Richtigkeit oder Aktualität der bereitgestellten Informationen übernommen.'
        : 'The information provided on this website has been prepared with reasonable care. However, no guarantee is given regarding the completeness, accuracy or currentness of the information provided.',
      disclaimer2: language === 'es'
        ? 'El sitio web puede contener enlaces a sitios web externos. No tenemos control sobre el contenido de dichos sitios web de terceros y, por tanto, no asumimos ninguna responsabilidad sobre su contenido.'
        : language === 'de'
        ? 'Die Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte übernehmen wir daher keine Gewähr.'
        : 'The website may contain links to external websites. We have no control over the content of such third-party websites and therefore accept no responsibility for their content.',
      copyrightTitle: language === 'es' ? 'Derechos de Autor (Copyright)' : language === 'de' ? 'Urheberrecht (Copyright)' : 'Copyright',
      copyrightText: language === 'es'
        ? 'Salvo que se indique lo contrario, el contenido, las fotografías, el diseño y otros materiales de este sitio web están protegidos por las leyes de propiedad intelectual aplicables. Queda prohibida la reproducción, distribución u otro uso sin autorización previa.'
        : language === 'de'
        ? 'Soweit nicht anders angegeben, unterliegen die Inhalte, Fotos, das Design und sonstige Materialien auf dieser Website dem Urheberrecht. Vervielfältigung, Verbreitung oder sonstige Nutzung ohne vorherige schriftliche Zustimmung ist nicht gestattet.'
        : 'Unless otherwise stated, the content, photographs, design and other materials on this website are protected by applicable copyright laws. Reproduction, distribution or other use without prior permission is prohibited.'
    }
  };

  const closeText = language === 'es' ? 'Cerrar' : language === 'de' ? 'Schließen' : 'Close';

  return (
    <footer className="bg-[#F4EFEB] text-[#5C554E] pt-16 pb-24 lg:pb-16 border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E8E2D8]">
          
          {/* Col 1: Brand Wordmark & License */}
          <div className="space-y-4 lg:col-span-2">
            <div>
              <span className="text-[10px] tracking-[0.25em] font-light text-[#5C554E] uppercase block font-sans-clean mb-1">
                {t.footer.villaPrefix}
              </span>
              <EsPontBrandLogo size="md" colorScheme="dark" withVillaPrefix={false} />
            </div>
            <p className="text-xs text-[#5C554E] font-light leading-relaxed max-w-sm font-sans-clean">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#5C554E] font-sans-clean">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{t.footer.officialLicense} <strong>{PROPERTY_DATA.licenseNumber}</strong></span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-4 font-sans-clean">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C554E] font-light font-sans-clean">
              <li>
                <a href="#overview" className="hover:text-[#2D2825] transition-colors">{t.nav.overview}</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#2D2825] transition-colors">{t.nav.gallery}</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#2D2825] transition-colors">{t.nav.amenities}</a>
              </li>
              <li>
                <a href="#bedrooms" className="hover:text-[#2D2825] transition-colors">{t.nav.bedrooms}</a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#2D2825] transition-colors">{t.nav.location}</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#2D2825] transition-colors">{t.nav.faq}</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-4 font-sans-clean">
              {language === 'es' ? 'Legal' : language === 'de' ? 'Rechtliches' : 'Legal'}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#5C554E] font-light font-sans-clean">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('terms')}
                  className="hover:text-[#2D2825] transition-colors cursor-pointer text-left"
                >
                  {t.footer.terms}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('privacy')}
                  className="hover:text-[#2D2825] transition-colors cursor-pointer text-left"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal('imprint')}
                  className="hover:text-[#2D2825] transition-colors cursor-pointer text-left"
                >
                  {t.footer.imprint}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Property Management & Location */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#C59B4D] font-semibold mb-4 font-sans-clean">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs text-[#5C554E] font-light font-sans-clean">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59B4D] shrink-0 mt-0.5" />
                <span>{PROPERTY_DATA.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C59B4D] shrink-0" />
                <a href="mailto:rainer.kaderka@web.de" className="hover:text-[#2D2825] transition-colors">
                  rainer.kaderka@web.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59B4D] shrink-0" />
                <a href="tel:+491751835942" className="hover:text-[#2D2825] transition-colors">
                  +49 175 1835942
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-4 py-2 rounded-xl bg-white border border-[#E8E2D8] hover:border-[#C59B4D] text-[#2D2825] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  {t.footer.inquireBtn}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C554E] font-light font-sans-clean">
          <div>
            © {new Date().getFullYear()} ES Pont · {t.footer.directBrandNote} {t.footer.rights}
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
                  {legalContent[legalModal].title}
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
                  <p>{legalContent.terms.p1}</p>
                  <p>{legalContent.terms.p2}</p>
                  <p>{legalContent.terms.p3}</p>
                  <p>{legalContent.terms.p4}</p>
                </>
              )}

              {legalModal === 'privacy' && (
                <>
                  <p>{legalContent.privacy.p1}</p>
                  <p>{legalContent.privacy.p2}</p>
                  <p>{legalContent.privacy.p3}</p>
                </>
              )}

              {legalModal === 'imprint' && (
                <div className="space-y-5">
                  {/* Website Operator */}
                  <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E2D8]">
                    <h4 className="text-xs font-semibold text-[#C59B4D] uppercase tracking-wider mb-2">
                      {legalContent.imprint.operatorTitle}
                    </h4>
                    <p className="font-medium text-[#2D2825]">{legalContent.imprint.companyName}</p>
                    <p>{legalContent.imprint.companyAddress1}</p>
                    <p>{legalContent.imprint.companyAddress2}</p>
                    <p>{legalContent.imprint.companyCountry}</p>
                  </div>

                  {/* Contact */}
                  <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E2D8]">
                    <h4 className="text-xs font-semibold text-[#C59B4D] uppercase tracking-wider mb-2">
                      {legalContent.imprint.contactTitle}
                    </h4>
                    <p>
                      <strong className="text-[#2D2825]">Email:</strong>{' '}
                      <a href={`mailto:${legalContent.imprint.contactEmail}`} className="text-[#C59B4D] hover:underline">
                        {legalContent.imprint.contactEmail}
                      </a>
                    </p>
                    <p>
                      <strong className="text-[#2D2825]">Phone:</strong>{' '}
                      <a href={`tel:${legalContent.imprint.contactPhone.replace(/\s+/g, '')}`} className="text-[#C59B4D] hover:underline">
                        {legalContent.imprint.contactPhone}
                      </a>
                    </p>
                  </div>

                  {/* Company Information */}
                  <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E2D8]">
                    <h4 className="text-xs font-semibold text-[#C59B4D] uppercase tracking-wider mb-2">
                      {legalContent.imprint.companyTitle}
                    </h4>
                    <p>
                      <strong className="text-[#2D2825]">{legalContent.imprint.companyRegLabel}:</strong> {legalContent.imprint.companyRegVal}
                    </p>
                    <p>
                      <strong className="text-[#2D2825]">{legalContent.imprint.registeredInLabel}:</strong> {legalContent.imprint.registeredInVal}
                    </p>
                  </div>

                  {/* Property */}
                  <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E2D8]">
                    <h4 className="text-xs font-semibold text-[#C59B4D] uppercase tracking-wider mb-2">
                      {legalContent.imprint.propertyTitle}
                    </h4>
                    <p className="font-medium text-[#2D2825]">{legalContent.imprint.propertyName}</p>
                    <p>{legalContent.imprint.propertyAddress1}</p>
                    <p>{legalContent.imprint.propertyAddress2}</p>
                    <p>{legalContent.imprint.propertyRegion}</p>
                    <p className="mt-2 text-[#C59B4D] font-medium">
                      <strong>{legalContent.imprint.touristLicenseLabel}:</strong> {legalContent.imprint.touristLicenseVal}
                    </p>
                  </div>

                  {/* Responsible for the content of this website */}
                  <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E2D8]">
                    <h4 className="text-xs font-semibold text-[#C59B4D] uppercase tracking-wider mb-2">
                      {legalContent.imprint.responsibleTitle}
                    </h4>
                    <p className="font-medium text-[#2D2825]">{legalContent.imprint.companyName}</p>
                    <p>{legalContent.imprint.companyAddress1}</p>
                    <p>{legalContent.imprint.companyAddress2}</p>
                    <p>{legalContent.imprint.companyCountry}</p>
                  </div>

                  {/* Disclaimer */}
                  <div className="space-y-2 pt-2 border-t border-[#E8E2D8]">
                    <h4 className="text-xs font-semibold text-[#C59B4D] uppercase tracking-wider">
                      {legalContent.imprint.disclaimerTitle}
                    </h4>
                    <p>{legalContent.imprint.disclaimer1}</p>
                    <p>{legalContent.imprint.disclaimer2}</p>
                  </div>

                  {/* Copyright */}
                  <div className="space-y-2 pt-2 border-t border-[#E8E2D8]">
                    <h4 className="text-xs font-semibold text-[#C59B4D] uppercase tracking-wider">
                      {legalContent.imprint.copyrightTitle}
                    </h4>
                    <p>{legalContent.imprint.copyrightText}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8E2D8] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-[#2D2825] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#3D3733] transition-colors cursor-pointer"
              >
                {closeText}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
