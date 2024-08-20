"use client";

import Image from "next/image";
import styles from "./navbar.module.css";
import { Button } from "@mui/material";
import { menuList } from "@/contants";
import { useCallback, useState } from "react";
import { Calendly } from "../calendly";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [setIsOpen])

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.contactBar}>
          <div className={styles.contactInfo}>
            <div>email</div>
            <div>wasa</div>
          </div>
          <div className={styles.contactInfo}>
            <p>Siguenos</p>
            <div>instagram</div>
            <div>facebook</div>
            <div>tiktok</div>
          </div>
        </div>
        <nav className={styles.container}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={100}
              layout="cover"
            />
          </div>
          <div>
            <ul className={styles.ul}>
              {menuList.map((item) => (
                <li key={item} className={styles.li}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buttonContainer} id="root">
            <Button
              variant="contained"
              sx={{ background: "linear-gradient(to right, #c97346, #bb5e3b)" }}
              onClick={handleClick}
            >
              Agenda tu visita
            </Button>

          </div>
        </nav>
      </div>
      <Calendly isOpen={isOpen} handleClick={handleClick} />
    </>
  );
};
