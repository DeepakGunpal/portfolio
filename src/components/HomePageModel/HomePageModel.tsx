"use client"
import { Suspense, lazy, useState } from 'react';
import Hi from '../LottieAnimation/Hi';
const Spline = lazy(() => import('@splinetool/react-spline'));


export default function HomePageModel() {
  const [splineLoaded, setSplineLoaded] = useState(false)
  return (
    <div
      className='p-1 rounded-lg flex justify-center items-center'
      style={{ width: "500px", height: "550px" }}>
      <Suspense>
        <Spline scene="https://prod.spline.design/wOjqLpdVLYOu5GFX/scene.splinecode"
          onLoad={() => {
            console.log("Loaded spline model")
            setSplineLoaded(true)
          }}
          style={{ display: splineLoaded ? "block" : "none" }}
        />
      </Suspense>
      {!splineLoaded && <Hi />}
    </div>
  );
}
