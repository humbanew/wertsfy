import { WConstSqrtCbrtCollectionObject, WConstShortcutsCollectionObject } from "./warch.type";

export declare interface WComponent {
  
  src: { 
    number?: number
    string?: string
    function?: Function
    object?: { 
      collections: { 
        sqrt_cbrt?: WConstSqrtCbrtCollectionObject
        shortcuts?: WConstShortcutsCollectionObject 
      }
    }
    regex?: undefined
    html?: undefined 
  };

}
