// We have to import them by setting them like way.
// Better to use the CSS variables.
export const colors = {
    primary: "#645cff"
}

// We can also create functions here!
export const setBorder = ({width, type="solid", color}) => {
    return `${width}px ${type} ${color}`;
}