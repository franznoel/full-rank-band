import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebaseConfig';

export const uploadFile = async (file: File) => {
  const storageRef = ref(storage, `uploads/${file.name}`); // Define storage path
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress handler (optional)
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('Upload failed', error);
        reject(error);
      },
      async () => {
        // Get download URL after upload completes
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};

export const getImageUrl = async (imageName: string) => {
  const storageRef = ref(storage, `images/${imageName}`);
  try {
    const url = await getDownloadURL(storageRef);
    console.log("Public URL:", url);
    return url;
  } catch (error) {
    console.error("Error getting image URL:", error);
    throw error;
  }
};
