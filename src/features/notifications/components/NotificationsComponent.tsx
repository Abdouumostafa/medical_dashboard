import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import getAllNotifications from "../services/getAllNotifications"
import { IoClose } from "react-icons/io5"
import { ToastContainer } from "react-toastify"
import Loading from "../../../components/Loading"
import { format } from "date-fns"
import readNotification from "../services/readNotification"

const NotificationsComponent = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['notifications'],
    queryFn: getAllNotifications
  })

  const notificationsData = data?.data?.data

  const client = useQueryClient()

  const readNotificationMutation = useMutation({
    mutationFn: (variables) => {
      return readNotification(variables)
    },
    onSuccess: () => {
      return client.invalidateQueries({
        queryKey: ['notifications']
      })
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
              <h4 className="card-title d-inline-block mb-4">
                الاشعارات
              </h4>
              {notificationsData?.map(({ content, made_by, sent_at, read, id }: any, index: number) => {
                return <div key={index}>
                  {read === false ?
                    <div className="notification_element mt-3">
                      <div className="notifications_header">
                        <IoClose className="icon" onClick={() => readNotificationMutation.mutate(id)} />
                        <span>{made_by?.username}</span>
                      </div>
                      <div className="media">
                        <div className="media-body">
                          <p className="mb-0">{content}</p>
                          <p className="notification-time">{format(sent_at, 'yyyy-MM-dd')}</p>
                        </div>
                      </div>
                    </div>
                    :
                    null
                  }
                </div>
              })}

            </div>
          </div>
        </div>
      </div>
    }
  </>
  )
}

export default NotificationsComponent