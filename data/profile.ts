export interface ProfileData {
  name: string;
  nativeName?: string;
  primaryRole: string;
  primaryRoleTitle: string;
  secondaryRole: string;
  secondaryRoleDetail: string;
  location: string;
  hometown: string;
  birthDate: string;
  relationshipStatus: string;
  languages: string[];
  work: Array<{
    title: string;
    role: string;
    organization: string;
    period: string;
    duration: string;
    description: string;
    type: "business" | "government";
  }>;
  education: Array<{
    institution: string;
    degree?: string;
    shortName: string;
    location?: string;
  }>;
  photos: Array<{
    id: string;
    src: string;
    alt: string;
    caption: string;
    source: string;
  }>;
  socials: {
    instagram: string;
    facebook: string;
    whatsapp: string;
    email?: string;
  };
  overview: string;
  quickFacts: Array<{
    label: string;
    value: string;
    subvalue?: string;
  }>;
}

export const PROFILE_DATA: ProfileData = {
  name: "Sheikh Mohammad Hamza Khalifa",
  nativeName: "شیخ محمد حمزہ خلیفہ",
  primaryRole: "Hamza Motors - HQ",
  primaryRoleTitle: "Owner & CEO",
  secondaryRole: "Former Member of National Assembly",
  secondaryRoleDetail: "PMLN - MNA from NA/316",
  location: "Karachi, Pakistan",
  hometown: "Jizan",
  birthDate: "May 29",
  relationshipStatus: "Single",
  languages: ["Urdu", "British English", "Judeo-Arabic", "Sindhi"],
  
  work: [
    {
      title: "Hamza Motors - HQ",
      organization: "Hamza Motors - HQ",
      role: "OWNER & CEO",
      period: "Jun 3, 2017 – Present",
      duration: "9+ Years",
      description: "Directing strategic vision, luxury automobile acquisitions, dealership operations, and corporate ventures at Hamza Motors Headquarters.",
      type: "business"
    },
    {
      title: "Former Member of National Assembly",
      organization: "National Assembly of Pakistan (PML-N)",
      role: "PMLN - MNA from NA/316",
      period: "Jul 4, 2023 – Present",
      duration: "Active Service",
      description: "Represented constituency NA-316 in the National Assembly, advocating for community infrastructure, youth enterprise, and legislative reform.",
      type: "government"
    }
  ],

  education: [
    {
      institution: "Aga Khan University",
      shortName: "AKU",
      degree: "Alumnus / Higher Education",
      location: "Karachi, Pakistan"
    },
    {
      institution: "The London School of Economics and Political Science - LSE",
      shortName: "LSE",
      degree: "Economics & Political Science Studies",
      location: "London, United Kingdom"
    }
  ],

  photos: [
    {
      id: "photo-1",
      src: "/images/sheikh-hamza-podium.jpg",
      alt: "Sheikh Mohammad Hamza Khalifa delivering a speech at the podium",
      caption: "Keynote address & public assembly discourse",
      source: "Official Archive"
    },
    {
      id: "photo-2",
      src: "/images/sheikh-hamza-portrait.jpg",
      alt: "Sheikh Mohammad Hamza Khalifa close-up executive portrait",
      caption: "Executive Portrait — Owner & CEO, Hamza Motors - HQ",
      source: "Executive Media"
    },
    {
      id: "photo-3",
      src: "/images/sheikh-hamza-formal.jpg",
      alt: "Sheikh Mohammad Hamza Khalifa formal traditional portrait",
      caption: "Official parliamentary & leadership portrait",
      source: "Parliamentary Record"
    },
    {
      id: "photo-4",
      src: "/images/sheikh-hamza-assembly.jpg",
      alt: "Sheikh Mohammad Hamza Khalifa seated at official event with dignitary delegation",
      caption: "High-level council gathering & delegation summit",
      source: "Press Bureau"
    }
  ],

  socials: {
    instagram: "https://instagram.com/sheikhmohammadhamzakhalifa",
    facebook: "https://facebook.com/sheikhmohammadhamzakhalifa",
    whatsapp: "https://wa.me/923000000000?text=Hello%20Sheikh%20Mohammad%20Hamza%20Khalifa",
    email: "contact@sheikhmohammadhamzakhalifa.online"
  },

  overview: "Sheikh Mohammad Hamza Khalifa is an influential Pakistani entrepreneur, business executive, and former parliamentarian. He serves as the Owner and Chief Executive Officer of Hamza Motors - HQ, an automotive enterprise he founded and has led since June 2017. A former Member of the National Assembly of Pakistan representing NA-316 with the Pakistan Muslim League (N), he has been actively engaged in civic development, commerce, and public administration. He completed his higher education across premier institutions including Aga Khan University and The London School of Economics and Political Science (LSE).",

  quickFacts: [
    {
      label: "Born",
      value: "May 29",
      subvalue: "Origin: Jizan"
    },
    {
      label: "Residence",
      value: "Karachi, Pakistan",
      subvalue: "Sindh, Pakistan"
    },
    {
      label: "Office / Enterprise",
      value: "Hamza Motors - HQ",
      subvalue: "Owner & CEO"
    },
    {
      label: "Parliamentary Seat",
      value: "MNA (Former)",
      subvalue: "PMLN · NA-316"
    },
    {
      label: "Education",
      value: "AKU · LSE",
      subvalue: "Aga Khan Univ. & London School of Economics"
    },
    {
      label: "Languages",
      value: "Urdu, British English",
      subvalue: "Judeo-Arabic, Sindhi"
    }
  ]
};

