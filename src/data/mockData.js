import { Building2, Home, Car, Key, ShieldCheck, ThumbsUp, HeadphonesIcon, Globe, MapPin, Award } from 'lucide-react';

export const categories = [
  { id: 'hotel', name: 'Hotel', icon: Building2 },
  { id: 'villa', name: 'Villa', icon: Home },
  { id: 'homestay', name: 'Homestay', icon: Key },
  { id: 'transport', name: 'Kendaraan', icon: Car },
  { id: 'kost', name: 'Kost', icon: Building2 },
];

export const featuredItems = [
  {
    id: 1,
    title: 'Grand Nusa Hotel & Resort',
    location: 'Bali, Indonesia',
    type: 'Hotel',
    rating: 4.9,
    reviews: 1240,
    price: 'Rp 1.250.000',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Serenity Private Villa',
    location: 'Lombok, Indonesia',
    type: 'Villa',
    rating: 4.8,
    reviews: 856,
    price: 'Rp 3.500.000',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Premium Alphard Rental',
    location: 'Jakarta, Indonesia',
    type: 'Kendaraan',
    rating: 5.0,
    reviews: 320,
    price: 'Rp 2.000.000',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Cozy Living Kost Eksklusif',
    location: 'Yogyakarta, Indonesia',
    type: 'Kost',
    rating: 4.7,
    reviews: 150,
    price: 'Rp 1.800.000',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  }
];

export const features = [
  {
    icon: ShieldCheck,
    title: 'Transaksi Aman & Terpercaya',
    description: 'Semua partner telah diverifikasi untuk menjamin keamanan dan kenyamanan Anda selama perjalanan.'
  },
  {
    icon: ThumbsUp,
    title: 'Harga Terbaik & Transparan',
    description: 'Jaminan harga termurah dengan berbagai promo eksklusif setiap harinya tanpa biaya tersembunyi.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Layanan 24/7',
    description: 'Tim customer service profesional kami siap membantu Anda kapan saja, di mana saja.'
  }
];

export const stats = [
  { id: 1, value: '50.000+', label: 'Pengguna Aktif', icon: ThumbsUp },
  { id: 2, value: '15.000+', label: 'Mitra Properti & Kendaraan', icon: Building2 },
  { id: 3, value: '120+', label: 'Kota di Indonesia', icon: MapPin },
  { id: 4, value: '4.9/5', label: 'Rating Kepuasan', icon: Award },
];

export const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Pebisnis',
    content: 'NusaGo sangat membantu saya dalam mencari penginapan saat perjalanan bisnis mendadak. UI-nya mulus, dan proses booking super cepat!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Siti Rahmawati',
    role: 'Travel Blogger',
    content: 'Saya selalu mengandalkan NusaGo untuk sewa villa saat liburan keluarga. Pilihan propertinya eksklusif dan selalu sesuai dengan foto.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Andi Pratama',
    role: 'Mahasiswa',
    content: 'Fitur cari Kost-nya luar biasa! Saya bisa filter harga dan jarak ke kampus. Sangat direkomendasikan untuk mahasiswa.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 4,
  }
];

export const partners = [
  { id: 1, name: 'Bank Central', logo: 'BANK' },
  { id: 2, name: 'Airlines Indo', logo: 'AIRLINES' },
  { id: 3, name: 'Hotel Group', logo: 'HOTEL GROUP' },
  { id: 4, name: 'Rent a Car', logo: 'RENT CAR' },
  { id: 5, name: 'Travel Insurance', logo: 'INSURANCE' },
  { id: 6, name: 'Global Payment', logo: 'PAYMENT' },
];
