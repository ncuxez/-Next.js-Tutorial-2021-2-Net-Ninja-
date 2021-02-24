import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import classes from "../styles/Home.module.css";

export default function NotFound () {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push(`/`), 3000);
    }, [])

    return (
        <div className={classes.title}>
            <h3>There's nothing here</h3>
            <Link href={`/`}><a className={classes.btn}>Home</a></Link>
        </div>
    );

}
