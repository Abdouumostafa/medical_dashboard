import { useState } from "react"
import Loading from "../../../components/Loading"
import { format } from "date-fns"
import { useQuery } from "@tanstack/react-query"
import getExportReports from "../services/getExportReports"
import getMonthlyExport from "../services/getMontlyExport"

const ExportReportsComponent = () => {
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [endDate, setEndDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [monthlyExportDate, setMonthlyExportDate] = useState(format(new Date(), 'yyyy-MM-dd'))

  const { data: startEndDate, isLoading: loadingStartEndDate } = useQuery({
    queryKey: ['startEndExportReport', startDate, endDate],
    queryFn: () => getExportReports(startDate, endDate)
  })

  const { data: monthlyDate, isLoading: loadingMonthlyDate } = useQuery({
    queryKey: ['monthlyExportReport', monthlyExportDate],
    // @ts-ignore
    queryFn: () => getMonthlyExport(monthlyExportDate)
  })

  console.log(startEndDate)

  const handleStartDate = (e: any) => setStartDate(e.target.value)
  const handleEndDate = (e: any) => setEndDate(e.target.value)
  const handleMonthlyExportDate = (e: any) => setMonthlyExportDate(e.target.value)

  return (
    <>
      {loadingStartEndDate && loadingMonthlyDate ?
        <Loading />
        :
        <>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">
                      شهور التوريد
                    </h4>
                    <div className="float-start">
                      <span>من </span>
                      <input type="date" name="" id="" value={startDate} className="p-1 mx-4" onChange={(e) => handleStartDate(e)} />
                      <span>إلي</span>
                      <input type="date" name="" id="" value={endDate} className="p-1 mx-4" onChange={(e) => handleEndDate(e)} />
                    </div>
                  </div>
                  <div className="card-body p-0 table-dash mt-4">
                    <div className="table-responsive">
                      <table className="table mb-0 border-0 datatable custom-table">
                        <thead>
                          <tr>
                            <th>الشهر</th>
                            <th>التوريد</th>
                          </tr>
                        </thead>
                        <tbody>
                          {startEndDate?.data?.map(({ month, export_created }: any, index: number) => {
                            return <tr key={index}>
                              <td>{month}</td>
                              <td>{export_created === 'NO' ? 'لم يتم التوريد' : 'تم التوريد'}</td>
                            </tr>
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">
                      تفاصيل التوريد بالشهر
                    </h4>
                    <input type="date" name="" id="" value={monthlyExportDate} className="float-start p-1" onChange={(e) => handleMonthlyExportDate(e)} />
                  </div>
                  {monthlyDate?.data?.data >= [0] ?
                    <div className="card-body p-0 table-dash mt-4">
                      <div className="table-responsive">
                        <table className="table mb-0 border-0 datatable custom-table">
                          <thead>
                            <tr>
                              <th>اسم المستلم</th>
                              <th>التاريخ</th>
                              <th> تاريخ الاستلام</th>
                              <th> عدد الطلبات</th>
                            </tr>
                          </thead>
                          <tbody>
                            {monthlyDate?.data?.data?.map(({ receiver_name, date, invoice_date, orders }: any, index: number) => {
                              return <tr key={index}>
                                <td>{receiver_name}</td>
                                <td>{date}</td>
                                <td>{invoice_date}</td>
                                <td>{orders?.length}</td>
                              </tr>
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    :
                    <h2>لا يوجد اي توريد هذا الشهر</h2>
                  }
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default ExportReportsComponent