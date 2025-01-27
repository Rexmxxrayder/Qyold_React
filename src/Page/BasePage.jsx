import axios from "axios";
import { useState, useEffect } from "react";

const BasePage = () => {
    const [items, setItems] = useState(null);
    const [isLoad, setLoading] = useState(false);

    const GetItems = () => {
        axios.get("http://127.0.0.1:8000/api")
            .then((res) => {
                console.log(res.data);
                setItems(res.data);
                setLoading(true);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(true);
            });
    };

    const DisplayItems = () => {
        if (items && items.length > 0) {
            return items.map((item, index) => (
                <div key={index}>
                    <h1 className="text-blue-900 text-9xl">{item.name}</h1>
                    <h1 className="text-blue-500 text-9xl">{item.ad}</h1>
                </div>
            ));
        } else {
            return <h1>Loading...</h1>;
        }
    };

    useEffect(() => {
        GetItems();
    }, []);

    return (
        <>
            {isLoad ? DisplayItems() : <h1>Loading...</h1>} 
        </>
    );
};

export default BasePage;
