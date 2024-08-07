import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"

const font = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900',]
})

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <p className={cn("font-semibold text-2xl", font.className)}
      >
        SoftTrack
      </p>
    </div>
  )
}