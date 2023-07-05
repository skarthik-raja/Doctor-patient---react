import React, { Component } from "react";
import axios from "axios";
import { Variable } from "./Variable";

export class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      appointmentDate: "",
      description: "",
      patientName: "",
      patientPhoneNumber: "",
      patientEmail: "",
      patientId: 0,
      doctorId: 0,
      selectedAppointmentId: null,
    };
  }

  componentDidMount() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    axios
      .get(`${Variable.api_url}Appointment`)
      .then((response) => {
        this.setState({ appointments: response.data });
      })
      .catch((error) => {
        console.error("Error Fetching Appointments:", error);
      });
  }

  handleDateInputChange(event) {
    const { value } = event.target;
    this.setState({ appointmentDate: value });
  }

  handleDescriptionInputChange(event) {
    this.setState({ description: event.target.value });
  }

  handleNameInputChange(event) {
    this.setState({ patientName: event.target.value });
  }

  handlePhoneNumberInputChange(event) {
    this.setState({ patientPhoneNumber: event.target.value });
  }

  handleEmailInputChange(event) {
    this.setState({ patientEmail: event.target.value });
  }

  handleIdInputChange(event) {
    this.setState({ patientId: event.target.value });
  }

  handleDoctorIdInputChange(event) {
    this.setState({ doctorId: event.target.value });
  }

  createAppointment() {
    const {
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId,
      doctorId,
    } = this.state;

    const appointmentDateValue = new Date(appointmentDate).toISOString();

    const newAppointment = {
      appointmentDate: appointmentDateValue,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId: patientId ? parseInt(patientId) : 0,
      doctorId: doctorId ? parseInt(doctorId) : 0,
    };

    axios
      .post(`${Variable.api_url}Appointment`, newAppointment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.errors) {
          console.log("Validation Errors:", data.errors);
        } else {
          console.log("Appointment Created:", data);
          this.fetchAppointments();
          this.setState({
            appointmentDate: "",
            description: "",
            patientName: "",
            patientPhoneNumber: "",
            patientEmail: "",
            patientId: "",
            doctorId: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error Creating the Appointment:", error);
      });
  }

  handleUpdate(appointmentId) {
    axios
      .get(`${Variable.api_url}Appointment/${appointmentId}`)
      .then((response) => {
        const {
          appointmentDate,
          description,
          patientName,
          patientPhoneNumber,
          patientEmail,
          patientId,
          doctorId,
        } = response.data;
        this.setState({
          appointmentDate,
          description,
          patientName,
          patientPhoneNumber,
          patientEmail,
          patientId: patientId ? patientId.toString() : "",
          doctorId: doctorId ? doctorId.toString() : "",
          selectedAppointmentId: appointmentId,
        });
      })
      .catch((error) => {
        console.error("Error Fetching Appointment Details:", error);
      });
  }

  updateAppointment() {
    const {
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId,
      doctorId,
      selectedAppointmentId,
    } = this.state;

    const appointmentDateValue = new Date(appointmentDate).toISOString();

    const updatedAppointment = {
      appointmentDate: appointmentDateValue,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId: patientId ? parseInt(patientId) : 0,
      doctorId: doctorId ? parseInt(doctorId) : 0,
    };

    axios
      .put(`${Variable.api_url}Appointment/${selectedAppointmentId}`, updatedAppointment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.errors) {
          console.log("Validation Errors:", data.errors);
        } else {
          console.log("Appointment Updated:", data);
          this.fetchAppointments();
          this.setState({
            appointmentDate: "",
            description: "",
            patientName: "",
            patientPhoneNumber: "",
            patientEmail: "",
            patientId: "",
            doctorId: "",
            selectedAppointmentId: null,
          });
        }
      })
      .catch((error) => {
        console.error("Error Updating the Appointment:", error);
      });
  }

  deleteAppointment(appointmentId) {
    axios
      .delete(`${Variable.api_url}Appointment/${appointmentId}`)
      .then((response) => {
        console.log("Appointment Deleted:", appointmentId);
        this.fetchAppointments();
      })
      .catch((error) => {
        console.error("Error Deleting the Appointment:", error);
      });
  }

  render() {
    const {
      appointments,
      appointmentDate,
      description,
      patientName,
      patientPhoneNumber,
      patientEmail,
      patientId,
      doctorId,
      selectedAppointmentId,
    } = this.state;

    return (
      <div>
        <h2>Appointments</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Patient Name</th>
              <th>Patient Phone Number</th>
              <th>Patient Email</th>
              <th>Patient ID</th>
              <th>Doctor ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.appointmentDate}</td>
                <td>{appointment.description}</td>
                <td>{appointment.patientName}</td>
                <td>{appointment.patientPhoneNumber}</td>
                <td>{appointment.patientEmail}</td>
                <td>{appointment.patientId}</td>
                <td>{appointment.doctorId}</td>
                <td>
                  <button onClick={() => this.handleUpdate(appointment.id)}>Edit</button>
                  <button onClick={() => this.deleteAppointment(appointment.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>{selectedAppointmentId ? "Edit Appointment" : "Create Appointment"}</h2>
        <div>
          <label>Date:</label>
          <input type="date" value={appointmentDate} onChange={(e) => this.handleDateInputChange(e)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => this.handleDescriptionInputChange(e)} />
        </div>
        <div>
          <label>Patient Name:</label>
          <input type="text" value={patientName} onChange={(e) => this.handleNameInputChange(e)} />
        </div>
        <div>
          <label>Patient Phone Number:</label>
          <input type="text" value={patientPhoneNumber} onChange={(e) => this.handlePhoneNumberInputChange(e)} />
        </div>
        <div>
          <label>Patient Email:</label>
          <input type="email" value={patientEmail} onChange={(e) => this.handleEmailInputChange(e)} />
        </div>
        <div>
          <label>Patient ID:</label>
          <input type="number" value={patientId} onChange={(e) => this.handleIdInputChange(e)} />
        </div>
        <div>
          <label>Doctor ID:</label>
          <input type="number" value={doctorId} onChange={(e) => this.handleDoctorIdInputChange(e)} />
        </div>
        <div>
          {selectedAppointmentId ? (
            <button onClick={() => this.updateAppointment()}>Update</button>
          ) : (
            <button onClick={() => this.createAppointment()}>Create</button>
          )}
        </div>
      </div>
    );
  }
}
