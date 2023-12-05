// WeakMap instance to track the number of queries for each endpoint
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  // increment count
  count += 1;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, count);
  }
}
