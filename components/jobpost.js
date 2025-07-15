import "@/app/globals.css";

export default function Jobpost({id, title, description}) {
    return (
        <div class="#">
            <button>Sacuvaj</button>
            <button>Ukloni</button>
            <p>{id}</p>
            <p>Satnica/Dnevnica</p>&nbsp;<p>{title}</p>&nbsp;<p>Iskustvo</p>
            <p>{description}</p>

        </div>

    );
}