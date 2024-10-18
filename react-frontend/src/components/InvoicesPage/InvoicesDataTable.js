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

const InvoicesDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading, user}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const p_numberTemplate0 = (rowData, { rowIndex }) => <p >{rowData.branchId}</p>
const p_numberTemplate1 = (rowData, { rowIndex }) => <p >{rowData.customerId}</p>
const p_numberTemplate2 = (rowData, { rowIndex }) => <p >{rowData.invoiceDate}</p>
const p_numberTemplate3 = (rowData, { rowIndex }) => <p >{rowData.categoryId}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.status}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.createdBy}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.source}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.deliveryStatus}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.description}</p>
const p_numberTemplate9 = (rowData, { rowIndex }) => <p >{rowData.createdAt}</p>
const p_numberTemplate10 = (rowData, { rowIndex }) => <p >{rowData.updatedAt}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!true}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "invoices"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="branchId" header="branch_id" body={p_numberTemplate0} filter={selectedFilterFields.includes("branchId")} hidden={selectedHideFields?.includes("branchId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="customerId" header="customer_id" body={p_numberTemplate1} filter={selectedFilterFields.includes("customerId")} hidden={selectedHideFields?.includes("customerId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="invoiceDate" header="invoice_date" body={p_numberTemplate2} filter={selectedFilterFields.includes("invoiceDate")} hidden={selectedHideFields?.includes("invoiceDate")}  sortable style={{ minWidth: "8rem" }} />
<Column field="categoryId" header="category_id" body={p_numberTemplate3} filter={selectedFilterFields.includes("categoryId")} hidden={selectedHideFields?.includes("categoryId")}  sortable style={{ minWidth: "8rem" }} />
<Column field="status" header="status" body={pTemplate4} filter={selectedFilterFields.includes("status")} hidden={selectedHideFields?.includes("status")}  sortable style={{ minWidth: "8rem" }} />
<Column field="createdBy" header="created_by" body={pTemplate5} filter={selectedFilterFields.includes("createdBy")} hidden={selectedHideFields?.includes("createdBy")}  sortable style={{ minWidth: "8rem" }} />
<Column field="source" header="source" body={pTemplate6} filter={selectedFilterFields.includes("source")} hidden={selectedHideFields?.includes("source")}  sortable style={{ minWidth: "8rem" }} />
<Column field="deliveryStatus" header="delivery_status" body={pTemplate7} filter={selectedFilterFields.includes("deliveryStatus")} hidden={selectedHideFields?.includes("deliveryStatus")}  sortable style={{ minWidth: "8rem" }} />
<Column field="description" header="description" body={pTemplate8} filter={selectedFilterFields.includes("description")} hidden={selectedHideFields?.includes("description")}  sortable style={{ minWidth: "8rem" }} />
<Column field="createdAt" header="created_at" body={p_numberTemplate9} filter={selectedFilterFields.includes("createdAt")} hidden={selectedHideFields?.includes("createdAt")}  sortable style={{ minWidth: "8rem" }} />
<Column field="updatedAt" header="updated_at" body={p_numberTemplate10} filter={selectedFilterFields.includes("updatedAt")} hidden={selectedHideFields?.includes("updatedAt")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            
        </DataTable>
        <Dialog header="Upload Invoices Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService 
          user={user} 
          serviceName="invoices"            
          onUploadComplete={() => {
            setShowUpload(false); // Close the dialog after upload
          }}/>
      </Dialog>

      <Dialog header="Search Invoices" visible={searchDialog} onHide={() => setSearchDialog(false)}>
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

export default InvoicesDataTable;