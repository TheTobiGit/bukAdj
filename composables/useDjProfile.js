    export const useDjProfile = () => {
    /* ---------- Variables ---------- */
  
    // firebase variables
    const { db, setDoc, doc, isLoading } = useAuth();
  
    // DJ credentials variables
    const djName = ref("");
    const djPhone = ref("");
    const djDescription = ref("");

    async function setdjProfile() {
      isLoading.value = true;

      const user = await getCurrentUser()
    
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
      isLoading
    };
  };
  