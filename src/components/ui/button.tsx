import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-b from-[#D2B48C] to-[#8B6A4B] text-[#4B3B2F] hover:from-[#C19A75] hover:to-[#7A573E] focus-visible:ring-[#8B6A4B] focus-visible:ring-offset-[#F5F5DC]",
        destructive:
          "bg-gradient-to-b from-[#8B6A4B] to-[#7A3B3B] text-[#F5F5DC] hover:from-[#7A3B3B] hover:to-[#602A2A] focus-visible:ring-[#7A3B3B] focus-visible:ring-offset-[#F5F5DC]",
        outline:
          "border border-[#D2B48C] bg-[#F5F5DC] text-[#4B3B2F] shadow-sm hover:bg-[#EEDAB0] hover:text-[#3A2B23] focus-visible:ring-[#D2B48C] focus-visible:ring-offset-[#F5F5DC]",
        secondary:
          "bg-[#EEDAB0] text-[#4B3B2F] shadow-sm hover:bg-[#D2B48C] hover:text-[#3A2B23] focus-visible:ring-[#D2B48C] focus-visible:ring-offset-[#F5F5DC]",
        ghost:
          "hover:bg-[#F5F5DC] hover:text-[#4B3B2F] focus-visible:ring-[#D2B48C] focus-visible:ring-offset-[#F5F5DC]",
        link: "text-[#8B6A4B] underline-offset-4 hover:underline focus-visible:ring-[#8B6A4B]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3",
        xs: "h-7 rounded-md px-2 text-xs",
        lg: "h-12 rounded-lg px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }