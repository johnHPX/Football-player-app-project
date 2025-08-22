import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "@app:favorites";

export async function getFavorites() {
  try {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return [];
  }
}

export async function saveFavorites(favorites) {
  try {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error("Erro ao salvar favoritos:", error);
  }
}

export async function addFavorite(player) {
  const favorites = await getFavorites();
  const updated = [...favorites, player];
  await saveFavorites(updated);
  return updated;
}

export async function removeFavorite(playerId) {
  const favorites = await getFavorites();
  const updated = favorites.filter(p => p.idPlayer !== playerId);
  await saveFavorites(updated);
  return updated;
}

export async function isFavorite(playerId) {
  const favorites = await getFavorites();
  return favorites.some(p => p.idPlayer === playerId);
}