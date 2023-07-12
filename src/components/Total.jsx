const Total = ({total}) => {
    return (
        <section className="total">
            <h3 className="total__heading">Total this month
                <span>${total + 250.39}</span></h3> {/* Added a number from the rest of the month */}
            <p className="total__diff"><span>+2.4%</span>
                from last month</p>
        </section>
    );
};

export default Total;