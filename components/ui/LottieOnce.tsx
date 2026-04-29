import Lottie from 'lottie-react-native'
// import Lottie from 'lottie-react'
import busLotties from './busLotties.json'

function LottieOnce() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: busLotties,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <Lottie 
      source={busLotties}
      autoPlay={defaultOptions.autoplay}
      loop={defaultOptions.loop}
      style={{ height: 300, width: 300 }}
    />
  )
}
export default LottieOnce
