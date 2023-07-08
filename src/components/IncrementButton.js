import state from "../state"

export default function IncrementButton(){

    return(
        <div>
            <button onClick={()=>state.count+=1}>increment</button>
        </div>
    )
}