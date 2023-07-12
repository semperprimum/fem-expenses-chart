import Total from "./Total.jsx";
import SpendingList from "./SpendingList.jsx";

const Spending = ({total, data}) => {
    return (
        <section className="spending">
            <h2 className="spending__heading">Spending - Last 7 days</h2>
            <SpendingList data={data} />
            <Total total={total} />
        </section>
    );
};

export default Spending;