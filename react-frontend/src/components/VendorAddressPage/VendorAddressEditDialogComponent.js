import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const VendorAddressCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            customerId: _entity?.customerId,
branchId: _entity?.branchId,
shippingAddress1: _entity?.shippingAddress1,
shippingAddress2: _entity?.shippingAddress2,
shippingAddress3: _entity?.shippingAddress3,
shippingCity: _entity?.shippingCity,
shippingState: _entity?.shippingState,
postalCode: _entity?.postalCode,
billingAddress1: _entity?.billingAddress1,
billingAddress2: _entity?.billingAddress2,
billingAddress3: _entity?.billingAddress3,
billingCity: _entity?.billingCity,
billingState: _entity?.billingState,
postalCode1: _entity?.postalCode1,
createdAt: _entity?.createdAt,
updatedAt: _entity?.updatedAt,
        };

        setLoading(true);
        try {
            
        const result = await client.service("vendorAddress").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info vendorAddress updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Edit Vendor Address" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="vendorAddress-edit-dialog-component">
                <div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="customerId">customer_id:</label>
            <InputNumber id="customerId" className="w-full mb-3 p-inputtext-sm" value={_entity?.customerId} onChange={(e) => setValByKey("customerId", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="branchId">branch_id:</label>
            <InputNumber id="branchId" className="w-full mb-3 p-inputtext-sm" value={_entity?.branchId} onChange={(e) => setValByKey("branchId", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingAddress1">shipping_address_1:</label>
            <InputText id="shippingAddress1" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingAddress1} onChange={(e) => setValByKey("shippingAddress1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingAddress2">shipping_address_2:</label>
            <InputText id="shippingAddress2" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingAddress2} onChange={(e) => setValByKey("shippingAddress2", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingAddress3">shipping_address_3:</label>
            <InputText id="shippingAddress3" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingAddress3} onChange={(e) => setValByKey("shippingAddress3", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingCity">shipping_city:</label>
            <InputText id="shippingCity" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingCity} onChange={(e) => setValByKey("shippingCity", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="shippingState">shipping_state:</label>
            <InputText id="shippingState" className="w-full mb-3 p-inputtext-sm" value={_entity?.shippingState} onChange={(e) => setValByKey("shippingState", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="postalCode">postal_code:</label>
            <InputNumber id="postalCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.postalCode} onChange={(e) => setValByKey("postalCode", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingAddress1">billing_address_1:</label>
            <InputText id="billingAddress1" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingAddress1} onChange={(e) => setValByKey("billingAddress1", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingAddress2">billing_address_2:</label>
            <InputText id="billingAddress2" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingAddress2} onChange={(e) => setValByKey("billingAddress2", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingAddress3">billing_address_3:</label>
            <InputText id="billingAddress3" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingAddress3} onChange={(e) => setValByKey("billingAddress3", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingCity">billing_city:</label>
            <InputText id="billingCity" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingCity} onChange={(e) => setValByKey("billingCity", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="billingState">billing_state:</label>
            <InputText id="billingState" className="w-full mb-3 p-inputtext-sm" value={_entity?.billingState} onChange={(e) => setValByKey("billingState", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="postalCode1">postal_code_1:</label>
            <InputNumber id="postalCode1" className="w-full mb-3 p-inputtext-sm" value={_entity?.postalCode1} onChange={(e) => setValByKey("postalCode1", e.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="createdAt">created_at:</label>
            <InputText id="createdAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.createdAt} onChange={(e) => setValByKey("createdAt", e.target.value)}  />
        </span>
        </div>
<div className="col-12 md:col-6 field mt-5">
        <span className="align-items-center">
            <label htmlFor="updatedAt">updated_at:</label>
            <InputText id="updatedAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.updatedAt} onChange={(e) => setValByKey("updatedAt", e.target.value)}  />
        </span>
        </div>
                <div className="col-12">&nbsp;</div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(VendorAddressCreateDialogComponent);
