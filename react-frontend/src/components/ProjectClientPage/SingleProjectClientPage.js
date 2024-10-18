import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { Tag } from 'primereact/tag';
import moment from "moment";
import { InputText } from 'primereact/inputtext';
import ProjectLayout from "../Layouts/ProjectLayout";


const SingleProjectClientPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    

    useEffect(() => {
        //on mount
        client
            .service("projectClient")
            .get(urlParams.singleProjectClientId, { query: { $populate: [            {
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
                props.alert({ title: "ProjectClient", type: "error", message: error.message || "Failed get projectClient" });
            });
    }, [props,urlParams.singleProjectClientId]);


    const goBack = () => {
        navigate("/projectClient");
    };

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Project Client</h3>
                </div>
                <p>projectClient/{urlParams.singleProjectClientId}</p>
                {/* ~cb-project-dashboard~ */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">user_id</label><p className="m-0 ml-3" >{Number(_entity?.userId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">project_id</label><p className="m-0 ml-3" >{Number(_entity?.projectId)}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-primary">is_active</label><p className="m-0 ml-3" >{_entity?.isActive}</p></div>
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

export default connect(mapState, mapDispatch)(SingleProjectClientPage);
