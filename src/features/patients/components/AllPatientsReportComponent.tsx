import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns"
import { useState } from "react"
import getReceivedPatients from "../services/getReceivedPatients"
import Loading from "../../../components/Loading"
import getNotReceivedPatients from "../services/getNotReceivedPatients"

const AllPatientsReportComponent = () => {
  const [receivedDate, setReceivedDate] = useState<Date | string | any>(format(new Date, 'yyyy-MM-dd'))
  const [notReceivedDate, setNotReceivedDate] = useState<Date | string | any>(format(new Date, 'yyyy-MM-dd'))

  const handelReceivedDateValue = (e: any) => setReceivedDate(e.target.value)
  const handelNotReceivedDateValue = (e: any) => setNotReceivedDate(e.target.value)

  const { data: receivedPatients, isLoading: loadingReceivedData } = useQuery({
    queryKey: ['receivedPatients', receivedDate],
    // @ts-ignore
    queryFn: () => getReceivedPatients(receivedDate)
  })

  const { data: notReceivedPatients, isLoading: loadingNotReceivedData } = useQuery({
    queryKey: ['notReceivedPatients', notReceivedDate],
    queryFn: () => getNotReceivedPatients(notReceivedDate)
  })

  return (
    <>
      {loadingReceivedData && loadingNotReceivedData ?
        <Loading />
        :
        <>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <div className="card-header">
                    <h4 className="card-title d-inline-block">
                      المرضى المستلمين
                    </h4>
                    <input type="date" name="" id="" value={receivedDate} className="float-start p-1" onChange={(e) => handelReceivedDateValue(e)} />
                  </div>
                  {receivedPatients?.data?.data >= [0] ?
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
                            </tr>
                          </thead>
                          <tbody>
                            {receivedPatients?.data?.data?.map(({ name, age, gender, document_number, date_order_delivered }: any, index: number) => {
                              return <tr key={index}>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{gender}</td>
                                <td>{document_number}</td>
                                <td>{date_order_delivered}</td>
                              </tr>
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    :
                    <h5 className="text-center mt-5">لا يوجد استلامات في هذا اليوم</h5>
                  }
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
                      المرضى الغير المستلمين
                    </h4>
                    <input type="date" name="" id="" value={notReceivedDate} className="float-start p-1" onChange={(e) => handelNotReceivedDateValue(e)} />
                  </div>
                  {notReceivedPatients?.data?.data >= [0] ?
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
                            </tr>
                          </thead>
                          <tbody>
                            {notReceivedPatients?.data?.data?.map(({ name, age, gender, document_number, date_order_delivered }: any, index: number) => {
                              return <tr key={index}>
                                <td>{name}</td>
                                <td>{age}</td>
                                <td>{gender}</td>
                                <td>{document_number}</td>
                                <td>{date_order_delivered ? date_order_delivered : 'لا يوجد'}</td>
                              </tr>
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    :
                    <h5 className="text-center mt-5">جميع المرضى استلموا في هذا اليوم</h5>
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

export default AllPatientsReportComponent