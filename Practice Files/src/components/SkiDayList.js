import { IoIosRocket } from 'react-icons/io'
import { IoMdSnow } from 'react-icons/io'
import { IoIosCalendar } from 'react-icons/io'
import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days}) => (
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>BackCountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((x, i) =>
                <SkiDayRow key={i}
                            {...x}/>

            )}
        </tbody>
    </table>
)
