const location = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_LOCATION_STATE":
        return {
            ...state,
            locationState: action.locationState
        }
        default:
        return state;
    }
};
export default location;