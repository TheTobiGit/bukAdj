export const useClientProfile = () => {
  // firebase variables
  const { db, setDoc, doc, isLoading } = useAuth();

  const selectedDays = ref([]);
  const selectedRegions = ref([]);
  const selectedEvents = ref([]);

  const selectedDaysList = ref([]);
  const selectedEventsList = ref([]);
  const selectedRegionsList = ref([]);

  const selectedPriceRange = ref('0-100');

  function handlePriceChange(event) {
    selectedPriceRange.value = event.target.value;
    console.log(selectedPriceRange.value);
} 

  const events = [
    "wedding",
    "birthday",
    "concert",
    "festival",
    "corporate",
    "fundraiser",
    "charity",
    "product launch",
    "naming ceremony",
    "private party",
    "club event",
    "beach party",
    "house party",
    "barbecue",
    "pool party",
    "awards ceremony",
    "other",
  ];
  const days = [
    "always",
    "weekdays",
    "weekends",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const regions = [
    "ashanti",
    "brong ahafo",
    "central",
    "eastern",
    "greater accra",
    "northern",
    "upper east",
    "upper west",
    "western",
    "volta",
    "savannah",
    "bono east",
    "oti",
    "ahafo",
    "western north",
    "north east",
  ];

  const toggleDay = (day) => {
    if (day === "always") {
      selectedDays.value = ["always"];
      selectedDaysList.value = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
      ];
    } else if (day === "weekdays") {
      selectedDays.value = ["weekdays"];
      selectedDaysList.value = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
      ];
    } else if (day === "weekends") {
      selectedDays.value = ["weekends"];
      selectedDaysList.value = ["saturday", "sunday"];
    } else {
      if (
        selectedDays.value.includes("always") ||
        selectedDays.value.includes("weekdays") ||
        selectedDays.value.includes("weekends")
      ) {
        selectedDays.value = [day];
        selectedDaysList.value = [day];
      } else {
        if (selectedDays.value.includes(day)) {
          selectedDays.value = selectedDays.value.filter((d) => d !== day);
          selectedDaysList.value = selectedDaysList.value.filter(
            (d) => d !== day
          );
        } else {
          selectedDays.value.push(day);
          selectedDaysList.value.push(day);
        }
      }
    }

  };

  const toggleRegion = (region) => {
    if (selectedRegions.value.includes(region)) {
      selectedRegions.value = selectedRegions.value.filter((r) => r !== region);
      selectedRegionsList.value = selectedRegionsList.value.filter(
        (r) => r !== region
      );
    } else {
      selectedRegions.value.push(region);
      selectedRegionsList.value.push(region);
    }

  };

  const toggleEvent = (event) => {
    if (selectedEvents.value.includes(event)) {
      selectedEvents.value = selectedEvents.value.filter((e) => e !== event);
      selectedEventsList.value = selectedEventsList.value.filter(
        (e) => e !== event
      );
    } else {
      selectedEvents.value.push(event);
      selectedEventsList.value.push(event);
    }

  };

  async function setdjListing() {
    isLoading.value = true;

    const user = await getCurrentUser();

    if (user) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(
        userRef,
        {
          eventsAvailable: selectedEventsList.value,
          regionsAvailable: selectedRegionsList.value,
          priceRange: selectedPriceRange.value,
        },
        {
          merge: true,
        }
      );
      navigateTo("/client/home/");
    } else {
      isLoading.value = false;
      console.error("User is undefined or user.value is not set.");
    }
  }

  return {
    selectedDays,
    selectedDaysList,
    events,
    days,
    regions,
    toggleDay,
    toggleEvent,
    selectedEvents,
    selectedEventsList,
    toggleRegion,
    selectedRegions,
    selectedRegionsList,
    selectedPriceRange,
    setdjListing,
    isLoading,
    handlePriceChange,
  };
}
 