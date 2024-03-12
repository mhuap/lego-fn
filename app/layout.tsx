import './globals.css'
import { Providers } from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark bg-legoDarkest text-legoWhite font-bold'>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className='max-w-lg mx-auto py-8 px-4 italic'>
        <Providers>
          <p className='font-black uppercase text-legoTealInputLight mb-12'>Lego fortnite helper</p>
          {children}
        </Providers>
      </body>
    </html>
  );
}
