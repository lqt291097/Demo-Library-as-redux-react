import html from "../core.js";
import { connect } from "../store.js";
const connecter = connect();
function App({ cars }) {
    console.log(cars);
    return html`
        <ul>
            ${cars.map((car) => `<li>${car}</li>`)}
        </ul>
        <button onclick="dispatch('ADD','Porsche')">Add car</button>
    `;
}
export default connecter(App);
// Hàm connect return ra component.Nhận hàm mới là connecter. connecter nhận
// đối số App là component
