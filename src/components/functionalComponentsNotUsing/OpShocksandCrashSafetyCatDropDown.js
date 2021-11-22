import React from "react";

export function OpShocksandCrashSafetyCatDropDown() {
    const [items] = React.useState([
        { label: "A", value: "A"},
        { label: "B", value: "B"},
        { label: "D", value: "D"},
        { label: "E", value: "E"},
        { label: "X", value: "No Test"},
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