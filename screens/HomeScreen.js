import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useLayoutEffect(() => {}, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://192.168.0.139:3001/tasks");
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  console.log(tasks.data);
  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={tasks.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item ,i}) => (
          <View
          key={i}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            <Text style={{ fontSize: 18 }}>{item.task}</Text>
            <Text style={{ color: "#555" }}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
