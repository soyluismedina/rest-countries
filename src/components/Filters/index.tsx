import FilterSelect from '../FilterSelect'
import FilterText from '../FilterText'
import './stylesFilters.css'

function Filters() {

  return (
    <form className='form'>
      <FilterText />
      <FilterSelect />
    </form>
  )
}

export default Filters