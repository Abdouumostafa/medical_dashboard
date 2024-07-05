import NotificationsComponent from "../../features/notifications/components/NotificationsComponent"
import BaseLayout from "../../layouts/BaseLayout"

const AllNotifications = () => {
  return (
    <>
      <BaseLayout />
      <div className="page-wrapper">
        <div className="content">
          <NotificationsComponent />
        </div>
      </div>
    </>
  )
}

export default AllNotifications