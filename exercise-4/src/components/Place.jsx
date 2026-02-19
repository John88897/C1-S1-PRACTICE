export default function Place(props) {
  return (
    <li {...props.id} className="place-item">
      <button>
        <img {...props.image} />
        <h3>{props.title}</h3>
      </button>
    </li>
  );
}
