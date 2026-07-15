"use client";

import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SiteHeaderProps = {
  currentPage?: "home" | "who" | "services";
};

export function SiteHeader({ currentPage = "home" }: SiteHeaderProps) {
  const pathname = usePathname();
  const resolvedCurrentPage =
    pathname === "/services"
      ? "services"
      : pathname === "/who-am-i"
        ? "who"
        : currentPage;

  const whoClass =
    resolvedCurrentPage === "who"
      ? "hidden sm:flex text-sm items-center font-semibold text-primary"
      : "hidden sm:flex text-sm items-center font-medium hover:text-primary transition-colors";
  const servicesClass =
    resolvedCurrentPage === "services"
      ? "hidden sm:flex text-sm items-center font-semibold text-primary"
      : "hidden sm:flex text-sm items-center font-medium hover:text-primary transition-colors";

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-outline-variant bg-background/90 backdrop-blur sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2">
        <Code2 className="w-5 h-5 text-primary" />
        <span className="font-semibold tracking-tight text-lg">
          Penumbra Digital
        </span>
      </Link>
      <div className="flex gap-7">
        <Link href="/who-am-i" className={whoClass}>
          Who am I?
        </Link>
        <Link href="/services" className={servicesClass}>
          Services
        </Link>
        <Link
          href="/#contact"
          className="inline-flex text-sm items-center font-semibold text-surface bg-primary hover:bg-primary-fixed transition-colors px-4 py-2 rounded-sm"
        >
          Book a chat <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </nav>
  );
}
