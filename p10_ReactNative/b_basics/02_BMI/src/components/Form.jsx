import { Text, TextInput, Pressable, View } from 'react-native'
import { useFormik } from 'formik'
import * as yup from 'yup';

const initialValues = {
  mass: '',
  height: '',
};

const getBodyMassIndex = (mass, height) => {
  console.log('result: ', (mass / Math.pow(height, 2)) )
  return Math.round(mass / Math.pow(height, 2));
}

const validationSchema = yup.object().shape({
  mass: yup
    .number()
    .min(1, 'Weight must be greater or equal to 1')
    .required('Weight is required'),
  height: yup
    .number()
    .min(0.5, 'Height must be greater or equal to 0.5')
    .required('Height is required'),
});

const BodyMassIndeForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <View>
      <TextInput
        placeholder='Weight (kg)'
        value={formik.values.mass}
        onChangeText={formik.handleChange('mass')}
      />
      {formik.touched.mass && formik.errors.mass && 
        (<Text style={{ color: 'red'}}>{formik.errors.mass}</Text>)
      }
      <TextInput
        placeholder='Height (m)'
        value={formik.values.height}
        onChangeText={formik.handleChange('height')}
      />
      {formik.touched.height && formik.errors.height && 
        (<Text style={{ color: 'red'}}>{formik.errors.height}</Text>)
      }
      <Pressable onPress={formik.handleSubmit}>
        <Text>Calculate</Text>
      </Pressable>
    </View>
  );
};

const BodyMassIndexCalculator = () => {
  const onSubmit = values => {
    const mass = parseFloat(values.mass);
    const height = parseFloat(values.height);
    console.log("mass: ", mass)
    console.log("height: ", height)

    if (!isNaN(mass) && !isNaN(height) && height !== 0) {
      console.log(`Your body mass index is: ${getBodyMassIndex(mass, height)}`);
    }
  };
  return <BodyMassIndeForm onSubmit={onSubmit} />;
};

export default BodyMassIndexCalculator;