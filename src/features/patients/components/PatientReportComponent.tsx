import { useQuery } from "@tanstack/react-query"
import getPatientReport from "../services/getPatientReport"
import { useParams } from "react-router-dom"
import getSinglePatient from "../services/getSinglePatient"
import Loading from "../../../components/Loading"
import UserDetails from "../../../components/UserDetails"

const PatientReportComponent = () => {
  const { id } = useParams()

  // Get Single Patient
  const { data } = useQuery({
    queryKey: ['patient', id],
    queryFn: () => getSinglePatient(id)
  })
  const patientData = data?.data?.data

  const { data: patientReport, isLoading } = useQuery({
    queryKey: ['patientReport', id],
    queryFn: () => getPatientReport(patientData?.document_number)
  })

  const patientReportData = patientReport?.data?.data

  return (
    <>
      <h2>تفاصيل المريض</h2>
      {isLoading ?
        <Loading />
        :
        <div className="mt-4">
          <UserDetails
            title="اسم المريض"
            value={patientReportData?.patient?.name}
          />
          <UserDetails
            title="العمر"
            value={patientReportData?.patient?.age}
          />
          <UserDetails
            title="رقم الملف"
            value={patientReportData?.patient?.document_number}
          />
          <UserDetails
            title="الجنس"
            value={patientReportData?.patient?.gender}
          />
          <UserDetails
            title="اخر تاريخ استلام"
            value={patientReportData?.patient?.date_order_delivered}
          />
          <div className="mt-4">
            <h3 className="mb-5">الاستلامات</h3>
            {patientReportData?.receipts >= [0] ?
              <div className="col-12 col-xl-12">
                <div className="card">
                  <div className="card-body p-0 table-dash">
                    <div className="table-responsive">
                      <table className="table mb-0 border-0 datatable custom-table">
                        <thead>
                          <tr>
                            <th>الرقم</th>
                            <th>تاريخ الاستلام</th>
                            <th>ملاحظات</th>
                          </tr>
                        </thead>
                        <tbody>
                          {patientReportData?.receipts.map(({ receiving_date, notes }: any, index: number) => {
                            return <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{receiving_date}</td>
                              <td>{notes}</td>
                            </tr>
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              :
              <h4 className=" text-center">لا يوجد استلامات</h4>
            }
          </div>
        </div>
      }
    </>
  )
}

export default PatientReportComponent