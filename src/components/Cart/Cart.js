import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const total = cart.reduce( (total, plr) => total + plr.salary, 0);
    let total = 0;
    let playerName = [""];
    let numberOfPlayer = 0;
    let msg = "";
    let msg2 = "";
    for(let i = 0; i < cart.length; i++){
        if(numberOfPlayer >= 11){
            msg = "You can not select more than 11 players!!!";
        }
        else{
            const player = cart[i];
            if(playerName.includes(player.name)){
                msg2 = "Same player can not added twice!!!";
            }
            else{
                numberOfPlayer += 1;
                total = total + Number(player.salary);
                playerName = playerName + numberOfPlayer + (".") + (" ") + player.name + (" ");
            }
        }
    }
    return (
        <div>
            <h3>Selection Summary</h3>
            <p>Player Selected {numberOfPlayer}</p>
            <p>Total Price BDT{total}</p>
            <p>Player List: {playerName} <br /></p>
            <span>{msg}</span><br />
            <span>{msg2}</span>
        </div>
    );
};

export default Cart;