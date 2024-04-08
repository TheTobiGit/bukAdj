export const useAccountType = () => {
       /* ---------- Variables ---------- */
  
    // firebase variables
    const { db, setDoc, doc, isLoading } = useAuth();

    // user credentials variables
    const accountType = ref("");

    //function to set account type
    async function setAccountType(type) {
        isLoading.value = true;

        const user = await getCurrentUser()
    
        accountType.value = type;
      
        if (user) {
          const userRef = doc(db, "users", user.uid);
          await setDoc(
            userRef,
            {
              accountType: accountType.value,
            },
            {
              merge: true,
            }
          );
          navigateTo("/onboard/profile");
        } else {
            isLoading.value = false;
          console.error("User is undefined or user.value is not set.");
        }
      }
  
  
    return {
        accountType,
        setAccountType,
        isLoading
    };
  };
  