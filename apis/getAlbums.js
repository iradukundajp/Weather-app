const getAlbums = async () => {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(
                `Failed to fetch albums with status : ${res.status}`,
            );
        }

        const albums = await res.json();
        return albums;
    } catch (err) {
        console.error(err);
    }
};

export default getAlbums;
