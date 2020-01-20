const throwUnimplementedError = (
    methodName: string,
    classname: string
): Error => new Error(`${methodName} is a required method of ${classname}, but was not implemented.`)

export class CanvasAdapter {
    private static TAG: string = 'CanvasAdapter';

    /**
     * load and get the CanvasImageSource
     * @param imageUrl
     * @param allowFailed
     */
    public loadCanvasImage(
        imageUrl: string,
        allowFailed?: boolean
    ): Promise<any> {
        throw throwUnimplementedError('loadCanvasImage', CanvasAdapter.TAG);
    }

    /**
     * default is CanvasRenderingContext2D.measureText
     * @param ctx
     * @param text
     */
    public measureTextWidth(
        ctx: CanvasRenderingContext2D,
        text: string
    ): number {
        throw throwUnimplementedError('measureTextWidth', CanvasAdapter.TAG);
    }

    /**
     * get the CanvasImageSource
     * @param imageRes
     */
    public getImageSrc(imageRes: any): any {
        throw throwUnimplementedError('getImageSrc', CanvasAdapter.TAG);
    }
}

let cacheAdapter: any;

const validateAdapter = <T extends CanvasAdapter>(adapter?: T): void => {
    if (!(adapter instanceof CanvasAdapter)) {
        throw new Error('adapter should be an instance of CanvasAdapter');
    }
};

export const getAdapter = <T extends CanvasAdapter>(): T => {
    validateAdapter(cacheAdapter);

    return cacheAdapter;
};

export const configure = <T extends CanvasAdapter>(adapter: T): void => {
    validateAdapter(adapter);
    cacheAdapter = adapter;
};