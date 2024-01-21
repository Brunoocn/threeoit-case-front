"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { deleteCookie, getCookie } from "cookies-next";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useEffect, useState } from "react";

type IUser = {
  name: string;
};

export default function PageHeader() {
  const router = useRouter();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    setUser(JSON.parse(getCookie("USER") ?? "{}"));
  }, []);

  const Logout = () => {
    deleteCookie("TOKEN");
    deleteCookie("USER");
    router.push("/auth/signin");
  };

  return (
    <header className="flex h-[80px] items-center justify-between bg-white px-[100px] py-[20px]">
      <div>
        <Link href="/">
          <Image
            src="/assets/logo-threeo.png"
            alt="logo"
            width={127}
            height={40}
            priority
          />
        </Link>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-row divide-x-[1px]">
          <div className="flex flex-row items-center px-[24px]">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="group flex flex-row hover:bg-primary-foreground">
                  <span className="mr-[10px] flex text-blue-500">
                    {user?.name}
                  </span>
                  <Image
                    src="/assets/arrow-icon.svg"
                    alt="arrow-icon"
                    width={16}
                    height={16}
                    priority
                    className="relative top-[1px] ml-1 transition duration-200 group-data-[state=open]:rotate-180"
                  />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem
                    className="text-red-100 focus:bg-red-100 focus:text-white"
                    onClick={Logout}
                  >
                    Sair
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </header>
  );
}
