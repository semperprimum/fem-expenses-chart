import SpendingItem from "./SpendingItem.jsx";
import {getGreatestNumber} from "../utils/functions.js";
import {useState} from "react";

const SpendingList = ({data}) => {
    let greatestNumber = getGreatestNumber(data);
    const [selected, setSelected] = useState(null);

    const handleClick = (day) => {
        if (day === selected) {
            setSelected(null)
            return
        }
        setSelected(day)
    }

    return (
        <ul className="spending-grid" role="list">
            {data?.map(item =>
                <SpendingItem
                    greatest={greatestNumber}
                    key={item?.day}
                    selected={selected}
                    handleClick={handleClick}
                    item={item}
                />
            )}
        </ul>
    );
};

export default SpendingList;