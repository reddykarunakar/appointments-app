import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import Appointment from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentList: [],
    title: '',
    date: '',
    showStarred: false,
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(each => {
        if (id === each.id) {
          return {...each, isFavorite: !each.isFavorite}
        }
        return each
      }),
    }))
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    if (title && date) {
      const newAppointment = {
        id: uuidv4(),
        title,
        date,
        isFavorite: false,
      }
      this.setState(prevState => ({
        appointmentList: [...prevState.appointmentList, newAppointment],
        title: '',
        date: '',
      }))
    }
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  toggleShowStarred = () => {
    this.setState(prevState => ({
      showStarred: !prevState.showStarred,
    }))
  }

  render() {
    const {title, date, appointmentList, showStarred} = this.state
    const filteredAppointments = showStarred
      ? appointmentList.filter(appointment => appointment.isFavorite)
      : appointmentList

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Add Appointment</h1>
          <div className="cont">
            <form onSubmit={this.onAddAppointment}>
              <label className="title" htmlFor="title">
                Title
              </label>
              <br />
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.onChangeTitle}
                placeholder="Title"
              />
              <br />
              <label className="date" htmlFor="date">
                Date
              </label>
              <br />
              <input
                type="date"
                id="date"
                value={date}
                onChange={this.onChangeDate}
                required
              />
              <br />
              <button type="submit">Add</button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr />
          <h1 className="heading2">Appointments</h1>
          <button onClick={this.toggleShowStarred}>Starred</button>
          <ul className="list">
            {filteredAppointments.map(eachlist => (
              <Appointment
                key={eachlist.id}
                details={eachlist}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
