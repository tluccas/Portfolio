import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";

type CardsBackgroundProps = {
  interactive: boolean;
};

export const CardsBackground = ({ interactive }: CardsBackgroundProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-xl bg-black">
      <BubbleBackground
        interactive={interactive}
        className="absolute bg-black inset-0 flex items-center justify-center rounded-xl"
        colors={{
          first: "0, 180, 216", 
          second: "0, 100, 125",
          third: "0, 60, 80",
          fourth: "0, 180, 216",
          fifth: "0, 40, 60",
          sixth: "0, 120, 150",
        }}
        transition={{ stiffness: 100, damping: 20 }}
      />
      <div className="absolute inset-0 bg-black/75 z-1 pointer-events-none" />
    </div>
  );
};
