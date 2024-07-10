import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import getSingleExport from "../services/getSingleExport"
import UserDetails from "../../../components/UserDetails"
import Loading from "../../../components/Loading"

const ViewExportComponent = () => {
  const { id } = useParams()

  const { data, isLoading } = useQuery({
    queryKey: ['singleExport', id],
    queryFn: () => getSingleExport(id)
  })

  const exportData = data?.data?.data

  return (
    <>
      <h2>تفاصيل التوريد</h2>
      {isLoading ?
        <Loading />
        :
        <div className="mt-4">
          <UserDetails
            title="اسم المستلم"
            value={exportData?.receiver_name}
          />
          <UserDetails
            title="التاريخ"
            value={exportData?.date}
          />
          <UserDetails
            title="تاريخ الفاتورة"
            value={exportData?.invoice_date}
          />
          <div className="mt-4">
            <h3 className="mb-5">الطلبات</h3>
            {exportData?.orders?.length >= 0 ?
              <div className="col-12 col-xl-12">
                <div className="card">
                  <div className="card-body p-0 table-dash">
                    <div className="table-responsive">
                      <table className="table mb-0 border-0 datatable custom-table">
                        <thead>
                          <tr>
                            <th>الرقم</th>
                            <th>اسم المنتج</th>
                            <th>الكمية</th>
                          </tr>
                        </thead>
                        <tbody>
                          {exportData?.orders?.map(({ prod_name, quantity }: any, index: number) => {
                            return <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{prod_name}</td>
                              <td>{quantity}</td>
                            </tr>
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              :
              <h4 className=" text-center">لا يوجد أي طلب</h4>
            }
          </div>
        </div>
      }
    </>
  )
}

export default ViewExportComponent