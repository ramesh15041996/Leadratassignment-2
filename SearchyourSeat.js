import React from "react";
import { useState, useContext } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import JourneyContext from "../context/JourneyContext";

function SearchYourSeat() {
  const [ticketType, setTicketType] = useState(JourneyContext);
  const [ticketCount, setTicketCount] = useState(JourneyContext);
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  function searchTickets() {
    if(!ticketType ||!ticketCount||!date) {
      toast.error("All fields are required");
    } else {
      navigate("/results");
    }
  }
  return (
    <div className="m-5">
      <InputGroup className="mb-3 flex align-items-center">
        <Form.Select
         value={ticketType}
          placeholder="ticket-type"
          aria-label="Text input with dropdown button"
         
          onChange={(e) => setTicketType(e.target.value)}
        >
          <option value="option1">First-Class</option>
          <option value="option2">Premium</option>
          <option value="option3">Gold</option>
        </Form.Select>
        <Form.Select
          custom
          value={ticketCount}
          placeholder="TicketCount"
          aria-label="Text input with dropdown button"
          onChange={(e) => setTicketCount(e.target.value)}
        >
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
          <option value="option4">4</option>
          <option value="option5">5</option>
          <option value="option6">6</option>
          <option value="option7">7</option>
          <option value="option8">8</option>
          <option value="option9">9</option>
        </Form.Select>
        
        <Form.Control
            value={date}
            placeholder="Date"
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            aria-label="Text input with dropdown button"
          />
        <Button variant="danger" onClick={searchTickets}>
          Search Tickets
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchYourSeat;
