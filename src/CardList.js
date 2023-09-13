import React from "react";
import Card from "./Card";
import { robots } from "./robots";

const CardList = () =>{
    const cardComponent = robots.map(user => {
        return(
        <Card 
        key={user} 
        id={user.id} 
        name={user.name} 
        email={user.email}
        />
        );
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;