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
import { getDoc, setDoc, doc } from "@firebase/firestore";

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

  // loading state
  const isLoading = ref(false);
  const isAuthenticating = ref(false);

  const errorMessage = ref("");

  /* ---------- Authentication Functions ---------- */

  // function to register user
  const signUp = async (email, password) => {
    isLoading.value = true;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      await sendEmailVerification(userCredential.user);

      const userRef = doc(db, "users", user.value.uid);
      setDoc(
        userRef,
        {
          firstName: firstName.value,
          lastName: lastName.value,
        },
        {
          merge: true,
        }
      );

      navigateTo("/onboard/");
    } catch (error) {
      errorMessage.value = error.message;
      isLoading.value = false;

      if (error.code === "auth/email-already-in-use") {
        errorMessage.value =
          "the email address is already in use by another account";
      }
      return;
    } finally {
      isLoading.value = false;
    }
  };

  // function to log in user
  const signIn = async (email, password) => {
    isLoading.value = true;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);

      const userRef = doc(db, "users", user.value.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        // const data = docSnap.data();
        console.log("user exists");

        navigateTo("/home");
      } else {
        navigateTo("/onboard");
      }
    } catch (error) {
      if (error.code == "auth/invalid-credential") {
        errorMessage.value = "invalid email or password";
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    email,
    password,
    firstName,
    lastName,
    djName,
    djPhone,
    djDescription,
    isLoading,
    isAuthenticating,
    signIn,
    signUp,
    errorMessage,
    getDoc,
    setDoc,
    doc,
    user,
    db
  };
};
