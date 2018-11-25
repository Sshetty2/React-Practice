import { IoIosRocket } from 'react-icons/io'
import { IoMdSnow } from 'react-icons/io'
import { IoIosCalendar } from 'react-icons/io'
import { PropTypes } from 'react'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
    <tr>
        <td>
            {date}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <IoMdSnow /> : null}
        </td>
        <td>
            {(backcountry) ? <IoIosRocket /> : null}
        </td>
    </tr>

)


SkiDayRow.propTypes = {
    date : PropTypes.string.isRequired, 
    powder: PropTypes.bool,
    backcountry: PropTypes.bool,
    resort: PropTypes.string
}
  
  