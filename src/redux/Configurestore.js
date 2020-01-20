import {createStore} from 'redux'
import {Reducer} from './Reducer'

const Configurestore = () => {
    const store = createStore(Reducer)

    return store;
}

export default Configurestore



