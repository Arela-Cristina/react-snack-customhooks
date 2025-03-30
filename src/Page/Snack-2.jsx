import useDate from "../CustomHooks/useDate";

function Snack2() {
    const currentDate = useDate();

    return (
        <div>
            <h1>Data e ora attuali:</h1>
            <p>{currentDate.toLocaleString()}</p>
        </div>
    );
}

export default Snack2;