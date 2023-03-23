export default function Box(props) {
    const { on, id, toggle } = props;

    const styles = {
        backgroundColor: on ? "#111" : "#fff",
        border: on ? "1px solid #fff" : "1px solid #111",
        color: on ? "#fff" : "#111",
    };

    return (
        <div style={styles} className="boite" onClick={toggle}>
            Boite {id}
        </div>
    );
}
