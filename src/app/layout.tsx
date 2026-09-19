import type { Metadata } from 'next';
import './globals.css';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { AppStateProvider } from '@/components/providers/AppStateContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ProductQuickModal } from '@/components/common/ProductQuickModal';
import { ToastContainer } from '@/components/common/Toast';

export const metadata: Metadata = {
  title: 'TEA TOAST — Sip. Toast. Talk. Repeat.',
  description:
    'A boutique lifestyle tea cafe and artisanal bakery celebrating slow conversations, single-estate Assam brews, and cast-iron toasts.',
  keywords: [
    'Tea Toast',
    'Masala Chai',
    'Artisanal Toast',
    'Boutique Cafe Bangalore',
    'Specialty Tea',
    'Sourdough Toast',
    'Modern Indian Cafe'
  ],
  authors: [{ name: 'Tea Toast Guild' }],
  openGraph: {
    title: 'TEA TOAST — Sip. Toast. Talk. Repeat.',
    description: 'A boutique modern Indian cafe celebrating the everyday liturgy of chai and toast.',
    type: 'website',
    locale: 'en_IN'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#F7F1E5] text-[#241C18] antialiased selection:bg-[#173F35] selection:text-[#F7F1E5]">
        <AppStateProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1 w-full">
              {children}
            </main>
            <Footer />
            <CartDrawer />
            <ProductQuickModal />
            <ToastContainer />
          </SmoothScrollProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}
