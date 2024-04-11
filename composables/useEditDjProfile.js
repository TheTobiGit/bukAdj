export const useEditDjProfile = () => {
    /* ---------- Variables ---------- */
  
    // firebase variables
    const { db, setDoc, doc, isLoading } = useAuth();
    const { storage, storageRef, uploadBytesResumable, getDownloadURL } =
      useStorage();
  
    // DJ credentials variables
    const djName = ref("");
    const djPhone = ref("");
    const djDescription = ref("");
  
    // image input variables
    const imageInput = ref(null);
    const selectedImage = ref(null);
  
  
    const openImageSelector = () => {
      imageInput.value.click();
    };
  
    const onImageChange = async (event) => {
      const file = event.target.files[0];
      selectedImage.value = URL.createObjectURL(file);
  
      const user = await getCurrentUser();
  
      if (user) {
        const userRef = doc(db, "users", user.uid);
  
        const imageRef = storageRef(storage, `djART/${user.uid}/${"djArt"}`);
        const snapshot = await uploadBytesResumable(imageRef, file);
        const downloadURL = await getDownloadURL(imageRef);
  
        await setDoc(
          userRef,
          {
            djArt: downloadURL,
          },
          {
            merge: true,
          }
        );
  
      }
    };

  
    // function to set dj profile
    async function setdjProfile() {
      isLoading.value = true;
  
      const user = await getCurrentUser();
  
      if (user) {
        const userRef = doc(db, "users", user.uid);
        await setDoc(
          userRef,
          {
            djName: djName.value,
            djPhone: djPhone.value,
            djDescription: djDescription.value,
          },
          {
            merge: true,
          }
        );
        console.log("worked");
        navigateTo("/onboard/getlisted");
      } else {
        isLoading.value = false;
        console.error("User is undefined or user.value is not set.");
      }
    }
  
    return {
      djName,
      djPhone,
      djDescription,
      setdjProfile,
      isLoading,
      imageInput,
      selectedImage,
      openImageSelector,
      onImageChange,
    };
  };
  