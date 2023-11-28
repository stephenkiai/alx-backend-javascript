import { uploadPhoto, createUser } from './utils.js';

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
    // Handle any errors
    console.error('Error in asyncUploadUser:', error);
    throw error;
    }
};
