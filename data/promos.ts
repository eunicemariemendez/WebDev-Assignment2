export type Promo = {
  id: string;
  title: string;
  body: string;
  button: string;
  colour: string;
  emoji: string;
};

export const PROMOS: Promo[] = [
  {
    id: "1",
    title: "Spooky season, spooky sip",
    body: "Our new Black Cat Frappuccino® Blended Beverage is frighteningly delicious. Chocolate cake flavour blended into our crème Frappuccino base—and of course, topped with chocolaty cat ears.",
    button: "Order now",
    colour: "#3B1F21",
    emoji: "🐈‍⬛",
  },
  {
    id: "2",
    title: "Fall flavours are back",
    body: "The Pumpkin Spice Latte is here with warm notes of cinnamon, nutmeg and clove.",
    button: "Order now",
    colour: "#C8742E",
    emoji: "🎃",
  },
  {
    id: "3",
    title: "Double Star Day",
    body: "Earn 2★ per $1 on every order this Thursday when you pay in the app.",
    button: "Order now",
    colour: "#1E3932",
    emoji: "✨",
  },
];
