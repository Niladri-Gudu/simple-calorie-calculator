import ItemCard from "./ItemCard"
import { useEffect, useState } from "react"

const AddForm = () => {

    const [items, setItems] = useState([])
    const [title, setTitle] = useState('')
    const [calorie, setCalorie] = useState('')
    const [protein, setProtein] = useState('')
    const [carbs, setCarbs] = useState('')
    const [fats, setFats] = useState('')
    const [totCal, setTotCal] = useState(0)
    const [totProtein, setTotProtein] = useState(0)
    const [totCarbs, setTotCarbs] = useState(0)
    const [totFats, setTotFats] = useState(0)

    const itemHandler = (e) => {
        e.preventDefault()
        setItems([...items, {
            title: title,
            calorie: calorie,
            protein: protein,
            carbs: carbs,
            fats: fats,
            quantity: 1
        }])
        setTitle('')
        setCalorie('')
        setProtein('')
        setCarbs('')
        setFats('')
    }

    useEffect(() => {
        let totalCalories = 0
        let totalProtein = 0
        let totalCarbs = 0
        let totalFat = 0

        items.forEach((item) => {
            totalCalories += parseFloat(item.calorie)
            totalProtein += parseFloat(item.protein)
            totalCarbs += parseFloat(item.carbs)
            totalFat += parseFloat(item.fats)
        })

        setTotCal(totalCalories)
        setTotProtein(totalProtein)
        setTotCarbs(totalCarbs)
        setTotFats(totalFat)

    }, [totCal, totProtein, totCarbs, totFats, items])

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mt-8 mb-4">Calorie Counter</h1>
      <form>
        <div className="grid grid-cols-2">
            <input onChange={(e) => setTitle(e.target.value)} value={title} className="border-2 border-black rounded-xl px-4 py-2 my-4 mx-20" placeholder="Item Name" type="text" />
            <input onChange={(e) => setCalorie(e.target.value)} value={calorie} className="border-2 border-black rounded-xl px-4 py-2 my-4 mx-20" placeholder="Calories" type="number" />
            <input onChange={(e) => setProtein(e.target.value)} value={protein} className="border-2 border-black rounded-xl px-4 py-2 my-4 mx-20" placeholder="Protein (g)" type="number" />
            <input onChange={(e) => setCarbs(e.target.value)} value={carbs} className="border-2 border-black rounded-xl px-4 py-2 my-4 mx-20" placeholder="Carbs (g)" type="number" />
            <input onChange={(e) => setFats(e.target.value)} value={fats} className="border-2 border-black rounded-xl px-4 py-2 my-4 mx-20" placeholder="Fat (g)" type="number" />
        </div>
        <div className="grid grid-cols-2">
            <button onClick={(e) => itemHandler(e)} className="border-2 border-black rounded-xl px-4 py-2 my-4 mx-20 bg-green-600 text-white font-medium border-none" type="submit">Add Item</button>
            <button className="border-2 border-black rounded-xl px-4 py-2 my-4 mx-20  bg-red-600 text-white font-medium border-none" type="reset">Clear All</button>
        </div>
      </form>
      <div className="flex flex-wrap mx-20 mt-10 gap-5">
        {
            items.map((item, index) => (
                <ItemCard key={index} quantity={title.quantity} title={item.title} protein={item.protein} carbs={item.carbs} fats={item.fats} calorie={item.calorie} />
            ))
        }
      </div>
      <div className="my-10">
        <h1 className="text-center font-medium text-2xl">Total Calories: {totCal}</h1>
        <h1 className="text-center font-medium text-2xl">Total Protein: {totProtein}</h1>
        <h1 className="text-center font-medium text-2xl">Total Carbs: {totCarbs}</h1>
        <h1 className="text-center font-medium text-2xl">Total Fats: {totFats}</h1>
      </div>
    </div>
  )
}

export default AddForm
