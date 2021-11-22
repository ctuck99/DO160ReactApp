import React from "react";

export default function HumidityCatDropDown() {
    const [items] = React.useState([
        { label: "A", value: "A"},
        { label: "B", value: "B" },
        { label: "C", value: "C" },
        { label: "X", value: "No Test"}
    ]);
    return (
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
    );
}