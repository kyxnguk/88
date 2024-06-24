import create from "zustand";
import axios from "axios";

const useWeatherStore = create((set) => ({
  weather: null,
  city: "",
  loading: false,
  error: null,
  setCity: (city) => set({ city }),
  fetchWeather: async (city) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24aa09d939ad7c5f72b56de6ef90b8c2&units=metric`
      );
      set({ weather: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useWeatherStore;
