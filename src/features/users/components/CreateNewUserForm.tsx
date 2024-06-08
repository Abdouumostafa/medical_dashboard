import { useState } from "react"
import FormInput from "../../../components/FormInput"
import { useMutation } from "react-query"
import PostNewUser from "../services/postNewUser"
import { Link, useNavigate } from "react-router-dom"
import { pathList } from "../../../routes/routesPaths"
import { ToastContainer, toast } from "react-toastify"

const CreateNewUserForm = () => {

	const navigation = useNavigate()

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		job_title: '',
		national_id: '',
		password: '',
		is_admin: ''
	})

	const postUser = useMutation({
		mutationFn: () => {
			return PostNewUser(formData)
		},
		onSuccess: () => {
			toast.success('تم اضافة مستخدم جديد بنجاح')
			navigation(pathList.homePage)
		},
		onError: (error) => {
			toast.error(error?.response?.data?.message)
		}
	})

	const onSubmit = (e: any) => {
		e.preventDefault()
		postUser.mutate()
	}
	return (
		<>
			<ToastContainer />
			<form onSubmit={onSubmit}>
				<div className="row">
					<div className="col-12">
						<div className="form-heading">
							<h4>اضافة مستخدم جديد</h4>
						</div>
					</div>
					<FormInput
						label="اسم المستخدم"
						required
						type="text"
						name="username"
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
					<FormInput
						label="الرقم السري"
						required
						type="text"
						name="password"
						onChange={
							(text) => {
								setFormData((prev) => {
									return {
										...prev,
										password: text
									}
								})
							}
						}
					/>
					<div className="col-12 col-md-6 col-xl-6">
						<div className="select-gender">
							<label className="gen-label">
								هل تريد اعطاء المستخدم صلاحيات الادمن <span className="login-danger">*</span>
							</label>
							<select
								name="is_admin"
								id="is_admin"
								className=" w-100 mb-5"
								onChange={(text) => {
									setFormData((prev: any) => {
										return {
											...prev,
											is_admin: text
										}
									})
								}}
							>
								<option value={'false'}>لا</option>
								<option value={'true'}>نعم</option>
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
							إضافة مستخدم جديد
						</button>
						<Link
							to={pathList.homePage}
							className="btn btn-primary cancel-form"
						>
							رجوع
						</Link>
					</div>

				</div>
			</form>
		</>
	)
}

export default CreateNewUserForm