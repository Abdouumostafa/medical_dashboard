import { pathList } from "../../routes/routesPaths";
import { dashboard, logout, menu_icon08, noteicon1, patients, receipts } from "../../imagesPath/imagesPath";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = (props: any) => {
  const [sidebar, _] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, item: string, item1: string): void => {
    const div = document.querySelector<HTMLDivElement>(`#${item}`);
    const ulDiv = document.querySelector<HTMLUListElement>(`.${item1}`);

    if (!div || !ulDiv) return;

    if (e?.target instanceof HTMLElement) {
      if (e.target.className) {
        ulDiv.style.display = "none";
        div.classList.remove("subdrop");
      } else {
        ulDiv.style.display = "block";
        div.classList.add("subdrop");
      }
    }
  };

  useEffect(() => {
    if (props?.id && props?.id1) {
      const ele = document.getElementById(props.id);
      if (ele) {
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        ele.dispatchEvent(clickEvent);
      }
    }
  }, [props]);

  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  };

  const navigation = useNavigate()
  const logoutClick = () => {
    localStorage.clear()
    navigation('/')
    location.reload()
  }
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div
            id="sidebar-menu"
            className="sidebar-menu"
            onMouseLeave={expandMenu}
            onMouseOver={expandMenuOpen}
          >
            <ul className="main">
              <li>
                <Link
                  className={
                    props?.activeClassName === "chat" ? "active" : ""
                  }
                  to={pathList.homePage}
                >
                  <span className="menu-side">
                    <img src={dashboard} alt="" />
                  </span>{" "}
                  <span>الصفحة الرئيسية</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  id="menu-item2"
                  onClick={(e: any) => handleClick(e, "menu-item2", "menu-items2")}
                >
                  <span className="menu-side">
                    <img src={patients} alt="" />
                  </span>{" "}
                  <span>المرضى</span> <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }} className="menu-items2">
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "patient-list"
                          ? "active"
                          : ""
                      }
                      to={pathList.patientReports}
                    >
                      تقارير المرضى
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "add-patient"
                          ? "active"
                          : ""
                      }
                      to={pathList.createPatient}
                    >
                      إنشاء مريض جديد
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "edit-patient"
                          ? "active"
                          : ""
                      }
                      to={pathList.allPatients}
                    >
                      جميع المرضى
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  id="menu-item1"
                  onClick={(e: any) => {
                    handleClick(e, "menu-item1", "menu-items1");
                  }}
                >
                  <i className="fa fa-edit" /> <span>التوريدات</span>{" "}
                  <span className="menu-arrow" />
                </Link>
                <ul
                  style={{
                    display: sidebar === "Doctors" ? "block" : "none",
                  }}
                  className="menu-items1"
                >
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "doctor-list"
                          ? "active"
                          : ""
                      }
                      to={pathList.exports_report}
                    >
                      تقارير التوريدات
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "add-doctor"
                          ? "active"
                          : ""
                      }
                      to={pathList.createExports}
                    >
                      إضافة توريد جديد
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "edit-doctor"
                          ? "active"
                          : ""
                      }
                      to={pathList.allExports}
                    >
                      جميع التوريدات
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  id="menu-item3"
                  onClick={(e: any) => handleClick(e, "menu-item3", "menu-items3")}
                >
                  <span className="menu-side">
                    <img src={receipts} alt="" />
                  </span>{" "}
                  <span>الاستلامات</span> <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }} className="menu-items3">
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "staff-list"
                          ? "active"
                          : ""
                      }
                      to={pathList.create_receipt}
                    >
                      إضافة إستلام جديد
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "add-staff" ? "active" : ""
                      }
                      to={pathList.all_receipts}
                    >
                      جميع الاستلامات
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link
                  to="#"
                  id="menu-item4"
                  onClick={(e: any) => handleClick(e, "menu-item4", "menu-items4")}
                >
                  <span className="menu-side">
                    <img src={menu_icon08} alt="" />
                  </span>{" "}
                  <span>الموظفين</span> <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }} className="menu-items4">
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "staff-list"
                          ? "active"
                          : ""
                      }
                      to={pathList.createUser}
                    >
                      إضافة موظف جديد
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "add-staff" ? "active" : ""
                      }
                      to={pathList.allUsers}
                    >
                      جميع الموظفين
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  className={
                    props?.activeClassName === "chat" ? "active" : ""
                  }
                  to={pathList.notifications}
                >
                  <span className="menu-side">
                    <img src={noteicon1} alt="" />
                  </span>{" "}
                  <span>الاشعارات</span>
                </Link>
              </li>
            </ul>
            <div className="logout-btn">
              <Link to={''} onClick={logoutClick}>
                <span className="menu-side">
                  <img src={logout} alt="" />
                </span>{" "}
                <span>تسجيل خروج</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar