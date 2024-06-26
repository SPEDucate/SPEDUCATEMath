import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";

const styles = StyleSheet.create({
  container: {
    position: 'center',
    letterSpacing: -0.6,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'auto',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 80,
    alignContent: 'center',
    flex: 2,
  },
});

export default function TESTFORM() {
  const [globalState, setGlobalState] = useState("state default value");

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      /*
      firstName: "default value 1",
      lastName: "default value 2",
      */
    },
  });

  /* Controls what happens when form is submitted by submit button */
  const onSubmit = (data) => {
    console.log(data);
    setGlobalState(data.firstName);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Preference-1"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="preferenceOne"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Preference-2"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="preferenceTwo"
      />

      {/* HAVE to use handleSubmit() wrapping around Submit */}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />

      <Text>
        The globalState variable is set to {"\n"}
        {globalState}
      </Text>
    </View>
  );
}
