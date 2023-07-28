import { createStore } from "./core.js";
import reducer from "./reducer.js";
// Dùng destructuring để lấy các phương thức attach, connect, dispatch
const { attach, connect, dispatch } = createStore(reducer);
// const { attach, connect, dispatch }: Đây là một cú pháp destructuring,
// cho phép bạn tạo các biến attach, connect, và dispatch
// từ các thuộc tính của đối tượng trả về từ hàm createStore.
window.dispatch = dispatch;
export { attach, connect };
