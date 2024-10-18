import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleInvoicesPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("invoices")
            .get(urlParams.singleInvoicesId, { query: { $populate: [            {
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
                props.alert({ title: "Invoices", type: "error", message: error.message || "Failed get invoices" });
            });
    }, [props,urlParams.singleInvoicesId]);


    const goBack = () => {
        navigate("/invoices");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Invoices</h3>
                </div>
                <p>invoices/{urlParams.singleInvoicesId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">customer_id</label><p className="m-0 ml-3" >{Number(_entity?.customerId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">invoice_date</label><p className="m-0 ml-3" >{Number(_entity?.invoiceDate)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">category_id</label><p className="m-0 ml-3" >{Number(_entity?.categoryId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">status</label><p className="m-0 ml-3" >{_entity?.status}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">created_by</label><p className="m-0 ml-3" >{_entity?.createdBy}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">source</label><p className="m-0 ml-3" >{_entity?.source}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">delivery_status</label><p className="m-0 ml-3" >{_entity?.deliveryStatus}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">description</label><p className="m-0 ml-3" >{_entity?.description}</p></div>
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

export default connect(mapState, mapDispatch)(SingleInvoicesPage);
