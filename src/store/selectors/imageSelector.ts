import axios from "axios";
import { selector } from "recoil";
// store
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

const API_URL = "https://api.unsplash.com/search/photos"
const API_KEY= "pAEouZcfIjwAylXEegT3seeJ5uAtN9-lmD29z0VLQIw"
const PER_PAGE = 30

export const imageData = selector({
  key: "imageData",
  get: async ({ get }) => {

    const searchValue = get(searchState)
    const pageValue = get(pageState)
    // API 호출
    try{
      const res = await axios.get(`${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`)
      console.log(res.data)

      return res
    }catch (error){
      console.log(error)
    }
  }
})