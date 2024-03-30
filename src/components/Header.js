import './Header.css';

const Header = props =>{
    return (
        <>
            <div className="navbar">
                <div className="navigator">
                    <div>Home</div>
                    <div>Store</div>
                    <div>About</div>
                </div>
                <div className="cartArea">
                    <button className="cartBtn">Cart</button>
                    <span>0</span>
                </div>
            </div>
            <div className="companyName">
                <div>The Generics</div>
            </div>
        </>
    );
}
export default Header;