import { Welcome } from "@/blocks/welcome";
import { Service } from "@/blocks/service";
import { Contact } from "@/blocks/contact";
import styles from './page.module.css'
import { Galerie } from "@/blocks/galerie";

export default function Home() {
  return (
    <main className={styles.container}>
      <Welcome />
      <Service />
      <Galerie />
      <Contact />
    </main>
  );
}
