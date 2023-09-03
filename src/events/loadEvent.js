import loadHandler from '../handlers/loadHandler.js';

const loadEvent = () => {
    document.addEventListener('DOMContentLoaded', loadHandler);
};

export default loadEvent;

