import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './stylesSpinner.css'

function Spinner() {

  const { darkMode } = useContext(ThemeContext)

  return (
    <div className='containerSpinner'>
      <span className={`${darkMode ? 'loader' : 'loader loaderLight'}`}></span>
    </div>
  )
}
export default Spinner