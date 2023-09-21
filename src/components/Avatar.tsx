export default function Avatar({ src }: {src: string}) {
  return (
    <div className='pl-2 pr-1 pt-2 pb-0 rounded-full bg-slate-200 w-14 h-14 mr-3 ml-3'>
      <img src={src} alt='avatar' />
    </div>
  );
}

