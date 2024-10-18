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

const VendorAddressDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const p_numberTemplate0 = (rowData, { rowIndex }) => <p >{rowData.customerId}</p>
const p_numberTemplate1 = (rowData, { rowIndex }) => <p >{rowData.branchId}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.shippingAddress1}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.shippingAddress2}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.shippingAddress3}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.shippingCity}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.shippingState}</p>
const p_numberTemplate7 = (rowData, { rowIndex }) => <p >{rowData.postalCode}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.billingAddress1}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.billingAddress2}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.billingAddress3}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.billingCity}</p>
const pTemplate12 = (rowData, { rowIndex }) => <p >{rowData.billingState}</p>
const p_numberTemplate13 = (rowData, { rowIndex }) => <p >{rowData.postalCode1}</p>
const pTemplate14 = (rowData, { rowIndex }) => <p >{rowData.createdAt}</p>
const pTemplate15 = (rowData, { rowIndex }) => <p >{rowData.updatedAt}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "vendorAddress"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="customerId" header="customer_id" body={p_numberTemplate0} filter={selectedFilterFields.includes("customerId")} hidden={selectedHideFields?.includes("customerId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="branchId" header="branch_id" body={p_numberTemplate1} filter={selectedFilterFields.includes("branchId")} hidden={selectedHideFields?.includes("branchId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingAddress1" header="shipping_address_1" body={pTemplate2} filter={selectedFilterFields.includes("shippingAddress1")} hidden={selectedHideFields?.includes("shippingAddress1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingAddress2" header="shipping_address_2" body={pTemplate3} filter={selectedFilterFields.includes("shippingAddress2")} hidden={selectedHideFields?.includes("shippingAddress2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingAddress3" header="shipping_address_3" body={pTemplate4} filter={selectedFilterFields.includes("shippingAddress3")} hidden={selectedHideFields?.includes("shippingAddress3")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingCity" header="shipping_city" body={pTemplate5} filter={selectedFilterFields.includes("shippingCity")} hidden={selectedHideFields?.includes("shippingCity")}  sortable style={{ minWidth: "8rem" }} />
<Column field="shippingState" header="shipping_state" body={pTemplate6} filter={selectedFilterFields.includes("shippingState")} hidden={selectedHideFields?.includes("shippingState")}  sortable style={{ minWidth: "8rem" }} />
<Column field="postalCode" header="postal_code" body={p_numberTemplate7} filter={selectedFilterFields.includes("postalCode")} hidden={selectedHideFields?.includes("postalCode")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingAddress1" header="billing_address_1" body={pTemplate8} filter={selectedFilterFields.includes("billingAddress1")} hidden={selectedHideFields?.includes("billingAddress1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingAddress2" header="billing_address_2" body={pTemplate9} filter={selectedFilterFields.includes("billingAddress2")} hidden={selectedHideFields?.includes("billingAddress2")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingAddress3" header="billing_address_3" body={pTemplate10} filter={selectedFilterFields.includes("billingAddress3")} hidden={selectedHideFields?.includes("billingAddress3")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingCity" header="billing_city" body={pTemplate11} filter={selectedFilterFields.includes("billingCity")} hidden={selectedHideFields?.includes("billingCity")}  sortable style={{ minWidth: "8rem" }} />
<Column field="billingState" header="billing_state" body={pTemplate12} filter={selectedFilterFields.includes("billingState")} hidden={selectedHideFields?.includes("billingState")}  sortable style={{ minWidth: "8rem" }} />
<Column field="postalCode1" header="postal_code_1" body={p_numberTemplate13} filter={selectedFilterFields.includes("postalCode1")} hidden={selectedHideFields?.includes("postalCode1")}  sortable style={{ minWidth: "8rem" }} />
<Column field="createdAt" header="created_at" body={pTemplate14} filter={selectedFilterFields.includes("createdAt")} hidden={selectedHideFields?.includes("createdAt")}  sortable style={{ minWidth: "8rem" }} />
<Column field="updatedAt" header="updated_at" body={pTemplate15} filter={selectedFilterFields.includes("updatedAt")} hidden={selectedHideFields?.includes("updatedAt")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload VendorAddress Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="vendorAddress"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search VendorAddress" visible={searchDialog} onHide={() => setSearchDialog(false)}>
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

export default VendorAddressDataTable;