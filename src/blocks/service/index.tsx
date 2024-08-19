import Image from "next/image";
import styles from "./service.module.css";
import { priceList } from "@/contants";
// import { CheckMarkCircleIcon } from "icondex";

export const Service = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.h1}>
          Descubre Nuestros Servicios Exclusivos y Tarifa Especializada
        </h1>
        <ul className={styles.ul}>
          {priceList.map((item) => (
            <li key={item.name} className={styles.li}>
              <p className={styles.priceText}>
{/*               <CheckMarkCircleIcon color="#bb5e3b" height={25} width={25} /> */}
                {item.name}
              </p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Image
          src="/lifting.webp"
          alt="lifting"
          width={450}
          height={500}
          layout="cover"
          className={styles.image}
        />
      </div>
    </div>
  );
};
