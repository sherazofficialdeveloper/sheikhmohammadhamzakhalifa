import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sheikhmohammadhamzakhalifa.online",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        "https://sheikhmohammadhamzakhalifa.online/images/sheikh-hamza-podium.jpg",
        "https://sheikhmohammadhamzakhalifa.online/images/sheikh-hamza-portrait.jpg",
        "https://sheikhmohammadhamzakhalifa.online/images/sheikh-hamza-formal.jpg",
        "https://sheikhmohammadhamzakhalifa.online/images/sheikh-hamza-assembly.jpg",
      ],
    },
  ];
}

