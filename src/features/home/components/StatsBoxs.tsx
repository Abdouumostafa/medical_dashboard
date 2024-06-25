import { useQuery } from "@tanstack/react-query"
import StatsBox from "../../../components/home/StatsBox"
import { empty_wallet, profile_add, scissor } from "../../../imagesPath/imagesPath"
import getPatientsStats from "../services/getPatientsStats"
import getExportsStats from "../services/getExportsStats"
import getReceiptsStats from "../services/getReceiptsStats"
import Loading from "../../../components/Loading"

const StatsBoxs = () => {
  const { data: getPatients, isLoading: loadingPatients } = useQuery({
    queryKey: ['getPatientsStats'],
    queryFn: getPatientsStats
  })
  const { data: getExports, isLoading: loadingExports } = useQuery({
    queryKey: ['getExportsStats'],
    queryFn: getExportsStats
  })
  const { data: getReceipts, isLoading: loadingReceipts } = useQuery({
    queryKey: ['getReceiptsStats'],
    queryFn: getReceiptsStats
  })

  return (
    <>
      {loadingExports && loadingPatients && loadingReceipts ?
        <Loading />
        :
        <div className="row">
          <StatsBox
            image={profile_add}
            title="المرضى"
            count={getPatients?.data?.current_month_count}
            increase={getPatients?.data?.increase_percentage <= 0 ? false : true}
            ratio={getPatients?.data?.increase_percentage}
          />
          <StatsBox
            image={scissor}
            title="التوريدات"
            count={getExports?.data?.current_month_count}
            increase={getExports?.data?.increase_percentage <= 0 ? false : true}
            ratio={getExports?.data?.increase_percentage}
          />
          <StatsBox
            image={empty_wallet}
            title="الاستلامات"
            count={getReceipts?.data?.current_month_count}
            increase={getReceipts?.data?.increase_percentage <= 0 ? false : true}
            ratio={getReceipts?.data?.increase_percentage}
          />
        </div>
      }
    </>
  )
}

export default StatsBoxs