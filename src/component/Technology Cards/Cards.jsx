import React from 'react'

const badgeColors = {
  Popular: "bg-blue-50 text-blue-500",
  Versatile: "bg-green-50 text-green-600",
  Fast: "bg-orange-50 text-orange-500",
  Standard: "bg-green-50 text-green-600",
  "Top SQL": "bg-blue-50 text-blue-500",
  Cache: "bg-red-50 text-red-500",
  Ubiquitous: "bg-yellow-50 text-yellow-600",
  Essential: "bg-purple-50 text-purple-500",
};

const Cards = (props) => {
  return (
    <div className="flex w-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">

      <div className="flex items-center justify-between">
        <img src={props.icon} alt={props.name} className="h-10 w-10 object-contain"/>

        {props.badge && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              badgeColors[props.badge] ||
              "bg-slate-100 text-slate-500"
            }`}>
            {props.badge}
          </span>
        )}
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold text-slate-900">
          {props.name}
        </h2>

        <p className="mt-2 min-h-[50px] text-xs leading-5 text-slate-400">
          {props.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-2">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-500">
          {props.category}
        </span>

        <span className="text-[10px] text-slate-500">
          {props.difficulty}
        </span>

        <span className="text-[10px] text-slate-500">
          ⭐ {props.rating}
        </span>
      </div>

      <button
        onClick={() => props.onAdd(props)}
        className="mt-4 w-full rounded-lg bg-slate-950 py-2.5 text-xs font-medium text-white transition hover:bg-slate-800">
        Add to Stack
      </button>
    </div>
  )
}

export default Cards