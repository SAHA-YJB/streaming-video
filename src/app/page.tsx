import LogSideBar from '@/components/LogSideBar';
import VideoCard from '@/components/VideoCard';

const camara1 = process.env.NEXT_PUBLIC_CAMARA1!;
const camara2 = process.env.NEXT_PUBLIC_CAMARA2!;
const camara3 = process.env.NEXT_PUBLIC_CAMARA3!;

export default function Home() {
  return (
    <div className='flex sm:flex-col md:flex-row flex-col justify-center items-center w-full h-auto'>
      <div className='flex flex-col justify-between flex-grow'>
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* 위 */}
          <VideoCard url={camara1} cameraName='CAMERA 1' />
          <VideoCard url={camara2} cameraName='CAMERA 2' />
          <VideoCard url={camara3} cameraName='Hanwha CAM' />
        </div>
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* 아래 */}
          <VideoCard url={camara1} cameraName='CAMERA 1' />
          <VideoCard url={camara2} cameraName='CAMERA 2' />
          <VideoCard url={camara3} cameraName='Hanwha CAM' />
        </div>
      </div>
      {/* 오른쪽 */}
      <LogSideBar />
    </div>
  );
}
