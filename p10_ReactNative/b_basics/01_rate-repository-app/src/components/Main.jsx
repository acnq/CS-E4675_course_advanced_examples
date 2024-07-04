import Text from './Text';

const Main = () => {
  return (
    // <View style={styles.container}>
    //   <Text>Rate Repository Application</Text>
    // </View>
    <>
      <Text>Simple text</Text>
      <Text style={{ paddingBottom: 10}}>Text with custom style</Text>
      <Text fontWeight="bold" fontSize="subheading">
        Bold subheading
      </Text>
      <Text color="textSecondary">Text with secondary color</Text>
    </>
  );
};

export default Main;

