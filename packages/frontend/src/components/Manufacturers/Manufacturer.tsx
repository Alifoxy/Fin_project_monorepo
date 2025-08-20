import React, {FC, PropsWithChildren, useEffect, useState} from "react";
import {IManufacturer} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {create_deleteManufacturerActions, resetM} from "../../store/slices/create_deleteManufacturerSlice";
import {manufacturersActions} from "../../store/slices/manufacturerSlice";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {ErrorWindow} from "../Dialogs";

interface IProps extends PropsWithChildren {
    SetManufacturer:IManufacturer

}
const Manufacturer: FC<IProps> = ({SetManufacturer}) => {
    const { isMaDeleteError } = useSelector((state:any) => state.create_delete_manufacturers);
    const {id:m_id, manufacturer, created} = SetManufacturer;
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const {page} = useParams()
    // const [refreshKey, setRefreshKey] = useState(false);

    const clearMessage = () => {
        setError(null);
    };

    useEffect(() => {
        // dispatch(manufacturersActions.getManufacturersByPage({page}))
        if (isMaDeleteError) {
            setError('Цього виробника неможливо видалити, він використовується в таблиці пристроїв!')
        }
        return () => {
            dispatch(resetM());
        };
    }, [dispatch, page, isMaDeleteError])

    const DeleteM = async () => {
        await dispatch(create_deleteManufacturerActions.deleteManufacturer({id: m_id}))
        // setRefreshKey(prevKey => !prevKey);
    }

    return (
        <div className={'record'}>
            <ErrorWindow message={error} onClose={clearMessage} />
            <div  className={'table_item'}>{manufacturer}</div>
            <div  className={'table_item'}>{created}</div>

            <button className={'delete_button'} onClick={DeleteM}>
                X
            </button>
        </div>
    );
};

export {Manufacturer};