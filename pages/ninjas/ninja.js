import Link from 'next/link';

import classes from './ninjas.module.css';

export default function Ninja ({ ninja }) {

    return (
        <Link href={`/ninjas/${ninja.id}`}>
            <a className={classes.single}>{ ninja.name }</a>
        </Link>
    );

};
