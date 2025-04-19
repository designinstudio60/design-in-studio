
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Design In Studio | Your ultimate mixkit",
//   description: "Developed by Saqib Raza",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="icon" href="/favicon.svg" />
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
//       </head>
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Design In Studio | Your ultimate mixkit",
  description: "Developed by Saqib Raza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}