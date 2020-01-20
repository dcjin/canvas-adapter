import { CanvasAdapter } from '../src';

export default class BrowserCanvasAdapter extends CanvasAdapter {
    public loadCanvasImage(imageUrl: string, allowFailed?: boolean): Promise<any> {
        return Promise.resolve({
            width: 3,
            height: 4
        });
    }

    public measureTextWidth(
        ctx: CanvasRenderingContext2D,
        text: string
    ): number {
        return text.length + 1;
    }

    public getImageSrc(imageRes: any): any {
        return imageRes;
    }
}