import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import NoMatch from "./NoMatch";

import LoginPage from "../components/LoginPage/LoginPage";
import SignUpPage from "../components/LoginPage/signUp/SignUpPage";
import ResetPage from "../components/LoginPage/ResetPage";
import Dashboard from "../components/Dashboard/Dashboard";
import ProjectLayout from "../components/Layouts/ProjectLayout";
import MaintenancePage from "../components/MaintenancePage";
import LoginFaqPage from "../components/LoginPage/LoginFaqPage";

import Account from "../components/cb_components/Account/Account";
import SingleUsersPage from "../components/cb_components/UsersPage/SingleUsersPage";
import UserProjectLayoutPage from "../components/cb_components/UsersPage/UserProjectLayoutPage";
import SingleUserInvitesPage from "../components/cb_components/UserInvitesPage/SingleUserInvitesPage";
import UserInvitesProjectLayoutPage from "../components/cb_components/UserInvitesPage/UserInvitesProjectLayoutPage";
import SingleCompaniesPage from "../components/cb_components/CompaniesPage/SingleCompaniesPage";
import CompanyProjectLayoutPage from "../components/cb_components/CompaniesPage/CompanyProjectLayoutPage";
import SingleBranchesPage from "../components/cb_components/BranchesPage/SingleBranchesPage";
import BranchProjectLayoutPage from "../components/cb_components/BranchesPage/BranchProjectLayoutPage";
import SingleDepartmentsPage from "../components/cb_components/DepartmentsPage/SingleDepartmentsPage";
import DepartmentProjectLayoutPage from "../components/cb_components/DepartmentsPage/DepartmentProjectLayoutPage";
import SingleSectionsPage from "../components/cb_components/SectionsPage/SingleSectionsPage";
import SectionProjectLayoutPage from "../components/cb_components/SectionsPage/SectionProjectLayoutPage";
import SingleRolesPage from "../components/cb_components/RolesPage/SingleRolesPage";
import RoleProjectLayoutPage from "../components/cb_components/RolesPage/RoleProjectLayoutPage";
import SinglePositionsPage from "../components/cb_components/PositionsPage/SinglePositionsPage";
import PositionProjectLayoutPage from "../components/cb_components/PositionsPage/PositionProjectLayoutPage";
import SingleTemplatesPage from "../components/cb_components/TemplatesPage/SingleTemplatesPage";
import TemplateProjectLayoutPage from "../components/cb_components/TemplatesPage/TemplateProjectLayoutPage";
import SingleMailsPage from "../components/cb_components/MailsPage/SingleMailsPage";
import MailProjectLayoutPage from "../components/cb_components/MailsPage/MailProjectLayoutPage";
import SingleUserAddressesPage from "../components/cb_components/UserAddressesPage/SingleUserAddressesPage";
import UserAddressProjectLayoutPage from "../components/cb_components/UserAddressesPage/UserAddressProjectLayoutPage";
import SingleCompanyAddressesPage from "../components/cb_components/CompanyAddressesPage/SingleCompanyAddressesPage";
import CompanyAddressProjectLayoutPage from "../components/cb_components/CompanyAddressesPage/CompanyAddressProjectLayoutPage";
import SingleCompanyPhonesPage from "../components/cb_components/CompanyPhonesPage/SingleCompanyPhonesPage";
import CompanyPhoneProjectLayoutPage from "../components/cb_components/CompanyPhonesPage/CompanyPhoneProjectLayoutPage";
import SingleUserPhonesPage from "../components/cb_components/UserPhonesPage/SingleUserPhonesPage";
import UserPhoneProjectLayoutPage from "../components/cb_components/UserPhonesPage/UserPhoneProjectLayoutPage";
import StaffinfoProjectLayoutPage from "../components/cb_components/StaffinfoPage/StaffinfoProjectLayoutPage";
import SingleProfilesPage from "../components/cb_components/ProfilesPage/SingleProfilesPage";
import ProfileProjectLayoutPage from "../components/cb_components/ProfilesPage/ProfileProjectLayoutPage";
import SinglePermissionServicesPage from "../components/cb_components/PermissionServicesPage/SinglePermissionServicesPage";
import PermissionServiceProjectLayoutPage from "../components/cb_components/PermissionServicesPage/PermissionServiceProjectLayoutPage";
import SinglePermissionFieldsPage from "../components/cb_components/PermissionFieldsPage/SinglePermissionFieldsPage";
import PermissionFieldProjectLayoutPage from "../components/cb_components/PermissionFieldsPage/PermissionFieldProjectLayoutPage";
import SingleDynaLoaderPage from "../components/cb_components/DynaLoaderPage/SingleDynaLoaderPage";
import SingleDynaFieldsPage from "../components/cb_components/DynaFieldsPage/SingleDynaFieldsPage";
import DynaLoaderProjectLayoutPage from "../components/cb_components/DynaLoaderPage/DynaLoaderProjectLayoutPage";
import DynaFieldsProjectLayoutPage from "../components/cb_components/DynaFieldsPage/DynaFieldsProjectLayoutPage";
import SingleStaffinfoPage from "../components/cb_components/StaffinfoPage/SingleStaffinfoPage";

import SingleJobQuesPage from "../components/cb_components/JobQuesPage/SingleJobQuesPage";
import JobQueProjectLayoutPage from "../components/cb_components/JobQuesPage/JobQueProjectLayoutPage";
import SingleEmployeesPage from "../components/cb_components/EmployeesPage/SingleEmployeesPage";
import EmployeeProjectLayoutPage from "../components/cb_components/EmployeesPage/EmployeeProjectLayoutPage";
import SingleMailQuesPage from "../components/cb_components/MailQuesPage/SingleMailQuesPage";
import MailQueProjectLayoutPage from "../components/cb_components/MailQuesPage/MailQueProjectLayoutPage";
import SingleSuperiorPage from "../components/cb_components/SuperiorPage/SingleSuperiorPage";
import SuperiorProjectLayoutPage from "../components/cb_components/SuperiorPage/SuperiorProjectLayoutPage";
import ChataiProjectLayoutPage from "../components/cb_components/ChatAiProjectLayout/ChataiProjectLayoutPage";
import ChataiUserLayoutPage from "../components/cb_components/ChataiPage/UserLayoutPage";
import SingleChataiPage from "../components/cb_components/ChataiPage/SingleChataiPage";
import PromptsUserLayoutPage from "../components/cb_components/PromptsPage/UserLayoutPage";
import SinglePromptsPage from "../components/cb_components/PromptsPage/SinglePromptsPage";

import SingleDepartmentAdminPage from "../components/cb_components/DepartmentAdminPage/SingleDepartmentAdminPage";
import DepartmentAdminProjectLayoutPage from "../components/cb_components/DepartmentAdminPage/DepartmentAdminProjectLayoutPage";
import SingleDepartmentHODPage from "../components/cb_components/DepartmentHODPage/SingleDepartmentHODPage";
import DepartmentHODProjectLayoutPage from "../components/cb_components/DepartmentHODPage/DepartmentHODProjectLayoutPage";
import SingleDepartmentHOSPage from "../components/cb_components/DepartmentHOSPage/SingleDepartmentHOSPage";
import DepartmentHOProjectLayoutPage from "../components/cb_components/DepartmentHOSPage/DepartmentHOProjectLayoutPage";
import SingleMailWHPage from "../components/cb_components/MailWHPage/SingleMailWHPage";
import MailWHProjectLayoutPage from "../components/cb_components/MailWHPage/MailWHProjectLayoutPage";
import SingleInboxPage from "../components/cb_components/InboxPage/SingleInboxPage";
import InboxProjectLayoutPage from "../components/cb_components/InboxPage/InboxProjectLayoutPage";
import SingleNotificationsPage from "../components/cb_components/NotificationsPage/SingleNotificationsPage";
import NotificationProjectLayoutPage from "../components/cb_components/NotificationsPage/NotificationProjectLayoutPage";
import SingleErrorsPage from "../components/cb_components/ErrorsPage/SingleErrorsPage";
import ErrorProjectLayoutPage from "../components/cb_components/ErrorsPage/ErrorProjectLayoutPage";
import SingleErrorsWHPage from "../components/cb_components/ErrorsWHPage/SingleErrorsWHPage";
import ErrorsWHProjectLayoutPage from "../components/cb_components/ErrorsWHPage/ErrorsWHProjectLayoutPage";
import SingleUserLoginPage from "../components/cb_components/UserLoginPage/SingleUserLoginPage";
import UserLoginProjectLayoutPage from "../components/cb_components/UserLoginPage/UserLoginProjectLayoutPage";
import SingleUserChangePasswordPage from "../components/cb_components/UserChangePasswordPage/SingleUserChangePasswordPage";
import UserChangePasswordProjectLayoutPage from "../components/cb_components/UserChangePasswordPage/UserChangePasswordProjectLayoutPage";

import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import UserProjectLayoutPage from "../components/UsersPage/UserProjectLayoutPage";
import SingleSheet1Page from "../components/Sheet1Page/SingleSheet1Page";
import Sheet1ProjectLayoutPage from "../components/Sheet1Page/Sheet1ProjectLayoutPage";
import SingleCustomersPage from "../components/CustomersPage/SingleCustomersPage";
import CustomerProjectLayoutPage from "../components/CustomersPage/CustomerProjectLayoutPage";
import SingleCustomerTypesPage from "../components/CustomerTypesPage/SingleCustomerTypesPage";
import CustomerTypeProjectLayoutPage from "../components/CustomerTypesPage/CustomerTypeProjectLayoutPage";
import SingleAddressesPage from "../components/AddressesPage/SingleAddressesPage";
import AddressProjectLayoutPage from "../components/AddressesPage/AddressProjectLayoutPage";
import SingleVendorsPage from "../components/VendorsPage/SingleVendorsPage";
import VendorProjectLayoutPage from "../components/VendorsPage/VendorProjectLayoutPage";
import SingleVendorAddressPage from "../components/VendorAddressPage/SingleVendorAddressPage";
import VendorAddressProjectLayoutPage from "../components/VendorAddressPage/VendorAddressProjectLayoutPage";
import SingleProductServicesPage from "../components/ProductServicesPage/SingleProductServicesPage";
import ProductServiceProjectLayoutPage from "../components/ProductServicesPage/ProductServiceProjectLayoutPage";
import SingleCategoriesPage from "../components/CategoriesPage/SingleCategoriesPage";
import CategoryProjectLayoutPage from "../components/CategoriesPage/CategoryProjectLayoutPage";
import SingleUnitPage from "../components/UnitPage/SingleUnitPage";
import UnitProjectLayoutPage from "../components/UnitPage/UnitProjectLayoutPage";
import SingleProductBranchesPage from "../components/ProductBranchesPage/SingleProductBranchesPage";
import ProductBranchProjectLayoutPage from "../components/ProductBranchesPage/ProductBranchProjectLayoutPage";
import SingleVariationsPage from "../components/VariationsPage/SingleVariationsPage";
import VariationProjectLayoutPage from "../components/VariationsPage/VariationProjectLayoutPage";
import SingleQrMastersPage from "../components/QrMastersPage/SingleQrMastersPage";
import QrMasterProjectLayoutPage from "../components/QrMastersPage/QrMasterProjectLayoutPage";
import SingleWarehousesPage from "../components/WarehousesPage/SingleWarehousesPage";
import WarehouseProjectLayoutPage from "../components/WarehousesPage/WarehouseProjectLayoutPage";
import SingleBranchesPage from "../components/BranchesPage/SingleBranchesPage";
import BranchProjectLayoutPage from "../components/BranchesPage/BranchProjectLayoutPage";
import SinglePosListsPage from "../components/PosListsPage/SinglePosListsPage";
import PosListProjectLayoutPage from "../components/PosListsPage/PosListProjectLayoutPage";
import SingleInvoicesPage from "../components/InvoicesPage/SingleInvoicesPage";
import InvoiceProjectLayoutPage from "../components/InvoicesPage/InvoiceProjectLayoutPage";
import SingleInvoiceProductsPage from "../components/InvoiceProductsPage/SingleInvoiceProductsPage";
import InvoiceProductProjectLayoutPage from "../components/InvoiceProductsPage/InvoiceProductProjectLayoutPage";
import SinglePaymentMethodsPage from "../components/PaymentMethodsPage/SinglePaymentMethodsPage";
import PaymentMethodProjectLayoutPage from "../components/PaymentMethodsPage/PaymentMethodProjectLayoutPage";
import SingleDeliveryPage from "../components/DeliveryPage/SingleDeliveryPage";
import DeliveryProjectLayoutPage from "../components/DeliveryPage/DeliveryProjectLayoutPage";
import SingleDeliveryDetailPage from "../components/DeliveryDetailPage/SingleDeliveryDetailPage";
import DeliveryDetailProjectLayoutPage from "../components/DeliveryDetailPage/DeliveryDetailProjectLayoutPage";
import SingleDeliveryMethodPage from "../components/DeliveryMethodPage/SingleDeliveryMethodPage";
import DeliveryMethodProjectLayoutPage from "../components/DeliveryMethodPage/DeliveryMethodProjectLayoutPage";
import SingleInvoiceTemplatePage from "../components/InvoiceTemplatePage/SingleInvoiceTemplatePage";
import InvoiceTemplateProjectLayoutPage from "../components/InvoiceTemplatePage/InvoiceTemplateProjectLayoutPage";
import SingleInvoiceTypePage from "../components/InvoiceTypePage/SingleInvoiceTypePage";
import InvoiceTypeProjectLayoutPage from "../components/InvoiceTypePage/InvoiceTypeProjectLayoutPage";
import SingleInvoicePaymentPage from "../components/InvoicePaymentPage/SingleInvoicePaymentPage";
import InvoicePaymentProjectLayoutPage from "../components/InvoicePaymentPage/InvoicePaymentProjectLayoutPage";
import SinglePurchasePage from "../components/PurchasePage/SinglePurchasePage";
import PurchaseProjectLayoutPage from "../components/PurchasePage/PurchaseProjectLayoutPage";
import SinglePurchaseProductPage from "../components/PurchaseProductPage/SinglePurchaseProductPage";
import PurchaseProductProjectLayoutPage from "../components/PurchaseProductPage/PurchaseProductProjectLayoutPage";
import SinglePurchaseTypePage from "../components/PurchaseTypePage/SinglePurchaseTypePage";
import PurchaseTypeProjectLayoutPage from "../components/PurchaseTypePage/PurchaseTypeProjectLayoutPage";
import SinglePurchasePaymentPage from "../components/PurchasePaymentPage/SinglePurchasePaymentPage";
import PurchasePaymentProjectLayoutPage from "../components/PurchasePaymentPage/PurchasePaymentProjectLayoutPage";
import SingleTransactionPage from "../components/TransactionPage/SingleTransactionPage";
import TransactionProjectLayoutPage from "../components/TransactionPage/TransactionProjectLayoutPage";
import SingleNewsPage from "../components/NewsPage/SingleNewsPage";
import NewsProjectLayoutPage from "../components/NewsPage/NewsProjectLayoutPage";
import SingleCalendarPage from "../components/CalendarPage/SingleCalendarPage";
import CalendarProjectLayoutPage from "../components/CalendarPage/CalendarProjectLayoutPage";
import SingleProjectPage from "../components/ProjectPage/SingleProjectPage";
import ProjectProjectLayoutPage from "../components/ProjectPage/ProjectProjectLayoutPage";
import SingleMilestonePage from "../components/MilestonePage/SingleMilestonePage";
import MilestoneProjectLayoutPage from "../components/MilestonePage/MilestoneProjectLayoutPage";
import SingleProjectUserPage from "../components/ProjectUserPage/SingleProjectUserPage";
import ProjectUserProjectLayoutPage from "../components/ProjectUserPage/ProjectUserProjectLayoutPage";
import SingleProjectClientPage from "../components/ProjectClientPage/SingleProjectClientPage";
import ProjectClientProjectLayoutPage from "../components/ProjectClientPage/ProjectClientProjectLayoutPage";
import SingleProjectAttachmentPage from "../components/ProjectAttachmentPage/SingleProjectAttachmentPage";
import ProjectAttachmentProjectLayoutPage from "../components/ProjectAttachmentPage/ProjectAttachmentProjectLayoutPage";
// ~cb-add-import~

const MyRouter = (props) => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={props.isLoggedIn ? <ProjectLayout /> : <LoginPage />}
      />
      <Route path="/dashboard" exact element={<Dashboard />} />
      <Route path="/login" exact element={<LoginPage />} />
      <Route
        path="/reset/:singleChangeForgotPasswordId"
        exact
        element={<ResetPage />}
      />
      <Route path="/signup" exact element={<SignUpPage />} />
      <Route path="/maintenance" exact element={<MaintenancePage />} />
      <Route path="/login-faq" exact element={<LoginFaqPage />} />

      <Route element={<ProtectedRoute redirectPath={"/login"} />}>
        <Route path="/project" exact element={<ProjectLayout />} />
        <Route path="/account" exact element={<Account />} />
        <Route
          path="/users/:singleUsersId"
          exact
          element={<SingleUsersPage />}
        />
        <Route path="/users" exact element={<UserProjectLayoutPage />} />
        <Route
          path="/userInvites/:singleUserInvitesId"
          exact
          element={<SingleUserInvitesPage />}
        />
        <Route
          path="/userInvites"
          exact
          element={<UserInvitesProjectLayoutPage />}
        />

        <Route
          path="/companies/:singleCompaniesId"
          exact
          element={<SingleCompaniesPage />}
        />
        <Route
          path="/branches/:singleBranchesId"
          exact
          element={<SingleBranchesPage />}
        />
        <Route
          path="/departments/:singleDepartmentsId"
          exact
          element={<SingleDepartmentsPage />}
        />
        <Route
          path="/sections/:singleSectionsId"
          exact
          element={<SingleSectionsPage />}
        />
        <Route
          path="/roles/:singleRolesId"
          exact
          element={<SingleRolesPage />}
        />
        <Route
          path="/positions/:singlePositionsId"
          exact
          element={<SinglePositionsPage />}
        />
        <Route
          path="/profiles/:singleProfilesId"
          exact
          element={<SingleProfilesPage />}
        />
        <Route
          path="/templates/:singleTemplatesId"
          exact
          element={<SingleTemplatesPage />}
        />
        <Route
          path="/mails/:singleMailsId"
          exact
          element={<SingleMailsPage />}
        />
        <Route
          path="/permissionServices/:singlePermissionServicesId"
          exact
          element={<SinglePermissionServicesPage />}
        />
        <Route
          path="/permissionFields/:singlePermissionFieldsId"
          exact
          element={<SinglePermissionFieldsPage />}
        />
        <Route
          path="/userAddresses/:singleUserAddressesId"
          exact
          element={<SingleUserAddressesPage />}
        />
        <Route
          path="/companyAddresses/:singleCompanyAddressesId"
          exact
          element={<SingleCompanyAddressesPage />}
        />
        <Route
          path="/companyPhones/:singleCompanyPhonesId"
          exact
          element={<SingleCompanyPhonesPage />}
        />
        <Route
          path="/userPhones/:singleUserPhonesId"
          exact
          element={<SingleUserPhonesPage />}
        />

        <Route path="/companies" exact element={<CompanyProjectLayoutPage />} />
        <Route path="/branches" exact element={<BranchProjectLayoutPage />} />
        <Route
          path="/departments"
          exact
          element={<DepartmentProjectLayoutPage />}
        />
        <Route path="/sections" exact element={<SectionProjectLayoutPage />} />
        <Route path="/roles" exact element={<RoleProjectLayoutPage />} />
        <Route
          path="/positions"
          exact
          element={<PositionProjectLayoutPage />}
        />
        <Route path="/profiles" exact element={<ProfileProjectLayoutPage />} />
        <Route
          path="/templates"
          exact
          element={<TemplateProjectLayoutPage />}
        />
        <Route path="/mails" exact element={<MailProjectLayoutPage />} />
        <Route
          path="/permissionServices"
          exact
          element={<PermissionServiceProjectLayoutPage />}
        />
        <Route
          path="/permissionFields"
          exact
          element={<PermissionFieldProjectLayoutPage />}
        />
        <Route
          path="/userAddresses"
          exact
          element={<UserAddressProjectLayoutPage />}
        />
        <Route
          path="/companyAddresses"
          exact
          element={<CompanyAddressProjectLayoutPage />}
        />
        <Route
          path="/companyPhones"
          exact
          element={<CompanyPhoneProjectLayoutPage />}
        />
        <Route
          path="/userPhones"
          exact
          element={<UserPhoneProjectLayoutPage />}
        />
        <Route
          path="/dynaLoader"
          exact
          element={<DynaLoaderProjectLayoutPage />}
        />
        <Route
          path="/dynaFields"
          exact
          element={<DynaFieldsProjectLayoutPage />}
        />
        <Route
          path="/staffinfo"
          exact
          element={<StaffinfoProjectLayoutPage />}
        />
        <Route
          path="/dynaLoader/:singleDynaLoaderId"
          exact
          element={<SingleDynaLoaderPage />}
        />
        <Route
          path="/dynaFields/:singleDynaFieldsId"
          exact
          element={<SingleDynaFieldsPage />}
        />
        <Route
          path="/staffinfo/:singleStaffinfoId"
          exact
          element={<SingleStaffinfoPage />}
        />
        <Route path="/jobQues" exact element={<JobQueProjectLayoutPage />} />
        <Route
          path="/jobQues/:singleJobQuesId"
          exact
          element={<SingleJobQuesPage />}
        />
        <Route
          path="/employees/:singleEmployeesId"
          exact
          element={<SingleEmployeesPage />}
        />
        <Route
          path="/mailQues/:singleMailQuesId"
          exact
          element={<SingleMailQuesPage />}
        />
        <Route path="/jobQues" exact element={<JobQueProjectLayoutPage />} />
        <Route
          path="/employees"
          exact
          element={<EmployeeProjectLayoutPage />}
        />
        <Route path="/mailQues" exact element={<MailQueProjectLayoutPage />} />
        <Route
          path="/superior/:singleSuperiorId"
          exact
          element={<SingleSuperiorPage />}
        />
        <Route path="/superior" exact element={<SuperiorProjectLayoutPage />} />
        <Route path="/chataiProject" element={<ChataiProjectLayoutPage />} />
        <Route
          path="/chataiProject/:promptId"
          element={<ChataiProjectLayoutPage />}
        />
        <Route path="/chatai" exact element={<ChataiUserLayoutPage />} />
        <Route
          path="/chatai/:singleChataiId"
          exact
          element={<SingleChataiPage />}
        />
        <Route path="/prompts" exact element={<PromptsUserLayoutPage />} />
        <Route
          path="/prompts/:singlePromptsId"
          exact
          element={<SinglePromptsPage />}
        />
        <Route
          path="/jobQues/:singleJobQuesId"
          exact
          element={<SingleJobQuesPage />}
        />
        <Route
          path="/mailQues/:singleMailQuesId"
          exact
          element={<SingleMailQuesPage />}
        />
        <Route
          path="/superior/:singleSuperiorId"
          exact
          element={<SingleSuperiorPage />}
        />
        <Route
          path="/departmentAdmin/:singleDepartmentAdminId"
          exact
          element={<SingleDepartmentAdminPage />}
        />
        <Route
          path="/departmentAdmin"
          exact
          element={<DepartmentAdminProjectLayoutPage />}
        />
        <Route
          path="/departmentHOD/:singleDepartmentHODId"
          exact
          element={<SingleDepartmentHODPage />}
        />
        <Route
          path="/departmentHOD"
          exact
          element={<DepartmentHODProjectLayoutPage />}
        />
        <Route
          path="/departmentHOS/:singleDepartmentHOSId"
          exact
          element={<SingleDepartmentHOSPage />}
        />
        <Route
          path="/departmentHOS"
          exact
          element={<DepartmentHOProjectLayoutPage />}
        />
        <Route
          path="/mailWH/:singleMailWHId"
          exact
          element={<SingleMailWHPage />}
        />
        <Route path="/mailWH" exact element={<MailWHProjectLayoutPage />} />
        <Route
          path="/inbox/:singleInboxId"
          exact
          element={<SingleInboxPage />}
        />
        <Route path="/inbox" exact element={<InboxProjectLayoutPage />} />
        <Route
          path="/notifications/:singleNotificationsId"
          exact
          element={<SingleNotificationsPage />}
        />
        <Route
          path="/notifications"
          exact
          element={<NotificationProjectLayoutPage />}
        />
        <Route
          path="/errors/:singleErrorsId"
          exact
          element={<SingleErrorsPage />}
        />
        <Route path="/errors" exact element={<ErrorProjectLayoutPage />} />
        <Route
          path="/errorsWH/:singleErrorsWHId"
          exact
          element={<SingleErrorsWHPage />}
        />
        <Route path="/errorsWH" exact element={<ErrorsWHProjectLayoutPage />} />
        <Route
          path="/permissionFields/:singlePermissionFieldsId"
          exact
          element={<SinglePermissionFieldsPage />}
        />
        <Route
          path="/permissionFields"
          exact
          element={<PermissionFieldProjectLayoutPage />}
        />
        <Route
          path="/permissionServices/:singlePermissionServicesId"
          exact
          element={<SinglePermissionServicesPage />}
        />
        <Route
          path="/permissionServices"
          exact
          element={<PermissionServiceProjectLayoutPage />}
        />
        <Route
          path="/userInvites/:singleUserInvitesId"
          exact
          element={<SingleUserInvitesPage />}
        />
        <Route
          path="/userInvites"
          exact
          element={<UserInvitesProjectLayoutPage />}
        />
        <Route
          path="/userLogin/:singleUserLoginId"
          exact
          element={<SingleUserLoginPage />}
        />
        <Route
          path="/userLogin"
          exact
          element={<UserLoginProjectLayoutPage />}
        />
        <Route
          path="/employees/:singleEmployeesId"
          exact
          element={<SingleEmployeesPage />}
        />
        <Route
          path="/employees"
          exact
          element={<EmployeeProjectLayoutPage />}
        />
        <Route
          path="/userChangePassword/:singleUserChangePasswordId"
          exact
          element={<SingleUserChangePasswordPage />}
        />
        <Route
          path="/userChangePassword"
          exact
          element={<UserChangePasswordProjectLayoutPage />}
        />

<Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
<Route path="/sheet1/:singleSheet1Id" exact element={<SingleSheet1Page />} />
<Route path="/sheet1" exact element={<Sheet1ProjectLayoutPage />} />
<Route path="/customers/:singleCustomersId" exact element={<SingleCustomersPage />} />
<Route path="/customers" exact element={<CustomerProjectLayoutPage />} />
<Route path="/customerTypes/:singleCustomerTypesId" exact element={<SingleCustomerTypesPage />} />
<Route path="/customerTypes" exact element={<CustomerTypeProjectLayoutPage />} />
<Route path="/addresses/:singleAddressesId" exact element={<SingleAddressesPage />} />
<Route path="/addresses" exact element={<AddressProjectLayoutPage />} />
<Route path="/vendors/:singleVendorsId" exact element={<SingleVendorsPage />} />
<Route path="/vendors" exact element={<VendorProjectLayoutPage />} />
<Route path="/vendorAddress/:singleVendorAddressId" exact element={<SingleVendorAddressPage />} />
<Route path="/vendorAddress" exact element={<VendorAddressProjectLayoutPage />} />
<Route path="/productServices/:singleProductServicesId" exact element={<SingleProductServicesPage />} />
<Route path="/productServices" exact element={<ProductServiceProjectLayoutPage />} />
<Route path="/categories/:singleCategoriesId" exact element={<SingleCategoriesPage />} />
<Route path="/categories" exact element={<CategoryProjectLayoutPage />} />
<Route path="/unit/:singleUnitId" exact element={<SingleUnitPage />} />
<Route path="/unit" exact element={<UnitProjectLayoutPage />} />
<Route path="/productBranches/:singleProductBranchesId" exact element={<SingleProductBranchesPage />} />
<Route path="/productBranches" exact element={<ProductBranchProjectLayoutPage />} />
<Route path="/variations/:singleVariationsId" exact element={<SingleVariationsPage />} />
<Route path="/variations" exact element={<VariationProjectLayoutPage />} />
<Route path="/qrMasters/:singleQrMastersId" exact element={<SingleQrMastersPage />} />
<Route path="/qrMasters" exact element={<QrMasterProjectLayoutPage />} />
<Route path="/warehouses/:singleWarehousesId" exact element={<SingleWarehousesPage />} />
<Route path="/warehouses" exact element={<WarehouseProjectLayoutPage />} />
<Route path="/branches/:singleBranchesId" exact element={<SingleBranchesPage />} />
<Route path="/posLists/:singlePosListsId" exact element={<SinglePosListsPage />} />
<Route path="/posLists" exact element={<PosListProjectLayoutPage />} />
<Route path="/invoices/:singleInvoicesId" exact element={<SingleInvoicesPage />} />
<Route path="/invoices" exact element={<InvoiceProjectLayoutPage />} />
<Route path="/invoiceProducts/:singleInvoiceProductsId" exact element={<SingleInvoiceProductsPage />} />
<Route path="/invoiceProducts" exact element={<InvoiceProductProjectLayoutPage />} />
<Route path="/paymentMethods/:singlePaymentMethodsId" exact element={<SinglePaymentMethodsPage />} />
<Route path="/paymentMethods" exact element={<PaymentMethodProjectLayoutPage />} />
<Route path="/delivery/:singleDeliveryId" exact element={<SingleDeliveryPage />} />
<Route path="/delivery" exact element={<DeliveryProjectLayoutPage />} />
<Route path="/deliveryDetail/:singleDeliveryDetailId" exact element={<SingleDeliveryDetailPage />} />
<Route path="/deliveryDetail" exact element={<DeliveryDetailProjectLayoutPage />} />
<Route path="/deliveryMethod/:singleDeliveryMethodId" exact element={<SingleDeliveryMethodPage />} />
<Route path="/deliveryMethod" exact element={<DeliveryMethodProjectLayoutPage />} />
<Route path="/invoiceTemplate/:singleInvoiceTemplateId" exact element={<SingleInvoiceTemplatePage />} />
<Route path="/invoiceTemplate" exact element={<InvoiceTemplateProjectLayoutPage />} />
<Route path="/invoiceType/:singleInvoiceTypeId" exact element={<SingleInvoiceTypePage />} />
<Route path="/invoiceType" exact element={<InvoiceTypeProjectLayoutPage />} />
<Route path="/invoicePayment/:singleInvoicePaymentId" exact element={<SingleInvoicePaymentPage />} />
<Route path="/invoicePayment" exact element={<InvoicePaymentProjectLayoutPage />} />
<Route path="/purchase/:singlePurchaseId" exact element={<SinglePurchasePage />} />
<Route path="/purchase" exact element={<PurchaseProjectLayoutPage />} />
<Route path="/purchaseProduct/:singlePurchaseProductId" exact element={<SinglePurchaseProductPage />} />
<Route path="/purchaseProduct" exact element={<PurchaseProductProjectLayoutPage />} />
<Route path="/purchaseType/:singlePurchaseTypeId" exact element={<SinglePurchaseTypePage />} />
<Route path="/purchaseType" exact element={<PurchaseTypeProjectLayoutPage />} />
<Route path="/purchasePayment/:singlePurchasePaymentId" exact element={<SinglePurchasePaymentPage />} />
<Route path="/purchasePayment" exact element={<PurchasePaymentProjectLayoutPage />} />
<Route path="/transaction/:singleTransactionId" exact element={<SingleTransactionPage />} />
<Route path="/transaction" exact element={<TransactionProjectLayoutPage />} />
<Route path="/news/:singleNewsId" exact element={<SingleNewsPage />} />
<Route path="/news" exact element={<NewsProjectLayoutPage />} />
<Route path="/calendar/:singleCalendarId" exact element={<SingleCalendarPage />} />
<Route path="/calendar" exact element={<CalendarProjectLayoutPage />} />
<Route path="/project/:singleProjectId" exact element={<SingleProjectPage />} />
<Route path="/project" exact element={<ProjectProjectLayoutPage />} />
<Route path="/milestone/:singleMilestoneId" exact element={<SingleMilestonePage />} />
<Route path="/milestone" exact element={<MilestoneProjectLayoutPage />} />
<Route path="/projectUser/:singleProjectUserId" exact element={<SingleProjectUserPage />} />
<Route path="/projectUser" exact element={<ProjectUserProjectLayoutPage />} />
<Route path="/projectClient/:singleProjectClientId" exact element={<SingleProjectClientPage />} />
<Route path="/projectClient" exact element={<ProjectClientProjectLayoutPage />} />
<Route path="/projectAttachment/:singleProjectAttachmentId" exact element={<SingleProjectAttachmentPage />} />
<Route path="/projectAttachment" exact element={<ProjectAttachmentProjectLayoutPage />} />
        {/* ~cb-add-protected-route~ */}
      </Route>
      {/* ~cb-add-route~ */}

      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

const mapState = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data)
});

export default connect(mapState, mapDispatch)(MyRouter);
