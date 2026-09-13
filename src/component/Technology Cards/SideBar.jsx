import React from 'react'

const SideBar = (props) => {
  return (
    <div className='w-full mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm'>
        <h2 className='text-2xl font-bold text-slate-900'>
            Your Stack
        </h2>

        <p className='mt-2 text-sm text-slate-400'>
            {props.stack.length === 0 ? "No technologies selected yet" : `${props.stack.length} Technology Selected`}
        </p>
        {props.stack.length === 0 ? (
            <div className='mt-6 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200'> 
            <p className='text-sm text-slate-300'>
                Your stack is empty
            </p>
            </div>
        ) : (
            <div className='mt-6'>
                {props.stack.map((technology) => (
                    <div key={technology.id} className='mb-2 flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3'>
                        <div className='flex items-center gap-3'>
                            <img src={technology.icon} alt={technology.name} className='h-10 w-10 object-contain'/>

                            <div>
                                <h3 className='text-sm font-semibold text-slate-800'>
                                    {technology.name}
                                </h3>
                                <p className='text-xs text-slate-400'>
                                    {technology.category}
                                </p>
                            </div>
                        </div>
                        <button onClick={() => props.onRemove(technology.id)} className='text-3xl font-light text-slate-300 hover:text-red-500'>×</button>
                    </div>
                ))}
                <button onClick={props.onRemoveAll} className='mt-6 w-full rounded-xl border border-red-200 py-3 text-sm font-semibold text-red-500 hover:bg-red-50'>
                    Remove All
                </button>
            </div>
        )}
    </div>
  )
}

export default SideBar