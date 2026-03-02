import "@/app/globals.css";

export default function Jobpost({user_id, title, description, className}) {
    return (
        <div className={className}>
            <button>Sacuvaj</button>
            <button>Ukloni</button>
            <p>{user_id}</p>
            <p>Satnica/Dnevnica</p>&nbsp;<p>{title}</p>&nbsp;<p>Iskustvo</p>
            <p>{description}</p>

        </div>

    );
}