import { dashboard, logout, patients, receipts } from "../../imagesPath/imagesPath";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = (props: any) => {
  const [sidebar, setSidebar] = useState("");

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
                  to="/chat"
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
                      to="/patientslist"
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
                      to="/addpatients"
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
                      to="/editpatients"
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
                      to="/doctorlist"
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
                      to="/add-doctor"
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
                      to="/editdoctor"
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
                      to="/stafflist"
                    >
                      إضافة إستلام جديد
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        props?.activeClassName === "add-staff" ? "active" : ""
                      }
                      to="/addstaff"
                    >
                      جميع الاستلامات
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="logout-btn">
              <Link to="/">
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