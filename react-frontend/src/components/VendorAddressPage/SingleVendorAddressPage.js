import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleVendorAddressPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("vendorAddress")
            .get(urlParams.singleVendorAddressId, { query: { $populate: [            {
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
                props.alert({ title: "VendorAddress", type: "error", message: error.message || "Failed get vendorAddress" });
            });
    }, [props,urlParams.singleVendorAddressId]);


    const goBack = () => {
        navigate("/vendorAddress");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Vendor Address</h3>
                </div>
                <p>vendorAddress/{urlParams.singleVendorAddressId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">customer_id</label><p className="m-0 ml-3" >{Number(_entity?.customerId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">shipping_address_1</label><p className="m-0 ml-3" >{_entity?.shippingAddress1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">shipping_address_2</label><p className="m-0 ml-3" >{_entity?.shippingAddress2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">shipping_address_3</label><p className="m-0 ml-3" >{_entity?.shippingAddress3}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">shipping_city</label><p className="m-0 ml-3" >{_entity?.shippingCity}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">shipping_state</label><p className="m-0 ml-3" >{_entity?.shippingState}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">postal_code</label><p className="m-0 ml-3" >{Number(_entity?.postalCode)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">billing_address_1</label><p className="m-0 ml-3" >{_entity?.billingAddress1}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">billing_address_2</label><p className="m-0 ml-3" >{_entity?.billingAddress2}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">billing_address_3</label><p className="m-0 ml-3" >{_entity?.billingAddress3}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">billing_city</label><p className="m-0 ml-3" >{_entity?.billingCity}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">billing_state</label><p className="m-0 ml-3" >{_entity?.billingState}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">postal_code_1</label><p className="m-0 ml-3" >{Number(_entity?.postalCode1)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">created_at</label><p className="m-0 ml-3" >{_entity?.createdAt}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">updated_at</label><p className="m-0 ml-3" >{_entity?.updatedAt}</p></div>
            

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

export default connect(mapState, mapDispatch)(SingleVendorAddressPage);
