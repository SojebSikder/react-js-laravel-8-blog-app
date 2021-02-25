import {
    LIST_CATEGORIES,
    LIST_CATEGORIES_SUCCESS,
    LIST_CATEGORIES_FAILURE,
    SET_CATEGORY_DEFAULTS
} from '../actionTypes/CategoryTypes';

import Category from '../../apis/Category';

/**
 * list Categories action
 */
function listCategories(page = 1) {

    return function (dispatch, getState) {

        // start sending request (first dispatch)
        dispatch({
            type: LIST_CATEGORIES
        });


        // async call must dispatch action whether on success or failure
        Category.list(page).then(response => {
            dispatch({
                type: LIST_CATEGORIES_SUCCESS,
                data: response.data.data
            });
        }).catch(error => {
            dispatch({
                type: LIST_CATEGORIES_FAILURE,
                error: error.response.data
            });
        });
    }
}

function setCategoryDefaults() {

    return function (dispatch, getState) {

        dispatch({
            type: SET_CATEGORY_DEFAULTS
        });
    }
}

export {
    listCategories,
    setCategoryDefaults
};