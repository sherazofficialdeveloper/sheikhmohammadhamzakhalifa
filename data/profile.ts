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
    organization: string;
    role: string;
    period: string;
    description: string;
    type: "business" | "government";
  }>;
  education: Array<{
    institution: string;
    location?: string;
  }>;
  photos: Array<{
    id: string;
    src: string;
    alt: string;
    caption: string;
  }>;
  socials: {
    facebook: string;
    whatsapp: string;
    email: string;
  };
  overview: {
    paragraph1: string;
    paragraph2: string;
  };
}

export const PROFILE_DATA: ProfileData = {
  name: "Sheikh Mohammad Hamza Khalifa",
  nativeName: "شیخ محمد حمزہ خلیفہ",
  primaryRole: "Hamza Motors - HQ",
  primaryRoleTitle: "Owner & CEO",
  secondaryRole: "Former Member of National Assembly",
  secondaryRoleDetail: "PMLN - MNA from NA/316",
  location: "Islamabad, Pakistan",
  hometown: "Jizan",
  birthDate: "May 2001",
  relationshipStatus: "Single",
  languages: ["Urdu", "British English", "Judeo-Arabic", "Sindhi"],

  work: [
    {
      organization: "Hamza Motors - HQ",
      role: "Owner & CEO",
      period: "June 3, 2017 – Present",
      description: "Directing strategic vision, luxury automobile acquisitions, dealership operations, and corporate ventures at Hamza Motors Headquarters.",
      type: "business"
    },
    {
      organization: "National Assembly of Pakistan",
      role: "Former Member of National Assembly (PMLN - MNA from NA/316)",
      period: "July 4, 2023 – Present",
      description: "Represented constituency NA-316 in the National Assembly of Pakistan under the Pakistan Muslim League (N), participating in legislative proceedings and public service initiatives.",
      type: "government"
    }
  ],

  education: [
    {
      institution: "Aga Khan University",
      location: "Karachi, Pakistan"
    },
    {
      institution: "The London School of Economics and Political Science (LSE)",
      location: "London, United Kingdom"
    }
  ],

  photos: [
    {
      id: "photo-1",
      src: "/images/sheikh-hamza-podium.jpg",
      alt: "Sheikh Mohammad Hamza Khalifa delivering a keynote address at the podium",
      caption: "Keynote address and public discourse"
    },
    {
      id: "photo-2",
      src: "/images/sheikh-hamza-portrait.jpg",
      alt: "Sheikh Mohammad Hamza Khalifa executive portrait",
      caption: "Executive Portrait — Owner & CEO, Hamza Motors - HQ"
    },
    {
      id: "photo-3",
      src: "/images/sheikh-hamza-formal.jpg",
      alt: "Sheikh Mohammad Hamza Khalifa formal traditional portrait",
      caption: "Official executive and leadership portrait"
    },
    {
      id: "photo-4",
      src: "/images/sheikh-hamza-assembly.jpg",
      alt: "Sheikh Mohammad Hamza Khalifa seated at official event with dignitary delegation",
      caption: "High-level council gathering and delegation summit"
    }
  ],

  socials: {
    facebook: "https://www.facebook.com/share/1Kp9pTLXgr/",
    whatsapp: "https://wa.me/923028044408?text=Hello%20Sheikh%20Mohammad%20Hamza%20Khalifa",
    email: "smhk.official@gmail.com"
  },

  overview: {
    paragraph1: "Sheikh Mohammad Hamza Khalifa is a Pakistani business executive and former parliamentarian. He is the Owner and Chief Executive Officer of Hamza Motors - HQ, is based in Islamabad, Pakistan, and was born in May 2001.",
    paragraph2: "He has also served in the National Assembly of Pakistan, representing NA-316 under the Pakistan Muslim League (N)."
  }
};
