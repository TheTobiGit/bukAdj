import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signOut,
    updatePassword,
  } from "@firebase/auth";
  
  export const useDJ = () => {
    /* ---------- Variables ---------- */
  
    // firebase variables
    const auth = useFirebaseAuth();
    const user = useCurrentUser();
    const db = useFirestore();
    const provider = new GoogleAuthProvider();
  
    // DJ credentials variables
    const djName = ref("");
    const djPhone = ref("");
    const djDescription = ref("");
  
    return {
      djName,
      djPhone,
      djDescription,
    };
  };
  