import './searchItem.css';

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf2.bstatic.com/xdata/images/hotel/square200/380282576.webp?k=bbb71674dbcd5b4049465435b5e9c2ce2a97b6f09ebefcc3326a5e9deca199a5&o="
                alt="Holiday Inn Express Baruna"
                className="searchItemImage"
            />
            <div className="searchItemDesc">
                <h1 className="searchItemTitle">Holiday Inn Express Baruna</h1>
                <span className="searchItemDistance">1.8km from center</span>
                <span className="searchItemTaxiOp">Free airport taxi</span>
                <span className="searchItemSubtitle">
                    Standard Queen Room with Free Airport
                </span>
                <span className="searchItemFeatures">Breakfast included</span>
                <span className="searchItemCancelOp">Free Cancellation</span>
                <span className="searchItemCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="searchItemDetails">
                <div className="searchItemRating">
                    <span>Excellent</span>
                    <button>8.4</button>
                </div>
                <div className="searchItemDetailTexts">
                    <span className="searchItemPrice">$73</span>
                    <span className="searchItemTaxOp">
                        Includes taxes and fees
                    </span>
                    <button className="searchItemCheckButton">
                        See availability
                    </button>
                </div>
            </div>
        </div>
    );
};
export default SearchItem;
