import React from "react";

export function LossOfCoolingCatDropDown() {
    const [items] = React.useState([
        { label: "V", value: "V "},
        { label: "W", value: "W" },
        { label: "P", value: "P"},
        { label: "Y", value: "Y"},
        { label: "Z", value: "Z"},
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
    )
}