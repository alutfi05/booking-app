import './featured.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/city/600x600/691567.jpg?k=76f4bbc983d7d45035f8806fa54c09e6f69a09ba9b066494db48a592aa335849&o="
                    alt="Gili Trawangan"
                    className="featuredImage"
                />
                <div className="featuredTitles">
                    <h1>Gili Trawangan</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/city/600x600/688062.jpg?k=1262974dc7e10bba90ada2c6630958862b2a7fdd480f4309032b8f9df1c2bb81&o="
                    alt="Kuta"
                    className="featuredImage"
                />
                <div className="featuredTitles">
                    <h1>Kuta</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/city/600x600/691530.jpg?k=d7c3bf00b1194d220f2bb995f4888d6062e93d3b366b6df8633484d2eac7df03&o="
                    alt="Canggu"
                    className="featuredImage"
                />
                <div className="featuredTitles">
                    <h1>Canggu</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
        </div>
    );
};
export default Featured;
