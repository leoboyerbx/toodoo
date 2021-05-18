/**
 * Promise based timer function to use with await
 * @param delay
 */
export function delay(delay: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}
