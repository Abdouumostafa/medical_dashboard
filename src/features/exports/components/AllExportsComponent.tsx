import { toast, ToastContainer } from "react-toastify"
import DeleteModal from "../../../components/DeleteModal"
import Loading from "../../../components/Loading"
import { useMutation, useQuery } from "@tanstack/react-query"
import getAllExports from "../services/getAllExports"
import { Link } from "react-router-dom"
import { pathList } from "../../../routes/routesPaths"
import ExportsTable from "./ExportsTable"
import { useState } from "react"
import deleteExport from "../services/deleteExport"

const AllExportsComponent = ({ isHome }: any) => {

  const { data, isLoading } = useQuery({
    queryKey: ['exports'],
    queryFn: getAllExports
  })
  const exportsData = data?.data?.data
  const lastRecentExports = exportsData?.slice(-5)

  const [globalId, setGlobalId] = useState<any>()
  const deleteExportMutation = useMutation({
    mutationFn: () => {
      return deleteExport(globalId)
    },
    onSuccess: () => {
      toast.success('تم حذف التوريد بنجاح')
      setTimeout(() => {
        location.reload()
      }, 1000);
    }
  })

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
                {isHome === true ? 'التوريدات المضافة حديثا' : 'جميع التوريدات'}
              </h4>
              {isHome === true ?
                <Link
                  to={pathList.allExports}
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
                      <th>اسم المورد</th>
                      <th>التاريخ</th>
                      <th>تاريخ الفاتورة</th>
                      <th>عدد الطلبات</th>
                    </tr>
                  </thead>
                  <tbody> {isHome === true ?
                    lastRecentExports?.map(({ id, receiver_name, date, invoice_date, orders }: any) => {
                      return <ExportsTable
                        key={id}
                        receiver_name={receiver_name}
                        date={date}
                        invoice_date={invoice_date}
                        orders={orders?.length === 0 ? 'لا يوجد طلبات' : orders?.length}
                        onDeleteClick={() => setGlobalId(id)}
                        onViewClick={() => { }}
                      />
                    })
                    :
                    exportsData?.map(({ id, receiver_name, date, invoice_date, orders }: any) => {
                      return <ExportsTable
                        key={id}
                        receiver_name={receiver_name}
                        date={date}
                        invoice_date={invoice_date}
                        orders={orders?.length === 0 ? 'لا يوجد طلبات' : orders?.length}
                        onDeleteClick={() => setGlobalId(id)}
                        onViewClick={() => { }}
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
          onDeletionAction={() => deleteExportMutation.mutate()}
        />
      </div>
    }
  </>
  )
}

export default AllExportsComponent