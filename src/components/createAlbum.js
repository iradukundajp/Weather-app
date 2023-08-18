const createAlbum = (albumData) => {
    // container
    const container = document.createElement('div');
    container.id = albumData.id;
    container.className = 'card';

    // title
    const title = document.createElement('h2');
    title.innerText = albumData.title;

    container.append(title);

    return container;
};

export default createAlbum;
