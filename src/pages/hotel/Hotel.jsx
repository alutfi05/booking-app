import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/mailList';

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [isOpenSlide, setIsOpenSlide] = useState(false);

    const photos = [
        {
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/285359467.jpg?k=53db41df54b9100f9bc0c79391612ef65af304c94b13b57a8cf408bd6d70b1a8&o=&hp=1',
        },
        {
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/416289939.jpg?k=7a2dc19fd240995b065c13d721e00a55498332e275d8ec05007c97b0d543f289&o=&hp=1',
        },
        {
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/416289682.jpg?k=06a4c9089680dd614ad59f9dd6661736c04220734466e44e13e9ade11df0944d&o=&hp=1',
        },
        {
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/294963086.jpg?k=4567fd9fda01fde503a022b9b5b6b789246ffcda6e686bbd9eb74332e7291ab5&o=&hp=1',
        },
        {
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/464856963.jpg?k=f5346952f8d72b91a9c20be52207867489eea18e6abc03569601fa6b3d4afba3&o=&hp=1',
        },
        {
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/421515599.jpg?k=93c6ed2aac8833d3236730f7d9b432b7360eb03703436b320a1cf59c7b974116&o=&hp=1',
        },
    ];

    const handleOpen = (index) => {
        setSlideNumber(index);
        setIsOpenSlide(true);
    };

    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === 'l') {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="hotelContainer">
                {isOpenSlide && (
                    <div className="slider">
                        <FontAwesomeIcon
                            icon={faCircleXmark}
                            className="close"
                            onClick={() => setIsOpenSlide(false)}
                        />
                        <FontAwesomeIcon
                            icon={faCircleArrowLeft}
                            className="arrow"
                            onClick={() => handleMove('l')}
                        />
                        <div className="sliderWrapper">
                            <img
                                src={photos[slideNumber].src}
                                alt="images"
                                className="sliderImg"
                            />
                        </div>
                        <FontAwesomeIcon
                            icon={faCircleArrowRight}
                            className="arrow"
                            onClick={() => handleMove('r')}
                        />
                    </div>
                )}
                <div className="hotelWrapper">
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Kuta, Bali</span>
                    </div>
                    <span className="hotelDistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelPriceHighlight">
                        Book a stay over $114 at this property and get a free
                        airport taxi
                    </span>
                    <div className="hotelImages">
                        {photos.map((photo, index) => {
                            return (
                                <div className="hotelImageWrapper" key={index}>
                                    <img
                                        onClick={() => handleOpen(index)}
                                        src={photo.src}
                                        alt="images"
                                        className="hotelImage"
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">
                                Experience World-class Service at Holiday Inn
                                Resort Baruna Bali,
                            </h1>
                            <p className="hotelDesc">
                                Featuring tastefully-furnished Balinese-style
                                rooms set in landscaped grounds, Holiday Inn
                                Baruna features a large outdoor pool located
                                steps from the beachfront. 5-star facilities
                                include a gym, beachfront restaurant and spa.
                                Free WiFi can be accessed throughout the
                                property. Located in peaceful Tuban, Holiday Inn
                                Resort Baruna Bali is a 10-minute drive from
                                Denpasar International Airport and offers free
                                parking. A leisurely 15-minute stroll takes
                                guests to Kuta’s lively center. Featuring
                                private balconies and Balinese crafts, Baruna
                                Holiday Inn’s air-conditioned rooms offer
                                32-inch flat-screen TVs and pleasant light wood
                                furnishings. They have a fridge, safe and DVD
                                player. For leisure, maintain regular workouts
                                at the tennis courts or enjoy soothing massages
                                at the outdoor pavilion. Friendly staff can
                                assist with childcare, travel and business
                                needs. Located by the pool, Palms restaurant
                                offers hearty international, Asian and
                                Indonesian cuisine. Enjoy an intimate dining
                                experience at ENVY, with its comfortable lounge
                                areas and stunning ocean views.
                            </p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 9-night stay!</h1>
                            <span>
                                Located in the real heart of Bali, this property
                                has an excellent location score of 8.4!
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    );
};
export default Hotel;
