import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdEventSeat} from "react-icons/md"
import { MdOutlineEventSeat} from "react-icons/md"
import { FaRegWindowMinimize} from "react-icons/fa"



const numRows = 1;
const numCols = 9;

//list of booked seats
const bookedSeats = [
  { row: 1, col: 2 },
  { row: 3, col: 4 },
  { row: 4, col: 6 },
];

function SeatLayout2() {
  const [ticketType, setTicketType] = useState("");
  const [ticketCount, setTicketCount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [message, setMessage] = useState("");
  const [availableSeats, setAvailableSeats] = useState([
    <MdOutlineEventSeat size={30} color="gray">1</MdOutlineEventSeat>,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    
    
    
  ],);
  const [standard, setStandard] = useState([
    <MdOutlineEventSeat size={30} color="gray">1</MdOutlineEventSeat>,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    
    
    
  ],);
  const [standard1, setStandard1] = useState([
    <MdOutlineEventSeat size={30} color="gray">1</MdOutlineEventSeat>,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    
    
    
  ],);
  const [standard3, setStandard3] = useState([
    <MdOutlineEventSeat size={30} color="gray">1</MdOutlineEventSeat>,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    
    
    
  ],);



  const [gold, setgold] = useState([
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
  ])

  
  const handleSeatClick = (seat) => {
    if ((availableSeats.includes(seat) && !selectedSeats.includes(seat))) {
      setSelectedSeats([...selectedSeats, seat]);
    } else if (selectedSeats.includes(seat)) {
      const updatedSelectedSeats = selectedSeats.filter(
        (selectedSeat) => selectedSeat !== seat
      );
      
      
    
    }
  };
  const seatClickHandler = (row, col) => {
    const seat = { row, col };
    const isSeatSelected = selectedSeats.some(
      (s) => s.row === row && s.col === col
    );
    const isSeatBooked = bookedSeats.some(
      (s) => s.row === row && s.col === col
    );

    if (isSeatSelected) {
      setSelectedSeats(
        selectedSeats.filter((s) => s.row !== row || s.col !== col)
      );
    } else if (!isSeatBooked) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const isSeatAvailable = (row, col) => {
    return !bookedSeats.some((s) => s.row === row && s.col === col);
  };

  const renderSeat = (row, col) => {
    const isSeatSelected = selectedSeats.some(
      (seat) => seat.row === row && seat.col === col
    );
    const isSeatBooked = bookedSeats.some(
      (seat) => seat.row === row && seat.col === col
    );

    let seatClass = "seat";
    if (isSeatSelected) {
      seatClass += " selected";
    } else if (isSeatBooked) {
      seatClass += " booked";
    } else {
      seatClass += " available";
    }

    return (
      <span
        key={`${row}-${col}`}
        className={seatClass}
        onClick={() => {
          if (!isSeatBooked) {
            seatClickHandler(row, col);
          }
        }}
      >
        {row}
      </span>
    );
  };

  const handleProceedClick = () => {
     
    
      const updatedAvailableSeats= availableSeats.filter(
      (seat) => !selectedSeats.includes(seat)
    );
    
    
    setAvailableSeats(updatedAvailableSeats);
    setgold ([
      <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdOutlineEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    <MdEventSeat size={30} color="gray" />,
    ])
    setTicketType("");
    setTicketCount(0);
    setSelectedSeats([]);
    setStandard(updatedAvailableSeats);
    setStandard1(updatedAvailableSeats);
    setStandard3(updatedAvailableSeats);
  };

  return (

    <div className="App">
      <div className="naming">
      <MdOutlineEventSeat className="naming1" size={30} color="gray"/>Available   
      <MdEventSeat className="naming1" size={30} color="gray" />Sold
    <MdEventSeat className="naming1"  size={30} color="blue" />Your Seats
    </div>
      <div className="seat-container">
        
      <div className="seat-map4">
          {gold.map((seat) => (
            <div
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          ))}
          
        </div>
        <div className="seat-map5">
          {gold.map((seat) => (
            <div
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          ))}
          
        </div>
        <div className="seat-map">
          
          {standard.map((seat) => (
            <div
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          ))}
          
        </div>
        <div className="seat-map1">
          {availableSeats.map((seat) => (
            <div
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          ))}
          
        </div>
        
        
        <div className="seat-map2">
          {standard1.map((seat) => (
            <div
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          ))}
          
        </div>
        <div className="seat-map3">
          {standard3.map((seat) => (
            <div
              key={seat}
              className={`seat ${
                selectedSeats.includes(seat) ? "selected" : ""
              }`}
              onClick={() => handleSeatClick(seat)}
            >
              {seat}
            </div>
          ))}
          
        </div>
        
        
        
      </div>
      <h2>[-----screen-----]</h2>
      <div className="controls">
        <button className="btn btn-primary" onClick={handleProceedClick}>
          Proceed
        </button>
        <p className="message">{message}</p>
        
      </div>
    </div>
  );
}

export default SeatLayout2;
