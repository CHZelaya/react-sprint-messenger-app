import './button.styling.scss';

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <div className={"button-container"} {...otherProps}>
            <button type="submit">
                {children}
            </button>
        </div>
    );
};



export default Button