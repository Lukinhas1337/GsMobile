import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log("Erro ao salvar:", err);
  }
};

export const loadData = async (key) => {
  try {
    const json = await AsyncStorage.getItem(key);
    return json != null ? JSON.parse(json) : null;
  } catch (err) {
    console.log("Erro ao carregar:", err);
    return null;
  }
};

export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log("Erro ao remover:", err);
  }
};

// Helpers específicos do app
export const KEYS = {
  COMMUNITIES: "@communities",
  SKILLS: "@skills",
  POSTS: "@posts",
};

export const getCommunities = () => loadData(KEYS.COMMUNITIES);
export const saveCommunities = (data) => saveData(KEYS.COMMUNITIES, data);
export const removeCommunities = () => removeData(KEYS.COMMUNITIES);

export const getSkills = () => loadData(KEYS.SKILLS);
export const saveSkills = (data) => saveData(KEYS.SKILLS, data);
export const removeSkills = () => removeData(KEYS.SKILLS);

export const getPosts = () => loadData(KEYS.POSTS);
export const savePosts = (data) => saveData(KEYS.POSTS, data);
export const removePosts = () => removeData(KEYS.POSTS);
