import React, { useState } from 'react';

export const VibrationCatSelection = ({ catSelector }) => {
    const [currentCat, setCurrentCat] = useState(catSelector)

    const changeCat = (newCat) => {
        setCurrentCat(newCat)
    }

    return (
        <form>
            <select
                onChange={(event) => changeCat(event.target.value)}
                value={currentCat}
            >
                <option label="S" value="Standard Vibration: 1 Hr/Axis sine or random at perf. Level">S</option>
                    <option label="R" value="Robust Vibration: Sine of 3 Hrs/Axis less 30 min/dwell (max 4 dwells) or Random at perf. Level (minimum of 10 minutes) and 3 Hrs Endurance level (repeat in all 3 axes)">R</option>
                    <option label="R(H)" value="Robust Vibration:  Sine-On-Random; 2 Hrs at Endurance levels plus dwells (max of 4 dwells, max of 3 hours total test time) and performance test (minimum of 10 minutes) at beginning and end of test period (repeat in all 3 axes). Test repeated 3 times for Category U.Robust Vibration - Sine-On-Random; 2 Hrs at Endurance levels plus dwells (max of 4 dwells, max of 3 hours total test time) and performance test (minimum of 10 minutes) at beginning and end of test period (repeat in all 3 axes).">R</option>
                    <option label="U" value="Robust Vibration: Sine-On-Random; 2 Hrs at Endurance levels plus dwells (max of 4 dwells, max of 3 hours total test time) and performance test (minimum of 10 minutes) at beginning and end of test period (repeat in all 3 axes). Test repeated 3 times for Category U.">U</option>
                    <option label="U2" value="Robust Vibration: Random; performance test at beginning and end of test period (minimum of 10 minutes), 3 hrs at Endurance level (repeat in all 3 axes)">U2</option>
                    <option label="H" value="High Level - Short Duration Vibration: High g / low f sine sweep each axis">H</option>
                    <option label="Z" value="High Level - Short Duration Vibration: High g / low f sine sweep each axis">Z</option>
                    <option label="X" value="">X</option>
            </select>
        </form>
    )
}