import {Routes, Route } from "react-router-dom"
import AdminLayout from "./components/admin-view/AdminLayout"
import AuthLayout from "./components/auth/AuthLayout"
import AuthLogin from "./pages/auth/Login"
import AuthRegister from "./pages/auth/Register"

// -------Admin Page Import------
import AdminDashboard from "./pages/admin-view/Dashboard"
import AdminFeatures from "./pages/admin-view/Features"
import AdminOrders from "./pages/admin-view/Orders"
import AdminProducts from "./pages/admin-view/Products"

// -------shop Import-----------
import ShoppingLayout from "./components/shopping-view/ShoppingLayout"
import ShoppingHome from "./pages/shopping-view/Home"
import ShoppingAccount from "./pages/shopping-view/Account"
import ShoppingCheckout from "./pages/shopping-view/Checkout"
import ShoppingListing from "./pages/shopping-view/Listing"
import PaymentSuccess from "./pages/shopping-view/PaymentSuccess"
import PaypalReturn from "./pages/shopping-view/PaypalReturn"

//===Error Page || Not Found Page=====
import NotFound from "./pages/not-found"
import UnauthPage from "./pages/unauth-page"

//====Checkout Page import===
import CheckAuth from "./components/common/CheckAuth"

function App() {

  const isAuthenticated = false;
  const user = null;
 
  return (
    <div className="flex flex-col overflow-hidden bg-white">
        <h1>header</h1>
      {/* common components */}
        <Routes>
         
           <Route path="/auth" element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <AuthLayout/>
                </CheckAuth>}>

                <Route path="login" element={<AuthLogin/>}/>
                <Route path="register" element={<AuthRegister/>}/>
           </Route>


           {/* =====Admin Routes==== */}

            <Route path="/admin" element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <AdminLayout/>
                </CheckAuth>}>

                <Route path="dashboard" element={<AdminDashboard/>}/>
                <Route path="features" element={<AdminFeatures/>}/>
                <Route path="orders" element={<AdminOrders/>}/>
                <Route path="products" element={<AdminProducts/>}/>
            </Route>


            {/* =====Shopping Routes==== */}

            <Route path="shop" element={
                <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                  <ShoppingLayout/>
                </CheckAuth>
              }>
                <Route path="home" element={<ShoppingHome/>} />
                <Route path="account" element={<ShoppingAccount/>}/>
                <Route path="checkout" element={<ShoppingCheckout/>}/>
                <Route path="listing" element={<ShoppingListing/>}/>
                <Route path="paymentsuccess" element={<PaymentSuccess/>}/>
                <Route path="paypal-return" element={<PaypalReturn/>}/>
            </Route>

          {/* ===Error Page || Not Found Page===== */}
            <Route path="*" element={<NotFound/>}/>
            <Route path="unauth-page" element={<UnauthPage/>}/>

        </Routes>
       
    </div>
  )
}

export default App
