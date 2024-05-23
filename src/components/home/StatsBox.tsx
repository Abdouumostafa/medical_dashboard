import CountUp from "react-countup"

type IProps = {
  image: any,
  title: string,
  count: number,
  increase: boolean,
  ratio: number,
}
const StatsBox = ({ image, title, count, increase, ratio }: IProps) => {
  return (
    <div className="col-md-6 col-sm-6 col-lg-6 col-xl-4">
      <div className="dash-widget">
        <div className="dash-boxs comman-flex-center">
          <img src={image} alt="#" />
        </div>
        <div className="dash-content dash-count">
          <h4>{title}</h4>
          <h2>
            <CountUp delay={0.4} end={count} duration={0.6} />
          </h2>
          <p>
            <span className={increase ? "passive-view" : "negative-view"}>
              {ratio}%
            </span>{" "}
            منذ الشهر الماضي
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsBox