import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Iran Luxury & Premium Car Dealerships Competition Benchmarking 2025 | Ken Research',
  description:
    'Company-level competition benchmarking of Iran Luxury Car Dealers covering operational KPIs and financial metrics to support entry, expansion and investment decisions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* `js-reveal` is set here rather than by a script: it must be present before
       first paint (it arms the scroll-reveal start state), and rendering it into
       the server HTML is strictly better than the static file's inline <head>
       script — no flash, no extra request, and it degrades the same way. */
    <html lang="en" className="js-reveal">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
