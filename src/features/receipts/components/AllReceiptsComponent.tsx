import { pathList } from "../../../routes/routesPaths"
import Loading from "../../../components/Loading"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import DeleteModal from "../../../components/DeleteModal"
import getAllReceipts from "../services/getAllReceipts"
import { useMutation, useQuery } from "@tanstack/react-query"
import ReceiptsTable from "./ReceiptsTable"
import deleteReceipt from "../services/deleteReceipt"

const AllReceiptsComponent = ({ isHome }: any) => {
  const navigation = useNavigate()

  // Get All Patients
  const { data, isLoading } = useQuery({
    queryKey: ['allReceipts'],
    queryFn: getAllReceipts
  })

  const receiptsData = data?.data?.data

  // Delete Patient
  const [globalId, setGlobalId] = useState()

  const deletePatientMutation = useMutation({
    mutationFn: () => {
      return deleteReceipt(globalId)
    },
    onSuccess: () => {
      toast.success('تم حذف الاستلام')
      setTimeout(() => {
        location.reload()
      }, 1000);
    },
  })

  // Filter last 5 Receipts
  const lastRecentReceipts = receiptsData?.slice(-5)

  return (<>
    {isLoading ?
      <Loading />
      :
      <div className="row">
        <ToastContainer />
        <div className="col-12 col-xl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title d-inline-block">
                {isHome === true ? 'الاستلامات المضافة حديثا' : 'جميع الاستلامات'}
              </h4>
              {isHome === true ?
                <Link
                  to={pathList.all_receipts}
                  className="patient-views float-start"
                >
                  عرض الكل
                </Link>
                :
                null
              }
            </div>
            <div className="card-body p-0 table-dash">
              <div className="table-responsive">
                <table className="table mb-0 border-0 datatable custom-table">
                  <thead>
                    <tr>
                      <th>اسم المريض</th>
                      <th>رقم الملف</th>
                      <th>الملاحظات</th>
                      <th>النوع</th>
                      <th>العمر</th>
                      <th>تاريخ الاستلام</th>
                    </tr>
                  </thead>
                  <tbody>
                    {isHome === true ?
                      lastRecentReceipts?.map(({ id, patient, notes, receiving_date }: any) => {
                        // @ts-ignore
                        return <ReceiptsTable
                          key={id}
                          name={patient?.name}
                          doc_number={patient?.document_number}
                          notes={notes}
                          gender={patient?.gender}
                          age={patient?.age}
                          date_order_delivered={receiving_date}
                        />
                          ;
                      })
                      :
                      receiptsData?.map(({ id, patient, notes, receiving_date }: any) => {
                        // @ts-ignore
                        return <ReceiptsTable
                          key={id}
                          name={patient?.name}
                          doc_number={patient?.document_number}
                          notes={notes}
                          gender={patient?.gender}
                          age={patient?.age}
                          date_order_delivered={receiving_date}
                          onDeleteClick={() => setGlobalId(id)}
                          onEditClick={() => navigation(`/home/all_receipts/update_receipt/${id}`)}
                        />
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <DeleteModal
          modalId="delete_patient"
          onDeletionAction={() => deletePatientMutation.mutate()}
        />
      </div>
    }
  </>
  )
}
export default AllReceiptsComponent