import { useState, useEffect } from "react";

const Form1 = () => {
    const [temp, setTemp] = useState(() => {
        // getting stored value
        const saved = window.localStorage.getItem("temp");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        // storing input name
        window.localStorage.setItem("temp", JSON.stringify(temp));
    }, [temp]);

    return (
        <>
        <div>
            <p>Temperature: {temp}</p>
        </div>
        <form>
            <input  
                type="text"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                placeholder="Temp in Celsius"
                aria-label="temp"
            />
            <input type="submit" value="Submit"></input>
        </form>
        </>
    );
}

export default Form1;