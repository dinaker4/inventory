import React from "react";
import AdminHeader from "./layouts/AdminHeader";
import AdminSideBar from "./layouts/AdminSideBar";
import AdminFooter from "./layouts/AdminFooter";

export default function Dashboard(props) {
  return (
    <>
      <AdminHeader />
      <AdminSideBar />
      <div className="main-panel">
        <div className="content">
          <div className="container-fluid">
            <h4 className="page-title">Dashboard</h4>
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header ">
                    <h4 className="card-title">Table</h4>
                    <p className="card-category">Users Table</p>
                  </div>
                  <div className="card-body">
                    <table className="table table-head-bg-success table-striped table-hover">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Dinaker</td>
                          
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Arjun</td>
                          
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Iraianbu</td>
                          
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AdminFooter />
      </div>
    </>
  );
}
