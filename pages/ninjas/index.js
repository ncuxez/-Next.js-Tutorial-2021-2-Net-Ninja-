import Ninja from "./ninja";

const usersUrl = `https://jsonplaceholder.typicode.com/users`;

// runs at build time
export const getStaticProps = async () => {

    const response = await fetch(usersUrl);
    const data = await response.json();

    return {
        props: { ninjas: data },
    };

};

export default function Ninjas ({ ninjas }) {

    return (
        <>
            <h3>Cum</h3>
            {
                ninjas?.length > 0 ? (
                    ninjas.map(ninja => (<Ninja key={ninja.id} ninja={ninja} />))
                ) :
                    (
                        <h2>No data</h2>
                    )
            }
        </>
    );

}
