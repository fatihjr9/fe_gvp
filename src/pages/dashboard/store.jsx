import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

const setBanner = create((set, get) => ({
  list: [],
  loading: false,

  fetchBanner: async () => {
    set({ loading: true });

    try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/BannerAds/Package/List`,
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }
        );
        if (res.data.responseResult && res.data.data) {
          const data = res.data.data;
          set({ list: data });
          console.log(data)
        }
    } catch (err) {
      console.error("API Fetch error", err);
    }

    set({ loading: false });
  },

  createBanner: async (payload) => {
    set({ loading: true });
    try {
        const token = localStorage.getItem("token");
        await axios.post(`${import.meta.env.VITE_API_URL}/BannerAds/Package/Insert`, payload,
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
      );
      await get().fetchBanner();
      toast.success("Banner berhasil ditambahkan");
    } catch (err) {
      console.error("API Create error", err);
      toast.error("Banner gagal ditambahkan");
    }
    set({ loading: false });
  },

  editBanner: async (id, payload) => {
    set({ loading: true });
    try {
        const token = localStorage.getItem("token");
        await axios.put(`${import.meta.env.VITE_API_URL}/BannerAds/Package/Update/${id}`, payload,
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            }
        );
        const currentList = get().list;
        const updatedList = currentList.map((item) =>
        item.id_banner_ads_package === id ? { ...item, ...payload } : item
        );
        set({ list: updatedList });
        toast.success("Banner berhasil diupdate");
    } catch (err) {
        console.error("API Update error", err);
        toast.error("Banner gagal diupdate");
    }
  
    set({ loading: false });
  },  

  deleteBanner: async (id) => {
    set({ loading: true });

    try {
        const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/BannerAds/Package/Delete/${id}`,
        {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        }
      );
      const updatedList = get().list.filter(item => item.id_banner_ads_package !== id);
      set({ list: updatedList });
      toast.success("Banner berhasil dihapus")
    } catch (err) {
      console.error("API Delete error", err);
      toast.error("Banner gagal dihapus")
    }
    set({ loading: false });
  },
}));

export default setBanner