# canvas-adapter

```
adapter the CanvasRenderingContext2D apis
```

## Install

```
$ npm i canvas-adapter
```

## Usage


```typescript
// configure first
import { CanvasAdapter, configure, getAdapter } from 'canvas-adapter';

class WeChatCanvasAdapter extends CanvasAdapter {
	public getImageSrc(imageRes: any): any {
		// ...
	}
}

configure(new WeChatCanvasAdapter);

// in canvas draw context
...
ctx.drawImage(getAdapter().getImageSrc(image), 0, 0);
...
```