import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const TransactionCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            date: _entity?.date,reference: _entity?.reference,description: _entity?.description,branchId: _entity?.branchId,accountId: _entity?.accountId,modelType: _entity?.modelType,modelId: _entity?.modelId,type: _entity?.type,debit: _entity?.debit,credit: _entity?.credit,createdAt: _entity?.createdAt,updatedAt: _entity?.updatedAt,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("transaction").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Transaction created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Transaction" });
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
        <Dialog header="Create Transaction" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="transaction-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="date">date:</label>
                <InputNumber id="date" className="w-full mb-3 p-inputtext-sm" value={_entity?.date} onChange={(e) => setValByKey("date", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["date"]) ? (
              <p className="m-0" key="error-date">
                {error["date"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="reference">reference:</label>
                <InputText id="reference" className="w-full mb-3 p-inputtext-sm" value={_entity?.reference} onChange={(e) => setValByKey("reference", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["reference"]) ? (
              <p className="m-0" key="error-reference">
                {error["reference"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="description">description:</label>
                <InputText id="description" className="w-full mb-3 p-inputtext-sm" value={_entity?.description} onChange={(e) => setValByKey("description", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["description"]) ? (
              <p className="m-0" key="error-description">
                {error["description"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="branchId">branch_id:</label>
                <InputNumber id="branchId" className="w-full mb-3 p-inputtext-sm" value={_entity?.branchId} onChange={(e) => setValByKey("branchId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["branchId"]) ? (
              <p className="m-0" key="error-branchId">
                {error["branchId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="accountId">account_id:</label>
                <InputNumber id="accountId" className="w-full mb-3 p-inputtext-sm" value={_entity?.accountId} onChange={(e) => setValByKey("accountId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["accountId"]) ? (
              <p className="m-0" key="error-accountId">
                {error["accountId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="modelType">model_type:</label>
                <InputText id="modelType" className="w-full mb-3 p-inputtext-sm" value={_entity?.modelType} onChange={(e) => setValByKey("modelType", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["modelType"]) ? (
              <p className="m-0" key="error-modelType">
                {error["modelType"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="modelId">model_id:</label>
                <InputNumber id="modelId" className="w-full mb-3 p-inputtext-sm" value={_entity?.modelId} onChange={(e) => setValByKey("modelId", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["modelId"]) ? (
              <p className="m-0" key="error-modelId">
                {error["modelId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="type">type:</label>
                <InputText id="type" className="w-full mb-3 p-inputtext-sm" value={_entity?.type} onChange={(e) => setValByKey("type", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["type"]) ? (
              <p className="m-0" key="error-type">
                {error["type"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="debit">debit:</label>
                <InputNumber id="debit" className="w-full mb-3 p-inputtext-sm" value={_entity?.debit} onChange={(e) => setValByKey("debit", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["debit"]) ? (
              <p className="m-0" key="error-debit">
                {error["debit"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="credit">credit:</label>
                <InputText id="credit" className="w-full mb-3 p-inputtext-sm" value={_entity?.credit} onChange={(e) => setValByKey("credit", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["credit"]) ? (
              <p className="m-0" key="error-credit">
                {error["credit"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="createdAt">created_at:</label>
                <InputNumber id="createdAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.createdAt} onChange={(e) => setValByKey("createdAt", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["createdAt"]) ? (
              <p className="m-0" key="error-createdAt">
                {error["createdAt"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="updatedAt">updated_at:</label>
                <InputNumber id="updatedAt" className="w-full mb-3 p-inputtext-sm" value={_entity?.updatedAt} onChange={(e) => setValByKey("updatedAt", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["updatedAt"]) ? (
              <p className="m-0" key="error-updatedAt">
                {error["updatedAt"]}
              </p>
            ) : null}
          </small>
            </div>
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

export default connect(mapState, mapDispatch)(TransactionCreateDialogComponent);
