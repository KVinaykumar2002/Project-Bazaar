import Lottie from 'lottie-react'
import heroAnimation from '../assets/hero_animation.json'

export default function LottieAnimation({ 
  className = "w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]", 
  loop = true, 
  autoplay = true 
}) {
  return (
    <div className={`${className} mx-auto`}>
      <Lottie
        animationData={heroAnimation}
        loop={loop}
        autoplay={autoplay}
        className="w-full h-auto"
        style={{ maxHeight: '400px' }}
      />
    </div>
  )
}

