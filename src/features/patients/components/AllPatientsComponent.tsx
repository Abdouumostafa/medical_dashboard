import DeleteModal from "../../../components/DeleteModal"
import Loading from "../../../components/Loading"
import { ToastContainer, toast } from "react-toastify"
import PatientsTable from "./PatientsTable"
import { useMutation, useQuery } from "@tanstack/react-query"
import getAllPatients from "../services/getAllPatients"
import { format } from 'date-fns'
import deletePatient from "../services/deletePatient"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AllPatientsComponent = () => {
  const navigation = useNavigate()

  // Get All Patients
  const { data, isLoading } = useQuery({
    queryKey: ['allPatients'],
    queryFn: getAllPatients
  })
  const patientData = data?.data?.data

  // Delete Patient
  const [globalId, setGlobalId] = useState()

  const deletePatientMutation = useMutation({
    mutationFn: () => {
      return deletePatient(globalId)
    },
    onSuccess: () => {
      toast.success('تم حذف المريض')
      setTimeout(() => {
        location.reload()
      }, 1000);
    },
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
                جميع المرضى
              </h4>
            </div>
            <div className="card-body p-0 table-dash">
              <div className="table-responsive">
                <table className="table mb-0 border-0 datatable custom-table">
                  <thead>
                    <tr>
                      <th>الاسم</th>
                      <th>العمر</th>
                      <th>النوع</th>
                      <th>رقم الملف</th>
                      <th>تاريخ الاضافة</th>
                      <th>اخر تاريخ استلام</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      patientData.map(({ id, name, age, document_number, added_at, date_order_delivered, gender }: any) => {
                        return <PatientsTable
                          key={id}
                          name={name}
                          age={age}
                          document_number={document_number}
                          added_at={format(added_at, 'dd/MM/yyyy')}
                          date_order_delivered={date_order_delivered === null ? 'لا يوجد' : date_order_delivered}
                          gender={gender}
                          onDeleteClick={() => setGlobalId(id)}
                          onEditClick={() => navigation(`/home/edit_patient/${id}`)}
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

export default AllPatientsComponent