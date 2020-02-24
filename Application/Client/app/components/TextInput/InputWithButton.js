// import React from 'react';
// import PropTypes from 'prop-types';
// import { View, Text, TouchableHighlight, TextInput } from 'react-native';
// import color from 'color';

// import styles from './styles';

// const InputWithButton = (props) => {
//     const { onPress, buttonText, buttonText2, editable = true } = props;

//     const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier,);

//     const containerStyles = [styles.container];
//     if (editable === false)
//     {
//         containerStyles.push(styles.containerDisabled);
//     }
//     return (
//         <View style={containerStyles}>
//             <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
//                 <Text style={styles.buttonText}>{buttonText}</Text>
//             </TouchableHighlight>
//             <View style={styles.border} />
//             <TextInput style={styles.input} {...props} />
//         </View>
//     );
// };

// InputWithButton.propTypes = {
//     onPress: PropTypes.func,
//     buttonText: PropTypes.string,
//     buttonText2: PropTypes.string,
//     editable: PropTypes.bool,
// };

// export default InputWithButton;

// import PropTypes from 'prop-types';
// import React from 'react';
// import {
//   View, TextInput, TouchableHighlight, Text,
// } from 'react-native';
// import color from 'color';

// import styles from './styles';

// const InputWithButton = ({
//   editable,
//   onPress,
//   buttonText,
//   ...props
// }) => {
//   const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
//     styles.$buttonBackgroundColorModifier,
//   );

//   const containerStyles = [styles.container];
//   if (editable === false) {
//     containerStyles.push(styles.containerDisabled);
//   }

//   return (
//     <View style={containerStyles}>
//       <TouchableHighlight
//         onPress={onPress}
//         style={styles.buttonContainer}
//         underlayColor={underlayColor}
//       >
//         <Text style={styles.buttonText}>{buttonText}</Text>
//       </TouchableHighlight>
//       <View style={styles.separator} />
//       <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
//     </View>
//   );
// };

// InputWithButton.propTypes = {
//   onPress: PropTypes.func,
//   buttonText: PropTypes.string,
//   editable: PropTypes.bool,
// };

// export default InputWithButton;




// Project Aergia


import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText, buttonText2, editable = true } = props;

    const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier,);

    const containerStyles = [styles.container];
    if (editable === false)
    {
        containerStyles.push(styles.containerDisabled);
    }
    return (
        <View style={containerStyles}>
            <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} {...props} />
        </View>
    );
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    buttonText2: PropTypes.string,
    editable: PropTypes.bool,
};

export default InputWithButton;