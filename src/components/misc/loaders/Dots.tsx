import "./LoaderStyles.scss";

interface IDotsProps {
    size?: number;
    mainColor?: string;
    subColor?: string;
}

function Dots({size = 10, mainColor = 'black', subColor = 'darkgray'}: IDotsProps) {
    const dotStyle = {
        width: `${size}px`,
    };

    return <div className="dots-loader" style={{gap: `${size / 5}px`}}>
        <p className="dot" style={{backgroundColor: subColor, ...dotStyle}}></p>
        <p className="dot" style={{backgroundColor: mainColor, ...dotStyle}}></p>
        <p className="dot" style={{backgroundColor: subColor, ...dotStyle}}></p>
    </div>
}

export default Dots;