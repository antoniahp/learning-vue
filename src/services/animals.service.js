import axios from "axios";

export class AnimalService {
    getAccessToken(){
        return axios.post("https://api.petfinder.com/v2/oauth2/token", {
            "grant_type": "client_credentials",
            "client_id": "lJg6CJCTrd6qDMlgVoav7wNodfodzCjUCxZ72NS7Qd2hbs9suw",
            "client_secret": "TxJryKBurI5qhx6OJbhFTAVA7mtLhvLpL5qn4iLO"

        }).then((response) =>{
            return response.data.access_token;
        })
    }


    getAnimals(){
        return this.getAccessToken().then((accessToken)=>{
            return axios.get("https://api.petfinder.com/v2/animals", {
                "headers": {
                    "Authorization": "Bearer " + accessToken
                }
            }).then((response)=>{
                return response.data;
            })
        })

    }
}