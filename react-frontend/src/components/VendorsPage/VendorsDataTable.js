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

const VendorsDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const p_numberTemplate0 = (rowData, { rowIndex }) => <p >{rowData.userId}</p>
const p_numberTemplate1 = (rowData, { rowIndex }) => <p >{rowData.branchId}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.email}</p>
const p_numberTemplate4 = (rowData, { rowIndex }) => <p >{rowData.phoneNumber}</p>
const p_numberTemplate5 = (rowData, { rowIndex }) => <p >{rowData.regNo}</p>
const p_numberTemplate6 = (rowData, { rowIndex }) => <p >{rowData.balance}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.taxNo}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.otherInfo}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.rememberToken}</p>
const pTemplate10 = (rowData, { rowIndex }) => <p >{rowData.createdAt}</p>
const pTemplate11 = (rowData, { rowIndex }) => <p >{rowData.updatedAt}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "vendors"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="userId" header="user_id" body={p_numberTemplate0} filter={selectedFilterFields.includes("userId")} hidden={selectedHideFields?.includes("userId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="branchId" header="branch_id" body={p_numberTemplate1} filter={selectedFilterFields.includes("branchId")} hidden={selectedHideFields?.includes("branchId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="name" header="name" body={pTemplate2} filter={selectedFilterFields.includes("name")} hidden={selectedHideFields?.includes("name")}  sortable style={{ minWidth: "8rem" }} />
<Column field="email" header="email" body={pTemplate3} filter={selectedFilterFields.includes("email")} hidden={selectedHideFields?.includes("email")}  sortable style={{ minWidth: "8rem" }} />
<Column field="phoneNumber" header="phone_number" body={p_numberTemplate4} filter={selectedFilterFields.includes("phoneNumber")} hidden={selectedHideFields?.includes("phoneNumber")}  sortable style={{ minWidth: "8rem" }} />
<Column field="regNo" header="reg_no" body={p_numberTemplate5} filter={selectedFilterFields.includes("regNo")} hidden={selectedHideFields?.includes("regNo")}  sortable style={{ minWidth: "8rem" }} />
<Column field="balance" header="balance" body={p_numberTemplate6} filter={selectedFilterFields.includes("balance")} hidden={selectedHideFields?.includes("balance")}  sortable style={{ minWidth: "8rem" }} />
<Column field="taxNo" header="tax_no" body={pTemplate7} filter={selectedFilterFields.includes("taxNo")} hidden={selectedHideFields?.includes("taxNo")}  sortable style={{ minWidth: "8rem" }} />
<Column field="otherInfo" header="other_info" body={pTemplate8} filter={selectedFilterFields.includes("otherInfo")} hidden={selectedHideFields?.includes("otherInfo")}  sortable style={{ minWidth: "8rem" }} />
<Column field="rememberToken" header="remember_token" body={pTemplate9} filter={selectedFilterFields.includes("rememberToken")} hidden={selectedHideFields?.includes("rememberToken")}  sortable style={{ minWidth: "8rem" }} />
<Column field="createdAt" header="created_at" body={pTemplate10} filter={selectedFilterFields.includes("createdAt")} hidden={selectedHideFields?.includes("createdAt")}  sortable style={{ minWidth: "8rem" }} />
<Column field="updatedAt" header="updated_at" body={pTemplate11} filter={selectedFilterFields.includes("updatedAt")} hidden={selectedHideFields?.includes("updatedAt")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload Vendors Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="vendors"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search Vendors" visible={searchDialog} onHide={() => setSearchDialog(false)}>
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

export default VendorsDataTable;