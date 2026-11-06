export type Reward = {
  id: string;
  stars: number;
  description: string;
  emoji: string;
  isNew: boolean;
};

export const REWARDS: Reward[] = [
  {
    id: "1",
    stars: 25,
    description:
      "$1 off a drink customization, including an espresso shot, syrup or cold foam.",
    emoji: "☕",
    isNew: false,
  },
  {
    id: "2",
    stars: 60,
    description: "New! Up to $2 off your order.",
    emoji: "🥐",
    isNew: true,
  },
  {
    id: "3",
    stars: 100,
    description:
      "Brewed coffee or tea (hot or iced), bakery item, packaged snacks and more. Up to $6 value.",
    emoji: "🍵",
    isNew: false,
  },
  {
    id: "4",
    stars: 200,
    description:
      "Handcrafted drink (like a latte or cold brew) or hot breakfast, parfait, salad or sandwich.",
    emoji: "☕",
    isNew: false,
  },
  {
    id: "5",
    stars: 300,
    description: "Lunch sandwich, protein box or select packaged coffee.",
    emoji: "🥗",
    isNew: false,
  },
];
