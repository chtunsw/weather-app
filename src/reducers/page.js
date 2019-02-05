const page = (state = {}, action) => {
    switch (action.type) {
        case "CHANGE_PAGE_INDEX":
        return {
            ...state,
            pageIndex: action.pageIndex
        }
        default:
        return state;
    }
};
export default page;