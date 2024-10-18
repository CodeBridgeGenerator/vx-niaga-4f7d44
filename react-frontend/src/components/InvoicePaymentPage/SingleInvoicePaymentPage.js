import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleInvoicePaymentPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("invoicePayment")
            .get(urlParams.singleInvoicePaymentId, { query: { $populate: [            {
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
                props.alert({ title: "InvoicePayment", type: "error", message: error.message || "Failed get invoicePayment" });
            });
    }, [props,urlParams.singleInvoicePaymentId]);


    const goBack = () => {
        navigate("/invoicePayment");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Invoice Payment</h3>
                </div>
                <p>invoicePayment/{urlParams.singleInvoicePaymentId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">invoice_id</label><p className="m-0 ml-3" >{Number(_entity?.invoiceId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">date</label><p className="m-0 ml-3" >{Number(_entity?.date)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">amount</label><p className="m-0 ml-3" >{Number(_entity?.amount)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">account_id</label><p className="m-0 ml-3" >{Number(_entity?.accountId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">payment_method</label><p className="m-0 ml-3" >{_entity?.paymentMethod}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">reference</label><p className="m-0 ml-3" >{_entity?.reference}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">description</label><p className="m-0 ml-3" >{_entity?.description}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">receipt_path</label><p className="m-0 ml-3" >{_entity?.receiptPath}</p></div>
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

export default connect(mapState, mapDispatch)(SingleInvoicePaymentPage);
