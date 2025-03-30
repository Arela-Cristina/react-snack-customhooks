import useSwitch from "../CustomHooks/useSwitch"

function Snack1() {

    const [isOn, toggle] = useSwitch();

    return (
        <div>
            <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
            <button onClick={toggle}>Cambia Stato</button>
        </div>
    );
}

export default Snack1;