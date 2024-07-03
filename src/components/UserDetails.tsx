
type IProps = {
  title: string,
  value: string
}

const UserDetails = ({ title, value }: IProps) => {
  return (
    <div className="patient_container mt-1">
      <p className="patient_title">{title} :</p>
      <p>{value}</p>
    </div>
  )
}

export default UserDetails