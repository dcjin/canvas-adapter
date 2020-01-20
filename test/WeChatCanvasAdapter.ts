import { CanvasAdapter } from '../src';

interface IWeChatImageElement {
    path: string;
    [propName: string]: any;
}

export default class WeChatCanvasAdapter extends CanvasAdapter {
    public loadCanvasImage(imageUrl: string, allowFailed?: boolean): Promise<any> {
        return Promise.resolve({
            width: 3,
            height: 4,
            path: 'use this string to draw this image'
        });
    }

    public measureTextWidth(
        ctx: CanvasRenderingContext2D,
        text: string
    ): number {
        return text.length;
    }

    public getImageSrc<T extends IWeChatImageElement>(imageRes: T): any {
        return imageRes.path;
    }
}