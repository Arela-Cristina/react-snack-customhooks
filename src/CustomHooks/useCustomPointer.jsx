// 🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
// Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

// Cosa deve fare?

// Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
// Posiziona il componente al posto del puntatore del mouse.
// Il componente segue i movimenti del mouse.
// Esempio di utilizzo:
import { useState, useEffect } from "react";

export default function useCustomPointer(customCursor) {

    const [customPointer, setCustomPointer] = useState({ x: 0, y: 0 });
    let cursorSize = 30


    useEffect(() => {

        const updateCustomPointer = (e) => {
            setCustomPointer({
                x: e.clientX - cursorSize / 2,
                y: e.clientY - cursorSize / 2,
            });
        };


        window.addEventListener("mousemove", updateCustomPointer);


        return () => {
            window.removeEventListener("mousemove", updateCustomPointer);
        };
    }, []);

    return (
        <div
            style={{
                position: "absolute",
                top: `${customPointer.y}px`,
                left: `${customPointer.x}px`,
                pointerEvents: "none",
                zIndex: 9999,
                width: `${cursorSize}px`,
                height: `${cursorSize}px`,
            }}
        >
        { customCursor }
        </div>
    )

}
