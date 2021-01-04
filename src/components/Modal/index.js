import React, {useContext, useReducer, createContext} from 'react'

const ModalContext = createContext()

export const useAlert = () => useContext(ModalContext)

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return {...state, visible: true, text: action.text}
        case HIDE_ALERT: return {...state, visible: false}
        default: return state
    }
}

const Modal = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        card: {}
    })

    const show = card => dispatch({ type: SHOW_ALERT, card })
    const hide = () => dispatch({ type: HIDE_ALERT })

    return (
        <ModalContext.Provider value={{
            visible: state.visible,
            card: state.card,
            show, hide
        }}>
            { children }
        </ModalContext.Provider>
    )
}

export default Modal