import {percentageOf} from "../utils/functions.js";

const SpendingItem = ({item, greatest, selected, handleClick}) => {
    return (
        <li role="listitem" className={"spending-grid__item" + (item?.amount === greatest ? " biggest" : "") + (item?.day === selected ? " active" : "")}>
            <div onClick={() => handleClick(item?.day)} style={{height: percentageOf(item.amount, greatest)}}><p>${item?.amount}</p></div>

            <p>{item.day}</p>
        </li>
    );
};

export default SpendingItem;