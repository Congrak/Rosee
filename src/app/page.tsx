import { Welcome } from "@/blocks/welcome";
import { Service } from "@/blocks/service";
import { Carousel } from "@/components/carousel";
import { Contact } from "@/blocks/contact";

export default function Home() {
  return (
    <>
      <Welcome />
      <Service />
      <Carousel />
      <Contact />
    </>
  );
}
