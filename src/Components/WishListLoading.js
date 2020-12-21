import React from "react";

function WishListLoading (Component){
    return function WishListLoading({isLoading, ...props}){
        if (!isLoading) return <Component {...props}/>;
        return (
            <p className = 'wish-list-text'>Hold on, fetching data may take some time!</p>
        )
    }
}

export default WishListLoading;