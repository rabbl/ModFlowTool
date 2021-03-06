import axios from "../axios";
import store from "../store"

const getApiKey = function() {
    return store.getState().user.apiKey;
};

export function fetchAllModels() {
    const apiKey = getApiKey();
    return {
        type: "FETCH_MODELS",
        payload: axios.get("/modflow/models.json", {
            headers: {'X-AUTH-TOKEN': apiKey}
        })
    };
}

export function fetchModelBoundary( id ) {
    const apiKey = getApiKey();
    return {
        type: "FETCH_MODEL_BOUNDARY",
        payload: axios.get("/modflow/boundaries/"+ id +".json", {
            headers: {'X-AUTH-TOKEN': apiKey}
        })
    };
}

export function fetchModelById(id) {
    const apiKey = getApiKey();
    return {
        type: "FETCH_MODEL",
        payload: axios.get("/modflow/models/"+ id +".json", {
            headers: {'X-AUTH-TOKEN': apiKey}
        })
    };
}

export function fetchModelMap() {
    const apiKey = getApiKey();
    return {
        type: "FETCH_MODEL_MAP",
        payload: axios.get("modflow/models/list/map.json", {
            headers: {'X-AUTH-TOKEN': apiKey}
        })
    };
}

export function calculateModel(tool, modelId) {
    const apiKey = getApiKey();
    if ( tool=="modflow" ){
        return {
            type: "CALCULATE_MODEL",
            payload: axios.post("modflow/calculation/"+ modelId +".json", {},{
                headers: {'X-AUTH-TOKEN': apiKey}
            })
        };
    }

    if ( tool=="scenarioanalysis" ){
        return {
            type: "CALCULATE_MODEL",
            payload: axios.post("scenarioanalysis/calculation/"+ modelId +".json", {},{
                headers: {'X-AUTH-TOKEN': apiKey}
            })
        };
    }


}
