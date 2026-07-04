type SkeletonLoaderProps = {
  className?: string;
};

export default function SkeletonLoader({ className = "" }: SkeletonLoaderProps) {
  return <div className={`animate-pulse rounded-xl bg-slate-200 ${className}`} />;
}