import { PropTypes } from "prop-types";
const SearchComponent = ({onChange})=>{
    return(
        <>
            <label htmlFor="search">Filter</label>
            <input type="text" onChange={ onChange } id="search" name="search"/>
        </>
    )
}

SearchComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchComponent;