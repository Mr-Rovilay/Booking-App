import {categories} from "../assets/data"

const Listing = () => {
  return (
    <section id="listing" className="py-12 max-padd-container">
        <div className="pb-16 text-center">
            <h6 className="capitalize">From concept to reality</h6>
            <h2 className="capitalize h2">Discover our new latest listings</h2>
        </div>
        <div className="flex px-2 py-2 mb-16 overflow-x-auto bg-white shadow-sm rounded-xl hide-scrollbar gap-x-1 ring-1 ring-slate-400/5">
            {
                categories.map((category) =>(
                    <div className="flex-col gap-2 p-2 cursor-pointer flexCenter rounded-xl min-w-24 xl:min-w-32" style={{flexShrink:0}} key={category.label}>
                        <div className="w-10 h-10 p-2 text-lg rounded-full text-secondary flexCenter" style={{backgroundColor: `${category.color}`}}>{category.icon}</div>
                        <p className="medium-14">{category.label}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Listing