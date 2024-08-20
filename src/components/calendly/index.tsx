"use client";

import { CalandlyProps } from "@/globalTypes"
import { useRef } from "react"
import { PopupModal } from "react-calendly"

export const Calendly = ({ isOpen, handleClick }: CalandlyProps) => {
    const root = useRef(document.getElementById('root'))
    return (
        <>
            <PopupModal
                url={process.env.NEXT_PUBLIC_CALENDLY_URL as string}
                onModalClose={handleClick}
                open={isOpen}
                rootElement={root as unknown as HTMLElement}
            />
        </>
    )
}