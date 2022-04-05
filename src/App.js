import React from "react";
import "./App.css";
import { useAcceptJs } from "react-acceptjs";

const authData = {
  apiLoginID: "46g9UcuT2",
  clientKey: "768qRY44Muw9D9ma",
};

function App() {
  const { dispatchData, loading, error } = useAcceptJs({ authData });
  const [cardData, setCardData] = React.useState({
    cardNumber: "",
    month: "",
    year: "",
    cardCode: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Dispatch CC data to Authorize.net and receive payment nonce for use on your server
    const response = await dispatchData({ cardData });
    console.log("Received response:", response);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cardNumber"
          placeholder="card number"
          value={cardData.cardNumber}
          onChange={(event) =>
            setCardData({ ...cardData, cardNumber: event.target.value })
          }
        />
        <input
          type="text"
          name="month"
          placeholder="card month"
          value={cardData.month}
          onChange={(event) =>
            setCardData({ ...cardData, month: event.target.value })
          }
        />
        <input
          type="text"
          name="year"
          placeholder="card year"
          value={cardData.year}
          onChange={(event) =>
            setCardData({ ...cardData, year: event.target.value })
          }
        />
        <input
          type="text"
          name="cardCode"
          placeholder="card cvv"
          value={cardData.cardCode}
          onChange={(event) =>
            setCardData({ ...cardData, cardCode: event.target.value })
          }
        />
        <button type="submit" disabled={loading || error}>
          Pay
        </button>
      </form>
    </div>
  );
}

export default App;
