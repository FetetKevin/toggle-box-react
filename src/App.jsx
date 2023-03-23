import { useState } from "react";
import Data from "./api";
import Box from "./components/Box";

export default function App() {
    const [boxes, setBoxes] = useState(Data);

    const toggle = (id) => {
        setBoxes((state) => {
            return state.map((box) => {
                return box.id === id ? { ...box, on: !box.on } : box;
            });
        });
    };

    const myBoxes = boxes.map((el, key) => (
        <Box on={el.on} key={key} id={el.id} toggle={() => toggle(el.id)} />
    ));

    return <div className="container">{myBoxes}</div>;
}
