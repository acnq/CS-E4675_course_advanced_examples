import { FlatList, View, StyleSheet, Text, StatusBar } from 'react-native-web';
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/query";

const Component = () => {
  const { data, error } = useQuery(GET_REPOSITORIES);
  console.log('error: ', error)
  console.log('data: ', data)
  const repositoryNodes = data
    ? data.repositories.edges.map(edge => edge.node)
    : [];
  console.log('Node:', repositoryNodes)

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  return (
    <FlatList
      data={repositoryNodes}
      renderItem={({item}) => <Item title={item.fullName} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  fullName: {
    fontSize: 32,
  },
});

export default Component