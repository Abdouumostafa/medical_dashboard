import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import getPatientDetails from "../services/getPatientDetails"
import Loading from "../../../components/Loading"
import UserDetails from "../../../components/UserDetails"
import { format } from "date-fns"

const PatientDetailsComponent = () => {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['searchPatient', id],
    queryFn: () => getPatientDetails(id)
  })

  const patientDetails = data?.data?.data

  console.log(patientDetails)

  return (
    <>
      {isLoading ?
        <Loading />
        :
        <div className="row">
          <div className="col-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title d-inline-block">نتائج البحث</h4>
              </div>
              {patientDetails?.length === 0 ?
                <h4 className="text-center my-5">لا يوجد مريض بهذا رقم الملف</h4>
                :
                patientDetails?.length === 1 ?
                  <div className="mt-3 px-4">
                    <UserDetails
                      title="اسم المريض"
                      value={patientDetails[0]?.name}
                    />
                    <UserDetails
                      title="العمر"
                      value={patientDetails[0]?.age}
                    />
                    <UserDetails
                      title="رقم الملف"
                      value={patientDetails[0]?.document_number}
                    />
                    <UserDetails
                      title="الجنس"
                      value={patientDetails[0]?.gender}
                    />
                    <UserDetails
                      title="اخر تاريخ استلام"
                      value={patientDetails[0]?.date_order_delivered}
                    />
                    <UserDetails
                      title="تاريخ الاضافة"
                      value={format(patientDetails[0]?.added_at, 'yyyy-MM-dd')}
                    />
                  </div>
                  :
                  <div className="card-body p-0 table-dash mt-4">
                    <div className="table-responsive">
                      <table className="table mb-0 border-0 datatable custom-table">
                        <thead>
                          <tr>
                            <th>الاسم</th>
                            <th>العمر</th>
                            <th>النوع</th>
                            <th>رقم الملف</th>
                            <th>اخر تاريخ استلام</th>
                            <th>تاريخ الاضافة</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patientDetails?.map(({ name, age, gender, document_number, date_order_delivered, added_at }: any, index: number) => {
                            return <tr key={index}>
                              <td>{name}</td>
                              <td>{age}</td>
                              <td>{gender}</td>
                              <td>{document_number}</td>
                              <td>{date_order_delivered}</td>
                              <td>{format(added_at, 'yyyy-MM-dd')}</td>
                            </tr>
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default PatientDetailsComponent