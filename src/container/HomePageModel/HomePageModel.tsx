"use client"
import Spline from '@splinetool/react-spline';

export default function HomePageModel() {
  return (
    <div className='bg-black p-1 rounded-lg'>
      <Spline scene="https://prod.spline.design/wOjqLpdVLYOu5GFX/scene.splinecode" style={{ width: "700px", height: "500px" }} />
    </div>
  );
}
