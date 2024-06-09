import { useQuery } from "@tanstack/react-query"
import FormInput from "../../../components/FormInput"
import { pathList } from "../../../routes/routesPaths"
import { Link, useParams } from "react-router-dom"
import getSingleUser from "../services/getSingleUser"
import Loading from "../../../components/Loading"
import { useState } from "react"

const UpdateUserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    job_title: '',
    national_id: '',
    password: '',
    is_admin: ''
  })

  console.log(formData)
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['singleUser', id],
    queryFn: () => getSingleUser(id)
  })

  return (
    <>
      {isLoading ?
        <Loading />
        :
        <form>
          <div className="row">
            <div className="col-12">
              <div className="form-heading">
                <h4>تعديل المستخدم</h4>
              </div>
            </div>
            <FormInput
              label="اسم المستخدم"
              required
              type="text"
              name="username"
              defaultValue={data?.data?.data?.username}
              onChange={
                (text) => {
                  setFormData((prev) => {
                    return {
                      ...prev,
                      username: text
                    }
                  })
                }
              }
            />
            <FormInput
              label="البريد الالكتروني"
              required
              type="email"
              name="email"
              defaultValue={data?.data?.data?.email}
              onChange={
                (text) => {
                  setFormData((prev) => {
                    return {
                      ...prev,
                      email: text
                    }
                  })
                }
              }
            />
            <FormInput
              label="المسمي الوظيفي"
              required
              type="text"
              name="job_title"
              defaultValue={data?.data?.data?.job_title}
              onChange={
                (text) => {
                  setFormData((prev) => {
                    return {
                      ...prev,
                      job_title: text
                    }
                  })
                }
              }
            />
            <FormInput
              label="رقم الهوية الوطنية"
              required
              type="number"
              name="national_id"
              defaultValue={data?.data?.data?.national_id}
              onChange={
                (text) => {
                  setFormData((prev) => {
                    return {
                      ...prev,
                      national_id: text
                    }
                  })
                }
              }
            />
            <div className="col-12 col-md-6 col-xl-6">
              <div className="select-gender">
                <label className="gen-label">
                  صلاحيات الادمن <span className="login-danger">*</span>
                </label>
                <select
                  name="is_admin"
                  id="is_admin"
                  className=" w-100 mb-5"
                  onChange={(text) => {
                    setFormData((prev: any) => {
                      return {
                        ...prev,
                        is_admin: JSON.parse(text.target.value)
                      }
                    })
                  }}
                >
                  {data?.data?.data?.is_admin === true ?
                    <>
                      <option value={JSON.parse(`${true}`)}>نعم</option>
                      <option value={JSON.parse(`${false}`)}>لا</option>
                    </>
                    :
                    <>
                      <option value={JSON.parse(`${false}`)}>لا</option>
                      <option value={JSON.parse(`${true}`)}>نعم</option>
                    </>
                  }
                </select>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="doctor-submit">
              <button
                type="submit"
                className="btn btn-primary submit-form me-2"
              >
                تعديل المستخدم
              </button>
              <Link
                to={pathList.allUsers}
                className="btn btn-primary cancel-form"
              >
                رجوع
              </Link>
            </div>

          </div>
        </form>
      }
    </>
  )
}

export default UpdateUserForm