import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleTransactionPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("transaction")
            .get(urlParams.singleTransactionId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Transaction", type: "error", message: error.message || "Failed get transaction" });
            });
    }, [props,urlParams.singleTransactionId]);


    const goBack = () => {
        navigate("/transaction");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Transaction</h3>
                </div>
                <p>transaction/{urlParams.singleTransactionId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">date</label><p className="m-0 ml-3" >{Number(_entity?.date)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">reference</label><p className="m-0 ml-3" >{_entity?.reference}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">description</label><p className="m-0 ml-3" >{_entity?.description}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">account_id</label><p className="m-0 ml-3" >{Number(_entity?.accountId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">model_type</label><p className="m-0 ml-3" >{_entity?.modelType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">model_id</label><p className="m-0 ml-3" >{Number(_entity?.modelId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">type</label><p className="m-0 ml-3" >{_entity?.type}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">debit</label><p className="m-0 ml-3" >{Number(_entity?.debit)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">credit</label><p className="m-0 ml-3" >{_entity?.credit}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">created_at</label><p className="m-0 ml-3" >{Number(_entity?.createdAt)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">updated_at</label><p className="m-0 ml-3" >{Number(_entity?.updatedAt)}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
        </div>
        
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleTransactionPage);
