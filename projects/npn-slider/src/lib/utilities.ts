

/*Utilities */
export class Utilities {

  public isNumberArray(arr: number[]): boolean {
    return arr.filter((value) => !isNaN(value)).length === arr.length;
  }
  public isNullOrEmpty(obj: any) {
    return obj === undefined || obj === null || obj === '';
  }
  public findNextValidStepValue(n: number, step: number): number {
    const divisors: number[] = [];
    const sqrtNum = Math.sqrt(n);
    for (let i = 0; i < sqrtNum; i++) {
      if (n % i === 0) {
        if ((n / i) === i) {
          divisors.push(i);
        } else {
          divisors.push(i);
          divisors.push(n / i);
        }
      }
    }
    divisors.sort((a, b) => {
      a = Number(a);
      b = Number(b);
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    for (let i = divisors.length - 1; i >= 0; i--) {
      if (step > divisors[i]) {
        step = divisors[i];
        break;
      }
    }
    return step;
  }
}
