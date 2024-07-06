import { Link } from "react-router-dom"
import { searchnormal } from '../../../imagesPath/imagesPath'
import { useState } from "react"

const SearchComponent = () => {
  const [docNumber, setDocNumber] = useState<number | null | string>(null)

  return (
    <div className="top-nav-search mob-view">
      <form>
        <input
          type="number"
          className="form-control"
          placeholder="ابحث عن مريض برقم الملف"
          onChange={(e) => setDocNumber(e.target.value)}
        />
        <Link to={`${docNumber !== null ? `/home/patient_details/${docNumber}` : ``}`} className="btn">
          <img src={searchnormal} alt="search icon" />
        </Link>
      </form>
    </div>
  )
}

export default SearchComponent