import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([uploadPhoto(), createUser()]);

    // Log body
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    // in case of an error log it
    console.error('Signup system offline');
  }
}
