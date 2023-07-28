export default function html([first, ...strings], ...values) {
    return values
        .reduce((acc, cur) => acc.concat(cur, strings.shift()), [first])
        .filter((x) => (x && x !== true) || x === 0)
        .join("");
}
export function createStore(reducer) {
    let state = reducer();
    // return lại dữ liệu ban đầu của store lưu vào state
    // roots : chứa các element để render ra view
    const roots = new Map();
    // Lấy root element, và component tương ứng lưu vào roots
    // component là thành phần chứa view
    function render() {
        // destructuring
        for (const [root, component] of roots) {
            const output = component(); // return ra strings html
            root.innerHTML = output;
        }
    }
    return {
        // attach nhận view và đẩy ra thẻ chứa id: root
        attach(component, root) {
            // set vài roots
            roots.set(root, component);
            //set(key, value)
            render();
        },
        // connect : kết nối store với view
        connect(selector = (state) => state) {
            // props : công cụ, dữ liệu muốn truyền vào component sau này
            // args :arguments
            return (component) =>
                (props, ...args) =>
                    component(
                        Object.assign({}, props, selector(state), ...args)
                    );
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        },
    };
}
/**
 * Object.assign
 * Object.assign(target, ...sources)
 * target: Đối tượng đích. Các thuộc tính từ các đối tượng nguồn sẽ được sao chép vào đối tượng này.
 * ...sources: Các đối tượng nguồn. Có thể cung cấp một hoặc nhiều đối tượng để sao chép các thuộc tính vào đối tượng đích.
 * Lưu ý là Object.assign() chỉ sao chép các thuộc tính trực tiếp, không thực hiện sao chép đệ quy (nested) cho các thuộc tính là đối tượng con.
 *      const obj1 = { foo: 1, bar: 2 };
        const obj2 = { baz: 3 };
        const obj3 = { qux: 4 };

        const result = Object.assign({}, obj1, obj2, obj3);

        console.log(result);
        // Output: { foo: 1, bar: 2, baz: 3, qux: 4 }
 */
