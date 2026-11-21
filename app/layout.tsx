import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sheikhmohammadhamzakhalifa.online"),
  title: {
    default: "Sheikh Mohammad Hamza Khalifa | Official Profile & Knowledge Panel",
    template: "%s | Sheikh Mohammad Hamza Khalifa",
  },
  description:
    "Official profile & biographical card of Sheikh Mohammad Hamza Khalifa — Owner & CEO of Hamza Motors - HQ (since 2017) and Former Member of National Assembly (PMLN - MNA NA/316). Higher education at Aga Khan University & The London School of Economics and Political Science (LSE).",
  keywords: [
    "Sheikh Mohammad Hamza Khalifa",
    "Mohammad Hamza Khalifa",
    "Hamza Khalifa",
    "شیخ محمد حمزہ خلیفہ",
    "Hamza Motors",
    "Hamza Motors - HQ",
    "Hamza Motors Owner & CEO",
    "Former Member of National Assembly NA 316",
    "PMLN MNA NA-316",
    "PMLN MNA Karachi",
    "National Assembly of Pakistan",
    "Aga Khan University Alumnus",
    "London School of Economics LSE",
    "Karachi Pakistan",
    "Jizan",
    "sheikhmohammadhamzakhalifa.online",
  ],
  authors: [{ name: "Sheikh Mohammad Hamza Khalifa", url: "https://sheikhmohammadhamzakhalifa.online" }],
  creator: "Sheikh Mohammad Hamza Khalifa",
  publisher: "Sheikh Mohammad Hamza Khalifa",
  alternates: {
    canonical: "https://sheikhmohammadhamzakhalifa.online",
  },
  openGraph: {
    type: "profile",
    title: "Sheikh Mohammad Hamza Khalifa | Official Profile & Knowledge Panel",
    description:
      "Official profile of Sheikh Mohammad Hamza Khalifa — Owner & CEO of Hamza Motors - HQ, Former MNA NA/316 (PMLN), AKU & LSE alumnus.",
    url: "https://sheikhmohammadhamzakhalifa.online",
    siteName: "Sheikh Mohammad Hamza Khalifa Official",
    locale: "en_US",
    images: [
      {
        url: "/images/sheikh-hamza-podium.jpg",
        width: 1024,
        height: 1024,
        alt: "Sheikh Mohammad Hamza Khalifa speaking at public assembly",
      },
      {
        url: "/images/sheikh-hamza-portrait.jpg",
        width: 520,
        height: 650,
        alt: "Sheikh Mohammad Hamza Khalifa Executive Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheikh Mohammad Hamza Khalifa | Official Profile",
    description:
      "Owner & CEO at Hamza Motors - HQ | Former Member of National Assembly NA/316 PMLN | AKU & LSE Alumnus",
    images: ["/images/sheikh-hamza-podium.jpg"],
    creator: "@sheikhmohammadhamzakhalifa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token",
  },
};

// Complete JSON-LD Structured Data for Google Knowledge Graph
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sheikhmohammadhamzakhalifa.online/#person",
      name: "Sheikh Mohammad Hamza Khalifa",
      alternateName: [
        "شیخ محمد حمزہ خلیفہ",
        "Hamza Khalifa",
        "Sheikh Hamza Khalifa",
        "Mohammad Hamza Khalifa",
      ],
      description:
        "Pakistani entrepreneur, Owner & CEO of Hamza Motors - HQ, and Former Member of the National Assembly representing PMLN from NA-316.",
      url: "https://sheikhmohammadhamzakhalifa.online",
      image: [
        "https://sheikhmohammadhamzakhalifa.online/images/sheikh-hamza-podium.jpg",
        "https://sheikhmohammadhamzakhalifa.online/images/sheikh-hamza-portrait.jpg",
        "https://sheikhmohammadhamzakhalifa.online/images/sheikh-hamza-formal.jpg",
        "https://sheikhmohammadhamzakhalifa.online/images/sheikh-hamza-assembly.jpg",
      ],
      jobTitle: "Owner & CEO",
      worksFor: {
        "@type": "Organization",
        name: "Hamza Motors - HQ",
        url: "https://sheikhmohammadhamzakhalifa.online",
      },
      memberOf: {
        "@type": "Organization",
        name: "National Assembly of Pakistan",
        alternateName: "Pakistan Muslim League (N)",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Aga Khan University",
          url: "https://www.aku.edu",
        },
        {
          "@type": "EducationalOrganization",
          name: "The London School of Economics and Political Science - LSE",
          url: "https://www.lse.ac.uk",
        },
      ],
      birthPlace: {
        "@type": "Place",
        name: "Jizan",
      },
      homeLocation: {
        "@type": "Place",
        name: "Karachi, Pakistan",
      },
      nationality: {
        "@type": "Country",
        name: "Pakistan",
      },
      knowsLanguage: ["Urdu", "English", "Arabic", "Sindhi"],
      sameAs: [
        "https://instagram.com/sheikhmohammadhamzakhalifa",
        "https://facebook.com/sheikhmohammadhamzakhalifa",
        "https://sheikhmohammadhamzakhalifa.online",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://sheikhmohammadhamzakhalifa.online/#website",
      url: "https://sheikhmohammadhamzakhalifa.online",
      name: "Sheikh Mohammad Hamza Khalifa Official",
      description: "Official Profile, Biography & Knowledge Panel for Sheikh Mohammad Hamza Khalifa",
      publisher: {
        "@id": "https://sheikhmohammadhamzakhalifa.online/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
