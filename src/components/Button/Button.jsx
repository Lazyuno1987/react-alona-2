
export const Button = ({ textContent, handlerClick }) => {
    return (
        <button
            onClick={handlerClick}
            type="button">{textContent}</button>
    )

}