const init = {
    cars: ["BMW"],
};
export default function reducer(state = init, action, args) {
    // Lần đầu tiên return về gúa trị mặc định

    switch (action) {
        case "ADD": {
            const [newCar] = args;
            return {
                ...state,
                cars: [...state.cars, newCar],
            };
        }
        default: {
            return state;
        }
    }
}
