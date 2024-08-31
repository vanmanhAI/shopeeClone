export const Spinner = () => {
  return (
    <div className='w-full min-h-screen h-full'>
      <div className='flex justify-center items-center fixed inset-0 bg-white'>
        <div className='flex justify-center gap-[3px]'>
          <div className='size-2 rounded-full bg-orange animate-bounce1'></div>
          <div className='size-2 rounded-full bg-orange animate-bounce2'></div>
          <div className='size-2 rounded-full bg-orange animate-bounce3'></div>
        </div>
      </div>
    </div>
  )
}
