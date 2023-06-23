import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Explore Indonesia</h1>
                <p className="homeDesc">
                    These popular destinations have a lot to offer
                </p>
            </div>
        </div>
    );
};
export default Home;
