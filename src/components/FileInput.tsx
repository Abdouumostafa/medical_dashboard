import { useState } from "react"

type IProps = {
  onChange: any,
  fileId: string,
  name: string
}

const FileInput = ({ fileId, onChange, name }: IProps) => {
  const [fileNameState, setFileNameState] = useState('ليس هناك أي ملف تم إختياره')

  return (
    <>
      <div className="dateInput">
        <label className="btn btn-primary cancel-form z-0 ms-3" htmlFor={fileId}>اختر ملف</label>
        {fileNameState}
      </div>
      <input className="form-control d-none" type="file" id={fileId} onChange={(e) => {
        onChange
        // @ts-ignore
        setFileNameState(e.target.files[0]?.name)
      }}
        name={name}
      />
    </>
  )
}

export default FileInput