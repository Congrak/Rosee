"use client";

import { Button } from "@mui/material"
import { useCallback, useState } from "react"
import { Calendly } from "../calendly"

export const AppointmentButton = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = useCallback(() => {
        setIsOpen(prev => !prev)
    }, [setIsOpen])
    return (
        <>
            <Button
                variant="contained"
                sx={{ background: "linear-gradient(to right, #c97346, #bb5e3b)" }}
                onClick={handleClick}
            >
                Agenda tu visita
            </Button>
            <Calendly isOpen={isOpen} handleClick={handleClick} />
        </>
    )
}