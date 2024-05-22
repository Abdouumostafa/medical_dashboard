import { Link } from "react-router-dom"
import BaseLayout from "../../layouts/BaseLayout"
import { empty_wallet, morning_img_01, profile_add, scissor } from "../../imagesPath/imagesPath"

const HomePage = () => {
  return (
    <>
      <BaseLayout />

      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
              <div className="dash-widget">
                <div className="dash-boxs comman-flex-center">
                  <img src={profile_add} alt="#" />
                </div>
                <div className="dash-content dash-count">
                  <h4>المرضى</h4>
                  <h2>
                    {/* <CountUp delay={0.4} end={140} duration={0.6} /> */}
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        {/* <FeatherIcon icon="arrow-up-right" /> */}
                      </i>
                      20%
                    </span>{" "}
                    vs last month
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
              <div className="dash-widget">
                <div className="dash-boxs comman-flex-center">
                  <img src={scissor} alt="#" />
                </div>
                <div className="dash-content dash-count">
                  <h4>التوريدات</h4>
                  <h2>
                    {/* <CountUp delay={0.4} end={56} duration={0.6} /> */}
                  </h2>
                  <p>
                    <span className="negative-view">
                      <i className="feather-arrow-down-right me-1">
                        {/* <FeatherIcon icon="arrow-down-right"/> */}
                      </i>
                      15%
                    </span>{" "}
                    vs last month
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
              <div className="dash-widget">
                <div className="dash-boxs comman-flex-center">
                  <img src={empty_wallet} alt="#" />
                </div>
                <div className="dash-content dash-count">
                  <h4>الاستلامات</h4>
                  <h2>
                    {/* $<CountUp delay={0.4} end={20250} duration={0.6} /> */}
                  </h2>
                  <p>
                    <span className="passive-view">
                      <i className="feather-arrow-up-right me-1">
                        {/* <FeatherIcon icon="arrow-up-right"/> */}
                      </i>
                      30%
                    </span>{" "}
                    vs last month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12  col-xl-4">
              <div className="card top-departments">
                <div className="card-header">
                  <h4 className="card-title mb-0">Top Departments</h4>
                </div>
                <div className="card-body">
                  <div className="activity-top">
                    <div className="activity-boxs comman-flex-center">
                      {/* <img src={dep_icon1} alt="#"/> */}
                    </div>
                    <div className="departments-list">
                      <h4>General Physician</h4>
                      <p>35%</p>
                    </div>
                  </div>
                  <div className="activity-top">
                    <div className="activity-boxs comman-flex-center">
                      {/* <img src={dep_icon2} alt="#" /> */}
                    </div>
                    <div className="departments-list">
                      <h4>Dentist</h4>
                      <p>24%</p>
                    </div>
                  </div>
                  <div className="activity-top">
                    <div className="activity-boxs comman-flex-center">
                      {/* <img src={dep_icon3} alt="#" /> */}
                    </div>
                    <div className="departments-list">
                      <h4>ENT</h4>
                      <p>10%</p>
                    </div>
                  </div>
                  <div className="activity-top">
                    <div className="activity-boxs comman-flex-center">
                      {/* <img src={dep_icon4} alt="#" /> */}
                    </div>
                    <div className="departments-list">
                      <h4>Cardiologist</h4>
                      <p>15%</p>
                    </div>
                  </div>
                  <div className="activity-top mb-0">
                    <div className="activity-boxs comman-flex-center">
                      {/* <img src={dep_icon5} alt="#" /> */}
                    </div>
                    <div className="departments-list">
                      <h4>Opthomology</h4>
                      <p>20%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12  col-xl-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title d-inline-block">
                    Upcoming Appointments
                  </h4>{" "}
                  <Link
                    to="/appoinmentlist"
                    className="patient-views float-end"
                  >
                    Show all
                  </Link>
                </div>
                <div className="card-body p-0 table-dash">
                  <div className="table-responsive">
                    <table className="table mb-0 border-0 datatable custom-table">
                      <thead>
                        <tr>
                          <th>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </th>
                          <th>No</th>
                          <th>Patient name</th>
                          <th>Doctor</th>
                          <th>Time</th>
                          <th>Disease</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00001</td>
                          <td>Andrea Lalema</td>
                          <td className="table-image appoint-doctor">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar2}
                                alt="#"
                              /> */}
                            <h2>Dr.Jenny Smith</h2>
                          </td>
                          <td className="appoint-time">
                            <span>12.05.2022 at </span>7.00 PM
                          </td>
                          <td>
                            <button className="custom-badge status-green ">
                              Fracture
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/appoinmentlist"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00002</td>
                          <td>Cristina Groves</td>
                          <td className="table-image appoint-doctor">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar3}
                                alt="#"
                              /> */}
                            <h2>Dr.Angelica Ramos</h2>
                          </td>
                          <td className="appoint-time">
                            <span>13.05.2022 at </span>7.00 PM
                          </td>
                          <td>
                            <button className="custom-badge status-green">
                              Fever
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/appoinmentlist"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00003</td>
                          <td>Bernardo </td>
                          <td className="table-image appoint-doctor">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar4}
                                alt="#"
                              /> */}
                            <h2>Dr.Martin Doe</h2>
                          </td>
                          <td className="appoint-time">
                            <span>14.05.2022 at </span>7.00 PM
                          </td>
                          <td>
                            <button className="custom-badge status-green">
                              Fracture
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/appoinmentlist"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00004</td>
                          <td>Galaviz Lalema</td>
                          <td className="table-image appoint-doctor">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar5}
                                alt="#"
                              /> */}
                            <h2>Dr.William Jerk</h2>
                          </td>
                          <td className="appoint-time">
                            <span>15.05.2022 at </span>7.00 PM
                          </td>
                          <td>
                            <button className="custom-badge status-green">
                              Fracture
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/appoinmentlist"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00005</td>
                          <td>Cristina Groves</td>
                          <td className="table-image appoint-doctor">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar3}
                              /> */}
                            <h2>Dr.Angelica Ramos</h2>
                          </td>
                          <td className="appoint-time">
                            <span>16.05.2022 at </span>7.00 PM
                          </td>
                          <td>
                            <button className="custom-badge status-green">
                              Fever
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/editpatients"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-xl-12">
              <div className="card">
                <div className="card-header pb-0">
                  <h4 className="card-title d-inline-block">
                    Recent Patients{" "}
                  </h4>{" "}
                  <Link
                    to="/editpatients"
                    className="float-end patient-views"
                  >
                    Show all
                  </Link>
                </div>
                <div className="card-block table-dash">
                  <div className="table-responsive">
                    <table className="table mb-0 border-0 datatable custom-table">
                      <thead>
                        <tr>
                          <th>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </th>
                          <th>No</th>
                          <th>Patient name</th>
                          <th>Age</th>
                          <th>Date of Birth</th>
                          <th>Diagnosis</th>
                          <th>Triage</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00001</td>
                          <td className="table-image">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar2}
                                alt="#"
                              /> */}
                            <h2>Andrea Lalema</h2>
                          </td>
                          <td>21</td>
                          <td>07 January 2002</td>
                          <td>Heart attack</td>
                          <td>
                            <button className="custom-badge status-green ">
                              Non Urgent
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/editpatients"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00002</td>
                          <td className="table-image">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar3}
                                alt="#"
                              /> */}
                            <h2>Mark Hay Smith</h2>
                          </td>
                          <td>23</td>
                          <td>06 January 2002</td>
                          <td>Jaundice</td>
                          <td>
                            <button className="custom-badge status-pink">
                              Emergency
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/editpatients"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00003</td>
                          <td className="table-image">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar4}
                                alt="#"
                              /> */}
                            <h2>Cristina Groves</h2>
                          </td>
                          <td>25</td>
                          <td>10 January 2002</td>
                          <td>Malaria</td>
                          <td>
                            <button className="custom-badge status-gray">
                              Out Patient
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/editpatients"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check check-tables">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="something"
                              />
                            </div>
                          </td>
                          <td>R00004</td>
                          <td className="table-image">
                            {/* <img
                                width={28}
                                height={28}
                                className="rounded-circle"
                                src={Avatar5}
                                alt="#"
                              /> */}
                            <h2>Galaviz Lalema</h2>
                          </td>
                          <td>21</td>
                          <td>09 January 2002</td>
                          <td>Typhoid</td>
                          <td>
                            <button className="custom-badge status-orange">
                              Non Urgent
                            </button>
                          </td>
                          <td className="text-end">
                            <div className="dropdown dropdown-action">
                              <Link
                                to="#"
                                className="action-icon dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v" />
                              </Link>
                              <div className="dropdown-menu dropdown-menu-end">
                                <Link
                                  className="dropdown-item"
                                  to="/editpatients"
                                >
                                  <i className="fa-solid fa-pen-to-square m-r-5" />{" "}
                                  Edit
                                </Link>
                                <Link
                                  className="dropdown-item"
                                  to="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_patient"
                                >
                                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                                </Link>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="delete_patient" className="modal fade delete-modal" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                {/* <img src={imagesend} alt="#" width={50} height={46} /> */}
                <h3>Are you sure want to delete this ?</h3>
                <div className="m-t-20">
                  {" "}
                  <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">
                    Close
                  </Link>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="delete_patient" className="modal fade delete-modal" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body text-center">
                  {/* <img src={imagesend} alt="#" width={50} height={46} /> */}
                  <h3>Are you sure want to delete this ?</h3>
                  <div className="m-t-20">
                    {" "}
                    <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">
                      Close
                    </Link>
                    <button type="submit" className="btn btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage