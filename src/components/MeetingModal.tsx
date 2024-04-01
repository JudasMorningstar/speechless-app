"use client";

import React, { ReactNode } from "react";
import { Icons } from "./icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type MeetingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  icon?: keyof typeof Icons;
  buttonClassName?: string;
  buttonIcon?: keyof typeof Icons;
};
const MeetingModal = ({
  title,
  isOpen,
  onClose,
  children,
  className,
  icon,
  buttonClassName,
  buttonIcon,
  buttonText,
  handleClick,
  instantMeeting,
}: MeetingModalProps) => {
  const Icon = icon ? Icons[icon] : null;
  const buttonIconComponent = buttonIcon ? Icons[buttonIcon] : null;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger className={className}>{children}</DialogTrigger>
      <DialogContent className="w-full flex max-w-[520px] flex-col gap-6 border-none px-6 py-9">
        <div>
          {Icon && (
            <div className="flex justify-center">
              <Icon aria-hidden="true" />
            </div>
          )}
          <h1 className={cn("leading-[42px] text-3xl font-bold", className)}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-primary focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {/* {buttonIconComponent && <buttonIconComponent aria-hidden="true" />} */}
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
