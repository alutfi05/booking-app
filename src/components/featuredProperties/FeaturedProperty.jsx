import './featuredProperties.css';

const FeaturedProperty = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/hotel/square200/380282576.webp?k=bbb71674dbcd5b4049465435b5e9c2ce2a97b6f09ebefcc3326a5e9deca199a5&o="
                    alt="Holiday Inn Express Baruna"
                    className="fpImage"
                />
                <span className="fpName">Holiday Inn Express Baruna</span>
                <span className="fpCity">Kuta</span>
                <span className="fpPrice">Starting from $73</span>
                <div className="fpRating">
                    <button>8.4</button>
                    <span>Very Good</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/hotel/square200/116776850.webp?k=068c3074e718ed285e1e34fcde2f848b306100d37d4963895de79987f01d9617&o="
                    alt="Grandmas Plus Hotel 
"
                    className="fpImage"
                />
                <span className="fpName">Grandmas Plus Hotel</span>
                <span className="fpCity">Kuta</span>
                <span className="fpPrice">Starting from $35</span>
                <div className="fpRating">
                    <button>8.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/hotel/square200/86212566.webp?k=765dcdb539fa84f4815c6229eeb5465d524d66086a09176c5b5ef4d93bb021fa&o="
                    alt="The Diana SuiteOpens "
                    className="fpImage"
                />
                <span className="fpName">The Diana SuiteOpens</span>
                <span className="fpCity">Kuta</span>
                <span className="fpPrice">Starting from $51</span>
                <div className="fpRating">
                    <button>8.1</button>
                    <span>Very Good</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf2.bstatic.com/xdata/images/hotel/square200/380084852.webp?k=6bf82b2b82889f4f11696e27d2c7ddc1c478a8bf6a75f6dde654a1beb47e9c86&o="
                    alt="Holiday Inn Resort Baruna Bali"
                    className="fpImage"
                />
                <span className="fpName">Holiday Inn Resort Baruna</span>
                <span className="fpCity">Kuta</span>
                <span className="fpPrice">Starting from $145</span>
                <div className="fpRating">
                    <button>8.4</button>
                    <span>Very Good</span>
                </div>
            </div>
        </div>
    );
};
export default FeaturedProperty;
