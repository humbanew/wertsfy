export var _logaritmoBase = (expo: number, x: number): number => {
  let exp = expo , scan = x % exp;

  while(scan != 0) {
    scan = scan % exp;

    if(expo ** exp != x) {   
      if(expo ** exp != x) {
        if (expo ** exp != x) {
          exp += 0.0001;
        }
        exp += 0.001;
      }
      exp += 0.01; 
    } 
    exp += 0.1;
  }
  return exp;
};
