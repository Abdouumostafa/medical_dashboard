import { useQuery } from "@tanstack/react-query"
import FormInput from "../../../components/FormInput"
import { pathList } from "../../../routes/routesPaths"
import { Link, useNavigate, useParams } from "react-router-dom"
import getSingleUser from "../services/getSingleUser"
import Loading from "../../../components/Loading"
import { useState } from "react"
import updateSingleUser from "../services/updateSingleUser"
import { useMutation } from "react-query"
import { toast } from "react-toastify"

const UpdateUserForm = () => {
  const navigation = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    job_title: '',
    national_id: '',
    is_admin: ''
  })

  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['singleUser', id],
    queryFn: () => getSingleUser(id)
  })

  const userData = data?.data?.data

  const editSingleUser = useMutation({
    mutationFn: () => {
      return updateSingleUser(id, {
        username: formData?.username ? formData.username : userData.username,
        email: formData?.email ? formData.email : userData.email,
        job_title: formData?.job_title ? formData.job_title : userData.job_title,
        national_id: formData?.national_id ? formData.national_id : userData.national_id,
        is_admin: formData?.is_admin ? formData.is_admin : userData.is_admin,
      })
    }, onSuccess: () => {
      toast.success('تم تعديل المستخدم')
      setTimeout(() => {
        navigation(pathList.allUsers)
      }, 1000)
    },

  })

  const onSubmitForm = (e: any) => {
    e.preventDefault()
    editSingleUser.mutate()
  }

  return (
    <>
      {isLoading ?
        <Loading />
        :
        <form onSubmit={onSubmitForm}>
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
              defaultValue={userData?.username}
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
              defaultValue={userData?.email}
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
              defaultValue={userData?.job_title}
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
              defaultValue={userData?.national_id}
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
                  {userData?.is_admin === true ?
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