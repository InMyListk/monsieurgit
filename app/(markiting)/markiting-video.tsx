import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const MarkitingVideo = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "lg:w-[650px] lg:h-[350px] md:w-[550px] md:h-[300px] w-[90%] h-[300px] flex justify-center items-center",
        className
      )}
    >
      <div className="w-full h-full bg-purple-500 rounded-xl"></div>
    </div>
  );
};
