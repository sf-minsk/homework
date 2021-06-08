import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(!loading))
        setTimeout(() => dispatch(loadingAC(loading)), 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            <SuperButton onClick={setLoading} disabled={loading}>{loading ? 'loading...' : 'set'}</SuperButton>
        </div>
    )
}

export default HW10
