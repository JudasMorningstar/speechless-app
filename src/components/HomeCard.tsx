import React from "react";
import { Icons } from "@/components/icons";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface HomeCardProps {
  className?: string;
  icon?: keyof typeof Icons;
  title?: string;
  description?: string;
  handleClick?: () => void;
}
const HomeCard = ({
  className,
  icon,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  const Icon = icon ? Icons[icon] : null;
  return (
    <>
      <Card
        className={cn(
          "flex flex-col  justify-between w-full rounded-2xl min-h-[260px] cursor-pointer",
          className
        )}
        onClick={handleClick}
      >
        <CardHeader>
          <div className="glassmorphism rounded-2xl size-12 flex-center">
            {Icon && <Icon aria-hidden="true" />}
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-lg font-normal">{description}</p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default HomeCard;
