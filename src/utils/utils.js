import axios from "axios"

export const imageUpload = async imageData => {
    const formData = new FormData()
    formData.append('image', imageData)
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
      formData
    )
    return data.data.display_url
  }

  export const saveAuth = async authInfo => {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/account/${authInfo?.email}`, authInfo)
    return response.data.data;
  }

  export const setTokenIntoLocalStorage = async (token) => {

    console.log('token-->>', token)
   
      localStorage.setItem('ParcelManagementSystemToken', JSON.stringify(token));
  }