import { Welcome } from "@/blocks/welcome";
import { Service } from "@/blocks/service";
import { Carousel } from "@/components/carousel";
import { Contact } from "@/blocks/contact";
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.container}>
      <Welcome />
      <Service />
      <Carousel />
      <Contact />
    </main>
  );
}
