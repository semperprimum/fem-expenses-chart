import "./App.scss";
import Balance from "./components/Balance.jsx";
import Spending from "./components/Spending.jsx";
import {useEffect, useState} from "react";
import db from "./db/data.json"
import {getTotal} from "./utils/functions.js";

const App = () => {
    const [data, setData] = useState([]);
    const [total, setTotal] = useState(0);

    const getData = async () => {
        await setData(db);
    }

    useEffect( () => {
        getData();
        setTotal(getTotal(db));
        console.log(data)
    }, [])

    return (
            <main>
                <Balance/>

                <Spending data={data} total={total}/>
            </main>
    );
};

export default App;