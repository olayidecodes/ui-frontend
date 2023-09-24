

import Thermometer from 'react-thermometer-component';


const LisThermo = () => {
    return(
        <div className="measureContainer">
            <Thermometer
                className="custom-thermometer"
                theme="light"
                value="5000000"
                max="9000000"
                steps="3"
                format="$"
                size="large"
                height="300"
            /> 

            <Thermometer
                theme="light"
                value="3000000"
                max="9000000"
                steps="3"
                format="$"
                size="large"
                height="300"
            />

            <Thermometer
                theme="light"
                value="4000000"
                max="9000000"
                steps="3"
                format="$"
                size="large"
                height="300"
            />
        </div>
    )
}

export default LisThermo;