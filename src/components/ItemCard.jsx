/* eslint-disable react/prop-types */

const ItemCard = ( { title, protein, fats, carbs, calorie } ) => {
  return (
    <div className="border-2 rounded-xl border-blue-500 p-5 w-[200px] flex flex-col gap-3">
        <h1 className="font-semibold text-xl">{title}</h1>
        <div>
            <h3>Calories: {calorie}</h3>
            <h3>Protein: {protein}g</h3>
            <h3>Carbs: {carbs}g</h3>
            <h3>Fat: {fats}g</h3>
        </div>
        {/* <div className="flex justify-between w-full items-center">
            <button className="text-2xl bg-green-500 px-4 py-1 rounded-xl text-white  ">+</button>
            <p className="font-medium text-2xl">{quantity}</p>
            <button className="text-2xl bg-red-500 px-4 py-1 rounded-xl text-white  ">-</button>
        </div> */}
        <div className="flex justify-between ">
            <button className="text-lg bg-green-500 px-4 py-1 rounded-xl text-white  ">Edit</button>
            <button className="text-lg bg-red-500 px-4 py-1 rounded-xl text-white  ">Delete</button>
        </div>
    </div>
  )
}

export default ItemCard
