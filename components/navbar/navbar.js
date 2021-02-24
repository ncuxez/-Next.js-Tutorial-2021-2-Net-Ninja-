import Link from 'next/link';
import classes from './navbar.module.css';
import Image from 'next/image';

export default function Navbar () {

    return (
        <nav>
            <div className={`logo`}>
                <Image src={`/images/Next.png`} width={90} height={90} alt={`logo`} />
                <h2>Ninja App</h2>
            </div>
            <Link href={`/`}><a>Home</a></Link>
            <Link href={`/about`}><a>About</a></Link>
            <Link href={`/ninjas`}><a>Ninja App</a></Link>
        </nav>
    );

}
