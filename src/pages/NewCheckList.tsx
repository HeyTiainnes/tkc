import React from "react";

const CheckList = () => {
    const checkListItems = ["Item 1", "Item 2", "Item 3"];

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>Lorem250</p>
            <br />
            {checkListItems.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

export default CheckList;
