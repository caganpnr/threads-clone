//declaring to use client so that this is indeed a client-rendered component
"use client";

import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          //which tab is active logic
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              ></Image>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />
              <p className="text-light-2">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}
export default LeftSidebar;
