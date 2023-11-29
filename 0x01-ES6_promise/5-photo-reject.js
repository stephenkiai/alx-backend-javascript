export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    if (fileName && fileName.toLowerCase().startsWith('error')) {
      reject(new Error(`${fileName} cannot be processed`));
    } else {
      // Simulate successful processing
      resolve(`Photo ${fileName} processed successfully`);
    }
  });
}
