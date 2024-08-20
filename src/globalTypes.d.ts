export interface priceListType {
    name: string;
    price: string;
}

export interface MapProps {
    lng: number;
    lat: number;
    zoom: number;
  }

export interface CalandlyProps {
    isOpen: boolean; 
    handleClick: () => void;
}