/**
 * @jest-environment jsdom
 */

import createAlbum from './createAlbum.js';

describe('check createAlbum', () => {
    const album = createAlbum({ id: 1, title: 'Hello Test' });
    const child = album.children[0];

    test('album nodeName -> DIV', () => {
        expect(album.nodeName).toEqual('DIV');
    });

    test('album id -> 1', () => {
        expect(album.id).toEqual('1');
    });

    test('album has one child ', () => {
        expect(album.childElementCount).toEqual(1);
    });

    test('album has one child ', () => {
        expect(child.nodeName).toEqual('H2');
    });

    test('album has one child ', () => {
        expect(child.innerText).toEqual('Hello Test');
    });
});
