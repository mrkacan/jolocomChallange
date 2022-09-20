import {Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import React from 'react';
import TextInput from "../../components/TextInput/TextInput";
import Collapsible from "../../components/Collapsible/Collapsible";
import styles from './styles';
import Spacer from "../../components/Spacer";
import Button from '../../components/Button/Button';
import {Formik} from 'formik';
import {validationSchema} from "./ValidationSchema";

export default function Home() {
    const navigation = useNavigation();
    const onSubmit = (values) => navigation.navigate("result")
    return (
        <Collapsible title={"Add your info"}>
            <View style={styles.container}>
                <Text style={styles.title}>Add your info</Text>
                <Spacer height={12}/>
                <Text style={styles.description}>To complete your profile please fill in all
                    necessary information</Text>
                <Spacer height={40}/>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        email: '',
                        age: ''
                    }}
                    onSubmit={onSubmit}
                    validationSchema={validationSchema}
                >
                    {({handleChange, resetForm, handleBlur, handleSubmit, values, errors,}) => {
                        return (
                            <>
                                <TextInput
                                    value={values.firstName}
                                    placeholder={"First name"}
                                    keyboardType="default"
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    error={errors.firstName}
                                    testID={"firstName"}
                                />
                                <TextInput
                                    value={values.lastName}
                                    placeholder={"Last name"}
                                    keyboardType="default"
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    error={errors.lastName}
                                    testID={"lastName"}
                                />
                                <TextInput
                                    value={values.phoneNumber}
                                    placeholder={"Phone number"}
                                    keyboardType="decimal-pad"
                                    onChangeText={handleChange('phoneNumber')}
                                    onBlur={handleBlur('phoneNumber')}
                                    error={errors.phoneNumber}
                                    testID={"phoneNumber"}
                                />
                                <TextInput
                                    value={values.email}
                                    placeholder={"Email"}
                                    keyboardType="email-address"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    error={errors.email}
                                    testID={"email"}
                                />
                                <TextInput
                                    value={values.age}
                                    placeholder={"Age"}
                                    keyboardType="decimal-pad"
                                    onChangeText={handleChange('age')}
                                    onBlur={handleBlur('age')}
                                    error={errors.age}
                                    testID={"age"}
                                />
                                <Spacer height={44}/>
                                <Button
                                    type="default"
                                    onPress={() => {
                                        handleSubmit()
                                        resetForm()
                                    }} disabled={Object.keys(errors).length > 0}>
                                    Submit
                                </Button>
                            </>
                        )
                    }}

                </Formik>
            </View>
        </Collapsible>
    );
}
