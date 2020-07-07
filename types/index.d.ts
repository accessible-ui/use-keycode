import * as React from 'react';
export declare const useKeycode: (which: number, onKeyDown: (event?: KeyboardEvent | undefined) => any) => React.MutableRefObject<any>;
export declare const useKeycodes: (listeners: Record<number, (event: KeyboardEvent) => any>) => React.MutableRefObject<any>;
export default useKeycode;
