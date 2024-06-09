import { imagesend } from "../imagesPath/imagesPath"
import { Link } from "react-router-dom"

type IProps = {
  modalId: string,
  onDeletionAction?: () => any
}

const DeleteModal = ({ modalId, onDeletionAction }: IProps) => {
  return (
    <div id={modalId} className="modal fade delete-modal" role="dialog">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body text-center">
            <img src={imagesend} alt="#" width={50} height={46} />
            <h3>هل أنت متأكد أنك تريد حذف هذا العنصر؟</h3>
            <div className="m-t-20">
              {" "}
              <Link to="#" className="btn btn-white me-2" data-bs-dismiss="modal">
                غلق
              </Link>
              <button className="btn btn-danger" onClick={() => onDeletionAction?.()}>
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal