export class CanvasAdapter {
    /**
     * load and get the CanvasImageSource
     * @param imageUrl
     * @param allowFailed
     */
    public loadCanvasImage(imageUrl: string, allowFailed?: boolean): Promise<any>;

    /**
     * default is CanvasRenderingContext2D.measureText
     * @param ctx
     * @param text
     */
    public measureTextWidth(ctx: CanvasRenderingContext2D, text: string): number;

    /**
     * get the CanvasImageSource
     * @param imageRes
     */
    public getImageSrc(imageRes: any): any;
}

/**
 * add adapter to the local cache
 * @param adapter
 */
export function configure<T extends CanvasAdapter>(adapter: T): void;

/**
 * get the adapter from the local cache
 */
export function getAdapter<T extends CanvasAdapter>(): T;