import React from 'react';
import '../styles/search_bar.css';
import {FaSearch} from 'react-icons/fa'

interface Props {
    onSubmitCallback: (searchQuery: string) => void
}

interface State {
    searchValue: string
}

const inittialState:State = {
    searchValue: ''
}

const SearchBar: React.FC<Props> = ({onSubmitCallback}) => {

    const [state, setState] = React.useState(inittialState)
    const inputRef = React.useRef<HTMLInputElement>(null)
    
    const _handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()
        console.log(`submitted value is ${state.searchValue}`);
        inputRef.current?.blur()
    }

    return (
        <form onSubmit={_handleSubmit} 
                className="search">

            <div className="search_field">
                <FaSearch className="search_icon"/>
                <input
                    ref={inputRef}
                    type="text" 
                    value={state.searchValue} 
                    className="search_input" 
                    placeholder="Search Here"
                    onChange={(event) => {
                        setState({searchValue: event.target.value})
                       
                    }}
                />
            </div>
        </form>
    )
}

export default SearchBar;
