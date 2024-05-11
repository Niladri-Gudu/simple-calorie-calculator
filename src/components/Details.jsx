/* eslint-disable react/prop-types */

const Details = ( { totCal, totProtein, totCarbs, totFats} ) => {
  return (
      <div className="my-10">
        <h1 className="text-center font-medium text-2xl">Total Calories: {totCal}</h1>
        <h1 className="text-center font-medium text-2xl">Total Protein: {totProtein}</h1>
        <h1 className="text-center font-medium text-2xl">Total Carbs: {totCarbs}</h1>
        <h1 className="text-center font-medium text-2xl">Total Fats: {totFats}</h1>
      </div>
  )
}

export default Details
