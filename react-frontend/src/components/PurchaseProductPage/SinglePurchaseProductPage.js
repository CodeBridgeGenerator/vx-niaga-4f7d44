import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SinglePurchaseProductPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("purchaseProduct")
            .get(urlParams.singlePurchaseProductId, { query: { $populate: [            {
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
                props.alert({ title: "PurchaseProduct", type: "error", message: error.message || "Failed get purchaseProduct" });
            });
    }, [props,urlParams.singlePurchaseProductId]);


    const goBack = () => {
        navigate("/purchaseProduct");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Purchase Product</h3>
                </div>
                <p>purchaseProduct/{urlParams.singlePurchaseProductId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">purchase_id</label><p className="m-0 ml-3" >{Number(_entity?.purchaseId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">product_id</label><p className="m-0 ml-3" >{Number(_entity?.productId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">variation_id</label><p className="m-0 ml-3" >{Number(_entity?.variationId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">quantity</label><p className="m-0 ml-3" >{Number(_entity?.quantity)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">price</label><p className="m-0 ml-3" >{Number(_entity?.price)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">tax</label><p className="m-0 ml-3" >{Number(_entity?.tax)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">discount</label><p className="m-0 ml-3" >{Number(_entity?.discount)}</p></div>
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

export default connect(mapState, mapDispatch)(SinglePurchaseProductPage);
