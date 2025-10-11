import "./LoaderStyles.scss";

interface ISpinnerProps {
    size?: number;
    mainColor?: string;
    subColor?: string;
}

function Spinner({size = 50, mainColor, subColor}: ISpinnerProps) {
    return <div className="loading-spinner" style={{
        borderColor: subColor,
        borderTopColor: mainColor,
        width: `${size}px`,
        height: `${size}px`,
        borderWidth: `${size / 5}px`
    }}></div>  
}

export default Spinner;
