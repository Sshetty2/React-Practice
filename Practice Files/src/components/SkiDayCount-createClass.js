import { createClass } from 'react'
import '../stylesheets/ui.scss'
import { IoIosRocket } from 'react-icons/io'
import { IoMdSnow } from 'react-icons/io'
import { IoIosCalendar } from 'react-icons/io'


export const SkiDayCount = createClass({
    getDefaultProps() {
      return {
        total: 50,
        powder: 50,
        backcountry: 15,
        goal: 100
      }
    },
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <IoIosCalendar />
          <span>days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
            <IoMdSnow />
          <span>days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
            <IoIosRocket />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total, 
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
})