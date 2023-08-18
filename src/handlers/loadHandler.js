import getAlbums from '../../apis/getAlbums.js';
import createAlbum from '../components/createAlbum.js';
import dom from '../dom.js';

const loadHandler = async () => {
    const albums = await getAlbums();

    albums.forEach((albumData) => {
        const albumDom = createAlbum(albumData);
        dom.root.append(albumDom);
    });
};

export default loadHandler;
