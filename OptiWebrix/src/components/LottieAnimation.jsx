import Lottie from 'lottie-react'
import heroAnimation from '../assets/hero_animation.json'

export default function LottieAnimation({ className = "w-[500px]", loop = true, autoplay = true }) {
  return (
    <div className={className}>
      <Lottie
        animationData={heroAnimation}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </div>
  )
}

