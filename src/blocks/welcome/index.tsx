import Image from "next/image";
import styles from "./welcome.module.css";
import { Button } from "@mui/material";

export const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <Image
            src="/welcome-girl-1.webp"
            alt="girl"
            width={450}
            height={450}
            layout="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h1>¡Bienvenida a Rosee!</h1>
          <p>
            Realzamos tu belleza con nuestros servicios especializados en
            pestañas y más. Somos lashistas apasionadas por crear miradas
            impactantes y únicas.
          </p>
          <Button variant="contained" size="small" sx={{ background: "linear-gradient(to right, #653429, #361914)" }} >
            Encuentranos
          </Button>
        </div>
      </div>
    </div>
  );
};
