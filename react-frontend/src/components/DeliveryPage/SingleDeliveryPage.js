import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleDeliveryPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("delivery")
            .get(urlParams.singleDeliveryId, { query: { $populate: [            {
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
                props.alert({ title: "Delivery", type: "error", message: error.message || "Failed get delivery" });
            });
    }, [props,urlParams.singleDeliveryId]);


    const goBack = () => {
        navigate("/delivery");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Delivery</h3>
                </div>
                <p>delivery/{urlParams.singleDeliveryId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">model_type</label><p className="m-0 ml-3" >{_entity?.modelType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">model_id</label><p className="m-0 ml-3" >{Number(_entity?.modelId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">delivery_address</label><p className="m-0 ml-3" >{_entity?.deliveryAddress}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">receiver_name</label><p className="m-0 ml-3" >{_entity?.receiverName}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">receiver_phone</label><p className="m-0 ml-3" >{_entity?.receiverPhone}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">attachment_path</label><p className="m-0 ml-3" >{_entity?.attachmentPath}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">delivery_method</label><p className="m-0 ml-3" >{_entity?.deliveryMethod}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">delivery_note</label><p className="m-0 ml-3" >{_entity?.deliveryNote}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">delivery_status</label><p className="m-0 ml-3" >{_entity?.deliveryStatus}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">consignment_no</label><p className="m-0 ml-3" >{_entity?.consignmentNo}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">consignment_by</label><p className="m-0 ml-3" >{_entity?.consignmentBy}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">delivery_date</label><p className="m-0 ml-3" >{Number(_entity?.deliveryDate)}</p></div>
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

export default connect(mapState, mapDispatch)(SingleDeliveryPage);
