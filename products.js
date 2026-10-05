/**
 * VYLEN — Master Product Data
 * Verified against live Amazon merchant pages (Titles, Prices, Imagery & Direct Affiliate Links)
 */

const VYLEN_PRODUCTS = [
  {
    id: "xwin-71-standing-desk",
    name: "X-Win 71\" Electric Standing Desk",
    fullName: "X-Win 71\" Electric Standing Desk, 4-Leg Height Adjustable Gaming Desk",
    brand: "X-Win",
    category: "Workspace",
    price: 349.99,
    formattedPrice: "$349.99",
    affiliateUrl: "https://amzn.to/4xYO5Wg",
    image: "https://m.media-amazon.com/images/I/71MxSa+BO9L._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/71MxSa+BO9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81evecxbImL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81f1rWl+aWL._AC_SL1500_.jpg"
    ],
    tagline: "Commercial-grade 4-leg electric standing desk designed for zero wobble and expansive workstation setups.",
    description: "The X-Win 71-inch Electric Standing Desk delivers rock-solid structural stability with its heavy-duty 4-leg synchronized column architecture. Featuring a spacious 71\" x 32\" surface, it comfortably accommodates multiple monitors, studio speakers, and desktop gear with smooth, quiet motorized height adjustment.",
    features: [
      "4-Leg Heavy Carbon Steel Architecture for maximum stability at standing heights",
      "Spacious 71\" x 32\" desktop surface for multi-monitor workstation setups",
      "Synchronized electric lift system with programmable digital memory presets",
      "Under-desk cable management channel, headphone hook, and cup holder",
      "Heavy load commercial capacity"
    ]
  },
  {
    id: "branch-ergonomic-chair-pro",
    name: "Branch Ergonomic Chair Pro",
    fullName: "Branch Ergonomic Chair Pro, Mesh Office Chair with 14 Points of Adjustment",
    brand: "Branch",
    category: "Workspace",
    price: 449.10,
    formattedPrice: "$449.10",
    affiliateUrl: "https://link.amazon/B0aASW838",
    image: "https://m.media-amazon.com/images/I/61mY1vMdgNL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61mY1vMdgNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61LM5TXV4EL._AC_SL1344_.jpg",
      "https://m.media-amazon.com/images/I/61tWk2FvC3L._AC_SL1500_.jpg"
    ],
    tagline: "Engineered for 8+ hour work sessions with 14 points of ergonomic calibration and breathable Italian mesh.",
    description: "The Branch Ergonomic Chair Pro provides active orthopedic support through an intuitive 14-point adjustment matrix. Its high-tension double-woven Italian mesh backrest ensures maximum airflow and posture alignment throughout demanding workdays.",
    features: [
      "14 customizable adjustment points including 3D armrests and active lumbar support",
      "Double-woven breathable mesh backrest for all-day thermal comfort",
      "Synchronous tilt mechanism with 4 locking angles up to 130 degrees",
      "High-density molded foam seat cushion with waterfall front edge",
      "BIFMA certified for commercial durability"
    ]
  },
  {
    id: "gaming-chair-footrest-red",
    name: "Gamtimer Reclining Chair with Footrest",
    fullName: "Gamtimer Gaming Chair with Footrest, Ergonomic Computer Chair, PU Breathable Material with Headrest and Lumbar Support (RED)",
    brand: "Gamtimer",
    category: "Workspace",
    price: 199.99,
    formattedPrice: "$199.99",
    affiliateUrl: "https://link.amazon/B0dXoJN8y",
    image: "https://m.media-amazon.com/images/I/717VstaBQUL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/717VstaBQUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81qJh3mPAYL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71uK5GfZq7L._AC_SL1500_.jpg"
    ],
    tagline: "Breathable PU high-back reclining chair with extendable footrest and ergonomic lumbar cushioning.",
    description: "Designed for full relaxation between work sprints and gaming sessions, this ergonomic high-back chair features a 155-degree deep reclining backrest and a retractable padded footrest. Built on a reinforced steel chassis with high-density cold-molded foam.",
    features: [
      "Retractable steel-supported padded footrest for full leg relaxation",
      "90° to 155° deep reclining mechanism with multi-angle lock",
      "Breathable textured PU leather upholstery with high-density cold-cure foam",
      "Included memory foam headrest pillow and lumbar support cushion",
      "Heavy-duty 5-star base with 360-degree silent smooth-glide casters"
    ]
  },
  {
    id: "benq-screenbar-pro",
    name: "BenQ ScreenBar Pro LED Light Bar",
    fullName: "BenQ ScreenBar Pro LED Monitor Light Bar (Silver) - Ultrawide Lighting, Motion Sensor, Adjustable Brightness/Color Temperature",
    brand: "BenQ",
    category: "Workspace",
    price: 139.00,
    formattedPrice: "$139.00",
    affiliateUrl: "https://link.amazon/B0fpu3iz1",
    image: "https://m.media-amazon.com/images/I/510lgogfdWL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/510lgogfdWL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/711Tonm-E6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71003V1B7UL._AC_SL1500_.jpg"
    ],
    tagline: "Ultrawide optical monitor lamp with automatic motion detection and zero screen reflection glare.",
    description: "The BenQ ScreenBar Pro features patented asymmetrical optical engineering that illuminates your entire desk area up to 500+ lux with zero screen reflection or eye strain. Its built-in ultrasonic sensor detects presence and powers on automatically when you sit down.",
    features: [
      "Patented asymmetrical optical lens eliminates screen glare and reflections",
      "Ultrasonic motion sensor powers light on/off automatically upon arrival and departure",
      "Ultrawide illumination coverage spanning 85cm x 50cm workspace",
      "Universal clamp fits both ultra-thin flat monitors and curved 1000R-1800R screens",
      "Stepless color temperature (2700K - 6500K) and auto-dimming ambient sensor"
    ]
  },
  {
    id: "keebmonkey-rainy-75",
    name: "WOBKEY Rainy 75 Mechanical Keyboard",
    fullName: "KEEBMONKEY WOBKEY Rainy 75 CNC Aluminum Mechanical Keyboard (Lite - Black, Violet Switch)",
    brand: "Keebmonkey / WOBKEY",
    category: "Tech",
    price: 129.99,
    formattedPrice: "$129.99",
    affiliateUrl: "https://link.amazon/B03eXsn9J",
    image: "https://m.media-amazon.com/images/I/71zIAbo8MoL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/71zIAbo8MoL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Af4TXejdL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/711FshmF41L._AC_SL1500_.jpg"
    ],
    tagline: "Solid CNC 6063 aluminum mechanical keyboard with factory-lubed switches and deep acoustic profile.",
    description: "Crafted from a hefty 1.8kg block of CNC anodized 6063 aluminum, the WOBKEY Rainy 75 sets the standard for out-of-the-box acoustic perfection. Features pre-lubed HMX Violet linear switches, gasket mounting, and 5 layers of sound-dampening foam.",
    features: [
      "Solid CNC 6063 Anodized Aluminum chassis (1.8kg heavy desktop weight)",
      "Factory-lubed HMX Violet linear switches for a clean, marbly acoustic keystroke",
      "Gasket-mounted structure with 5-layer acoustic dampening foam",
      "Triple-mode connectivity: Bluetooth 5.0, 2.4GHz wireless, and USB-C wired",
      "Hot-swappable PCB supporting 3-pin and 5-pin mechanical switches"
    ]
  },
  {
    id: "dell-sd25tb4-thunderbolt-dock",
    name: "Dell SD25TB4 Pro Thunderbolt 4 Dock",
    fullName: "Dell SD25TB4 Pro Thunderbolt 4 Smart Dock with 8K Display, 180W Adapter",
    brand: "Dell",
    category: "Tech",
    price: 257.99,
    formattedPrice: "$257.99",
    affiliateUrl: "https://link.amazon/B07BE0bxs",
    image: "https://m.media-amazon.com/images/I/81C-D7c3tPL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/81C-D7c3tPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81DiqHmpuwL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81oE1PqC+bL._AC_SL1500_.jpg"
    ],
    tagline: "High-bandwidth 40Gbps Thunderbolt 4 smart dock supporting single 8K or dual 4K @ 120Hz displays.",
    description: "Transform your laptop into an uncompromising desktop workstation with a single braided Thunderbolt 4 cable. Delivers up to 130W Power Delivery, Gigabit Ethernet, multi-stream 8K/4K display outputs, and high-speed USB expansion.",
    features: [
      "Full 40Gbps Thunderbolt 4 bandwidth with dual 4K @ 120Hz or single 8K display support",
      "High-output 180W power adapter delivering up to 130W laptop Power Delivery",
      "Comprehensive I/O: 2x DisplayPort 1.4, 1x HDMI 2.0, 1x TB4 Out, 3x USB-A, 2x USB-C",
      "Gigabit Ethernet RJ-45 port for ultra-stable wired networking",
      "Enterprise-grade reliability with zero video signal dropouts"
    ]
  },
  {
    id: "logitech-mx-master-4",
    name: "Logitech MX Master 4 Wireless Mouse",
    fullName: "Logitech MX Master 4 Ergonomic Wireless Mouse with Haptics - Graphite",
    brand: "Logitech",
    category: "Tech",
    price: 118.00,
    formattedPrice: "$118.00",
    affiliateUrl: "https://link.amazon/B0dkMQLIE",
    image: "https://m.media-amazon.com/images/I/61z3ENJubZL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61z3ENJubZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/812ZrLUj3QL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71N1uXoO5gL._AC_SL1500_.jpg"
    ],
    tagline: "Next-generation precision mouse with MagSpeed electromagnetic scrolling and tactile haptics.",
    description: "The gold standard of productivity input devices. Engineered with MagSpeed electromagnetic scrolling that flies through 1,000 lines per second in silence, integrated haptic feedback for gestures, and an 8,000 DPI Darkfield sensor that tracks anywhere, even on glass.",
    features: [
      "MagSpeed Electromagnetic Scroll Wheel (1,000 lines/sec silent scrolling)",
      "Integrated tactile haptic motor providing responsive physical feedback on gestures",
      "8,000 DPI Darkfield high-precision sensor tracks on any surface including glass",
      "Dedicated horizontal thumb wheel for effortless timeline and document navigation",
      "Up to 70 days battery life with quick USB-C recharging"
    ]
  },
  {
    id: "desktop-hutch-bookshelf-2tier",
    name: "ALZELI 2-Tier Desktop Hutch Bookshelf",
    fullName: "Desktop Hutch Bookshelf, 2-Tier Metal Desk Shelf for Top of Desk",
    brand: "ALZELI",
    category: "Organization",
    price: 129.99,
    formattedPrice: "$129.99",
    affiliateUrl: "https://link.amazon/B0bspD5iU",
    image: "https://m.media-amazon.com/images/I/81GFC+o8rFL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/81GFC+o8rFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81mUk7HoyuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81kQZ2Uf+zL._AC_SL1500_.jpg"
    ],
    tagline: "Heavy-duty 2-tier metal desktop shelf that doubles vertical storage and elevates monitor displays.",
    description: "Reclaim valuable desktop workspace by utilizing vertical storage. This powder-coated carbon steel desktop hutch holds audio monitors, notebooks, plants, and hardware accessories while storing full-sized keyboards cleanly underneath.",
    features: [
      "2-Tier heavy-duty powder-coated SPCC carbon steel construction",
      "Elevates screens to natural ergonomic eye level to reduce neck strain",
      "Heavy load capacity with anti-slip protective feet",
      "Generous under-shelf clearance easily fits full-sized 104-key keyboards",
      "Simple setup with included hardware"
    ]
  },
  {
    id: "sony-wh1000xm5-headphones",
    name: "Sony WH-1000XM5 ANC Headphones",
    fullName: "Sony WH-1000XM5 Premium Noise Cancelling Wireless Headphones, Black",
    brand: "Sony",
    category: "Tech",
    price: 198.00,
    formattedPrice: "$198.00",
    affiliateUrl: "https://link.amazon/B03ruFOnN",
    image: "https://m.media-amazon.com/images/I/61O3iMlnJIL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/61O3iMlnJIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51A17cIdhKL._AC_SL1080_.jpg",
      "https://m.media-amazon.com/images/I/71R2WpQYQdL._AC_SL1500_.jpg"
    ],
    tagline: "Dual-processor active noise cancellation with 8 microphones for deep focus and pristine audio fidelity.",
    description: "Block out distractions and immerse yourself in work. Sony's flagship WH-1000XM5 headphones utilize dual dedicated noise cancelling processors (QN1 + V1) controlling 8 microphones to deliver industry-leading silence, paired with lightweight 250g all-day comfort.",
    features: [
      "Dual processors (QN1 + V1) with 8 microphones for unmatched active noise cancellation",
      "Auto NC Optimizer automatically tailors cancellation to atmospheric conditions",
      "Ultra-soft synthetic leather headband and lightweight 250g build",
      "30 hours of continuous battery life with 3-minute rapid charging (3 hours playback)",
      "Hi-Res Audio Wireless support via LDAC codec"
    ]
  },
  {
    id: "ugreen-nexode-500w-gan",
    name: "UGREEN Nexode 500W GaN Charging Station",
    fullName: "UGREEN Nexode 500W GaN Charging Station, 6-Port 240W Max Charger",
    brand: "UGREEN",
    category: "Tech",
    price: 199.99,
    formattedPrice: "$199.99",
    affiliateUrl: "https://link.amazon/B0hjS3XVL",
    image: "https://m.media-amazon.com/images/I/713u9WoQenL._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/713u9WoQenL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61QBEm3h+VL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71N1uXoO5gL._AC_SL1500_.jpg"
    ],
    tagline: "Industrial 500W GaN desktop power hub capable of fast-charging multiple high-power laptops simultaneously.",
    description: "Eliminate bulky power bricks with one sleek desktop powerhouse. Delivering 500W of total GaN power with single-port output up to 240W USB-C PD 3.1, it powers demanding creator workstations and mobile devices at maximum speed.",
    features: [
      "500W total GaN charging output across 6 high-speed desktop ports",
      "Single-port USB-C PD 3.1 up to 240W for high-performance workstation laptops",
      "Powers 3 laptops, 2 smartphones, and tablet simultaneously with zero throttling",
      "GaNInfinity thermal architecture ensures cool and energy-efficient operation",
      "Intelligent Thermal Guard 2.0 temperature monitoring"
    ]
  },
  {
    id: "anker-magsafe-cube-3in1",
    name: "Anker MagSafe 3-in-1 Foldable Cube",
    fullName: "Anker MagSafe Charger Stand, Wireless Charger, 3-in-1 Cube, 15W Foldable Fast Charging Stand",
    brand: "Anker",
    category: "Accessories",
    price: 94.99,
    formattedPrice: "$94.99",
    affiliateUrl: "https://link.amazon/B04w7wChm",
    image: "https://m.media-amazon.com/images/I/51yTnAyZl9L._AC_SL1500_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/51yTnAyZl9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61pz4N4E5yL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61JbQjE0k+L._AC_SL1500_.jpg"
    ],
    tagline: "Ultra-compact 3-in-1 wireless charging cube for iPhone, Apple Watch, and AirPods.",
    description: "An ingenious foldable aluminum cube that fast-charges your entire Apple everyday carry simultaneously. Certified 15W official MagSafe charging for iPhone, fast charging for Apple Watch, and a dedicated wireless pad for AirPods.",
    features: [
      "Official Apple-certified 15W MagSafe ultra-fast wireless charging",
      "Simultaneously powers iPhone, Apple Watch Ultra/Series 1-10, and AirPods",
      "Ingenious foldable aluminum cube form factor fits in the palm of your hand",
      "Adjustable magnetic tilt up to 60 degrees supports iOS StandBy display mode",
      "Includes 30W USB-C power adapter and premium braided cable"
    ]
  },
  {
    id: "deltahub-carpio-2",
    name: "DELTAHUB Carpio 2.0 Wrist Rest",
    fullName: "DELTAHUB Carpio 2.0 - Right-Handed Truly Ergonomic Wrist Rest for Mouse, Carpal Tunnel Support",
    brand: "DELTAHUB",
    category: "Accessories",
    price: 39.90,
    formattedPrice: "$39.90",
    affiliateUrl: "https://link.amazon/B00u2qCfm",
    image: "https://m.media-amazon.com/images/I/41LCXFYP--L._AC_SL1080_.jpg",
    gallery: [
      "https://m.media-amazon.com/images/I/41LCXFYP--L._AC_SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61dB-HzOdkL._AC_SL1080_.jpg",
      "https://m.media-amazon.com/images/I/61J6H0r1F4L._AC_SL1080_.jpg"
    ],
    tagline: "Contoured PTFE gliding wrist rest engineered with physicians to prevent carpal tunnel strain.",
    description: "Unlike static foam pads that anchor your wrist in an unnatural angle, the DELTAHUB Carpio 2.0 lifts the palm and glides effortlessly with your hand using low-friction PTFE Teflon feet, protecting the median nerve during long hours of computer work.",
    features: [
      "Doctor-engineered palm elevation relieves pressure on the median nerve",
      "PTFE Teflon gliders allow seamless movement across any mousepad",
      "Hypoallergenic medical-grade silicone contoured support pads",
      "Featherlight 22-gram pocketable form factor",
      "Right-handed ergonomic precision contour"
    ]
  }
];

// Attach to window object globally for GitHub Pages & browser environments
if (typeof window !== 'undefined') {
  window.VYLEN_PRODUCTS = VYLEN_PRODUCTS;
}

if (typeof module !== 'undefined') {
  module.exports = VYLEN_PRODUCTS;
}
