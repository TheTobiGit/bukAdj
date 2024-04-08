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

export const useAuth = () => {
  /* ---------- Variables ---------- */

  // firebase variables
  const auth = useFirebaseAuth();
  const user = useCurrentUser();
  const db = useFirestore();
  const provider = new GoogleAuthProvider();

  // user credentials variables
  const email = ref("");
  const password = ref("");
  const firstName = ref("");
  const lastName = ref("");
  const djName = ref("");
  const djPhone = ref("");
  const djDescription = ref("");

  return {
    email,
    password,
    firstName,
    lastName,
    djName,
    djPhone,
    djDescription,
  };
};
