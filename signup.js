import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native"
import { useForm, Controller } from "react-hook-form"

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 320,
    left: 8,
    letterSpacing: -0.6,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 310,
    height: 94,
    alignContent: "center",
  },
});

export default function signupform() {
  const [globalState, setGlobalState] = useState("state default value");

  const {
    control,
    handleSubmit,
    formState,
  } = useForm({
    defaultValues: {
      firstName: "First Name",
      lastName: "Last Name",

    },
  })

  /* Controls what happens when form is submitted by submit button */
  const onSubmit = (data) => {
    console.log(data);
    setGlobalState(data.firstName);
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Last name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="lastName"
      />

      {/* HAVE to use handleSubmit() wrapping around Submit */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      <Text>The globalState variable is set to {"\n"}{globalState}</Text>
    </View>
  )
}