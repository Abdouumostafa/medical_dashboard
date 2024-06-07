import FormInput from "../../../components/FormInput"

const CreateNewUserForm = () => {
	return (
		<form>
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
					onChange={''}
				/>
				<FormInput
					label="البريد الالكتروني"
					required
					type="email"
					name="email"
					onChange={''}
				/>
				<FormInput
					label="المسمي الوظيفي"
					required
					type="text"
					name="job_title"
					onChange={''}
				/>
				<FormInput
					label="رقم الهوية الوطنية"
					required
					type="number"
					name="national_id"
					onChange={''}
				/>
				<FormInput
					label="الرقم السري"
					required
					type="text"
					name="password"
					onChange={''}
				/>
				<div className="col-12 col-md-6 col-xl-6">
					<div className="form-group select-gender">
						<label className="gen-label">
							هل تريد اعطاء المستخدم صلاحيات الادمن <span className="login-danger">*</span>
						</label>
						<div className="form-check-inline">
							<label className="form-check-label">
								<input
									type="radio"
									name="gender"
									className="form-check-input"
									// @ts-ignore
									value={true}
								/>
								نعم
							</label>
						</div>
						<div className="form-check-inline">
							<label className="form-check-label">
								<input
									type="radio"
									name="gender"
									className="form-check-input"
									// @ts-ignore
									value={false}
								/>
								لا
							</label>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default CreateNewUserForm