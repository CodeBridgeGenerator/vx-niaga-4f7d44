import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleVariationsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("variations")
            .get(urlParams.singleVariationsId, { query: { $populate: [            {
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
                props.alert({ title: "Variations", type: "error", message: error.message || "Failed get variations" });
            });
    }, [props,urlParams.singleVariationsId]);


    const goBack = () => {
        navigate("/variations");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Variations</h3>
                </div>
                <p>variations/{urlParams.singleVariationsId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">product_id</label><p className="m-0 ml-3" >{Number(_entity?.productId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">name</label><p className="m-0 ml-3" >{_entity?.name}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">sub_sku</label><p className="m-0 ml-3" >{_entity?.subSku}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">purchase_price</label><p className="m-0 ml-3" >{_entity?.purchasePrice}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">sell_price</label><p className="m-0 ml-3" >{Number(_entity?.sellPrice)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">image_path</label><p className="m-0 ml-3" >{_entity?.imagePath}</p></div>
            

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

export default connect(mapState, mapDispatch)(SingleVariationsPage);
