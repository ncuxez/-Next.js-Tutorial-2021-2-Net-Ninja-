import classes from './ninjas.module.css';

const usersUrl = `https://jsonplaceholder.typicode.com/users`;

export const getStaticPaths = async () => {

    const response = await fetch(`${usersUrl}`);
    const data = await response.json();

    const paths = data.map(user => ({ params: { id: user['id'].toString() } }));

    return {
        paths,
        fallback: false
    };

};

// runs at build time
export const getStaticProps = async (context) => {

    const id = context.params.id;
    const response = await fetch(`${usersUrl}/${id}`);
    const data = await response.json();

    return {
        props: { ninja: data },
    };


};

export default function NinjaDetails ({ ninja }) {

    const { address, name, website, email } = ninja;

    return (
        <div>
            <h1>Details for ninja { name }</h1>
            <p>{ email }</p>
            <p>{ website }</p>
            <p>{ address.city }</p>
        </div>
    );

}
