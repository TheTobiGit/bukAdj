import { getStorage, ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export const useStorage = () => {
    /* ---------- Variables ---------- */
    const storage = getStorage();
    const imagesRef = ref(storage, 'djART');
    

    return {
      storage,
      storageRef,
      imagesRef,
      uploadBytesResumable,
      ref,
      getDownloadURL,
    };
  };
  