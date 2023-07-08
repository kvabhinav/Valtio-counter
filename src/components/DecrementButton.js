import state from "../state"

export default function DecrementButton(){
    return(
        <div>
            <button onClick={()=>state.count-=1}>Decrement</button>
        </div>
    )
}