import Link from 'next/link';
import classes from './layout.module.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function Layout ({ children }) {

    return (
        <div className={`content`}>
            <Navbar />
                { children }
            <Footer />
        </div>
    );

}
