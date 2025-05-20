import axios from "axios"

const searchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=0KFiZht9WC2AlVFxZTCd35yaUkAOkQrszBMYQbh7P8U'

    const response = await axios.get(url,{
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages