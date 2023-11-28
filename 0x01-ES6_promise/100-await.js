import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    // object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // object with null values if error present
    console.error('Error in asyncUploadUser:', error);
    return {
      photo: null,
      user: null,
    };
  }
}
