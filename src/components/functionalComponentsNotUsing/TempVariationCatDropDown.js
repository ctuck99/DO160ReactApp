import React from "react";

export default function TempVariationCatDropDown() {
    const [items] = React.useState([
        { label: "A", value: "10"},
        { label: "B", value: "B"},
        { label: "C", value: "C"},
        { label: "S1", value: "S1"},
        { label: "S2", value: "S2"},
        { label: "X", value: "No Test"}
    
    ]);

    return (
        <>
        <select>
            {items.map(item => (
                <option
                    key={item.value}
                    value={item.value}
                    >
                        {item.label}
                </option>
            ))}
        </select>
        <h2>Temperature Variation Rate:</h2>
        <p>{"figure out how to return the value from select."}</p>
        </>
    )
}