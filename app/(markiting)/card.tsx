import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

export const MarkitingCard = ({ children, title, description }: Props) => {
  return (
    <Card className="flex flex-col items-center p-10 w-[300px] shadow-md hover:border-purple-400 duration-150">
      <div className="w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full">
        {children}
      </div>
      <p className="text-lg font-bold mt-3">{title}</p>
      <p className="font-bold text-black/50 mt-2">{description}</p>
    </Card>
  );
};
