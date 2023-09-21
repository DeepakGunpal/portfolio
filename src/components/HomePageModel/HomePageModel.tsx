"use client"
import { Suspense, lazy, useState } from 'react';
import Hi from "@/assets/LottieJSON/hi.json"
import LottieAnimation from '../LottieAnimation/LottieAnimation';
const Spline = lazy(() => import('@splinetool/react-spline'));


export default function HomePageModel() {
  const [splineLoaded, setSplineLoaded] = useState(false)
  return (
    <div
      className='p-1 rounded-lg flex justify-center items-center'
      style={{ width: "500px", height: "550px" }}>
      <Suspense>
        <Spline scene="https://prod.spline.design/wOjqLpdVLYOu5GFX/scene.splinecode"
          onLoad={() => setSplineLoaded(true)}
          style={{ display: splineLoaded ? "block" : "none" }}
        />
      </Suspense>
      {!splineLoaded && <LottieAnimation animation={Hi} />}
    </div>
  );
}
