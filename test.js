// function highLight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()],
//         [first]
//     );
// }
// const course = "F8";
// const web = "Fullstack.edu";
// var html = highLight`Hoc lap trinh ${course} mien phi tai ${web} !`;
// console.log(html.join(""));
function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    );
}
