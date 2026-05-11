import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.promo": "Promos",
    "nav.help": "Help Center",
    "nav.partners": "Partners",
    "nav.partner": "Become a Partner",
    "nav.login": "Log In",
    "nav.register": "Register",

    // Hero Section
    "hero.subtitle":
      "Easy to Go, Memorable to Tell. Discover exclusive stays, premium vehicle rentals, and flexible travel packages.",

    // About Section
    "about.title": "Company Profile",
    "about.desc1":
      "PT NusaGo Digital Travelindo is a technology startup focusing on the development of digital platforms for travel and mobility services.",
    "background.desc1":
      "Starting from the need for an integrated and easily accessible travel platform,",
    "background.desc2":
      "NusaGo presents various services in one unified platform.",

    // Services Section
    "services.subtitle":
      "Providing an integrated solution in one app, making it easy to access various services.",

    // Features Section
    "feature.1.title": "All in One Booking",
    "feature.1.desc": "Easy to go, memorable to tell.",

    "feature.2.title": "Live Chat / Help",
    "feature.2.desc":
      "Ready to help, all served friendly by our Service Center team.",

    "feature.3.title": "Complete Listing Details",
    "feature.3.desc":
      "Classy holidays, making your stay an unforgettable story.",

    "feature.4.title": "Instant Search",
    "feature.4.desc":
      "Easily and quickly find and book hotels with trusted reviews.",

    "feature.5.title": "Rental Management",
    "feature.5.desc":
      "Easy rental, select units, and pick up the vehicles.",

    "feature.6.title": "NusaGo Points",
    "feature.6.desc":
      "Harvest points from every transaction on the NusaGo app.",

    // App Download Section
    "app.download.title": "Easier with",
    "app.download.brand": "NusaGo App.",
    "app.download.desc":
      "Get exclusive discounts up to 50% for your first booking. Download now and start a new adventure!",

    "app.feat.hotel": "Hotel Booking",
    "app.feat.fleet": "Car Rental",
    "app.feat.tour": "Tour Package",

    // Partners Section
    "partner.title": "STRATEGIC NETWORK",
    "partner.subtitle": "Global Network.",
    "partner.desc":
      "NusaGo acts as a powerful catalyst, bridging premier providers with a massive market.",

    // Partner Cards
    "partner.card1.title": "Smart Travel",
    "partner.card1.desc": "Modern travel experience",

    "partner.card2.title": "Seamless Booking",
    "partner.card2.desc": "Hotels, transport & destinations",

    "partner.card3.title": "Connected Indonesia",
    "partner.card3.desc": "Nationwide integrated platform",

    "partner.card4.title": "All In One Journey",
    "partner.card4.desc":
      "Hotel, flights, car & travel needs",

    // Footer
    "footer.help": "Help Center",
    "footer.address": "Yogyakarta, Indonesia",
    "footer.nav_title": "Navigation",
    "footer.sub_title": "Be Our Subscribers",
    "footer.sub_desc": "Get latest update regarding our services and exclusive promos.",
    "footer.sub_button": "Submit",
    "footer.follow": "Follow Us",
    "nav.services": "Services",
    "nav.features": "Feature",

    // Language
    "lang.id": "ID",
    "lang.en": "EN",
  },

  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.products": "Produk Kami",
    "nav.promo": "Promo",
    "nav.help": "Pusat Bantuan",
    "nav.partners": "Mitra",
    "nav.partner": "Jadi Partner",
    "nav.login": "Masuk",
    "nav.register": "Daftar",

    // Hero Section
    "hero.subtitle":
      "Mudah Perginya, Berkesan Ceritanya. Temukan penginapan eksklusif, sewa kendaraan premium, dan paket perjalanan yang fleksibel.",

    // About Section
    "about.title": "Profil Perusahaan",
    "about.desc1":
      "PT NusaGo Digital Travelindo merupakan startup teknologi yang berfokus pada pengembangan platform digital untuk layanan travel dan mobility.",

    "background.desc1":
      "Berangkat dari kebutuhan akan platform perjalanan yang terintegrasi,",

    "background.desc2":
      "NusaGo menghadirkan berbagai layanan dalam satu platform terpadu.",

    // Services Section
    "services.subtitle":
      "Menghadirkan solusi terpadu dalam satu aplikasi yang memudahkan Anda mengakses berbagai layanan.",

    // Features Section
    "feature.1.title": "All in One Booking",
    "feature.1.desc":
      "Mudah perginya, berkesan ceritanya.",

    "feature.2.title": "Live Chat / Bantuan",
    "feature.2.desc":
      "Siap bantu, semua dilayani dengan ramah oleh tim Pusat Layanan kami.",

    "feature.3.title": "Detail Listing Lengkap",
    "feature.3.desc":
      "Liburan berkelas, bikin pengalaman menginapmu jadi cerita yang tak terlupakan.",

    "feature.4.title": "Pencarian Instan",
    "feature.4.desc":
      "Mudah dan cepat temukan serta pesan hotel dengan ulasan terpercaya.",

    "feature.5.title": "Rental Management",
    "feature.5.desc":
      "Sewa mudah, pilih unit, dan ambil kendaraannya.",

    "feature.6.title": "Sistem Poin",
    "feature.6.desc":
      "Panen poin dari setiap transaksi di aplikasi NusaGo.",

    // App Download Section
    "app.download.title": "Lebih Mudah dengan",
    "app.download.brand": "Aplikasi NusaGo.",
    "app.download.desc":
      "Dapatkan diskon eksklusif hingga 50% untuk pemesanan pertama Anda. Download sekarang dan mulai petualangan baru!",

    "app.feat.hotel": "Pesan Hotel",
    "app.feat.fleet": "Sewa Mobil",
    "app.feat.tour": "Paket Wisata",

    // Partners Section
    "partner.title": "JARINGAN STRATEGIS",
    "partner.subtitle": "Jangkauan Nasional.",
    "partner.desc":
      "NusaGo bertindak sebagai katalisator kuat, menjembatani penyedia layanan dengan pasar yang besar.",

    // Partner Cards
    "partner.card1.title": "perjalanan cerdas",
    "partner.card1.desc":
      "Pengalaman perjalanan modern",

    "partner.card2.title": "Pemesanan Praktis",
    "partner.card2.desc":
      "Hotel, transportasi & destinasi",

    "partner.card3.title": "Indonesia Terhubung",
    "partner.card3.desc":
      "Platform terintegrasi seluruh Indonesia",

    "partner.card4.title":
      "Semua Dalam Satu Aplikasi",

    "partner.card4.desc":
      "Hotel, penerbangan, mobil & kebutuhan perjalanan",

    // Footer
    "footer.help": "Pusat Bantuan",
    "footer.address": "Yogyakarta, Indonesia",
    "footer.nav_title": "Navigasi",
    "footer.sub_title": "Berlangganan",
    "footer.sub_desc": "Dapatkan update terbaru mengenai layanan dan promo eksklusif kami.",
    "footer.sub_button": "Kirim",
    "footer.follow": "Ikuti Kami",
    "nav.services": "Layanan",
    "nav.features": "Fitur",

    // Language
    "lang.id": "ID",
    "lang.en": "EN",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // default language
  const [lang, setLang] = useState(
    () => localStorage.getItem('nusago_lang') || 'en'
  );

  useEffect(() => {
    localStorage.setItem('nusago_lang', lang);
  }, [lang]);

  // translation helper
  const t = (key) => {
    return (
      translations[lang]?.[key] ||
      translations.en?.[key] ||
      key
    );
  };

  // toggle EN <-> ID
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'));
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      'useLanguage must be used within a LanguageProvider'
    );
  }

  return context;
};