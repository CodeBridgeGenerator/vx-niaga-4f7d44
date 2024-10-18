import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const DeliveryDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const p_numberTemplate0 = (rowData, { rowIndex }) => <p >{rowData.branchId}</p>
const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.modelType}</p>
const p_numberTemplate2 = (rowData, { rowIndex }) => <p >{rowData.modelId}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.deliveryAddress}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.receiverName}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.receiverPhone}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.attachmentPath}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.deliveryMethod}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.deliveryNote}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.deliveryStatus}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.consignmentNo}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.consignmentBy}</p>
const p_numberTemplate12 = (rowData, { rowIndex }) => <p >{rowData.deliveryDate}</p>
const p_numberTemplate13 = (rowData, { rowIndex }) => <p >{rowData.createdAt}</p>
const p_numberTemplate14 = (rowData, { rowIndex }) => <p >{rowData.updatedAt}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "delivery"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="branchId" header="branch_id" body={p_numberTemplate0} filter={selectedFilterFields.includes("branchId")} hidden={selectedHideFields?.includes("branchId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="modelType" header="model_type" body={pTemplate1} filter={selectedFilterFields.includes("modelType")} hidden={selectedHideFields?.includes("modelType")}  sortable style={{ minWidth: "8rem" }} />
<Column field="modelId" header="model_id" body={p_numberTemplate2} filter={selectedFilterFields.includes("modelId")} hidden={selectedHideFields?.includes("modelId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="deliveryAddress" header="delivery_address" body={pTemplate3} filter={selectedFilterFields.includes("deliveryAddress")} hidden={selectedHideFields?.includes("deliveryAddress")}  sortable style={{ minWidth: "8rem" }} />
<Column field="receiverName" header="receiver_name" body={pTemplate4} filter={selectedFilterFields.includes("receiverName")} hidden={selectedHideFields?.includes("receiverName")}  sortable style={{ minWidth: "8rem" }} />
<Column field="receiverPhone" header="receiver_phone" body={pTemplate5} filter={selectedFilterFields.includes("receiverPhone")} hidden={selectedHideFields?.includes("receiverPhone")}  sortable style={{ minWidth: "8rem" }} />
<Column field="attachmentPath" header="attachment_path" body={pTemplate6} filter={selectedFilterFields.includes("attachmentPath")} hidden={selectedHideFields?.includes("attachmentPath")}  sortable style={{ minWidth: "8rem" }} />
<Column field="deliveryMethod" header="delivery_method" body={pTemplate7} filter={selectedFilterFields.includes("deliveryMethod")} hidden={selectedHideFields?.includes("deliveryMethod")}  sortable style={{ minWidth: "8rem" }} />
<Column field="deliveryNote" header="delivery_note" body={pTemplate8} filter={selectedFilterFields.includes("deliveryNote")} hidden={selectedHideFields?.includes("deliveryNote")}  sortable style={{ minWidth: "8rem" }} />
<Column field="deliveryStatus" header="delivery_status" body={pTemplate9} filter={selectedFilterFields.includes("deliveryStatus")} hidden={selectedHideFields?.includes("deliveryStatus")}  sortable style={{ minWidth: "8rem" }} />
<Column field="consignmentNo" header="consignment_no" body={pTemplate10} filter={selectedFilterFields.includes("consignmentNo")} hidden={selectedHideFields?.includes("consignmentNo")}  sortable style={{ minWidth: "8rem" }} />
<Column field="consignmentBy" header="consignment_by" body={pTemplate11} filter={selectedFilterFields.includes("consignmentBy")} hidden={selectedHideFields?.includes("consignmentBy")}  sortable style={{ minWidth: "8rem" }} />
<Column field="deliveryDate" header="delivery_date" body={p_numberTemplate12} filter={selectedFilterFields.includes("deliveryDate")} hidden={selectedHideFields?.includes("deliveryDate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="createdAt" header="created_at" body={p_numberTemplate13} filter={selectedFilterFields.includes("createdAt")} hidden={selectedHideFields?.includes("createdAt")}  sortable style={{ minWidth: "8rem" }} />
<Column field="updatedAt" header="updated_at" body={p_numberTemplate14} filter={selectedFilterFields.includes("updatedAt")} hidden={selectedHideFields?.includes("updatedAt")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload Delivery Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="delivery"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search Delivery" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default DeliveryDataTable;