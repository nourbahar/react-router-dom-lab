import { useParams } from "react-router-dom"; 

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const mailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));

    return (
        <>
            <h2>Mailbox Details</h2>
            <dd>Box Holder: {mailbox.boxholder}</dd>
            <dd>Box Size: {mailbox.boxSize}</dd>
        </>
    );
}

export default MailboxDetails;