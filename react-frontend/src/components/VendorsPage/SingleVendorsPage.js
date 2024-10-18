import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleVendorsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("vendors")
            .get(urlParams.singleVendorsId, { query: { $populate: [            {
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
                props.alert({ title: "Vendors", type: "error", message: error.message || "Failed get vendors" });
            });
    }, [props,urlParams.singleVendorsId]);


    const goBack = () => {
        navigate("/vendors");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Vendors</h3>
                </div>
                <p>vendors/{urlParams.singleVendorsId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">user_id</label><p className="m-0 ml-3" >{Number(_entity?.userId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">branch_id</label><p className="m-0 ml-3" >{Number(_entity?.branchId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">name</label><p className="m-0 ml-3" >{_entity?.name}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">email</label><p className="m-0 ml-3" >{_entity?.email}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">phone_number</label><p className="m-0 ml-3" >{Number(_entity?.phoneNumber)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">reg_no</label><p className="m-0 ml-3" >{Number(_entity?.regNo)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">balance</label><p className="m-0 ml-3" >{Number(_entity?.balance)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">tax_no</label><p className="m-0 ml-3" >{_entity?.taxNo}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">other_info</label><p className="m-0 ml-3" >{_entity?.otherInfo}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">remember_token</label><p className="m-0 ml-3" >{_entity?.rememberToken}</p></div>
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

export default connect(mapState, mapDispatch)(SingleVendorsPage);
