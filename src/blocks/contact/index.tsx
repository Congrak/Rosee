import { LATITUDE, LONGITUDE, ZOOM } from "@/contants";
import { Map } from "../../components/map";
import styles from "./contact.module.css";
export const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>VISITANOS</h1>
      <div className={styles.box}>
        <div className={styles.boxRight}>
          <Map lng={LONGITUDE} lat={LATITUDE} zoom={ZOOM} />
        </div>
        <div className={styles.boxLeft}>
          <div className={styles.text}>
            <h1>
              <span style={{ color: "#bb5e3b" }}>Av pueyrredón 885</span>,
              Buenos Aires, Argentina 1032
            </h1>
            <h1>
              Lunes a Viernes{" "}
              <span style={{ color: "#bb5e3b" }}>10:00hs - 19:00hs</span>{" "}
              Sábados{" "}
              <span style={{ color: "#bb5e3b" }}>10:00hs - 16:00hs</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
