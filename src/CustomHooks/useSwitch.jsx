import { useState } from "react";

export default function useSwitch() {

    const [isOn, setIsOn] = useState(false)

    const toogle = () => {
        setIsOn(prev => !prev)
    }

    return [isOn, toogle]
}