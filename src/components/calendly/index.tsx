import { CalandlyProps } from "@/globalTypes"
import { PopupModal } from "react-calendly"

export const Calendly = ({ isOpen, handleClick }: CalandlyProps) => {
    return (
        <>
            <PopupModal
                url={process.env.NEXT_PUBLIC_CALENDLY_URL as string}
                onModalClose={handleClick}
                open={isOpen}
                rootElement={document.getElementById('root') as HTMLElement}
            />
        </>
    )
}