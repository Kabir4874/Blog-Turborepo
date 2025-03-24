"use client";
import { cn } from "@/lib/utils";
import { PropsWithChildren, useEffect, useState } from "react";
type Props = PropsWithChildren;
const DesktopNavbar = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isScrollDown = scrollPosition > 10;
  return (
    <nav
      className={cn("hidden fixed w-full z-50 text-white top-0 md:block", {
        "bg-white text-gray-70 shadow-md": isScrollDown,
      })}
    >
      <div className="flex items-center px-4 py-4 container mx-auto">
        {props.children}
      </div>
      <hr className="border-b border-gray-100 opacity-25" />
    </nav>
  );
};

export default DesktopNavbar;
