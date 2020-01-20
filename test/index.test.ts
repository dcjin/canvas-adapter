import {
    getAdapter,
    configure
} from '../src';

import WeChatCanvasAdapter from './WeChatCanvasAdapter';
import BrowserCanvasAdapter from './BrowserCanvasAdapter';
import WrongCanvasAdapter from './WrongCanvasAdapter';

const browseCanvasAdapter = new BrowserCanvasAdapter();
const weChatCanvasAdapter = new WeChatCanvasAdapter();

describe('canvas-adapter', () => {
    describe('configure', () => {
        test('should throw error when adapter is null|undefined', () => {
            // @ts-ignore
            expect(() => { configure(null); }).toThrow();
            // @ts-ignore
            expect(() => { configure(); }).toThrow();
        });

        test('should throw error when adapter is not an instanceof CanvasAdapter', () => {
            // @ts-ignore
            expect(() => { configure({}); }).toThrow();
        });
    });
    describe('getAdapter', () => {
        test('should throw error when adapter is unimplemented', () => {
            configure(new WrongCanvasAdapter());
            expect(() => {
                // @ts-ignore
                getAdapter().measureTextWidth({}, '333');
            }).toThrow();
            expect(() => {
                // @ts-ignore
                getAdapter().loadCanvasImage('1213', false);
            }).toThrow();
            expect(() => {
                // @ts-ignore
                getAdapter().getImageSrc({});
            }).toThrow();
        });
    });
    describe('WeChatCanvasAdapter', () => {
        test('#getAdapter, should be an instance of WeChatCanvasAdapter', () => {
            configure(weChatCanvasAdapter);
            expect((getAdapter() instanceof WeChatCanvasAdapter)).toBe(true);
        });

        test('#loadCanvasImage, should return the right result', () => {
            configure(weChatCanvasAdapter);
            const adapter: WeChatCanvasAdapter = getAdapter();
            const ret = {
                width: 3,
                height: 4,
                path: 'use this string to draw this image'
            };
            expect(adapter.loadCanvasImage('333', false))
                .resolves.toEqual(ret);
        });

        test('#measureTextWidth, should return the true res', () => {
            configure(weChatCanvasAdapter);
            expect(
                // @ts-ignore
                getAdapter().measureTextWidth({}, '333')
            ).toBe(3);
        });

        test('#getImageSrc, should return the right res', () => {
            configure(weChatCanvasAdapter);
            const weChatImageElement = {
                path: '333'
            };

            expect(getAdapter().getImageSrc(weChatImageElement)).toBe('333');
        });
    });

    describe('BrowserCanvasAdapter', () => {
        test('#getAdapter, should be an instance of BrowserCanvasAdapter', () => {
            configure(browseCanvasAdapter);
            expect((getAdapter() instanceof BrowserCanvasAdapter)).toBe(true);
        });

        test('#loadCanvasImage, should return the right result', () => {
            configure(browseCanvasAdapter);
            const adapter: BrowserCanvasAdapter = getAdapter();
            const ret = {
                width: 3,
                height: 4
            };
            expect(adapter.loadCanvasImage('333', false))
                .resolves.toEqual(ret);
        });

        test('#measureTextWidth, should return the true res', () => {
            configure(browseCanvasAdapter);
            expect(
                // @ts-ignore
                getAdapter().measureTextWidth({}, '333')
            ).toBe(4);
        });

        test('#getImageSrc, should return the right res', () => {
            configure(browseCanvasAdapter);
            const imageElement = {
                path: '333'
            };

            expect(getAdapter().getImageSrc(imageElement)).toEqual(imageElement);
        });
    });
});