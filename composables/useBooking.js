export const useBooking = () => {
  const { db, setDoc, doc } = useAuth();

  const event = ref("");
  const date = ref("");
  const location = ref("");
  const budget = ref("");
  const phone = ref("");
  const email = ref("");
  const isLoading = ref(false);

  async function bookEvent() {
    isLoading.value = true;
  
    const user = await getCurrentUser();
  
    if (user) {
      const userRef = doc(db, "bookings");
      await setDoc(
        userRef,
        {
          from: user.uid,
          email: email.value,
          phone: phone.value,
          target: DJid,
          event: event.value,
          date: date.value,
          location: location.value,
          budget: "GHS" + budget.value + ".00",
        },
        {
          merge: true,
        }
      );
      navigateTo("/client/home");
       } else {
        isLoading.value = false;
        console.error("User is undefined or user.value is not set.");
      }
  }

  return {
    event,
    date,
    location,
    budget,
    phone,
    email,
    isLoading,
    bookEvent,
  }
}