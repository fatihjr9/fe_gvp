import axios from "axios"
import { create } from "zustand"

const setBanner = create((set)=>({
    list : [],
    loading : false,

    fetchBanner : async() => {
        set({loading:true})
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/BannerAds/Package/List`)
            if (res.data.responseResult && res.data.data) {
                set({ list: res.data.data });
            }
        } catch (err) {
            console.error("Fetch error", err);
        }
        set({ loading: false });
    },
}));

export default setBanner