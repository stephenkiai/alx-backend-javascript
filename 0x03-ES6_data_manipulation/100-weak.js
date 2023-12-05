const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
  // Ensure endpoint is an object with required properties
  if (!endpoint || typeof endpoint !== 'object' || !endpoint.protocol || !endpoint.name) {
    console.error('Invalid endpoint format');
    return;
  }

  // Get the counter
  let counter = weakMap.get(endpoint) || 0;

  // Increment counter
  counter += 1;

  // Update counter in the weakMap
  weakMap.set(endpoint, counter);

  // Check if queries are >= 5
  if (counter >= 5) {
    console.error(`Endpoint load is high for ${endpoint.protocol} - ${endpoint.name}`);
  }
}
