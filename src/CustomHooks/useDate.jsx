// 🏆 Snack 2: useDate() – Ottenere la Data Attuale
// Creare un custom hook che restituisca la data e l'ora correnti, aggiornandosi automaticamente ogni secondo.

// Cosa deve fare?

// Restituisce un oggetto con data e ora formattata.
// Si aggiorna automaticamente ogni secondo.
// Usa useEffect() per gestire l’aggiornamento.

import { useState, useEffect } from "react"


export default function useDate() {

    // const date = new Date()

    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        const idInterval = setInterval(() => setCurrentDate(new Date()), 1000)
        return () => clearInterval(idInterval);
    }, [])


    return currentDate
}