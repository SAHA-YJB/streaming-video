import VideoCard from '@/components/VideoCard';

export default function Home() {
  return (
    <div className='flex gap-12 justify-center items-center w-full mt-6'>
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}
