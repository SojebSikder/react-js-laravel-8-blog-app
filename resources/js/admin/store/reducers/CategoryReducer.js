import {
    LIST_CATEGORIES,
    LIST_CATEGORIES_SUCCESS,
    LIST_CATEGORIES_FAILURE,
    SET_CATEGORY_DEFAULTS
} from '../actionTypes/CategoryTypes';

const initialState = {
    categories: {},
    category: {
        id: "",
        title: "",
        slug: ""
    },
    success_message: "",
    error_message: "",
    validation_errors: null,
    list_spinner: false,
    create_update_spinner: false
};

const categoryReducer = function (state = initialState, action) {
    switch (action.type) {
        case LIST_CATEGORIES:
            return {
                ...state,
                list_spinner: true
            };
        case LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.data,
                list_spinner: false
            };
        case LIST_CATEGORIES_FAILURE:
            return {
                ...state,
                error_message: action.error,
                list_spinner: false
            };
        case SET_CATEGORY_DEFAULTS:
            return {
                ...state,
                category: { ...state.category },
                success_message: "",
                error_message: "",
                validation_errors: null,
                list_spinner: false,
                create_update_spinner: false
            };
        default:
            return state;
    }
};

export default categoryReducer;