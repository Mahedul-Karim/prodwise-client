export const NAV_LINKS = [
  {
    label: "Home",
    to: "/",
    isPrivate: false,
  },
  {
    label: "Queries",
    to: "/queries",
    isPrivate: false,
  },
  {
    label: "Recommendations For Me",
    to: "/recommendations",
    isPrivate: true,
  },
  {
    label: "My Queries",
    to: "/my-queries",
    isPrivate: true,
  },
  {
    label: "My recommendations",
    to: "/my-recommendations",
    isPrivate: true,
  },
];

export const SLIDER_DATA = [
  {
    title: "Looking for Better Product Choices?",
    subtitle:
      "Get community-powered recommendations for smarter shopping decisions.",
    highlight: "Product",
    src: "/slide-1.png",
    btnText: "Explore Alternatives",
  },
  {
    title: "Not Sure Which Product to Pick?",
    subtitle: "Ask real users for opinions, reviews, and better suggestions.",
    highlight: "Pick?",
    src: "/slide-2.png",
    btnText: "Ask a Question",
  },
  {
    title: "Help Others Choose Right",
    subtitle:
      "Share your product recommendations to guide others just like you.",
    highlight: "Right",
    src: "/slide-3.png",
    btnText: "Add a Recommendation",
  },
];

export const dummyQueries = [
  
  {
    productName: "SpeedDry Hair Dryer",
    productBrand: "StylePro",
    productImageURL: "https://i.ibb.co/rR2qSMbL/query-12.jpg",
    queryTitle: "Looking for quiet hair dryers with similar speed?",
    boycottingReason: "Very noisy and gets too hot quickly.",
    currentDate: new Date("2025-05-27T23:05:14.016Z"),
    recommendationCount: Math.round(Math.random() * 50),
  },
];

export const counterDate = [
  {
    icon: "/members.png",
    title: 4200,
    suffix: "+",
    subtitle: "Members",
  },
  {
    icon: "/post.png",
    title: 12500,
    suffix: "+",
    subtitle: "Posts",
  },
  {
    icon: "/active.png",
    title: 384,
    suffix: "",
    subtitle: "Active Today",
  },
  {
    icon: "/satisfaction.png",
    title: 98,
    suffix: "%",
    subtitle: "Satisfaction Rate",
  },
];
