import React from "react";

const badgeColors = {
  Popular: "bg-blue-50 text-blue-500",
  Versatile: "bg-green-50 text-green-600",
  Fast: "bg-orange-50 text-orange-500",
  Standard: "bg-green-50 text-green-600",
  "Top SQL": "bg-blue-50 text-blue-500",
  Cache: "bg-red-50 text-red-500",
  Ubiquitous: "bg-yellow-50 text-yellow-600",
  Essential: "bg-purple-50 text-purple-500",
  Robust: "bg-blue-50 text-blue-500",
  Modern: "bg-cyan-50 text-cyan-500",
  Containers: "bg-sky-50 text-sky-500"
};

const Cards = (props) => {
  return (
    <div className={`flex w-full flex-col rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg
        ${props.isSelected ? "border-pink-500 shadow-md" : "border-slate-200"}`}>
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

      <div className="mt-5 flex items-center gap-2">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-500">
          {props.category}
        </span>

        <span className="rounded-md bg-slate-100 px-2 py-1 text-[10px] text-slate-500">
          {props.difficulty}
        </span>

        <span className="text-[10px] text-slate-500">
          ⭐ {props.rating}
        </span>
      </div>

      <button
        onClick={() => props.onAdd(props)}
        disabled={props.isSelected}
        className={`mt-4 w-full rounded-lg bg-slate-950 py-2.5 text-xs font-medium transition-all duration-200
            ${
                props.isSelected ? "cursor-not-allowed border border-pink-500 bg-white text-pink-600" : "cursor-pointer bg-slate-950 text-white hover:bg-slate-800"
            }`}>
                {props.isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  )
}

export default Cards