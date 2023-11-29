export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      // Log message for resolution
      console.log('Got a response from the API');

      //object for resolution
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      // Log message for rejection
      console.error('Got an error from the API');

      //empty Error object for rejection
      return new Error();
    });
}
