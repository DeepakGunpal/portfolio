"use client"
import Spline from '@splinetool/react-spline';

export default function HomePageModel() {
  return (
    <div className='bg-gradient-to-br from-pink-300 via-transparent to-blue-300 p-1 rounded-lg'>
      <Spline scene="https://prod.spline.design/wOjqLpdVLYOu5GFX/scene.splinecode" style={{ width: "700px", height: "500px" }} className='bg-gradient-to-br from-pink-300 via-transparent to-blue-300' />
    </div>
  );
}
