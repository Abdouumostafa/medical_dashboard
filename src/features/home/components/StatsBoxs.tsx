import StatsBox from "../../../components/home/StatsBox"
import { empty_wallet, profile_add, scissor } from "../../../imagesPath/imagesPath"

const StatsBoxs = () => {
    return (
        <div className="row">
            <StatsBox
                image={profile_add}
                title="المرضى"
                count={140}
                increase={true}
                ratio={20}
            />
            <StatsBox
                image={scissor}
                title="التوريدات"
                count={56}
                increase={false}
                ratio={15}
            />
            <StatsBox
                image={empty_wallet}
                title="الاستلامات"
                count={20250}
                increase={true}
                ratio={30}
            />
        </div>
    )
}

export default StatsBoxs