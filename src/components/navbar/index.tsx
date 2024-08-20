import Image from "next/image";
import styles from "./navbar.module.css";
import { menuList } from "@/contants";
import { AppointmentButton } from "../appointmentButton";

export const Navbar = () => {

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
            <AppointmentButton />
          </div>
        </nav>
      </div>
    </>
  );
};
