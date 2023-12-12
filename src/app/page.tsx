import VideoCard from '@/components/VideoCard';
import VideoCard2 from '@/components/VideoCard2';
import VideoCard3 from '@/components/VideoCard3';

export default function Home() {
  return (
    <div className='flex sm:flex-row flex-col  gap-12 justify-center items-center w-full mt-6 flex-wrap'>
      <VideoCard />
      <VideoCard2 />
      <VideoCard3 />
      <VideoCard />
      <VideoCard2 />
      <VideoCard3 />
    </div>
  );
}
