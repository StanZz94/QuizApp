import { useEffect, useState } from "react"

export default function QuestionTimer({ onTimeout, timeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        setTimeout(timeout, onTimeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    }, []);

    return <progress id='question-time' max={timeout} value={remainingTime} />
}