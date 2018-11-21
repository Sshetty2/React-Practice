import { IoIosRocket } from 'react-icons/io'
import { IoMdSnow } from 'react-icons/io'
import { IoIosCalendar } from 'react-icons/io'

export const SkiDayRow = ({resort, date, powder, backcountry}) => (
    <tr>
        <td>
            {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
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