"use client";

import { CalandlyProps } from "@/globalTypes"
import { useEffect, useState } from "react"
import { PopupModal } from "react-calendly"

export const Calendly = ({ isOpen, handleClick }: CalandlyProps) => {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            const root = document.getElementById('root')
            setRootElement(root)
        }
    }, [])

    return (
        <>
            <PopupModal
                url={process.env.NEXT_PUBLIC_CALENDLY_URL as string}
                onModalClose={handleClick}
                open={isOpen}
                rootElement={rootElement as HTMLElement}
            />
        </>
    )
}