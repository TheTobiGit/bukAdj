export default defineNuxtRouteMiddleware(async (to, from) => {
  const { getDoc, setDoc, doc, db } = useAuth();
  const user = await getCurrentUser();
  
  if (user) {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    const userData = userDoc.data();

    if (to.path === "/client/home" && userData.accountType == "DJ") {
      return navigateTo("/dj/bookings");
    }
  }
});
