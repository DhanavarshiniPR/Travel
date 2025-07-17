const travelBlogs = [
  {
    id: "static-1",
    name: "Discover the Alps",
    image: "/alps.jpeg",
    description:
      "The Alps offer a breathtaking mix of majestic peaks, charming villages, and snow-kissed adventures. Ideal for skiing, hiking, or simply sipping cocoa by a fireplace, it's Europe’s crown jewel for nature lovers and thrill seekers.",
    facts: [
      "Spans 8 countries including France, Switzerland, and Austria.",
      "Mont Blanc is the highest peak at 4,808 meters.",
      "Home to world-class ski resorts like Zermatt & Chamonix."
    ],
    travelInfo:
      "Best Time: December–March (skiing), June–September (trekking).\nBudget: ₹1,50,000 – ₹3,00,000 for a 7-day trip including flights, passes & stay.",
    bookingInfo: {
      available: true,
      link: "/book/alps",
      priceRange: "₹1,50,000 – ₹3,00,000"
    }
  },
  {
    id: "static-2",
    name: "Beach Bliss in Bali",
    image: "/bali.jpeg",
    description:
      "Bali is a tropical paradise known for its serene beaches, sacred temples, vibrant culture, and budget-friendly luxury. Whether it's surfing in Kuta or meditating in Ubud, Bali rejuvenates every traveler’s soul.",
    facts: [
      "Home to over 35 beaches including Seminyak & Nusa Dua.",
      "Over 20,000 temples across the island.",
      "Renowned for sunrise hikes up Mount Batur."
    ],
    travelInfo:
      "Best Time: April–October (dry season).\nBudget: ₹70,000 – ₹1,50,000 for a 6-day trip including flights, villas & tours.",
    bookingInfo: {
      available: true,
      link: "/book/bali",
      priceRange: "₹70,000 – ₹1,50,000"
    }
  },
  {
    id: "static-3",
    name: "Wonders of the Sahara",
    image: "/sahara.jpeg",
    description:
      "The Sahara, the world’s largest hot desert, is a realm of golden dunes, star-lit skies, and ancient nomadic traditions. Camel treks and desert camps offer a surreal experience you’ll never forget.",
    facts: [
      "Spans 11 countries across North Africa.",
      "Daytime temps can exceed 50°C.",
      "Some of the clearest night skies for stargazing."
    ],
    travelInfo:
      "Best Time: October–April (cooler months).\nBudget: ₹1,20,000 – ₹2,50,000 including desert safaris & guided tours.",
    bookingInfo: {
      available: true,
      link: "/book/sahara",
      priceRange: "₹1,20,000 – ₹2,50,000"
    }
  },
  {
    id: "static-4",
    name: "Cruising Through Norway",
    image: "/norway.jpg",
    description:
      "Norway’s fjords are nature’s masterpieces — steep cliffs, glacial waters, and postcard-perfect towns. A cruise here blends luxury and adventure, with the chance to witness the Northern Lights in winter.",
    facts: [
      "Famous fjords include Geirangerfjord & Nærøyfjord.",
      "Northern Lights visible from September to March.",
      "Midnight sun phenomenon from May to July."
    ],
    travelInfo:
      "Best Time: May–September for cruises.\nBudget: ₹2,00,000 – ₹4,50,000 depending on cabin & season.",
    bookingInfo: {
      available: true,
      link: "/book/norway",
      priceRange: "₹2,00,000 – ₹4,50,000"
    }
  },
  {
    id: "static-5",
    name: "Road Trip Across America",
    image: "/america.jpg",
    description:
      "Experience the ultimate freedom with a cross-country American road trip. From Route 66 to Pacific Coast Highway, explore diverse landscapes, cultures, cuisines, and iconic cities.",
    facts: [
      "Route 66 spans 3,940 km from Chicago to Santa Monica.",
      "Grand Canyon, Yellowstone, and Yosemite on popular routes.",
      "Over 6 million km of roads across the US."
    ],
    travelInfo:
      "Best Time: May–October.\nBudget: ₹2,50,000 – ₹5,00,000 including car rental, fuel, and accommodation.",
    bookingInfo: {
      available: true,
      link: "/book/america",
      priceRange: "₹2,50,000 – ₹5,00,000"
    }
  },
  {
    id: "static-6",
    name: "The Temples of Kyoto",
    image: "/kyoto.jpeg",
    description:
      "Step into Japan’s cultural heart — Kyoto. Home to over 1,600 temples, exquisite gardens, and tranquil teahouses, it’s a city where ancient tradition and modern elegance coexist in harmony.",
    facts: [
      "Famous sites: Fushimi Inari Shrine, Kinkaku-ji (Golden Pavilion).",
      "Known for traditional geisha districts like Gion.",
      "Best cherry blossom viewing in March–April."
    ],
    travelInfo:
      "Best Time: March–May (sakura season), October–November (autumn foliage).\nBudget: ₹1,20,000 – ₹2,50,000 for a 5-day trip.",
    bookingInfo: {
      available: true,
      link: "/book/kyoto",
      priceRange: "₹1,20,000 – ₹2,50,000"
    }
  },
  {
    id: "static-7",
    name: "Adventure in New Zealand",
    image: "/nz.jpeg",
    description:
      "New Zealand is an adventurer’s paradise. From bungee jumping in Queenstown to hiking the Milford Track, this land of diverse landscapes and Maori culture is a thrill every step of the way.",
    facts: [
      "13 national parks, volcanoes, fjords & glaciers.",
      "Popular activities: skydiving, caving, paragliding.",
      "Filming location for 'The Lord of the Rings'."
    ],
    travelInfo:
      "Best Time: November–April.\nBudget: ₹2,00,000 – ₹3,50,000 for adventure tours & stays.",
    bookingInfo: {
      available: true,
      link: "/book/nz",
      priceRange: "₹2,00,000 – ₹3,50,000"
    }
  },
  {
    id: "static-8",
    name: "Exploring Machu Picchu",
    image: "/machu.jpeg",
    description:
      "Machu Picchu is a mystic Incan city nestled high in the Andes. A UNESCO World Heritage Site, this marvel combines ancient architecture with dramatic natural beauty — a bucket-list trek for many.",
    facts: [
      "Located at 2,430 meters in Peru.",
      "Hike options: Inca Trail, Salkantay Trek, or train ride.",
      "Rediscovered in 1911 by Hiram Bingham."
    ],
    travelInfo:
      "Best Time: April–October.\nBudget: ₹1,80,000 – ₹3,50,000 including flights, permits, and guides.",
    bookingInfo: {
      available: true,
      link: "/book/machu",
      priceRange: "₹1,80,000 – ₹3,50,000"
    }
  },
  {
    id: "static-9",
    name: "City Lights of Tokyo",
    image: "/tokyo.jpeg",
    description:
      "Tokyo is a dazzling metropolis where ancient temples stand beside futuristic towers. With vibrant street food, neon nightlife, and unmatched efficiency, it's a sensory feast for every traveler.",
    facts: [
      "Must-sees: Shibuya Crossing, Tokyo Skytree, Meiji Shrine.",
      "Known for sushi, anime culture & robot restaurants.",
      "Connected by world’s most punctual train system."
    ],
    travelInfo:
      "Best Time: March–May, September–November.\nBudget: ₹1,40,000 – ₹2,80,000 for a 5–7 day city trip.",
    bookingInfo: {
      available: true,
      link: "/book/tokyo",
      priceRange: "₹1,40,000 – ₹2,80,000"
    }
  },
  {
    id: "static-10",
    name: "Romance in Paris",
    image: "/paris.jpeg",
    description:
      "Paris is the epitome of elegance and charm. With its art, fashion, pastries, and the iconic Eiffel Tower, it’s a city made for lovers, dreamers, and artists alike.",
    facts: [
      "Over 30 million visitors per year.",
      "Home to the Louvre, Notre-Dame, and Montmartre.",
      "Known for croissants, wine, and haute couture."
    ],
    travelInfo:
      "Best Time: April–June, September–October.\nBudget: ₹1,60,000 – ₹3,20,000 for a romantic escape.",
    bookingInfo: {
      available: true,
      link: "/book/paris",
      priceRange: "₹1,60,000 – ₹3,20,000"
    }
  }
];

export default travelBlogs;
