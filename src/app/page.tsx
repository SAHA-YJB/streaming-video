import VideoCard from '@/components/VideoCard';

const camara1 = process.env.NEXT_PUBLIC_CAMARA1!;
const camara2 = process.env.NEXT_PUBLIC_CAMARA2!;
const camara3 = process.env.NEXT_PUBLIC_CAMARA3!;

export default function Home() {
  return (
    <div className='flex sm:flex-row flex-col  gap-12 justify-center items-center w-full mt-6 flex-wrap'>
      <VideoCard url={camara1} cameraName='CAMERA 1' />
      <VideoCard url={camara2} cameraName='CAMERA 2' />
      <VideoCard url={camara3} cameraName='CAMERA 3' />
    </div>
  );
}
