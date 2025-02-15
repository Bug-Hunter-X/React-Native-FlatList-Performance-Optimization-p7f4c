import React, { memo, useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';

const Item = memo(({ item }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.title}</Text>
    </View>
  );
});

const FlatListBugSolution = ({ data }) => {
  const memoizedData = useMemo(() => data, [data]);

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item item={item} />}
    />
  );
};

export default FlatListBugSolution;