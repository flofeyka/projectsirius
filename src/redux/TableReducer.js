import axios from "axios"

const AddActionCreator = "ADD-ACTION"
const SetEnableCreator = "SET-ENABLE"

let InitialState = {
    actions: [
    {
        id: 0,
        Doing: "Установить цвет",
        Time: 5,
        Color: "White",
        rgbColor: {
            rgbColor1: 255,
            rgbColor2: 255,
            rgbColor3: 255
        }
    },
    {
        id: 1, 
        Doing: "Установить цвет",
        Time: 5,
        Color: "White",
        rgbColor: {
            rgbColor1: 255,
            rgbColor2: 255,
            rgbColor3: 255
        }

    },
    {
        id: 2,
        Doing: "Установить цвет",
        Time: 5,
        Color: "Blue",
        rgbColor: {
            rgbColor1: 0,
            rgbColor2: 0,
            rgbColor3: 255
        }
    },
    {
        id: 3,
        Doing: "Установить цвет",
        Time: 5,
        Color: "Blue",
        rgbColor: {
            rgbColor1: 0,
            rgbColor2: 0,
            rgbColor3: 255
        }

    },
    {
        id: 4,
        Doing: "Установить цвет",
        Time: 5,
        Color: "Red",
        rgbColor: {
            rgbColor1: 255,
            rgbColor2: 0,
            rgbColor3: 0
        }

    },
    {
        id: 5,
        Doing: "Установить цвет",
        Time: 5,
        Color: "Red",
        rgbColor: {
            rgbColor1: 255,
            rgbColor2: 0,
            rgbColor3: 0
        }

    }
],
    isEnabled: false
}


function TableReducer(state=InitialState, action) {
    switch(action.type){
        case AddActionCreator:
            axios.get(`http://localhost:8001/?commands=clear`)
            axios.get(`http://localhost:8001/?commands=pinmode(12,1)`)
            state.actions.map(a => {
                setInterval(() => {
                    axios.get(`http://localhost:8001/?commands=set(${a.id},${a.rgbColor.rgbColor1},${a.rgbColor.rgbColor2},${a.rgbColor.rgbColor3})`)
                }, 500);
            }
        )
        case SetEnableCreator:
            return {...state, isEnabled: action.bool}
        default:
            return state;
    }
}

export const AddAction = () => ({type: AddActionCreator})
export const SetEnable = (bool) => ({isEnabled: bool})

export default TableReducer;