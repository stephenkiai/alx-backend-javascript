export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    // asynchronous API call
    const apiResponse = { data: 'Some data from API' };
    resolve(apiResponse);
  });
}
