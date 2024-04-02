import './ListItem.css';

const ListItems = props =>{
    return (
        <div className="main">
            <div className="head">Album 1</div>
            <div className="pic">
                <div className='picFrame'></div>
            </div>
            <div className="priceAndCartbtn">
                <div className="price">$12.99</div>
                <button className="cartbtn">Add To Cart</button>
            </div>
        </div>
    );
};
export default ListItems;