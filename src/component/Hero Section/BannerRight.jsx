import banner from "../../assets/banner-stack.png"

const BannerRight = () => {
  return (
    <div className="w-full md:w-1/2 flex justify-center">
        <img src={banner} alt="" className="w-90"/>
    </div>
  )
}

export default BannerRight