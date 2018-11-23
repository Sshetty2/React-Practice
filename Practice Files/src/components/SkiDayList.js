import { IoIosRocket } from 'react-icons/io'
import { IoMdSnow } from 'react-icons/io'
import { IoIosCalendar } from 'react-icons/io'
import { SkiDayRow } from './SkiDayRow'
import { PropTypes } from 'react'

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


SkiDayList.propTypes = {
    date : function(props) {
        if(!Array.isArray(props.days)) {
            return new Error(
                "SkiDayList should be an array"
            )
        } else if (!props.days.length) {
            return new Error(
                "SkiDayList must have at least one record"
            )
        } else {
            return null
        }
    }
}

// {days.map((day, i) =>
//     <SkiDayRow key={i}
//                 resort = {day.resort}
//                 date = {day.resort}
//                 powder = {day.powder}
//                 backcountry = {day.backcountry}
// />