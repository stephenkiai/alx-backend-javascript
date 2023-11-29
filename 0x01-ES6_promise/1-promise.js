export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Resolve with a success response
      const successResponse = { status: 200, body: 'Success' };
      resolve(successResponse);
    } else {
      // Reject with an error message
      const errorMessage = 'The fake API is not working currently';
      reject(errorMessage);
    }
  });
}
