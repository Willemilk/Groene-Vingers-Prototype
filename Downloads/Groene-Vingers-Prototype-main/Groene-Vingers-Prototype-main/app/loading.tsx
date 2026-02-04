import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-garden flex flex-col items-center justify-center">
      <LoadingSpinner />
      <p className="text-white/80 text-lg mt-8 font-playfair animate-pulse">
        Je tuin groeit...
      </p>
    </div>
  );
}
