"use client";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MainHeader() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={`/`} className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          Next Level Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href={`/meals`}
                className={
                  path.startsWith("/meals") ? classes.active : undefined
                }
              >
                Browse Meals
              </Link>
            </li>
            <li>
              <Link
                href={`/community`}
                className={
                  path.startsWith("/community") ? classes.active : undefined
                }
              >
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
