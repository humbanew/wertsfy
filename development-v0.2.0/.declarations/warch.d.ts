import { WConstSqrtCbrtCollectionObject, WConstShortcutsCollectionObject, WITFilter, WITFilterOutput } from "./warch.type";
import { WertsfyPrototipos } from "./warch.prototype";

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
