import useCustomPointer from "../CustomHooks/useCustomPointer";

function Snack3() {
    const customCursor = useCustomPointer("🔥");

    const cursor = useCustomPointer(customCursor);

    return (
        <div>
            <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
            {cursor}
        </div>
    );
}

export default Snack3;