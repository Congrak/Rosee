import { priceListType } from "./globalTypes.type";

export const menuList: string[] = [
  "Inicio",
  "Servicios",
  "Galeria",
  "Contacto",
  "Sobre nosotros",
];

export const priceList: priceListType[] = [
  {
    name: "Depilación con hilo",
    price: "ARS 5.000",
  },

  {
    name: "Brow Lamination",
    price: "ARS 5.000",
  },
  {
    name: "Lifting de pestanas",
    price: "ARS 5.000",
  },

  {
    name: "Manicura y pedicura",
    price: "ARS 5.000",
  },
];

export const galerieList: string[] = [
  '/galerie/eye1.webp',
  '/galerie/rose1.webp',
  '/galerie/eye5.webp',
  '/galerie/rose2.webp',
  '/galerie/eye3.webp',
  '/galerie/rose3.webp',
  '/galerie/eye4.webp',
  '/galerie/rose4.webp',
  '/galerie/eye2.webp',
  '/galerie/rose5.webp',
]

export const LATITUDE = -34.600172172947225 as number;
export const LONGITUDE = -58.4040930470893265 as number;
export const ZOOM = 15 as number