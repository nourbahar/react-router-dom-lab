import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm";
import MailboxDetails from "./components/MailboxDetails";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (mailbox) => {
    mailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, mailbox]);
  };

  return (
    <>
    
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailbox" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailbox/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />}/>
        <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />}/>
      </Routes>
    </>
  );
};

export default App;