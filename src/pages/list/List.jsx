import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import './list.css';
import { DateRange } from 'react-date-range';

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [isOpenDate, setIsOpenDate] = useState(false);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="listSearchTitle">Search</h1>
                        <div className="listSearchItem">
                            <label htmlFor="destination">Destination</label>
                            <input
                                placeholder={destination}
                                type="text"
                                name="destination"
                                id="destination"
                            />
                        </div>
                        <div className="listSearchItem">
                            <label htmlFor="check-in">Check-in Date</label>
                            <span
                                onClick={() => setIsOpenDate(!isOpenDate)}
                            >{`${format(
                                date[0].startDate,
                                'dd/MM/yyyy'
                            )} to ${format(
                                date[0].endDate,
                                'dd/MM/yyyy'
                            )} `}</span>
                            {isOpenDate && (
                                <DateRange
                                    onChange={(item) =>
                                        setDate([item.selection])
                                    }
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="listSearchItem">
                            <label htmlFor="options">Options</label>
                            <div className="listSearchOptions">
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        className="listSearchOptionInput"
                                    />
                                </div>
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input
                                        type="number"
                                        className="listSearchOptionInput"
                                    />
                                </div>
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Adult
                                    </span>
                                    <input
                                        type="number"
                                        className="listSearchOptionInput"
                                        placeholder={options.adult}
                                        min={1}
                                    />
                                </div>
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Children
                                    </span>
                                    <input
                                        type="number"
                                        className="listSearchOptionInput"
                                        placeholder={options.children}
                                        min={0}
                                    />
                                </div>
                                <div className="listSearchOptionItem">
                                    <span className="listSearchOptionText">
                                        Room
                                    </span>
                                    <input
                                        type="number"
                                        className="listSearchOptionInput"
                                        placeholder={options.room}
                                        min={1}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="listResult"></div>
                </div>
            </div>
        </div>
    );
};
export default List;
