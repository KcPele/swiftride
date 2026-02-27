import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Swift Pickup & Logistics",
    short_name: "Swift",
    description:
      "Fast, safe, and reliable ride-hailing and logistics in Minna, Niger State.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff6600",
    icons: [
      {
        src: "/icon.png",
        sizes: "350x338",
        type: "image/png",
      },
    ],
  };
}
