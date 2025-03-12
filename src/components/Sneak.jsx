import { TypeAnimation } from 'react-type-animation';

const Sneak = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            fontSize: "1.5rem",
            fontFamily: "Arial, sans-serif"
        }}>
            <div style={{ maxWidth: "80%", margin: "0 auto" }}>
                <h1>500 - Internal Server Error</h1>
                <p><TypeAnimation
                    sequence={[
                        'Something went wrong. Please try again later',
                        1000,
                        'Just Kidding ;)'
                    ]}
                    speed={90}
                    preRenderFirstString={true}
                /></p>
            </div>
        </div>
    );
}

export default Sneak